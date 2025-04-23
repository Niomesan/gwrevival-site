<template>
  <div id="base-bg" class="w-screen h-auto pb-8 lg:pb-0 overflow-x-hidden">
    <RouterView />
  </div>
</template>

<style>
@font-face {
  font-family: Constantia;
  src: url("../public/fonts/Constantia.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.constantia {
  font-family: Constantia, sans-serif;
}


#base-bg {
  background-image: url(../public/bg/1.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
  min-height: 100vh;
  min-width: 100vw;
  object-fit: cover;
}
</style>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';

const bgs = ref(["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"]);
const bgCurrent = ref('');

const randomBg = () => {
  const i = Math.floor(Math.random() * bgs.value.length);
  bgCurrent.value = bgs.value[i];
};

onMounted(() => {
  randomBg();
  const baseBg = document.getElementById('base-bg');
  if (baseBg) {
    setInterval(() => {
      randomBg();
      baseBg.style.transition = 'background-image 1s linear';
      baseBg.style.backgroundImage = `url(../public/bg/${bgCurrent.value})`;
    }, 5000);
  }
});
</script>