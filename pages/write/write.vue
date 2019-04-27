<template>
	<view class="container1">
		<view class="container-box">
			<view class="top">
			<!-- 文章标题输入框，和title变量绑定 -->
			<view class="head">
			<input type="text" v-model="title" class="biaoti" placeholder="请输入标题" />
			</view>
			<button class="green-btn" @tap="postArticle">发布</button>
			
			</view>
			<!-- 选择图片的按钮，点击触发chooseImg方法 -->
			
			<!-- 文章内容输入的多行文本域，绑定content变量 -->
			<textarea placeholder="请输入正文" v-model="content" class="content" />
			<text class="yulan">效果预览</text>
			<!-- 使用graceUI的富文本解析功能，来预览文章内容 -->
			<view class="grace-text">
					<rich-text :nodes="content" bindtap="tap"></rich-text>
			</view>
		</view>
		<view class="botton-box">
			<view class="botton-box2">
			<image src="../../static/pic.png" class="tubiao" @tap="chooseImg"></image>
		    <image src="../../static/A.png" class="tubiao"></image>
			 <image src="../../static/B.png" class="tubiao"></image>
			  <image src="../../static/C.png" class="tubiao"></image>
			   <image src="../../static/D.png" class="tubiao"></image>
			    <image src="../../static/E.png" class="tubiao"></image>
				</view>
			</view>
	     </view>
	</view>
</template>

<script>
	export default {
		data() {
			 return {
			title: '',
			content: '',
			userId: uni.getStorageSync('login_key').userId,
			imgs: []
		};
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '写文章'
			});
	},
	methods: {
		chooseImg: function() {
			var _this = this;
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				sourceType: ['album'],
				success: function(res) {
					console.log(JSON.stringify(res.tempFilePaths));
					uni.uploadFile({
						url: _this.apiServer + '/avatar/upload',
						filePath: res.tempFilePaths[0],
						name: 'file',
						success: uploadFileRes => {
							//图片上传成功，回显图片地址
							console.log(uploadFileRes.data);
							//将图片地址加入imgs数组
							_this.imgs.push(uploadFileRes.data);
							//将图片地址拼接HTML标签，加入文章内容
							_this.content += '<img src="' + uploadFileRes.data + '" width = "100%"/>';
						}
					});
				}
			});
		},
		postArticle: function() {
			var _this = this;
			uni.request({
				url: this.apiServer + '/article/add',
				method: 'POST',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					uId: this.userId,
					title: this.title,
					content: '<div>' + this.content + '</div>'
				},
				success: res => {
					if (res.data.code === 0) {
						//获得发布文章成功返回的文章id
						var aId = res.data.data;
						console.log(aId);
						uni.showToast({
							title: '发布成功'
						});
						//将文章id和文章对应的图片地址数组传到后台，存入数据库
						uni.request({
							url: 'http://192.168.43.99:8080/api/img/add',
							method: 'POST',
							header: { 'content-type': 'application/x-www-form-urlencoded' },
							data: {
								aId: aId,
								imgs: JSON.stringify(_this.imgs)  //序列化imgs数组
							},
							success: res => {
								if (res.data.code === 0) {
									console.log('文章图片地址已写入数据库');
								}
							}
						});
						uni.switchTab({
							url: '../index/index'
						});
					}
				}
			});
    }
	}
};
</script>

<style>
	.container-box {
		width: 94%;
		margin: 0 auto;
	}
	.add-btn{
	
	height: 40px;
	background: #DE533A;
	color: white;
	border: 2px solid #F6F6F6;
	border-left: white;
	display: flex;
	align-items: center;
	justify-content: center;
	
	
	}
	.yulan{
		color: #DE533A;
		font-size: 15px;
	}
 .top{
	 height: 40px;
	 display: flex;
	  border-color: #FFFFFF;
 }
 .biaoti{
	 float: left;
	 border-color: #FFFFFF;
	 font-size: 25px;
 }
 .green-btn{
	 
	 margin-right: 2px;
	 width: 120px;
	 height: 40px;
	 background:white ;
	 color: #DE533A;
	 border-color: #B4B4B4;
	 
 }
 .green-btn:after{border:none;}
 .head{
	padding-top: 5px;
	 
 }
 .top{
	 border-bottom:1px dashed #F00
	 
 }
	 
 .content{
	 font-size: 20px;
 }
 .botton-box {
 	position: fixed;
 	bottom: 0px;
 	width: 100%;
 	height: 35px;
 	background-color: white;
 	padding-top: 10px;
	background-color: #F6F6F6;
 }
 .tubiao {
 	width: 25px;
 	height: 25px;
	margin-left: 20px;
 }
 .picword{
	 font-size: 15px;
	 color: #B4B4B4;
	 margin-left: 10px;
 }

 .botton-box2{
	 width: 90%;
	 margin:  0 auto;
	 display: flex;
	 align-items: center;
	 justify-content: space-between;
 }
</style>
