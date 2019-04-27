<template>
	<view class="content">
		<view class="content-box">
			<image src="../../static/bg.jpg" class="bg"></image>
			</view>
		
		<view class="middlecard">
			<view class="middlecard1"></view>
			<view class="avator">
			<image src="../../static/1.jpg" class="avatar1"></image></view>
			<view><button class="btn">已关注</button></view>
			<view><image src="../../static/liwu.png" class="liwu-btn"></image></view>
			</view>
			<view class="middlecard2">
				<text class="username-text">六年的承诺</text><br/>
				<text class="number-text">05后 | 7149 字 | 67 赞</text><br/>
				<text class="jianjie-text">不想当将士的兵不是好兵</text>
				<view class="guanzhu-box">
					<text>8 关注</text>
					<text>19 粉丝</text>
					<text>7.9 简书钻</text>
				</view>
			</view>
		
		<view style="overflow: hidden;">
			<view class="title">
				<scroll-view class="tab-title " scroll-x="true" id="tab-title">
					<view v-for="(tab, index) in tabs" :key="index" :class="[tabCurrentIndex == index ? 'tab-current' : 'tabpage']" :id="'tabTag-' + index" @tap="tabChange">
						<text>{{ tab.name }}</text>
					</view>
				</scroll-view>
			</view>
			<view class="list-border-space"></view>
			<swiper class="tab-swiper-full" :current="swiperCurrentIndex" @change="swiperChange">
				<swiper-item key="0">
					<view data-scindex="0">
						<view class="content1">
						</view>
					</view>
				</swiper-item>
				<swiper-item key="1">
					<view data-scindex="1">
						<view class="content2">
					
					</view>
					</view>
				</swiper-item>
				<swiper-item key="2">
					<view data-scindex="2"><view class="content3">C</view></view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabCurrentIndex: 0,
				swiperCurrentIndex: 0,
				titleShowId: 'tabTag-0',
				tabs: [
					//标签名称 , 分类 id , 加载更多, 加载的页码
					{ name: '动态', id: 'pwd1', loadingType: 0, page: 1 },
					{ name: '文章', id: 'pwd2', loadingType: 0, page: 1 },
					{ name: '更多', id: 'pwd3', loadingType: 0, page: 1 }
				],
				showKeyboard: false,
			};
		},
		onLoad() {},
		methods: {
			tabChange(e) {
				var index = e.target.id.replace('tabTag-', '');
				this.swiperCurrentIndex = index;
				this.tabCurrentIndex = index;
				this.titleShowId = 'tabTag-' + index;
			},
			swiperChange: function(e) {
				var index = e.detail.current;
				this.tabCurrentIndex = index;
				this.titleShowId = 'tabTag-' + index;
			}
		}
	};
</script>

<style>
	.content-box{
		width: 100%;
		height: 150px;
	}
	.bg{
		width: 100%;
		height: 100%;
	}
	.avatar1{
		width: 100px;
		height: 100px;
		border-radius: 80px;
		margin-top: -50px;
		border: white 5px solid;
		margin-left: 20px;
	}
	.btn{
		width: 75px;
		height: 33px;
		font-size: 15px;
		border-radius: 20px;
		background-color:#eb6f5a;
		color: white;
		margin-top: 10px;
		margin-left: 50px;
		
	}
	.btn-active{
		width: 75px;
		height: 33px;
		font-size: 15px;
		border-radius: 20px;
		background-color:white;
		color:#eb6f5a;
		border: #EB6F5A 1px solid;
	}
	.liwu-btn{
		margin-top: 13px;
		height: 30px;
		width: 30px;
		margin-left: 10px;
	}
	.middlecard{
		display: flex;
	}
	.middlecard1{
		display: flex;
	}
	.middlecard2{
		display: flex;
		flex-direction: column;
		padding-left: 20px;
		padding-top: 8px;
	}
	.username-text {
		font-size: 23px;
		color: #2e2e2e;
	}
	.number-text {
		font-size: 12px;
		color:#888888; 
		margin-top: 4px;
	}
	.jianjie-text {
		font-size: 14px;
		color: #5a5a5a;
		margin-top: 4px;
	}
	.guanzhu-box {
		display: flex;
		justify-content: space-between;
		width: 180px;
		font-size: 15px;
		color: #2f2f2f;
		margin-top: 12px;
	}
	.tab {
		padding: 0;
	}
	/* 导航栏整体设置 */
	.title {
		text-align: center;
		background-color: #fff;
	}
	/* 导航栏文字梳理 */
	.tab-title view {
		width: 65px;
		margin: 0 auto;
		display: inline-block;
		align-items: center;
		text-align: center;
		font-size: 14px;
		padding-bottom: 13px;
	}
	/* .tab-title view:first-child{margin-left: 0;}
		.tab-title view:last-child{margin-right: 0;} */
	/* 导航栏底部下划线设置 */
	.tab-current {
		border-bottom: 2px solid #e58c7c !important;
		color: #e58c7c;
	}
	.tab-swiper-full {
		height: 46vh;
	}
	.content1 {
		height: 46vh;
		width: 100%;
		overflow: auto;
	}
	.content2 {
		height: 46vh;
		width: 100%;
		overflow: auto;
	}
	.title {
		width: 100%;
		padding-top: 12px;
		color: #aaaaaa;
	}
</style>
