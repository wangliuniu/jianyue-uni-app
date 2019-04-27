<template>
	<view class="container">
		<view class="list-border-space"></view>
		<view class="list-space"><text>常规设置</text></view>
		<view class="list-border-space"></view>
		<view class="list">
				<view class="list-item avatar_card" @tap="showActionSheet">
				<view class="info_left"><text>更改头像</text></view>
				<view class="info_right"><image :src="avatar" class="avatar_info"></image></view>
			</view>
			</view>
			<view class="list-item">
				<view class="info_left">更改昵称</view>
				<view class="info_right">
				<text>{{ nickname }}</text></view>
			</view>
			<view class="list-item list-item-heigher">
				<view class="right1"><input type="text" v-model="newNickname" /></view>
				<view class="left">
					<button @tap="uploadNickname" class="green-btn">确定</button>
				</view>
			</view>
			<view class="list-item ">
					<view class="info_left"><text>更改性別</text></view>
					<view class="info_right"><text>女</text></view>
				</view>
				<view class="list-item ">
					<view class="info_left"><text>更改生日</text></view>
					<view class="info_right"><text>1999-3-18</text></view>
				</view>
				<view class="list-item ">
					<view class="info_left"><text>更改主页</text></view>
					<view class="info_right"><text></text></view>
				</view>
			</view>
		
         
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			nickname: uni.getStorageSync('login_key').nickname,
			avatar: uni.getStorageSync('login_key').avatar,
			userId: uni.getStorageSync('login_key').userId
		};
	},
	onLoad() {
		uni.setNavigationBarTitle({
			title: '修改资料'
		});
	},
	methods: {
		uploadNickname: function() {
			var _this = this;
			uni.request({
				url: this.apiServer + '/user/nickname',
				method: 'post',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					userId: _this.userId,
					nickname: _this.newNickname
				},
				success: uploadNickname => {
					console.log(uploadNickname.data);
					_this.nickname = _this.newNickname;
					uni.request({
						url: this.apiServer + '/user/' + uni.getStorageSync('login_key').userId,
						method: 'GET',
						data: {
							userId: _this.userId
						},
						header: {
							'content-type': 'application/json'
						},
						success: res => {
							if (res.data.code == 0) {
								//将用户数据记录在本地存储
								uni.setStorageSync('login_key', {
									userId: res.data.data.id,
									nickname: res.data.data.nickname,
									avatar: res.data.data.avatar,
									token: res.data.data.token,
									login: true
								});
							}
						}
					});
				}
			});
		},
		showActionSheet: function() {
			var _this = this;
			uni.showActionSheet({
				itemList: ['拍照', '从相册选择'],
				success: function(res) {
					console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					//选择的是拍照功能
					if (res.tapIndex == 0) {
						uni.chooseImage({
							count: 1,
							sourceType: ['camera'],
							success: function(res) {
								uni.saveImageToPhotosAlbum({
									filePath: res.tempFilePaths[0],
									success: function() {
										console.log('save success');
										uni.uploadFile({
											url: 'http://192.168.43.99:8080/api/user/avatar',
											filePath: res.tempFilePaths[0],
											name: 'file',
											formData: {
												userId: _this.userId
											},
											success: uploadFileRes => {
												console.log(uploadFileRes.data);
												_this.avatar = uploadFileRes.data;
											},
											complete: function() {
												console.log('save');
												uni.request({
													url:
														'http://192.168.43.99:8080/api/user/' +
														uni.getStorageSync('login_key').userId,
													method: 'GET',
													data: {
														userId: _this.userId
													},
													header: {
														'content-type': 'application/json'
													},
													success: res => {
														console.log('save2');
														if (res.data.code == 0) {
															//将用户数据记录在本地存储
															uni.setStorageSync('login_key', {
																userId: res.data.data.id,
																nickname: res.data.data.nickname,
																avatar: res.data.data.avatar,
																token: res.data.data.token,
																login: true
															});
														}
													}
												});
											}
										});
									}
								});
							}
						});
					}
					//从相册选择
					if (res.tapIndex == 1) {
						uni.chooseImage({
							count: 1, //默认9
							sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都
							sourceType: ['album'], //从相册选择
							success: function(res) {
								console.log(JSON.stringify(res.tempFilePaths));
								uni.uploadFile({
									url: ' http://192.168.43.99:8080/api/user/avatar',
									filePath: res.tempFilePaths[0],
									name: 'file',
									formData: {
										userId: _this.userId
									},
									success: uploadFileRes => {
										console.log(uploadFileRes.data);
										_this.avatar = uploadFileRes.data;
									},
									complete: function() {
										console.log('save');
										uni.request({
											url:
												'http://192.168.43.99:8080/api/user/' +
												uni.getStorageSync('login_key').userId,
											method: 'GET',
											data: {
												userId: _this.userId
											},
											header: {
												'content-type': 'application/json'
											},
											success: res => {
												console.log('save2');
												if (res.data.code == 0) {
													//将用户数据记录在本地存储
													uni.setStorageSync('login_key', {
														userId: res.data.data.id,
														nickname: res.data.data.nickname,
														avatar: res.data.data.avatar,
														token: res.data.data.token,
														login: true
													});
												}
											}
										});
									}
								});
							}
						});
					}
				},
				fail: function(res) {
					console.log(res.errMsg);
				}
			});
		}
	}
};
</script>

<style>
.list-item-heigher {
	height: 80px;
	display: flex;
}
.left {
	flex: 1 1 30%;
	font-size: 17px;
	color: #DE533A;
}
.right {
	flex: 1 1 70%;
	font-size: 17px;
}
.right1{
	flex: 1 1 30%;
	font-size: 15px;
}
.green-btn{
	 
	
	
	 background:  #DE533A;
	 color:white ;
	 border-color:#B4B4B4;
	 
 }
 .list-space {
 	color: #ebaa9c;
 	background-color: #fcfcfc;
 	width: 100%;
 	margin: 0 auto;
 	font-size: 30upx;
 	padding-top: 40upx;
 	padding-bottom: 25upx;
 }
 .uni-list-item {
 	min-height: 55px;
 }
 .bangding {
 	color: #b1b1b1;
 }
 .avatar_info {
 	width: 32px;
 	height: 32px;
 	border-radius: 50%;
 }
 .savebtn {
 	width: 100%;
 }
 .info_right {
 	text-align: right;
 	flex: 0 0 50%;
 	color: #6f6f6f;
 }
 .info_left {
 	flex: 0 0 50%;
 }
 .bottom-item {
 	border-bottom: 0px;
 }
 .uni-list-item {
 	min-height: 55px;
 }
 .bangding {
 	color: #b1b1b1;
 }
</style>
