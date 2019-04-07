<template>
	<view style="overflow: hidden;">
		<view class="title">
			<scroll-view class="tab-title " scroll-x="true" id="tab-title">
				<view v-for="(tab, index) in tabs" :key="index"
					:class="[tabCurrentIndex == index ? 'tab-current' : 'tabpage']"
					:id="'tabTag-' + index"
					@tap="tabChange"
				>
					{{ tab.name }}
				</view>
			</scroll-view>
		</view>
		<view class="hr1"></view>
		<swiper
			class="tab-swiper-full"
			:current="swiperCurrentIndex"
			@change="swiperChange"
			:style="{ height: tabHeight + 'px' }"
		>
			<swiper-item key="0">
				<view data-scindex="0">
					<view class="content1">
						<view class="bigcard">
						 <view class="card" v-for="(article,index) in articles" :key="index">
							 <view class="card1">
							 <img class="touxiang" :src="article.cover" />
							 <span class="name">{{ article.top }}</span>
							 </view>
							 <br />
						 <text class="title">{{article.title}}</text>
						  <br />
						  <span class="word">{{ article.word }}</span>
						  </view>
						 </view>
					</view>
				</view>
			</swiper-item>
			<swiper-item key="1">
				<view data-scindex="1">
					<view class="content2">
						B
					</view>
				</view>
			</swiper-item>
			<swiper-item key="2">
				<view data-scindex="2">
					<view class="content3">
						C
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabCurrentIndex: 0,
				swiperCurrentIndex: 0,
				titleShowId: 'tabTag-0',
				tabHeight: 300,
				tabs: [
					//标签名称 , 分类 id , 加载更多, 加载的页码
					{ name: '推荐', id: 'pwd1', loadingType: 0, page: 1 },
					{ name: '转载', id: 'pwd2', loadingType: 0, page: 1 },
					{ name: '个人', id: 'pwd3', loadingType: 0, page: 1 }
				],
				showKeyboard: false,
				articles:[
					
					{
						id:1,
						top:'毛毛关注了问题 · 1个小时前',
						title:'你可以左右滑动内容区域',
						word:'455 赞同 · 1366评论',
						cover:'static/1.jpg'
						
					},
					{
						id:2,
						top:'毛毛关注了问题 · 1个小时前',
						title:'你可以左右滑动内容区域',
						word:'67 赞同 · 18评论',
						cover:'static/1.jpg'
					},
					{
						id:3,
						top:'毛毛关注了问题 · 1个小时前',
						title:'你可以左右滑动内容区域',
						word:'110 赞同 · 1500评论',
						cover:'static/1.jpg'
					},
					{
						id:4,
						top:'毛毛关注了问题 · 1个小时前',
						title:'你可以左右滑动内容区域',
						word:'300 赞同 · 2000评论',
						cover:'static/1.jpg'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			done(password) {
				console.log(password);
				console.log(this.$refs);
			},
			confirmPwd() {
				this.$refs.keyboard.show();
			},
			onInput(e) {
				//e.cancel = true;
			},
			onConfirm(e) {
				let password = e.value;
			},
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
		},
		onReady() {
			//获取屏幕高度及比例
			var winInfo = uni.getSystemInfo({
				success: res => {
					var windowHeight = res.windowHeight;
					//获取头部标题高度
					var dom = uni.createSelectorQuery().select('#tab-title');
					dom.fields({ size: true }, res2 => {
						if (!res2) {
							return;
						}
						//计算得出滚动区域的高度
						this.tabHeight = windowHeight - res2.height;
						console.log(this.tabHeight);
					}).exec();
				}
			});
		}
	}
</script>

<style>
	page {
		background: #FFFFFF;
	}
	/* 选项卡 */
	.tab{padding:0;}
	/* 导航栏整体设置 */
	.tab-title {white-space:nowrap; /* text-align:center; */}
	/* 导航栏文字梳理 */
	.tab-title view{width:auto; padding:0 8px; margin:0 8px; line-height:42px; display: inline-block; text-align:center;font-size:40upx;}
	/* .tab-title view:first-child{margin-left: 0;}
	.tab-title view:last-child{margin-right: 0;} */
	/* 导航栏底部下划线设置 */
	.tab-current{border-bottom:4upx solid #00C777 !important; color:#00C777;}
	.tab-swiper{width:100%; height:350upx; padding:0;}
	.tab-swiper swiper-item{width:100%;}
	.tab-swiper swiper-item navigator{line-height:70upx; width:100%; display:block;}
	.tab-swiper-full{width:100%; height:auto;}
	.tab-swiper-full swiper-item{width:100%;}
	.tab-swiper-full scroll-view{width:100%; height:100%;}
	
	.content {text-align: center;height: 400upx;}
	
	.title{
		display: flex;
		margin-top: 50upx;
	}
	.hr1{
		width: 100%;
		height: 0.5px;
		margin-top: 5upx;
		background: #bfbfbf;
	}
	.bigcard {
		width: 100%;
		height: 600px;
		margin: 0 auto;
		background-color: white;
		border-color: #A9A9A9;
	}
	
	.card {
		text-align: left;
		margin-left: 10px;
		margin-right: 10px;
		font-size: 14px;
		line-height: 20px;
	   	border: #B4B4B4  1upx solid;
	   border-left: 0px;
	   border-right: 0px;
	   border-top: 0px;
	   height: 100px;
	   padding-top: 10px;
		
	}
		.touxiang {
		width: 30px;
		height: 30px;
		float: left;
		margin-left: 5px;
		border-radius: 30px;
		marker-end: 5px;
	}
		
	.name{
		color: #B4B4B4;
		margin-left: 5px;
	}
	.word{
		color: #B4B4B4;
		margin-left: 10px;
		margin-bottom: 1px;
	}
	.title{
		font-size: 20px;
		margin-left: 10px;
	}
	.card1{
		margin-left: 10px;
		align-content: center;
	}
</style>

