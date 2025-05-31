<template>
    <div
        class="flex flex-col items-center text-md lg:text-lg p-3 md:p-8 text-center mb-3 border-t-black border-l-black border-r-gray-300 border-b-gray-300 border-1 border-t-3 border-l-3 rounded-lg">
        <h2 class="my-3 text-center">A collection of useful websites, Discord servers and resources that may eventually
            help your Tyrian journey.</h2>
        <div v-for="entry of usefulPages"
            class="bg-gradient-to-b from-[#1F3046] to-[#142335] border-gray-300 border-1 border-x-4 w-[80%] h-auto m-auto flex flex-col md:flex-row my-3 rounded-xl p-5 gap-3 items-center hover:scale-105 transition hover:cursor-pointer">
            <img :src="entry.logo" class="w-14 h-14" />
            <div>
                <h3 class="text-2xl text-center md:text-left">{{ entry.name }}</h3>
                <p class="text-center md:text-left">{{ entry.description }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">

const usefulPages = {
    1: {
        name: "Guild Wars wiki",
        description: "The Official Guild Wars wiki, hosting all information relevant to the game and the people who play it.",
        logo: "/logos/Wikilogo.png",
        target: "https://wiki.guildwars.com/wiki/Main_Page"
    },
    2: {
        name: "Guild Wars Factions PvP",
        description: "A Discord Server with the purpose of organising Alliance Battles, Fort Aspenwood and Jade Quarry.",
        logo: "/logos/GWFPVP.png",
        target: "https://discord.gg/Ra2Mxuq9Mc"
    },
    3: {
        name: "GW Teams & Builds",
        description: "A Discord PvE builds collection server containing high-end areas team setups and general heroes / mercenaries formations.",
        logo: "/logos/GWTeamsBuilds.png",
        target: "https://discord.com/invite/NhCCKVv6Gr"
    }
}

function openLink(link: string) {
    window.open(link, "_blank");
}
</script>