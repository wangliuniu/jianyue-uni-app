<template>
	<view class="container">
		<view class="sign-box">
			<input
				class="uni-input left"
				type="number"
				placeholder="输入手机号"
				v-model="mobile"
				required="required"
			/>
			<button class="green-btn small-btn right" :disabled="show" @tap="getVerifyCode">
				{{ title }}
			</button>
		</view>
		<input
			class="uni-input"
			type="number"
			placeholder="输入验证码"
			v-model="verifyCode"
			required="required"
		/>
		<button @tap="checkCode" class="green-btn">下一步</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			mobile: '',
			verifyCode: '',
			timer: 20,
			show: false,
			title: '获取验证码'
		};
	},
	onLoad() {
		uni.setNavigationBarTitle({
			title: '注册'
		});
	},
	methods: {
		getVerifyCode: function() {
			var _this = this;
			uni.request({
				url: this.apiServer + '/user/verify',
				method: 'POST',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					mobile: _this.mobile
				},
				success: res => {
					if (res.data.code === 0) {
						uni.showToast({
							title: '验证码已发送'
						});
						_this.disabled = true;
						console.log(_this.disabled);
						let timer1 = setInterval(() => {
							_this.show = true;
							_this.timer--;
							_this.title = _this.timer + 's后再试';
							if (_this.timer == 0) {
								clearInterval(timer1);
								_this.timer = 20;
								_this.show = false;
								_this.title = '发送验证码';
								return;
							}
						}, 1000);
					} else {
						uni.showModal({
							title: '提示',
							content: res.data.msg
						});
					}
				}
			});
		},
		checkCode: function() {
			var _this = this;
			console.log(_this.verifyCode);
			uni.request({
				url: this.apiServer + '/user/check',
				method: 'POST',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					mobile: _this.mobile,
					verifyCode: _this.verifyCode
				},
				success: res => {
					console.log(res.data);
					if (res.data.code === 0) {
						uni.navigateTo({
							url: '../password/password?mobile=' + _this.mobile
						});
					} else {
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

<style>
input {
	height: 50px;
	border-bottom: 1px solid #eee;
	margin-bottom: 5px;
}
.sign-box {
	display: flex;
	align-items: center;
}
.left {
	flex: 1 1 70%;
}
.small-btn {
	width: 100px;
	height: 40px;
	font-size: 14px;
}
.green-btn{
	 
	
	
	 background:  #DE533A;
	 color:white ;
	 border-color:#B4B4B4;
	 
 }
</style>
