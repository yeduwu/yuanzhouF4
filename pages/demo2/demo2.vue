<template>
	<view>
		<image :src="picurl" mode="widthFix"></image>
		<button type="primary" :loading="false" :disabled="false">按钮</button>
	</view>
	<view class="box" :class="{active:isActive}">
		v-bind指令
	</view>
	<view class="box" :class="1<2?'active':''"></view>
	<view>----------</view>
	<input class="uni-input" confirm-type="search" placeholder="键盘右下角按钮显示为搜索" />
</template>

<script setup>
import { ref } from "vue";

const isActive = ref(false)

const arrs = ref([
	"../../static/skins_img1.png",
	"../../static/skins_img2.png",
	"../../static/skins_img3.png",
	"../../static/skins_img4.png",
	"../../static/skins_img5.png"
])
const picurl = ref("../../static/skins_img1.png");

let i= 0;

setInterval(()=>{
	i++;
	console.log(i)
	picurl.value = arrs.value[i%5]
},1000)

</script>
<style>
.box{
	width: 200px;
	height: 200px;
	background: orange;
	font-size: 20px;
}
.active{
	background: green;
	color: #fff;
}
</style>
