<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="item in list" :key="item.id" :title="item.text">内容 1</van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

// TS数据格式：用于标记数据格式
interface INavItem {
  id: string,
  text: string
}

const active = ref(0)
const list = ref<INavItem[]>([])

axios({
  url: '/navList',
  method: 'get'
}).then(res => {
  console.log(res.data)
  list.value = res.data.result
})
</script>
