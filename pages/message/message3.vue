<template>
	<view class="content">
		<view class="content-box">
		
		<view>
		    <graceSwiper swiperId="garce-swiper-1" interval="3000" :indicatorDots="true" :items="swiperItems"></graceSwiper>
		</view>
		</view>
		<view class="middle-box">  
			<view class="pc">
				<image src="../../static/icon_admire_shell.png" class="icon"></image><br/>
				<span class="word">贝市场</span>
			</view>
			<view class="pc">
			    <image src="../../static/icon_yanhua.png" class="icon"></image>	<br/>
						<span class="word">简友广场</span>
			</view>
	        <view class="pc">
		         <image src="../../static/ic_search_hot.png" class="icon"></image><br/>
				 <span class="word">热门专题</span>
	        </view>
			<view class="pc">
			     <image src="../../static/icon_laba.png" class="icon"></image>	<br/>
				 <span class="word">投诉建议</span>
			</view>
			<view class="pc">
			     <image src="../../static/icon_article_publish_liked.png" class="icon"></image>	<br/>
				 <span class="word">互加公益</span>
			</view>
		</view>
		<view class="list-border-space"></view>
		<view class="box2">
			<image  src="../../static/ic_add_subscribe_topic.png" class="pc3"></image>
			<span class="title">我关注的专题</span>
			
		</view>
        <view class="list-border-space"></view>

	    <view class="gbirdbox">
			<view class="box">
				<image src="../../static/spring.png" class="pc2"></image><br/>
				<span class="word1">SpringFrame</span><br/>
				<span class="word2">陶然然_niit关注</span>
			</view>
	    	<view class="box">
	    		<image src="../../static/computer_guy.jpg" class="pc2"></image><br/>
	    		<span class="word1">程序员</span><br/>
	    		<span class="word2">六年的承诺关注</span>
	    	</view>
			<view class="box">
				<image src="../../static/spring.png" class="pc2"></image><br/>
				<span class="word1">SpringFrame</span><br/>
				<span class="word2">陶然然_niit关注</span>
			</view>
	    </view>
		
		<view class="gbirdbox">
			<view class="box">
				<image src="../../static/computer_guy.jpg" class="pc2"></image><br/>
				<span class="word1">程序员</span><br/>
				<span class="word2">六年的承诺关注</span>
			</view>
			<view class="box">
				<image src="../../static/child.jpeg" class="pc2"></image><br/>
				<span class="word1">原创儿童文学</span><br/>
				<span class="word2">简阅推荐专题</span>
			</view>
			<view class="box">
				<image src="../../static/nature.jpg" class="pc2"></image><br/>
				<span class="word1">自然科普</span><br/>
				<span class="word2">简阅推荐专题</span>
			</view>
		</view>
		<view class="gbirdbox">
			<view class="box">
				<image src="../../static/ar.jpg" class="pc2"></image><br/>
				<span class="word1">短篇小说</span><br/>
				<span class="word2">简阅推荐专题</span>
			</view>
			<view class="box">
				<image src="../../static/pom.jpeg" class="pc2"></image><br/>
				<span class="word1">诗</span><br/>
				<span class="word2">简阅推荐专题</span>
			</view>
			<view class="box">
				<image src="../../static/xiaoshuo.jpg" class="pc2"></image><br/>
				<span class="word1">连载小说</span><br/>
				<span class="word2">简阅推荐专题</span>
			</view>
		</view>
		</view>
</template>

<script>
	import graceSwiper from "../../graceUI/components/graceSwiper.vue"
	export default {
		components:{
		    graceSwiper
		},
		data() {
			return {
				swiperItems : [
				    { imgUrl: "../../static/swiper-1.jpg", path : "", title : "标题1"},
				    { imgUrl: "../../static/swiper-2.jpg", path : "", title : "标题2"},
					 { imgUrl: "../../static/swiper-3.jpg", path : "", title : "标题2"}
				]
		
		
		};
		},
		onLoad() {},
		methods: {
		}
	};
</script>

<style>
	
	.content-box{
		background-color: #E58C7C;
		width: 100%;
		height: 172px;
	}
	.middle-box{
		display: flex;
		
		width: 100%;
	}
	.icon{
		
		width: 35px;
		height: 35px;
		
	}
	.pc{
	
	flex: 0 0 17%;
		margin-left: 10px;
		margin-top: 18px;
	}
	.list-border-space{
		width: 100%;
		height: 10px ;
		background-color:#f7f5f6;
		margin-top: 15px;
	}
	.gbirdbox{
		display: flex;
		margin-top: 20px;
		margin-left: 25px;
	}
	.box{
		flex: 0 0 33%;
	flex-direction: column;
	}
	.pc2{
		width: 90px;
		height: 90px;
		border-radius: 5px;
		border: #00B26A 1px solid;
	}
	 .word1{
		 font-size: 15px;
	 }
	 .word2{
		 font-size: 12px;
		 color: #B4B4B4;
		  color: #eb6f5a;
	 }
	 .title{
		 font-size: 17px;
		 margin-top: 15px;
		 margin-left: 5px;
		  color: #eb6f5a;
	 }
	 .box2{
		 display: flex;
	 }
	.pc3{
		width: 30px;
		height: 30px;
		margin-top: 10px;
		margin-left: 10px;
			}
</style>
