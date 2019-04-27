<template>
	<view class="container1">
		<view class="container-box">
			<text class="article-title">{{ article.title }}</text>
			<view class="article-info">
				<image :src="article.avatar" class="article-avatar"></image>
				<text class="article-writer">{{ article.nickname }}</text>
				<text class="info-text">{{ article.createTime }}</text>
				<!-- 登录用户和文章作者不是同一个人，就显示关注或取消关注按钮 -->
				<button v-if="userId != article.uId && !followed" class="green" @tap="follow">
					关注
				</button>
				<button v-if="userId != article.uId && followed" class="green1" @tap="cancelFollow">
					取消
				</button>
			</view>

			<view class="grace-text" style="margin-top: 10px;">
				<rich-text :nodes="article.content" bindtap="tap"></rich-text>
			</view>
			<button v-if="!liked" class="green" @tap="likeArticke">收藏</button>
			<button v-if="liked" class="green1" @tap="cancelLike">取消</button>
			<text class="info-text2">评论{{ comments.length }}</text>
			<view class="comment-item" v-for="(comment, index) in comments" :key="index">
				<view class="left"><image :src="comment.avatar" class="avatar small"></image></view>
				<view class="right">
					<text>{{ comment.nickname }}</text>
					<text>{{ comment.content }}</text>
					<view>
						<text style="margin-right: 10px;">{{ comments.length - index }}楼</text>
						<text class="time">{{ comment.commentTime }}</text>
					</view>
				</view>
			</view>
			<input
				class="uni-input comment-box"
				type="text"
				placeholder="写下你的评论"
				v-model="content"
				required="required"
			/>
			<button class="green-btn" @tap="send">提交</button>
		</view>
		<view class="botton-box">
			<view class="botton-box2">
				<view>
				<image src="../../static/pinglun.png" class="tubiao"></image><br/>
				<span class="word">评论{{comments.length}}</span>
				</view>
				<view>
				<image src="../../static/zanshang.png" class="tubiao"></image><br/>
				<span class="word">赞赏</span>
				</view>
				<view>
				<image src="../../static/xihuan.png"  v-if="!active" @tap="changeActive"  class="tubiao"></image>
				<image src="../../static/xihuan2.png" v-if="active" @tap="changeActive" class="tubiao"></image><br/>
				<span class="word">喜欢</span>
				</view>
				<view>
				<image src="../../static/fenxiang.png" class="tubiao"></image><br/>
				<span class="word">分享</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			article: {
				aId: 0,
				uId: 0,
				title: '',
				content: '',
				avatar: '',
				nickname: '',
				createTime: ''
			},
			comments: [],
			content: '',
			userId: uni.getStorageSync('login_key').userId,
			followed: false,
			liked: false,
			active:false
		};
	},
	onLoad: function(option) {
		//option为object类型，会序列化上个页面传递的参数
		this.article.aId = option.aId;
	},
	onShow: function() {
		this.getArticle();
	},
	onPullDownRefresh: function() {
		this.getArticle();
	},
	methods:{
		likeArticke: function() {
			var _this = this;
			uni.request({
				url: this.apiServer + '/like/add',
				method: 'POST',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					aId: this.article.aId,
					uId: this.userId
				},
				success: res => {
					uni.showToast({
						title: '收藏成功'
					});
					this.liked = true;
				}
			});
		},
		cancelLike: function() {
			uni.request({
				url: this.apiServer + '/like/cancel',
				method: 'POST',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					aId: this.article.aId,
					uId: this.userId
				},
				success: res => {
					this.liked = false;
				}
			});
		},

		getArticle: function() {
			var _this = this;
			uni.request({
				url: this.apiServer + '/article/' + this.article.aId,
				method: 'GET',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					userId: this.userId
				},
				success: res => {
					// console.log(res.data.data.article);
					_this.article.aId = res.data.data.article.id;
					_this.article.uId = res.data.data.article.uid;
					_this.article.title = res.data.data.article.title;
					_this.article.content = res.data.data.article.content;
					_this.article.nickname = res.data.data.article.nickname;
					_this.article.avatar = res.data.data.article.avatar;
					_this.article.createTime = res.data.data.article.createTime;
					_this.comments = res.data.data.comments;
					_this.article.createTime = this.handleTime(_this.article.createTime);
					for (var i = 0; i < _this.comments.length; i++) {
						_this.comments[i].commentTime = this.handleTime(
							_this.comments[i].commentTime
						);
					}
					if (res.data.data.followed === '已关注') {
						_this.followed = true;
					}
					if (res.data.data.liked === '喜欢') {
						_this.liked = true;
					}
				},
				complete: function() {
					uni.stopPullDownRefresh();
				}
			});
		},
			
		changeActive:function(){
			this.active=!this.active;
		},

		handleTime: function(date) {
			var d = new Date(date);
			var year = d.getFullYear();
			var month = d.getMonth() + 1;
			var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
			var hour = d.getHours() < 10 ? '0' + d.getHours() : '' + d.getHours();
			var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : '' + d.getMinutes();
			var seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : '' + d.getSeconds();
			return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
		},
		send: function() {
			console.log(
				'评论人编号：' +
					this.userId +
					',文章编号：' +
					this.article.aId +
					'，评论内容：' +
					this.content
			);
			uni.request({
				url: this.apiServer + '/comment/add',
				method: 'POST',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					aId: this.article.aId,
					uId: this.userId,
					content: this.content
				},
				success: res => {
					if (res.data.code === 0) {
						uni.showToast({
							title: '评论成功'
						});
						this.getArticle();
						this.content = '';
					}
				}
			});
		},
		follow: function() {
			uni.request({
				url: this.apiServer + '/follow/add',
				method: 'POST',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					fromUId: this.userId,
					toUId: this.article.uId
				},
				success: res => {
					if (res.data.code === 0) {
						uni.showToast({
							title: '关注成功'
						});
						this.followed = true;
					}
				}
			});
		},
		cancelFollow: function() {
			uni.request({
				url: this.apiServer + '/follow/cancel',
				method: 'POST',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					fromUId: this.userId,
					toUId: this.article.uId
				},
				success: res => {
					if (res.data.code === 0) {
						uni.showToast({
							title: '已取消关注'
						});
						this.followed = false;
					}
				}
			});
		}
	}
};
</script>

<style>
.container1 {
	padding-top: 20px;
	padding-bottom: 50px;
}
.content {
	margin-bottom: 10px;
	margin-top: 10px;
	padding: 5px;
	border-bottom: 1px solid #eee;
}
.img-list {
	display: flex;
	flex-direction: column;
}
.img-item {
	width: 100%;
	height: 150px;
	margin-bottom: 5px;
}
.img-item image {
	width: 100%;
	height: 100%;
	border-radius: 5px;
}
.comment-item {
	display: flex;
	align-items: center;
	border-bottom: 1px solid #eee;
	margin-bottom: 10px;
	padding: 5px;
}
.comment-item .left {
	flex: 1 1 15%;
}
.comment-item .right {
	flex: 1 1 85%;
	display: flex;
	flex-direction: column;
}
.comment-box {
	border: 1px solid #fff;
	border-radius: 5px;
	background-color: #eee;
}
.article-avatar {
	width: 40px;
	height: 40px;
	border-radius: 50%;
}
.follow-btn {
	height: 33px;
	width: 80px;
	font-size: 12pt;
	text-align: center;
	padding-bottom: 20px;
	margin-right: 0px;
}
.cancel {
	background-color: #aaa;
}
.article-title {
	font-weight: bold;
	font-size: 20px;
}
.info-text {
	color: #b4b4b4;
	margin-left: 5px;
}
.info-text2 {
	font-weight: bold;
	font-size: 15px;
	color: #de533a;
}
.article-writer {
	align-content: center;
	flex-flow: column;
}
.article-info {
	margin-top: 16px;
	display: flex;
	align-items: center;
}
/* .green-btn follow-btn{
	background: #DE533A;
	color: white;
	border: 1px solid #eee
}
green-btn follow-btn cancel{
	background: #DE533A;
	color: white;
	border: 1px solid #eee
} */
.green:after {
	border: null;
}
.botton-box {
	position: fixed;
	bottom: 0px;
	width: 100%;
	height: 45px;
	background-color: white;
	padding-top: 10px;
}
.botton-box2{
	width: 90%;
	margin:  0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.green1:after {
	border: null;
}
.green {
	height: 30px;
	width: 80px;
	background: #de533a;
	color: white;
	border-color: #b4b4b4;
	font-size: 16px;
}
.green1 {
	height: 30px;
	width: 80px;
	background: #de533a;
	color: white;
	border-color: #b4b4b4;
	font-size: 16px;
}

.avatar small {
	width: 40px;
	height: 40px;
	border-radius: 50%;
}
.right {
	margin-left: 10px;
}
.time {
	color: #b4b4b4;
}
.green-btn {
	background: #de533a;
	color: white;
	border-color: #b4b4b4;
}
.container-box {
	width: 94%;
	margin: 0 auto;
}
.tubiao {
	width: 20px;
	height: 20px;
}
</style>
