<template>
	<view class="grace-margin">
		<grace-banner title="遮罩层"></grace-banner>
		<view class="grace-title" style="margin-top:20px;">请点击按钮测试</view>
		<view class="demo" style="border-top:1px solid #F8F8F8;">
			<view>
				<button type="primary" class="grace-gtbg-green" @tap="showShade1">白色不透明</button>
			</view>
			<view>
				<button type="primary" class="grace-gtbg-blue" @tap="showShade2">黑色半透明</button>
			</view>
		</view>
		<view class="grace-shade" v-if="show1">
			<view class="grace-shade-msg grace-box-shadow">
				<view class="close-btn grace-icons icon-close3" @tap="closeShade1()"></view>
				<view class="body">
					<text class="grace-icons icon-eye" style="margin-right:10px;"></text>这里可以放置自定义内容
				</view>
			</view>
		</view>
		<view class="grace-shade grace-shade-black" v-if="show2">
			<view class="grace-shade-msg grace-animate fadeIn">
				<view class="close-btn grace-icons icon-close3" @tap="closeShade2()"></view>
				<view class="body">
					<text class="grace-icons icon-eye" style="margin-right:10px;"></text>这里可以放置自定义内容
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			show1 : false,
			show2 : false
		}
	},
	methods:{
		showShade1 : function(){
			this.show1 = true;
		},
		closeShade1 : function(){
			this.show1 = false;
		},
		showShade2 : function(){
			this.show2= true;
		},
		closeShade2 : function(){
			this.show2 = false;
		}
	}
}
</script>
<style>
@import "../../graceUI2/animate.css";

.demo{display:flex; flex-wrap:nowrap; border-left:1px solid #F8F8F8;}
.demo view{width:100%; text-align:center; padding:10upx 2%; border-bottom:1px solid #F8F8F8; border-right:1px solid #F8F8F8;}
</style>