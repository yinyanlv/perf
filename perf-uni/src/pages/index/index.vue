<template>
	<view class="container">
		<view class="content">{{content}}</view>
		<button class="btn" @tap="goToLog" type="primary">前往日志页</button>
		<button class="btn" @tap="goToPageA" type="primary">前往分包页</button>
		<button class="btn" @tap="goToPageB" type="primary">前往分包页B</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: 'Hello World'
			}
		},
		methods: {
			goToLog() {
				uni.navigateTo({
					url: '/pages/logs/logs'
				})
			},
			goToPageA() {
				uni.navigateTo({
					url: '/packageA/pageA/pageA'
				})
			},			
			goToPageB() {
				uni.navigateTo({
					url: '/packageA/pageB/pageB'
				})
			}
		}
	}
</script>

<style>
.content {
  margin-top: 40rpx;
}

.btn {
  margin-top: 40rpx;
}
</style>
