<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="collection-container">
    <!-- 页面内容区域 -->
    <div class="content">
      <!-- 页面内容 -->
       这里是collection
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 定义响应式数据
const data = ref(null)

// 生命周期钩子
onMounted(() => {
  // 组件挂载后的初始化操作
})

// 方法定义
const initData = () => {
  // 初始化数据的方法
}
</script>

<style scoped>
.collection-container {
  width: 100%;
  height: 100%;
}
</style>
