<template>
  <div class="font-titillium">
    <div class="w-[100%] relative">
      <img
        src="../../assets/img/portalsmkn4.jpeg"
        alt=""
        class="opacity-30 w-full"
      />
      <div
        class="absolute bottom-0 w-full h-full flex justify-center items-center"
      >
        <p class="text-[2.5rem] font-semibold">Tanah</p>
      </div>
    </div>
    <p class="paddingX">
      <NuxtLink to="/">Beranda</NuxtLink> /
      <span class="text-[#2c52b3]">Tanah</span>
    </p>
    <div class="paddingX my-7">
      <div class="relative inline-block mb-2">
        <span class="relative text-[2rem]">Denah</span>
        <div class="absolute bottom-0 left-0 w-10 h-[1px] bg-current"></div>
      </div>
      <div class="flex">
        <img src="../../assets/img/denah.jpg" alt="" />
        <div class="flex flex-col items-center gap-10">
          <div class="flex flex-wrap justify-center gap-5">
            <div v-for="tanah in tanah" :key="tanah" class="card shadow-md border-t-2 w-56 h-40 p-5 ">
              <div class="cardHead">
                <p>{{ tanah.name }}</p>
                <p>{{ tanah.sertif }}</p>
              </div>
              <div class="cardBody">
                <ol class="list-disc ms-5">
                  <li>Luas Lahan : {{ tanah.lh }}</li>
                  <li>Luas Bangunan : {{ tanah.lb }}</li>
                  <li>Lahan Kosong : {{ tanah.lk }}</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="text-center bg-[#11224e] text-white w-80 py-2 rounded-lg">
            Total Luas Lahan : 13238 m²
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead ({ title: "Tanah - SMKN 4 Tasikmalaya" })

const tanah = ref([
  {name: "Tanah 1", sertif: "10291002400014", lh: "7861 m²", lb: "???", lk: "???"},
  {name: "Tanah 2", sertif: "10291003400011", lh: "2057 m²", lb: "???", lk: "???"},
  {name: "Tanah 3", sertif: "10291002400012", lh: "2920 m²", lb: "???", lk: "???"},
  {name: "Tanah 4", sertif: "10291002400013", lh: "400 m²", lb: "???", lk: "???"},
])
</script>

<style scoped></style>
