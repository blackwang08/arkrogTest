<template>
  <div class="main-page">
    <!-- 主页面容器 -->
    <header class="header">
      <el-carousel :height= "bannerHeight + 'px'" indicator-position="none" arrow="never" >
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src="item.url" class="image">
      </el-carousel-item>
    </el-carousel>
    </header>
    
    <main class="content">
      <!-- 主要内容区域 -->
      <div class="image-grid">
        <div v-for="(image, index) in images" :key="index" class="image-item" @click="handleImageClick(image)">
          <img :src="image.url" :alt="image.name">
          <p class="image-name">{{ image.name }}</p>
        </div>
      </div>

      <div class="no-collection">  
        <div class="header-collection">
          <div class="left">
            <div class="collection-title">无藏记录</div>
          </div>
          <div class="right">
            <div 
              class="collection-type" 
              :class="{ active: selectedTypeCollection === 'recommended' }"
              @click="selectedTypeCollection = 'recommended'"
            >推荐</div>
            <div 
              class="collection-type" 
              :class="{ active: selectedTypeCollection === 'latest' }"
              @click="selectedTypeCollection = 'latest'"
            >最新</div>
          </div>
        </div>
        <Record></Record>
        <Record></Record>
      </div>

      <div class="blog">  
        <div class="header-blog">
          <div class="left">
            <div class="blog-title">攻略分享</div>
          </div>
          <div class="right">
            <div 
              class="blog-type" 
              :class="{ active: selectedTypeBlog === 'recommended' }"
              @click="selectedTypeBlog = 'recommended'"
            >推荐</div>
            <div 
              class="blog-type" 
              :class="{ active: selectedTypeBlog === 'latest' }"
              @click="selectedTypeBlog = 'latest'"
            >最新</div>
          </div>
        </div>
        <Blog></Blog>
      </div>
    </main>
    
    <!-- 收录原则对话框 -->
    <el-dialog
      v-model="dialogVisible"
      title="收录原则"
      width="50%"
      :before-close="handleClose"
      class="custom-dialog"
    >
      <div class="dialog-content">
        <p>无藏收录原则如下：</p>
        <ol>
          <li>所有内容必须与明日方舟游戏相关</li>
          <li>内容必须真实可靠，不得包含虚假信息</li>
          <li>严禁发布违反法律法规的内容</li>
          <li>尊重原创，标明出处</li>
          <li>内容应当有实用价值或参考意义</li>
        </ol>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
// 导入需要的组件和方法
import { ref, onMounted } from 'vue'
import Record from '../components/record.vue'
import Blog from '../components/blog.vue'
import { ElMessageBox } from 'element-plus'

const selectedTypeCollection = ref('recommended')
const selectedTypeBlog = ref('recommended')
const dialogVisible = ref(false)

// 处理图片点击事件
const handleImageClick = (image) => {
  if (image.name === '收录原则') {
    dialogVisible.value = true
  }
}

// 处理对话框关闭
const handleClose = (done) => {
  done()
}

const imgList = [
    { id: 1, url: '../src/assets/seed.jpg' },
    { id: 2, url: '../src/assets/dlc2.jpg' }
  ]
const images = [
  { url: '../src/assets/收录原则.png', name: '收录原则' },
  { url: '../src/assets/干员记录.png', name: '干员记录' },
  { url: '../src/assets/趣味百科.png', name: '趣味百科' },
  { url: '../src/assets/短脖兔杯.png', name: '短脖兔杯' },
  { url: '../src/assets/五藏杯.png', name: '五藏杯' },
  { url: '../src/assets/集生百态.png', name: '集生百态' }
]
// 响应式数据
const bannerHeight = ref(400)
const setSize = () => {
  bannerHeight.value = document.body.clientWidth / 4;  
}

// 生命周期钩子
onMounted(() => {
  setSize();
  window.addEventListener('resize', () => { setSize(); }, false);
})
</script>

<style scoped>
.main-page {
  max-width: 1800px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: #fff;
}


.header {
  width: calc(100% - 40px);
  padding: 0 20px;
  background-color: transparent;
  img {
    object-fit: scale-down;
    width: 100%;
    height: 100%;
  }
}

.content {
  flex: 1;
  width: 100%;
  height: 384px;
}

.footer {
  background-color: transparent;
}

:deep(.el-carousel__container) {
  height: 100%;
}

.el-carousel__item{
     background-color: transparent;
  }

.image-grid {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer; /* 添加鼠标指针样式 */
}

.image-item img {
  height: 64px;
  width: 64px;
  object-fit: contain;
}

.image-name {
  margin-top: 10px;
  text-align: center;
  color: #fff;
}

.no-collection,
.blog {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-collection, 
.header-blog {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.left {
  line-height: 36px;
  font-size: 24px;
  font-weight: 700;
}

.right {
  display: flex;
  margin-left: auto;
  gap: 20px;
}
.collection-type,
.blog-type {
  cursor: pointer;
}
.collection-type.active,
.blog-type.active {
  color: #409EFF;
}

:deep(.el-dialog) {
  background-color: #444;
}

:deep(.el-dialog__title) {
  color: #fff;
}

.dialog-content {
  color: #fff;
  line-height: 1.6;
}

.dialog-content ol {
  padding-left: 20px;
}

.dialog-content li {
  margin-bottom: 10px;
}
</style>
