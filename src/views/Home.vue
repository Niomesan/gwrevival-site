<template>
  <div class="flex items-center flex-col justify-center w-screen pt-17 xl:pt-0 xl:mt-35 text-white constantia">
    <div id="texthl" class="p-1 w-[90%] xl:w-[50%] rounded-[50px] border-gray-300 border-1 border-x-6">
      <h1 class="text-[20px] md:text-[30px] lg:text-[40px] tracking-wider text-center z-[100]">GUILD WARS REVIVAL</h1>
    </div>
    <div id="bgbase" class="w-[80%] xl:w-[46%] pt-4 p-3 border-gray-300 border-1 border-x-3 rounded-b-lg">
      <div class="w-[100%] flex flex-col md:flex-row gap-2 pl-2 mb-4 md:mb-0">
        <button @click="pageSet(pages[0])"
          class="h-6 border-y-1 border-x-2 border-y-white border-t-white border-b-white md:border-b-black rounded-t-lg rounded-b-lg md:rounded-b-none px-2 hover:cursor-pointer text-gray-300 active:text-white hover:text-gray-200">Homepage</button>
        <button @click="pageSet(pages[1])"
          class="h-6 border-y-1 border-x-2 border-y-white border-t-white border-b-white md:border-b-black rounded-t-lg rounded-b-lg md:rounded-b-none px-2 hover:cursor-pointer text-gray-300 active:text-white hover:text-gray-200">Capes</button>
        <!--          
        <button @click="pageSet(pages[2])"
        class="h-6 border-y-1 border-x-2 border-y-white border-t-white border-b-white md:border-b-black rounded-t-lg rounded-b-lg md:rounded-b-none px-2 hover:cursor-pointer text-gray-300 active:text-white hover:text-gray-200">Video</button>
        -->
        <button @click="pageSet(pages[4])"
          class="h-6 border-y-1 border-x-2 border-y-white border-t-white border-b-white md:border-b-black rounded-t-lg rounded-b-lg md:rounded-b-none px-2 hover:cursor-pointer text-gray-300 active:text-white hover:text-gray-200">Useful pages</button>
        <button @click="pageSet(pages[3])"
          class="h-6 border-y-1 border-x-2 border-y-white border-t-white border-b-white md:border-b-black rounded-t-lg rounded-b-lg md:rounded-b-none px-2 hover:cursor-pointer text-gray-300 active:text-white hover:text-gray-200">Credits</button>
      </div>
      <div v-if="homePage">
        <div
          class="text-md lg:text-lg p-3 text-center mb-3 border-t-black border-l-black border-r-gray-300 border-b-gray-300 border-1 border-t-3 border-l-3 rounded-lg">
          <p>
            Welcome to the heart of the Guild Wars Revival! Our community is dedicated to
            celebrating and preserving the rich legacy of this timeless MMORPG. Whether you’re a veteran seeking
            nostalgia
            or a newcomer eager to experience the classic gameplay, you’ll find a vibrant, friendly group of like-minded
            players here. We host regular events, share tips and builds, and offer guidance for both PvE and PvP
            content.
            From revisiting iconic areas to tackling elite missions, our goal is to keep the spirit of Tyria alive. Join
            us,
            and be part of a passionate community that’s breathing new life into this unforgettable game.
            Reconnect. Rediscover. Revive Guild Wars with us!
          </p>
        </div>
        <div class="flex flex-col md:flex-row gap-5 mb-3 w-[100%] p-2 md:p-0 justify-center">
          <a href="https://discord.gg/KYvPDxt"
            class="p-2 flex flex-row gap-1 bg-gradient-to-b from-[#1F3046] to-[#142335] border-gray-300 border-1 border-x-4 rounded-lg"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M22 11V8h-1V6h-1V5h-2V4h-3v1H9V4H6v1H4v1H3v2H2v3H1v7h2v1h2v1h2v-2H6v-1h2v1h1v1h6v-1h1v-1h2v1h-1v2h2v-1h2v-1h2v-7ZM9 15H7v-1H6v-2h1v-1h2v1h1v2H9Zm9-1h-1v1h-2v-1h-1v-2h1v-1h2v1h1Z" />
            </svg>Join our Discord server!</a>
          <a href="https://www.facebook.com/groups/gwrevival/"
            class="p-2 flex flex-row gap-1 bg-gradient-to-b from-[#1F3046] to-[#142335] border-gray-300 border-1 border-x-4 rounded-lg"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M23 2v20h-1v1h-8v-8h2v-1h1v-2h-3V9h1V8h2V5h-4v1h-2v2h-1v4H7v3h3v8H2v-1H1V2h1V1h20v1z" />
            </svg>Join our Facebook group!</a>
        </div>
        <div class="separator w-[90%] h-0.5 m-auto rounded-xl"></div>
        <div class="flex flex-row gap-15 mt-3 justify-center">
          <div>
            <h2 class="text-lg lg:text-xl pl-2 text-[#DECE9E]">Our Guilds</h2>
            <div class="separator w-[100%] h-0.5 m-auto rounded-xl mb-2"></div>
            <ul class="text-sm pl-2">
              <li class="text-amber-500">T H E R E V I V A L [GWR]</li>
              <li class="text-purple-500">A Lite In The Darkness [LiTE]</li>
            </ul>
          </div>
          <div>
            <h2 class="text-lg lg:text-xl pl-2 text-[#DECE9E]">Allianced guilds</h2>
            <div class="separator w-[100%] h-0.5 m-auto rounded-xl mb-2"></div>
            <ul class="text-sm pl-2">
              <li>Charr On Pogo Sticks [hop]</li>
              <li>Day N Nite II [Nite]</li>
              <li>Legendary Elonians [Ltd]</li>
              <li>Legendary Tyrians [Ltd]</li>
              <li>No Lords No Masters [ACAB]</li>
              <li>Unidentified Soldiers [UiS]</li>
              <li>We Are The Goofy Goober [GOOF]</li>
              <li>Will You Please [STFU]</li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="capePage">
        <Cape />
      </div>
      <!--
        <div v-if="videoPage">
          <Video />
        </div>
      -->
      <div v-if="usefulPage">
        <Useful />
      </div>
      <div v-if="creditsPage">
        <Credits />
      </div>
    </div>
  </div>
</template>

<style scoped>
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
import Cape from '@/components/Capes.vue';
import Video from '@/components/Video.vue';
import Credits from '@/components/Credits.vue';
import Useful from '@/components/UsefulPages.vue'
import { computed, ref } from 'vue';

const homePage = ref(true);
const capePage = ref(false);
const videoPage = ref(false);
const creditsPage = ref(false);
const usefulPage = ref(false)

const pages = [homePage, capePage, videoPage, creditsPage, usefulPage];

function pageSet(e: any) {
  pages.forEach((page) => {
    page.value = false;
  });
  e.value = true;
}
</script>