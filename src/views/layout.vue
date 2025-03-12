<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="layout-container">
    <!-- 头部导航 -->
     <div class="top-container">
      <header class="top">
      <div class="top-left">
        <div class="logo">
          <img src="../assets/vue.svg" alt="Logo">
        </div>
      </div>
      <div class="top-right">
          <div class="search">
            <el-select v-model="selectedOption" class="select-style">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
              <el-input
                v-model="searchText"
                placeholder="搜索"
                class="search-input"
                :suffix-icon="Search"
              />
          </div>
          <div class="login-button">
            <button @click="login">登录</button>
          </div>
      </div>      
    </header>
    </div>
    <header class="header">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="$router.push('/mainPage')">
          <div class="title">集语成舟</div>
          <div class="sub">首页</div>
        </el-menu-item>
        <el-menu-item index="2" @click="$router.push('/collection')"><div class="title">穷集一生</div><div class="sub">无藏收录</div></el-menu-item>
        <el-menu-item index="3"><div class="title">集思广益</div><div class="sub">攻略博客</div></el-menu-item>
        <el-menu-item index="4"><div class="title">小集器人</div><div class="sub">伤害计算</div></el-menu-item>
        <el-menu-item index="5"><div class="title">高手云集</div><div class="sub">赛事整理</div></el-menu-item>
      </el-menu>
    </header>

    <!-- 主要内容区 -->
    <main class="main-content">
      <router-view></router-view>
    </main>

    <!-- 底部信息 -->
    <footer class="footer">
      <div class="footer-links">
        <a href="#">联系我们</a>
        <a href="#">赞助我们</a>
        <a href="#">友情链接</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const activeIndex = ref('1')

const searchText = ref('')
const selectedOption = ref('')
const options = [
  {
    value: 'option1',
    label: '选项1',
  },
  {
    value: 'option2',
    label: '选项2',
  },
  {
    value: 'option3',
    label: '选项3',
  },
]
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

:deep(.el-input__wrapper) {
    background-color: #444;
    box-shadow: none;
    border-radius: 0;
}
:deep(.el-input__inner) {
  color: #fff;
}

.el-select .el-input.is-focus .el-input__inner{
    border:0px;
}

:deep(.el-select__wrapper){
  height: 100%;
  border-radius: 0;
  box-shadow: none;
  background-color: #444;
}


.top-container {
  /* 头部容器样式 */
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #000;
}
.top {
  /* 头部样式 */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; 
  height: 80px;
  width: calc(100vw - 48px);
  max-width: 1536px;
  padding: 0 24px;
  .top-left {
    display: flex;
    width: 50%;
  }
  .top-right {
    display: flex;
    justify-content: right;
    gap: 10px;
    width: 50%;
    
    .search {
      display: flex;
      justify-content: right;
      align-items: center;
      gap: 3px;
      .select-style {
        width: 80px;
        height: 40px;
      }
      .search-input {
        width: 200px;
        height: 40px;
      }
    }
    .login-button {
      display: flex;
      justify-content: right;
      align-items: center;
      gap: 3px;
      button {
        width: 80px;
        height: 40px;
        border-radius: 0px;
        background-color: #18D1ff;
        color: #000;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
}

.header {
  /* 头部样式 */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 95px;
  margin: 16px 0;
  background-color: transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  .el-menu-demo {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: transparent;
    .el-menu-item {
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      .title {
        line-height: 28px;
        height: 28px;
      }
      .sub {
        font-size: 14px;
        line-height: 20px;
        height: 28px;
      }
    }
    .el-menu-item:hover {
      background-color: transparent;
    }
  }
}


.footer {
  /* 底部样式 */
  height: 60px;
  background-color: #f5f5f5;
}

.footer {
  background-color: #4e4e4e;
  height: 96px;
  margin-top: 160px;
  box-shadow: 0 -2px 10px #18D1ff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-links {
  display: flex;
  gap: 60px;
}

.footer-links a {
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>
