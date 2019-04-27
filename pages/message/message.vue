<template>
	<view class="content">
		<view class="content-box">
		
		<view>
		    <graceSwiper swiperId="garce-swiper-1" interval="3000" :indicatorDots="true" :items="swiperItems"></graceSwiper>
		</view>
		</view>
		<view class="middle-box">  
			<view class="pc">
				<image src="../../static/a1.png" class="icon"></image><br/>
				<span class="word">全部分类</span>
			</view>
			<view class="pc">
			    <image src="../../static/a2.png" class="icon"></image>	<br/>
						<span class="word">签约作品</span>
			</view>
	        <view class="pc">
		         <image src="../../static/a3.png" class="icon"></image><br/>
				 <span class="word">对话小说</span>
	        </view>
			<view class="pc">
			     <image src="../../static/a4.png" class="icon"></image>	<br/>
				 <span class="word">简书FM</span>
			</view>
			<view class="pc">
			     <image src="../../static/a5.png" class="icon"></image>	<br/>
				 <span class="word">开通连载</span>
			</view>
		</view>
		<view class="list-border-space"></view>
		<view class="box2">
			<view class="pc3-box">
				<image  src="../../static/a6.png" class="pc3"></image>
				</view>
			<span class="title">我关注的连载</span>
			
		</view>
        <view class="list-border-space"></view>

	    <view class="gbirdbox">
			<view class="box">
				<image src="../../static/g1.jpeg" class="pc2"></image><br/>
				<span class="word1">生活的小故事</span><br/>
				<span class="word2">陶然然_niit关注</span>
			</view>
	    	<view class="box">
	    		<image src="../../static/g2.jpeg" class="pc2"></image><br/>
	    		<span class="word1">时而翻书</span><br/>
	    		<span class="word2">六年的承诺关注</span>
	    	</view>
			<view class="box">
				<image src="../../static/g3.jpg" class="pc2"></image><br/>
				<span class="word1">初语</span><br/>
				<span class="word2">陶然然_niit关注</span>
			</view>
	    </view>
		
		<view class="gbirdbox">
			<view class="box">
				<image src="../../static/g4.jpg" class="pc2"></image><br/>
				<span class="word1">草心集</span><br/>
				<span class="word2">六年的承诺关注</span>
			</view>
			<view class="box">
				<image src="../../static/g5.jpg" class="pc2"></image><br/>
				<span class="word1">特别推荐</span><br/>
				<span class="word2">简阅推荐专题</span>
			</view>
			<view class="box">
				<image src="../../static/g6.jpg" class="pc2"></image><br/>
				<span class="word1">雪花文集</span><br/>
				<span class="word2">简阅推荐专题</span>
			</view>
		</view>
		<view class="gbirdbox">
			<view class="box">
				<image src="../../static/g7.jpg" class="pc2"></image><br/>
				<span class="word1">训练营</span><br/>
				<span class="word2">简阅推荐专题</span>
			</view>
			<view class="box">
				<image src="../../static/g8.jpg" class="pc2"></image><br/>
				<span class="word1">诗</span><br/>
				<span class="word2">简阅推荐专题</span>
			</view>
			<view class="box">
				<image src="../../static/g9.jpg" class="pc2"></image><br/>
				<span class="word1">蔚蓝偶记</span><br/>
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
				    { imgUrl: "../../static/swiper-4.jpg", path : "", title : "标题1"},
				    { imgUrl: "../../static/swiper-3.jpg", path : "", title : "标题2"},
					 { imgUrl: "../../static/swiper-5.jpg", path : "", title : "标题2"}
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
		width: 95px;
		height: 120px;
		border-radius: 5px;
		
	}
	 .word1{
		 font-size: 15px;
		 color: #eb6f5a;
	 }
	 .word2{
		 font-size: 12px;
		 color: #B4B4B4;
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
		width: 20px;
		height: 20px;
		border-radius:4px ;
			}
			.pc3-box{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 30px;
				height: 30px;
				background-color: #78a7ec;
				margin-top: 10px;
				margin-left: 10px;
			}
</style>
