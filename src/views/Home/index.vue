<template>
  <!-- <h1>BiliBili 主页</h1>
  <router-link to="/video/1">点我去视频详情页</router-link> -->
  <!-- 头部组件 -->
  <AppHeader/>
  <!-- 频道组件 -->
  <HomeChannel/>
  <!-- 轮播组件 -->
  <HomeSwipe/>
  <!-- 视频列表 -->
  <HomeVideoList/>
</template>

<script setup lang="ts">
// 使用setup：只需导入，无需注册
import AppHeader from '@/components/app-header.vue'
import HomeChannel from './components/home-channel.vue'
import HomeSwipe from './components/home-swipe.vue'
import HomeVideoList from './components/home-video-list.vue'
</script>
