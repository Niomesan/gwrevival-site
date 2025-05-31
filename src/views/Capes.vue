<template>
  <div
    class="flex flex-col items-center text-md lg:text-lg p-3 lg:p-8 text-center mb-3 border-t-black border-l-black border-r-gray-300 border-b-gray-300 border-1 border-t-3 border-l-3 rounded-lg">
    <p>In-game capes of <span class="text-amber-500">T H E R E V I V A L [GWR]</span> and <span
        class="text-purple-500">A Lite In The Darkness [LiTE]</span>.</p>
    <div class="flex flex-col md:flex-row gap-10 mt-2">
      <img width="100px" src="/capes/cape1.png" />
      <img width="100px" src="/capes/cape2.png" />
    </div>
    <div class="separator w-[90%] h-0.5 m-auto rounded-xl my-5"></div>
    <p>Illustration of <span class="text-amber-500">T H E R E V I V A L [GWR]</span> Guild Cape.</p>
    <img src="/gwr_cape.png" alt="GWR Cape" width="200px" />
  </div>
</template>

<style scoped>
.separator {
  background: #D6D7D6;
  background: linear-gradient(90deg, rgba(214, 215, 214, 0) 0%, rgba(214, 215, 214, 1) 10%, rgba(214, 215, 214, 1) 50%, rgba(214, 215, 214, 1) 90%, rgba(214, 215, 214, 0) 100%);
}
</style>

<script setup lang="ts"></script>