<template>
	<view class="container">
		<view class="list">
			<view class="list-item1"><text>文章推送</text>	
			<image src="../../static/right.png" class="jiantou"></image></view>
		
			<view class="list-item1"><text>新消息推送</text>	
			<image src="../../static/right.png" class="jiantou"></image></view>
		
			<navigator url="../user_info/user-info" >
			<view class="list-item1"><text>个人资料</text>	
			<image src="../../static/right.png" class="jiantou"></image></view>
		
			</navigator>
				<button  @tap="logout" class="btn">退出当前账号</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {
		uni.setNavigationBarTitle({
			title: '设置'
		});
	},
	methods: {
		logout: function() {
			console.log('log out');
			uni.removeStorageSync('login_key');
			uni.showToast({
				title: '已经退出当前账号'
			});
			uni.navigateBack();
		}
	}
};
</script>

<style>
	.btn{
		margin-top: 20px;
		background-color: #FB6152;
		color: #FFFFFF;
		
	}
		
	.list-item1{
		width: 100%;
		height: 60px;
		display: flex;
		background-color: #fff;
		align-items: center;
		border-bottom: 1px solid #eee;
		font-size: 17px;
		color:  #DE533A;
	}
	.jiantou{
		padding-right: 5px;
		height: 20px;
		width: 20px;
	}
</style>