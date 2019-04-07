<template>
	<view class="container">
		<view class="top">
			<view class="avatar-box">
				<view><image
					src="../../static/default.png"
					mode="scaleToFill"
					class="avatar"
					v-if="!storageData.login">
					</image></view>
				<view><image
					:src="storageData.avatar"
					mode="scaleToFill"
					class="avatar"
					v-if="storageData.login"
				></image></view>
			</view>
			<view class="info-box">
				<view><navigator url="../signin/signin" v-if="!storageData.login">点击登录</navigator></view>
				<span v-if="storageData.login" class="name">{{ storageData.nickname }}</span>
				<navigator url="../setting/setting" >
				<span v-if="storageData.login" class="setting">个人设置</span>
				</navigator>
			</view>
		</view>
		<view class="center" v-if="storageData.login">
			
			<view class="hi">
			<view class="info">
				<text class="title">{{articleCount}}</text><br/>
				<text>文章</text>
			</view>
			<view class="info">
				<text class="title">{{followCount}}</text><br/>
				<text>关注</text>
			</view>
			<view class="info">
				<text class="title">{{messageCount}}</text><br/>
				<text>消息</text>
			</view>
			<view class="info">
				<text class="title">{{integral}}</text><br/>
				<text>积分</text>
				
			</view>
		</view>
		</view>
		<view class="content" v-if="storageData.login">
		<view class="list">
		 <view class="list-item" v-for="(article,index) in articles" :key="index">
		 <text>{{article.title}}</text>
		 
		 </view>
		
		</view>
		
		</view>
	</view>
</template>

<script>
var loginRes, _self;
export default {
	data() {
		return {
			storageData: {},
			articleCount:10,
			followCount:5,
			messageCount:66,
			integral:100,
			articles:[
				
				{
					id:1,
					title:'第一篇文章'
				},
				{
					id:2,
					title:'第二篇文章'
				},
				{
					id:3,
					title:'第三篇文章'
				},
				{
					id:4,
					title:'第四篇文章'
				}
			]
		};
	},
	onLoad: function() {},
	onShow: function() {
		const loginKey = uni.getStorageSync('login_key');
		console.log("come");
		if (loginKey) {
			console.log(loginKey);
			this.storageData = {
				login: loginKey.login,
				nickname: loginKey.nickname,
				avatar: loginKey.avatar
			};
		}else{
			this.storageData ={
				login: false
			}
		}
	},
	methods: {
		
	}
};
</script>

<style scoped>
.top {
	display: flex;
	flex-direction: column;
	height: 100px;
	padding-top: 18px;
}
.avatar-box{
    display: flex;
	flex: 1 1 70%;
	justify-content: center;
}
.info-box{
	margin-top: 5px;
	display: flex;
	justify-content: center;
	
	
}
.info{
     font-size: 20px;
	border: #B4B4B4 1upx solid;
	border-left: 0px;
	border-top: 0px;
	border-bottom: 0px;
	flex: 0 0 25%;
	
	text-align: center;
}
.hi{
	padding-top: 40px;
	padding-left: 10px;
	display: flex;
	width: 300px;
	height: 60px;
	
}


.content{
	width: 300px;
	height: 100px;
}
.setting{
	margin-left: 80px;
	color:#109c2d;
}
.name{
	font-size: 20px;
	margin-left: 30px;
}
	.card{
		margin-top: 80px;
	}
	.list{
		padding-top: 30px;
	}

</style>