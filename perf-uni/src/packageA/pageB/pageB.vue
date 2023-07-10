<template>
    <view class="container">
        <view>{{content}}</view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            content: '分包页内容B'
        }
    }
}
</script>

<style>
.container {
  padding: 200rpx;
}
</style>