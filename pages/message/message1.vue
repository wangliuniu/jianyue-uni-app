<template>
	<view class="container">
		<view class="topcard">
			<view class="cover">
				<image src="../../static/cover1.png"></image>
				<br />
				<span class="title">互动消息</span>
			</view>
			<view class="cover">
				<image src="../../static/cover2.png"></image>
				<br />
				<span class="title">简书钻</span>
			</view>
			<view class="cover">
				<image src="../../static/cover3.png"></image>
				<br />
				<span class="title">其他提醒</span>
			</view>
		</view>
		<view class="middlecard" v-if="show">
			<view class="middlecard1">
				<image src="../../static/cover4.png"></image>
				<span class="title1">如何免费获取简书钻？</span>
				<button class="btn1" @tap="closeView">×</button>
				<view class="middlecard2">
					<span class="title2">
						#1 每天写文章，给自己的文章点赞；
						<br />
						#2 找到优质好文章，给文章点赞；
						<br />
						#3 分享自己的文章，让其他人点赞。
					</span>
					
				</view>
			</view>
			<view class="end"></view>
		</view>       
		<view class="bottomcard">
			<view class="bottomcard1">
				<span class="bottomtitle1">简信</span>
				<span class="bottomtitle2">新简信</span>
			</view>
			<view class="bigcard">
				<view class="card" v-for="(book, index) in books" :key="index">
				<img class="touxiang" :src="book.cover" />
				<span class="name">{{ book.name }}</span>
				<br />
				<span class="word">{{ book.word }}</span>
				<br />
				</view>
				<span class="end2">---end---</span>
			</view>
			
			</view>
			
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: true,
			books:[
				{
					 name:'六年的承诺',
					 word:'你好，我很喜欢你得文章，交个朋友吧~',
					 cover:'static/touxiang1.jpg'
					
				},
				{
					 name:'简宝玉',
					 word:'欢迎加入丰富多彩的原创内容社区',
					 cover:'static/touxiang2.png'
					
				},
	]
	};
		},
	onLoad() {},
	methods: {
		closeView: function() {
			this.show = false;
		}
	}
};
</script>

<style>
.container {
	width: 100%;
}
.topcard {
	display: flex;
	border-bottom: 1px solid #b4b4b4;
	padding-bottom: 10px;
}
.cover {
	flex: 0 0 20%;
	margin-top: 30px;
	margin-left: 45px;
}
.middlecard1 {
	width: 90%;
	margin: 0 auto;
}
.middlecard {
	padding-top: 15px;
	width: 100%;
}
.middlecard image {
	width: 13px;
	height: 13px;
}
.cover image {
	width: 30px;
	height: 30px;
}
.end {
	width: 100%;
	height: 8px;
	background-color: #f6f6f6;
	margin-top: 20px;
}
.title1 {
	font-size: 15px;
	margin-left: 5px;
}
.title2 {
	font-size: 13px;
}
.btn1:after {
	border: none;
}
.btn1 {
	width: 30px;
	height: 30px;
	background-color: white;
	float: right;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #b4b4b4;
	font-size: 20px;
}
.bottomcard{
	width: 100%;
}
.bottomcard1 {
	display: flex;
	justify-content: space-between;
	width: 90%;
	margin: 0 auto;
}

.bottomtitle1 {
	font-size: 17px;
}
.bottomtitle2 {
	color: #ec6149;
	font-size: 17px;
}
.touxiang {
		width: 40px;
		height: 40px;
		float: left;
		margin-left: 20px;
		border-radius: 10px;
		marker-end: 5px;
	    border-color: #2F2F2F;
	}
	.name{
		margin-left: 20px;
		
	}
	.word{
		margin-left: 20px;
		font-size: 12px;
		color:#B4B4B4 ;
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
	   height: 40px;
	   padding-top: 15px;
	   margin-bottom: 20px;
	  
	}
	.bigcard {
		width: 100%;
		height: 450px;
		margin: 0 auto;
		background-color: white;
		border-color: #A9A9A9;
		
	}
	.end2{
		text-align: center;
		margin-left: 150px;
	}
	
</style>
