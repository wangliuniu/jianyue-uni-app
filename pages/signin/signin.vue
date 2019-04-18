<template>
	<view class="uni-flex uni-column container">
		<input class="uni-input" type="number" placeholder="输入手机号" v-model="userDTO.mobile" required="required" />
		<input class="uni-input" password type="text" placeholder="输入密码" v-model="userDTO.password" required="required" />
		<button class="green-btn" @tap="signIn(userDTO)">登录</button>
		<navigator url="../signup/signup" class="nav">注册新账号</navigator>
		<div class="end">——————社交账号直接登录——————</div>
		<div class="ending">
			<div class="ending-small">
			<image src="../../static/wechat.png" class="cover"></image>
			<span class="font">微信</span>
			</div>
			<div class="ending-small">
			<image src="../../static/QQ.png" class="cover"></image>
			<span class="font">QQ</span>
			</div>
			<div class="ending-small">
			<image src="../../static/weibo.png" class="cover"></image>
			<span class="font">微博</span>
			</div>
			<div class="ending-small">
			<image src="../../static/dou.png" class="cover"></image>
			<span class="font">豆瓣</span>
			</div>
		</div>
	<div class="end1">未注册的手机号登录时将自动注册，且代表您已经<div class="end1 small">同意用户协议</div></div>
	</view>
	
	
</template>

<script>
export default {
	data() {
		return {
			userDTO: {
				mobile: '',
				password: ''
			}
		};
	},
	onLoad() {
			uni.setNavigationBarTitle({
			title: '登录'
		});
	},
	methods: {
	
		
		signIn: function(userDTO) {
			var _this = this;
			uni.request({
				url: this.apiServer + '/user/sign_in',
				method: 'POST',
				data: {
					mobile: userDTO.mobile,
					password: userDTO.password
				},
				header: {
					'content-type': 'application/json'
				},
				success: res => {
					// console.log(res.data.data);
					if (res.data.code == 0) {
						//将用户数据记录在本地存储
						uni.setStorageSync('login_key', {
							userId: res.data.data.id,
							nickname: res.data.data.nickname,
							avatar: res.data.data.avatar,
							token: res.data.data.token,
							login: true
						});
						uni.showToast({
							title: '登录成功'
						});
						uni.switchTab({
							url: '../my/my'
						});
					}
					//登录失败，弹出各种原因
					else {
						uni.showModal({
							title: '提示',
							content: res.data.msg
						});
					}
				}
			});
		}
	}
};
</script>

<style scoped>
	input {
	height: 50px;
	border-bottom: 1px solid #eee;
	margin-bottom: 5px;
	
}

.nav {
	color: #00b26a;
	margin-top: 15px;
	font-size: 15px;
}
.green-btn{
	 
	
	
	 background:  #DE533A;
	 color:white ;
	 border-color:#B4B4B4;
	 
 }
	 
 .end{
	 margin-top: 350px;
	 color: #B4B4B4;
	 text-align:center;
 }
.cover{
	height: 30px;
	width: 30px;
}
font{
	font-size:16px ;
}
.ending{
	display: flex;

}
.ending-small{
	margin-top: 20px;
	padding-left: 25px;
		flex: 1 1 24%;
}
.end1{
	font-size: 13px;
	color: #B4B4B4;
	margin-top: 20px;
	margin-left: 10px;
}
.small{
	color: #109C2D;
      text-decoration:underline;
	  text-underline-color:#109C2D ;
	  text-align:center
}
</style>