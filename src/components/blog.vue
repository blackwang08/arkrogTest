<template>
  <div class="guide-container">
    <div class="guide-row">
      <div class="guide-item" v-for="(item, index) in guides.slice(0, 4)" :key="index">
        <div class="guide-image">
          <img src="../assets/blog.jpg" alt="Guide Image">
        </div>
        <div class="divider"></div>
        <div class="item-text">
            <div class="avatar-container">
                <img src="../assets/vue.svg" alt="用户头像" class="avatar-image">
            </div>
            <p>{{ item.title }}</p>
            <h3>{{ item.description }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogGuide',
  data() {
    return {
      // 初始化攻略数据
      guides: [
        {
          title: '黑蓑影卫攻略组',
          description: '烧一壶水(?)的时间了解特限模组'
        },
        {
          title: '神祇读神奇',
          description: '三笙仙术杯温蒂推大特哪里出了错？logos为何推完打不到？数据化详解磕墙这回事'
        },
        {
          title: '我长颈鹿懂了',
          description: '【双王队①】N15 萨米肉鸽 四结局解析-出怪和双王机制'
        },
        {
          title: '我长颈鹿懂了',
          description: '人之光辉地图机制及盲盒透视导论'
        }
      ]
    }
  }
}
</script>

<style scoped>
.guide-container {
  padding: 20px;
}

.guide-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 20px;
  overflow: hidden;
}

.guide-item {
  width: calc(48% - 20px);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.guide-item h3 {
  color: #fff;
}

.guide-item p {
  color: #18D1ff;
}

.guide-image {
  width: 100%;
  height: 80%;
  img {
    width: 100%;
    height: 100%;
  }
}

.divider {
    width: 100%;
    height: 1px;
    background-color: #ffffff;
}

.item-text {
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.avatar-container {
    margin: 0 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    border: 0px solid #ffffff;
    @media screen and (max-width: 768px) {
        width: 32px;
        height: 32px;
    }
    @media screen and (min-width: 769px) and (max-width: 1200px) {
        width: 40px;
        height: 40px;
    }
}
</style>
