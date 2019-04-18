<template>
	<view class="container">
		<!-- 顶部头像和昵称区域，纵向排列 -->

		<view class="top">
			<view class="avatar-box">
				<view class="card" v-if="!storageData.login">
					<image
						src="../../static/flower.png"
						class="flower"
						v-if="!storageData.login"
					></image>
					<!-- <view class="grace-swiper-msg-icon" v-if="!storageData.login">
				        <image src="../../static/imgs/speaker.png" mode="widthFix"></image>
				    </view>
				    <swiper vertical="true" autoplay="true" circular="true" interval="3000">
				        <swiper-item>
				            <navigator url="">欢迎回来</navigator>
				        </swiper-item>
				        <swiper-item>
				            <navigator url="">可爱的小朋友</navigator>
				        </swiper-item>
				    </swiper>
				 -->
					<span class="back" v-if="!storageData.login">欢迎回来 ！</span>
					<br />
				</view>
				<image
					src="../../static/default.png"
					mode="scaleToFill"
					class="avatar1"
					v-if="!storageData.login"
				></image>

				<image
					:src="storageData.avatar"
					mode="scaleToFill"
					class="avatar"
					v-if="storageData.login"
				></image>
			</view>
			<view class="info-box">
				<navigator url="../signin/signin" v-if="!storageData.login" class="on">
					点击登录
				</navigator>
				<text v-if="storageData.login" class="setting-txt2">
					{{ storageData.nickname }}
				</text>
				<navigator url="../setting/setting" v-if="storageData.login">
					<text class="setting-txt">个人设置</text>
				</navigator>
			</view>
		</view>

		<!-- 中间文章数量、好友数量、消息数量等统计区域，横向排列 -->
		<view v-if="storageData.login">
			<scroll-view class="grace-tab-title grace-center" scroll-x="true" id="grace-tab-title">
				<view
					v-for="(cate, index) in categories"
					:key="index"
					:data-cateid="cate.cateid"
					:data-index="index"
					:class="[cateCurrentIndex == index ? 'grace-tab-current' : '']"
					@tap="tabChange"
				>
					{{ cate.name }}
				</view>
			</scroll-view>
			<view class="demo-content">
				<!-- 文章部分 -->
				<view class="content" v-if="cateCurrentIndex === 0">
					<view class="grace-scroll-do grace-bg-white ">
						<scroll-view
							class="grace-scroll-x"
							scroll-x
							v-for="(article, index) in articles"
							:scroll-left="scrollIndex == index ? 180 : 0"
							@touchstart="touchStart"
							@touchend="touchEnd"
							:data-id="index"
							scroll-with-animation="true"
							:key="index"
						>
							<view class="grace-items">
								<view class="myarticle-list-box">
									<text class=" article-list" @tap="gotoDetail(article.id)">
										{{ article.title }}
									</text>
									<view class="myarticle-list-small">
										<view class=" grace-text-small myarticle-list-text">
											{{ article.createTime }}
										</view>
									</view>
								</view>
							</view>
							<view
								class="grace-items btn"
								:data-id="index"
								@tap="removeArticle(article.id)"
								:style="{
									width:
										index == deleteIndex
											? deleteBtnWidth + 'px'
											: btn2Width + 'px'
								}"
							>
								删除
							</view>
						</scroll-view>
					</view>
				</view>
				<!-- 关注部分 -->
				<view class="content" v-if="cateCurrentIndex === 1">
					<view class="list1">
						<view class="list-item1" v-for="(follow, index) in follows" :key="index">
							<image :src="follow.avatar" class="avatar2"></image>
							<text style="margin-left: 20px;">{{ follow.nickname }}</text>
						</view>
					</view>
				</view>
				<!-- 收藏部分 -->
				<view class="content" v-if="cateCurrentIndex === 2">
					<view class="list">
						<view class="list-item-box" v-for="(like, index) in likes" :key="index">
							<view class="list-item-small">
								<text class="like-title" @tap="gotoDetail(like.aid)">
									{{ like.title }}
								</text>
								<text class="like-nickname">{{ like.nickname }}</text>
							</view>
							<text class="like-nickname">{{ like.createTime }}</text>
						</view>
					</view>
				</view>
				<!-- 积分部分 -->
				<view class="content" v-if="cateCurrentIndex === 3"><text>积分</text></view>
			</view>
		</view>
	</view>
</template>

<script>
var loginRes, _self;
import graceSwiper from '../../graceUI/components/graceSwiper.vue';
export default {
	components: {
		graceSwiper
	},
	data() {
		return {
			btn1Width: 70,
			btn2Width: 70,
			//2个按钮的总宽 = btn1Width + btn23Width【uni-app 模板内不建议复杂运算请手动配置】
			deleteBtnWidth: 140,
			//正在滑动的索引
			scrollIndex: -1,
			//正在删除的索引
			deleteIndex: -1,

			storageData: {
				userId: 0,
				nickname: '',
				avatar: '',
				login: false
			},
			//分类信息
			categories: [
				{ cateid: 0, name: '文章' },
				{ cateid: 1, name: '关注' },
				{ cateid: 2, name: '收藏' },
				{ cateid: 3, name: '积分' }
			],
			// 当前选择的分类
			cateCurrentIndex: 0,
			articles: [],
			follows: [],
			likes:[]
		};
	},
	onLoad: function() {},
	onShow: function() {
		var _this = this;
		this.getArticle();
		const loginKey = uni.getStorageSync('login_key');
		if (loginKey) {
			this.storageData = {
				login: loginKey.login,
				nickname: loginKey.nickname,
				avatar: loginKey.avatar,
				userId: loginKey.userId
			};
			uni.request({
				url: this.apiServer + '/like/list',
				method: 'GET',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					uId: uni.getStorageSync('login_key').userId
				},
				success: res => {
					console.log(res.data.data)
					_this.likes = res.data.data;
					for (var i = 0; i < _this.likes.length; i++) {
						_this.likes[i].createTime = this.handleTime(_this.likes[i].createTime);
						
					}
				}
			});
			uni.request({
				url: this.apiServer + '/follow/list',
				method: 'GET',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					fromUId: this.storageData.userId
				},
				success: res => {
					_this.follows = res.data.data;
				}
			});
		} else {
			this.storageData = {
				login: false
			};
		}
	},
	methods: {
		getArticle: function() {
			var _this = this;
			uni.request({
				url: this.apiServer + '/article/user',
				method: 'GET',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					uId: this.storageData.userId
				},
				success: res => {
					_this.articles = res.data.data;
					for (var i = 0; i < _this.articles.length; i++) {
						_this.articles[i].createTime = this.handleTime(
							_this.articles[i].createTime
						);
					}
				}
			});
		},
		removeArticle: function(aId) {
			uni.request({
				url: this.apiServer + '/article/delete/' + aId,
				method: 'GET',
				header: { 'content-type': 'application/json' },
				data: {},
				success: res => {
					if (res.data.code === 0) {
						uni.showToast({
							title: '删除成功'
						});
						this.getArticle();
					}
				}
			});
		},
		touchStart: function(e) {
			x = e.mp.changedTouches[0].clientX;
			y = e.mp.changedTouches[0].clientY;
		},
		touchEnd: function(e) {
			x = x - e.mp.changedTouches[0].clientX;
			y = y - e.mp.changedTouches[0].clientY;
			if (Math.abs(x) < 50) {
				return;
			}
			if (Math.abs(x) < Math.abs(y)) {
				return;
			}
			var index = e.currentTarget.dataset.id;
			if (index == this.scrollIndex) {
				return;
			}
			_self.scrollIndex = index;
		},

		tabChange: function(e) {
			// 选中的索引
			var index = e.currentTarget.dataset.index;
			// 具体的分类id
			var cateid = e.currentTarget.dataset.cateid;
			this.cateCurrentIndex = index;
			// 动态替换内容
			this.content = this.categories[index].name;
		},
		handleTime: function(datetime) {
			let date = new Date(datetime);
			let Y = date.getFullYear() + '-';
			let M =
				date.getMonth() + 1 < 10
					? '0' + (date.getMonth() + 1) + '-'
					: date.getMonth() + 1 + '-';
			let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
			let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
			let m =
				date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
			let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
			return Y + M + D + h + m + s;
		},
		gotoDetail: function(aId) {
			uni.navigateTo({
				url:
					'../article_detail/article_detail?aId=' +
					aId +
					'&userId=' +
					this.storageData.userId
			});
		}
	}
};
</script>

<style scoped>
.top {
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 100px;
	margin-top: 5px;
}
.avatar-box {
	flex: 1 1 30%;
}
.info-box {
	flex: 1 1 70%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.setting-txt {
	color: #de533a;
	margin-left: 15px;
	font-size: 17px;
}
.setting-txt2 {
	font-size: 17px;
}
.center {
	display: flex;
	justify-content: center;
}
.info {
	flex: 1 1 25%;
	display: flex;
	flex-direction: column;
	text-align: center;
	border-right: 1px solid #eee;
}
.title {
	font-size: 14pt;
}
.content {
	margin-top: 20px;
}

.on {
	margin-top: 30px;
	color: #de533a;
	font-size: 17px;
}
.avatar1 {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	margin-top: 15px;
}
.flower {
	width: 50px;
	height: 50px;
}

.back {
	font-size: 20px;
	color: #b4b4b4;
}
.card {
	margin-top: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.list1 {
	display: flex;
	flex-direction: column;
}
.list-item1 {
	width: 100%;
	height: 50px;
	display: flex;
	background-color: #fff;
	align-items: center;
	border-bottom: 1px solid #eee;
	font-size: 17px;
}
.avatar2 {
	width: 40px;
	height: 40px;
	border-radius: 10px;
}
.myarticle-list-box {
	width: 85%;
	margin-left: 15px;
}


.article-list {
	font-size: 17px;
}
.myarticle-list-small {
	margin-top: 10upx;
}
.list-item-box {
	margin: 0 auto;
	width: 100%;
	height: 75px;
	background-color: #fff;
	display: flex;
	align-items: center;
	position: relative;
	justify-content: space-between;
}
.like-title {
	font-size: 20px;
	overflow: hidden;
	-webkit-line-clamp: 2;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	color: #2e2e2e;
	width: 130px;
	font-size: 18px
	
}
.list-item-small {
	display: flex;
	flex-direction: column;
	margin-left: 30px;
	
}
.list-item-box:after {
	position: absolute;
	width: 100%;
	bottom: 0;
	left: 0;
	height: 1px;
	background-color: #dfdfdf;
	transform: scaleY(0.5);
	content: '';
	display: block;
}
.like-nickname {
	color: #ADADAD;
	margin-right: 30px;
}

</style>
