<template>
  <div id="base-bg" class="w-screen h-[100vh] pb-8 overflow-x-hidden">
    <div class="flex items-center flex-col justify-center w-screen pt-17 xl:pt-0 xl:mt-30 text-white constantia">
      <div id="texthl" class="p-1 w-[90%] xl:w-[75%] rounded-[50px] border-gray-300 border-1 border-x-6">
        <h1 class="text-[20px] md:text-[30px] lg:text-[40px] tracking-wider text-center z-[100]">GUILD WARS REVIVAL</h1>
      </div>
      <div id="bgbase" class="w-[80%] xl:w-[70%] pt-4 p-3 border-gray-300 border-1 border-x-3 rounded-b-lg">
        <nav>
          <div class="w-[100%] flex flex-col md:flex-row gap-2 pl-2 mb-4 md:mb-0 text-center">
            <RouterLink to="/"
              class="h-6 border-y-1 border-x-2 border-y-white border-t-white border-b-white md:border-b-black rounded-t-lg rounded-b-lg md:rounded-b-none px-2 hover:cursor-pointer text-gray-300 active:text-white hover:text-gray-200">
              Homepage
            </RouterLink>
            <RouterLink to="/capes"
              class="h-6 border-y-1 border-x-2 border-y-white border-t-white border-b-white md:border-b-black rounded-t-lg rounded-b-lg md:rounded-b-none px-2 hover:cursor-pointer text-gray-300 active:text-white hover:text-gray-200">
              Capes
            </RouterLink>
            <RouterLink to="/useful_pages"
              class="h-6 border-y-1 border-x-2 border-y-white border-t-white border-b-white md:border-b-black rounded-t-lg rounded-b-lg md:rounded-b-none px-2 hover:cursor-pointer text-gray-300 active:text-white hover:text-gray-200">
              Useful
              pages
            </RouterLink>
            <RouterLink to="/credits"
              class="h-6 border-y-1 border-x-2 border-y-white border-t-white border-b-white md:border-b-black rounded-t-lg rounded-b-lg md:rounded-b-none px-2 hover:cursor-pointer text-gray-300 active:text-white hover:text-gray-200">
              Credits
            </RouterLink>
          </div>
        </nav>
        <RouterView />
      </div>
    </div>
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
  background-image: url(/bg/1.png);
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

#texthl {
  background: #2B2D2B;
  background: linear-gradient(0deg, rgb(46, 48, 46) 40%, rgba(78, 78, 77, 1) 100%);
  -webkit-text-fill-color: #dadada;
  text-shadow: -2px -2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, 2px 2px 0 #000000;
}

#bgbase {
  background: #000000;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.705) 94%, rgba(59, 64, 64, 0.705) 100%);
}

.separator {
  background: #D6D7D6;
  background: linear-gradient(90deg, rgba(214, 215, 214, 0) 0%, rgba(214, 215, 214, 1) 10%, rgba(214, 215, 214, 1) 50%, rgba(214, 215, 214, 1) 90%, rgba(214, 215, 214, 0) 100%);
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
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }
  const preloadedImages = bgs.value.map((bg) => {
    const img = new Image();
    img.src = `/bg/${bg}`;
    return img;
  });
  randomBg();
  const baseBg = document.getElementById('base-bg');
  if (baseBg) {
    setInterval(() => {
      randomBg();
      const currentImage = preloadedImages.find(
        (img) => img.src.endsWith(`/bg/${bgCurrent.value}`)
      );
      if (currentImage && currentImage.complete) {
        baseBg.style.transition = 'background-image 1s linear';
        baseBg.style.backgroundImage = `url(/bg/${bgCurrent.value})`;
      }
    }, 5000);
  }
});
</script>