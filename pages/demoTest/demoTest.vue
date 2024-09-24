<template>
	<view class="logo">
		<image src="../../static/logo.jpg" mode="widthFix"></image>
	</view>
	<view>
		<input type="text" class="uni-input" @input="onKeyInput" placeholder="请输入查询编号" placeholder-style="text-align: center" maxlength="5" />
		<navigator url="/pages/demoTest/demoTestDetails" class="btnQuery" @click="query">查询</navigator>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const inputValue = ref('');
function onClick(){
	num.value ++;
	color.value = "#" + String(Math.random()).substring(3,9)
	
}

function isString(){
	return typeof value === 'string';
}

function onKeyInput(event){
	inputValue.value =event.detail.value;
}
function query(){
	console.log(inputValue.value);
	console.log(isString(inputValue.value),111);
}	
	
</script>

<style>
	.logo{
		width: 320px;
		height: 420px;
		margin: 0 auto;
				font-size: 0;
				overflow: hidden;
	}
	.logo image{
		width: 160px;
		display: block;
		margin: 120px auto 0;
		/* padding-top: 120px; */

	}
	.uni-input{
		box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 7px;
		width: 260px;
		height: 42px;
		margin: 20px auto;
		font-size: 20px;
		border: 1px solid #eee;
		border-radius: 15px;
		text-align: center;
	}
	.btnQuery{
		width: 160px;
		height: 40px;
		margin: 30px auto;
		font-size: 20px;
		color: #fff;
		background: skyblue;
		text-align: center;
		line-height: 40px;
	}
</style>
