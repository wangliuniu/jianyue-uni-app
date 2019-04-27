<template>
	<view class="container">
		<view class="topcard">
		<input type="text" class="index-box" v-model="searchString" placeholder="请输入关键词搜索" />
		<image src="../../static/search.png" class="search"></image>
		</view>
		<view class="article-box">
			<view class="article" v-for="(article, index) in filteredArticles" :key="index">
				<text class="article-title" @tap="gotoDetail(article.id)">{{ article.title }}</text>
				<!-- 大于等于三张图片的显示方式 -->
				<view class="" v-if="article.imgs.length >= 3">
					<view class="thumbnail-box">
						<view
							class="thumbnail-item"
							v-for="(item, index1) in article.imgs"
							:key="index1"
							v-if="index1 < 3"
						>
							<image :src="item.imgUrl"></image>
						</view>
					</view>
				</view>
				<!-- 小于三张图片的显示方式 -->
				<view class="" v-else-if="article.imgs.length >= 1">
					<view class="text-img-box">
						<view class="left">
							<text class="index-content">{{ article.title }}...</text>
						</view>
						<view class="right">
							<image :src="article.imgs[article.imgs.length - 1].imgUrl"></image>
						</view>
					</view>
				</view>
				<!-- 没用图片的显示方式 -->
				<view class="text-box" v-else>
					<text class="">{{ article.title }}...</text>
				</view>
				<!-- 文章作者等信息 -->
				<view class="article-info">
					<text class="info-text">作者:{{ article.nickname }}</text>
					<text class="info-text">{{ article.createTime }}</text>
					<view class="end"></view>
				</view>

				<hr />
			</view>
		</view>
		<button class="circle-btn" @click="gotoWrite"><text class="icon-text">+</text></button>
	</view>
</template>

<script>
import graceMaskView from '../../graceUI/components/graceMaskView.vue';
export default {
	components: {
		graceMaskView
	},
	data() {
		return {
			articles: [],
			show: false,
			searchString: ''
		};
	},
	onLoad: function() {
		this.getArticles();
	},
	onShow: function() {},
	onPullDownRefresh: function() {
		this.getArticles();
	},

	computed: {
		// 计算函数，匹配搜索
		filteredArticles: function() {
			var articles_array = this.articles,
				searchString = this.searchString;
			//搜索关键词为空,则返回原始数据集
			if (!searchString) {
				return articles_array;
			}
			//搜索关键词去除无用空格,转换为小写
			searchString = searchString.trim().toLowerCase();
			//过滤数组中每个元素,如果
			articles_array = articles_array.filter(function(item) {
				if (item.title.toLowerCase().indexOf(searchString) !== -1) {
					return item;
				}
			});
			// 返回转化后的数组
			return articles_array;
		}
	},
	methods: {
		showBanner: function() {
			this.show = true;
		},
		closeBanner: function() {
			this.show = false;
		},

		open: function() {
			var oBtn = document.getElementById('btn1');
			oBtn.style.display = 'block';

			var oBg = document.getElementById('bg');
			oBg.style.display = 'block';
		},

		close: function() {
			var oBn = document.getElementById('cont');
			s.style.display = 'none';

			var oBg = document.getElementById('close');
			l.style.display = 'none';
		},

		gotoWrite: function() {
			if (uni.getStorageSync('login_key').login === true) {
				uni.navigateTo({
					url: '../write/write'
				});
			} else {
				uni.showModal({
					title: '未登录',
					content: '请先登录',
					confirmText: '立即登陆',
					cancelText: '稍后登陆',
					success: function(res) {
						if (res.confirm) {
							uni.navigateTo({
								url: '../signin/signin'
							});
						}
					}
				});
			}
		},
		handleContent: function(content) {
			content = content.replace(/(\n)/g, '');
			content = content.replace(/(\t)/g, '');
			content = content.replace(/(\r)/g, '');
			content = content.replace(/<\[^>]*>/g, '');
			content = content.replace(/\s*/g, '');
			return content.substring(0, 50);
		},
		getArticles: function() {
			var _this = this;
			uni.request({
				url: this.apiServer + '/article/list',
				method: 'GET',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				success: res => {
					_this.articles = res.data.data;
					for (var i = 0; i < _this.articles.length; i++) {
						_this.articles[i].createTime = this.handleTime(
							_this.articles[i].createTime
						);
						_this.articles[i].content = this.handleContent(_this.articles[i].content);
					}
				},
				complete: function() {
					uni.stopPullDownRefresh();
				}
			});
		},
		gotoDetail: function(aId) {
			uni.navigateTo({
				url: '../article_detail/article_detail?aId=' + aId
			});
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
		}
	}
};
</script>

<style>
.article-box {
	height: auto;
	width: 100%;
}
.end {
	width: 100%;
	height: 12px;
	background-color: #f6f6f6;
}

.article-title {
	font-size: 17px;
	color: #eb6f5a;
}
.article {
	display: flex;
	flex-direction: column;
	margin-top: 15px;
}
.thumbnail-box {
	margin-top: 10px;
	display: flex;
	height: 120px;
	width: 100%;
	/* border-bottom: 1px solid #E6E7E9; */
}
.thumbnail-item {
	flex: 1 1 33%;
	height: 110px;
	margin-right: 5px;
	margin-left: 5px;
}
.thumbnail-item image {
	width: 100%;
	height: 100%;
}
.avatar {
	width: 40px;
	height: 40px;
}
.info-text {
	margin-left: 10px;
	color: #cccccc;
	font-size: 15px;
}
.text-img-box {
	display: flex;
	margin-top: 10px;
}
.index-content {
	font-size: 15px;
}
.left {
	flex: 1 1 70%;
}
.right {
	flex: 1 1 30%;
	height: 110px;
}
.right image {
	width: 100%;
	height: 100%;
}
.qiandao-box {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	background-color: #e9e9e9;
}
.qiandao {
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #ffffff;
	justify-content: center;
}
.circle-btn {
	position: fixed;
	bottom: 20px;
	right: 10px;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background-color: #de533a;
	background: linear-gradient(40deg, #ffd86f, #fc6262);
	/* background-image: url(../../static/Pencil32.png); */
	box-shadow: 2px 5px 10px #aaa;
	cursor: pointer;
	border: none;
	outline: none;
	display: flex;
	justify-content: center;
	align-items: center;
}

.btn1 {
	display: block;
	margin: 30px auto;
	width: 200px;
	height: 62px;
	line-height: 62px;
	letter-spacing: 4px;
	color: #fff;
	font-size: 24px;
	background: orangered;
	border-radius: 30px;
	border: none;
}
.bg {
	display: none;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 100;
}
.rec {
	display: block;
	background: url(../../static/1.jpg) no-repeat -170px -108px;
	width: 410px;
	height: 620px;
}
.close {
	position: absolute;
	right: -38px;
	top: 0px;
	background: url(../../static/1.jpg) no-repeat -528upx -69px;
	width: 38px;
	height: 38px;
	cursor: pointer;
}
.cont {
	display: none;
	position: absolute;
	top: 6%;
	left: 30%;
	z-index: 101;
}
.index-box{
	padding-left: 20px;

	border-radius: 20px;
	height: 35px;
	border: #ea6f5a  1upx solid;
	width: 80%;
	margin-top: 10px;
	
}
.search{
	width: 20px;
	height: 20px;	
    margin-top: 15px;
	margin-left: 10px;
}
.topcard{
	display: flex;

}
</style>
