<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="game-info">
      <span class="player-count">6人</span>
      <span class="game-type">-普通-</span>
      <span class="map-name">人之光辉</span>
    </div>
  <div :style="{ height: bannerHeight + 'px' }" class="record-container">

    <div class="bg1">
    <div class="bg2">
    <div class="bg3">
    <div class="bg4">
    <div class="bg5">
        <div class="corner-triangle">
            <span class="triangle-number">15</span>
        </div>
        <div class="operator-list">
            <div class="operator-row">
                <div class="operator-item" v-for="i in 14" :key="'row1-'+i">
                    <div class="character-portrait" :class="{ 'no-character': i > 7 }"></div>
                    <div class="item-bottom" v-if="i <= 7">
                        <div class="skill-icon"></div>
                        <div class="equip-icon"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="record-main-container">
            <div class="content-top">
                <div class="record-header">6人</div>
            </div>
            <div class="content-middle">
                <div class="divider"></div>
            </div>
            <div class="content-bottom">
                <div class="record-content">        
                    <div class="avatar-container">
                        <img src="../assets/vue.svg" alt="用户头像" class="avatar-image">
                    </div>
                    <div class="record-content-left-item">
                        <div class="record-content-left-item-title">游戏时间</div>
                        <div class="record-content-left-item-content">2021/10/01</div>
                    </div>
                </div>   
                <div class="record-detail">
                    使用了一次骰子，点数为1<br>
                    藏品等效3级：攻击力+3%，生命加成，防御力加成
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const bannerHeight = ref(400)
const setSize = () => {
  bannerHeight.value = document.body.clientWidth / 4;  
  console.log(bannerHeight.value);
}

// 生命周期钩子
onMounted(() => {
  setSize();
  window.addEventListener('resize', () => { setSize(); }, false);
})
</script>

<style scoped>
.record-container {
  padding: 20px;
  background-color: transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.game-info {
  display: flex;
  align-items: center;
  background-color: #000;
  padding: 0 15px;
  width: fit-content;
  margin-bottom: 8px;
}

.game-info span {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}

.game-info .map-name {
  color: #18d1ff;
}

.record-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.record-item {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.record-item:hover {
  background-color: #f5f5f5;
}

.record-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.match-date {
  color: #666;
}

.match-teams {
  font-weight: bold;
}

.match-score {
  color: #1a73e8;
  font-weight: bold;
}

.corner-triangle {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 60px 60px 0;
  border-color: transparent #ff0000 transparent transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

.triangle-number {
  position: absolute;
  top: -5px;
  right: -60px;
  color: white;
  font-weight: bold;
  font-size: 30px;
}

.operator-list {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 60%;
    /* max-width: 500px; */
    padding: 20px;
    background-color: transparent;
    border-radius: 4px;
}
.operator-row {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 5px;
    & > *:first-child {
        opacity: 0;
    }
}

.character-portrait {
    flex: 1;
    width: 100%;
    height: 100%;
    background-image: url(../assets/aglina_e1.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.character-portrait.no-character {
    background-image: url(../assets/noinfo.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.operator-item {
    flex: 1 1 calc(100% / 7 - 20px); /* 确保每行只有7个元素 */
    aspect-ratio: 2/3;
    background-color: #242424;
    /* background-color: #fff; */
    margin: 0 5px;
    position: relative;
    display: flex;
    flex-direction: column;
}

.item-bottom {
    height: 30%;
    display: flex;
    justify-content: space-between;
    padding: 0 4px;
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
}

.skill-icon {
    background-image: url(../assets/skill_icon_skchr_aglina_3.png);
}

.equip-icon {
    background-image: url(../assets/DEC-X_color.png);
}

.skill-icon, .equip-icon {
    aspect-ratio: 1;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid #fff;
    background-color: #242424;
}

.bg1 {
    height: 100%;
    width: 100%;
    background-image: url(../src/assets/dots.png);
    .bg2 {
        height: 100%;
        width: 100%;
        background-image: url(../src/assets/rogue_2_deco_r.png);
        background-size: 75%;
        background-repeat: no-repeat;
        background-position: 100%;
        background-size: contain;
        .bg3 {
            height: 100%;
            width: 100%;
            background-image: url(../src/assets/rogue_2_deco_l.png);
            background-size: 75%;
            background-repeat: no-repeat;
            background-size: contain;
            .bg4 {
                height: 100%;
                width: 100%;
                background-image: url(../src/assets/char_291_aglina.png);
                background-size: contain;
                background-repeat: no-repeat;
                .bg5 {
                    position: relative;
                    height: 100%;
                    width: 100%;
                    background-image: url(../src/assets/rogue_2_logo.png);
                    background-repeat: no-repeat;
                    background-position: 0 0;
                    background-size: 25%;
                }
            }
        }
    }
}

.record-main-container {
    width: 100%;
    max-width: calc(100vw - 40px); 
    position: relative;
    padding: 0 0 32px 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}

.content-top {
    display: flex;
    align-items: flex-start;
}

.content-middle {
    display: flex;
    justify-content: flex-start;
}

.content-bottom {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.divider {
    width: 33.33%;
    height: 1px;
    background-color: #ffffff;
}

.record-header {
    font-weight: 700;
    text-align: start;
    color: #fff;
    font-size: 7rem;
    @media screen and (max-width: 1100px) {
        font-size: 3rem;
    }
    @media screen and (min-width: 1100px) and (max-width: 1500px) {
        font-size: 5rem;
    }
}
.divider {
    width: 33.33%;
    height: 1px;
    background-color: #ffffff;
    margin-bottom: 16px;
}
.record-content {
    display: flex;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
    @media screen and (min-width: 769px) and (max-width: 1200px) {
        font-size: 16px;
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
    .avatar-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .record-content-left-item {
        text-align: start;
        .record-content-left-item-content {
            color: #18d1ff;
        }
    }
} 
.record-detail {
    text-align: start;
    @media screen and (max-width: 768px) {
        display: none;
    }
    @media screen and (min-width: 769px) and (max-width: 1200px) {
        font-size: 12px;
    }
}
</style>
