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
        <p class="text-[2.5rem] font-semibold">Ruangan</p>
      </div>
    </div>
    <p class="paddingX">
      <NuxtLink to="/">Beranda</NuxtLink> /
      <span class="text-[#2c52b3]">Ruangan</span>
    </p>
    <div class="paddingX my-7">
      <div class="">
        <div class="relative inline-block mb-3 mt-10">
          <span class="relative text-[2rem]">Ruang Kelas</span>
          <div class="absolute bottom-0 left-0 w-28 h-[1px] bg-current"></div>
        </div>
        <ul class="flex flex-wrap justify-between gap-5">
          <li v-for="kelas in classes" :key="kelas.id">
            <div class="card">
              <div class="cardHead">
                <img :src="kelas.src" :alt="kelas.name" class="w-48" />
              </div>
              <div class="cardBody text-center">
                <p class="font-semibold">{{ kelas.name }}</p>
              </div>
            </div>
          </li>
        </ul>
        <div class="flex justify-center gap-10">
          <!-- {{ db_classes.length }} -->
          <button
            v-if="classes.length < db_classes.length"
            @click="loadMore"
            class="bg-[#11224e] rounded-md py-2 px-4 text-white"
          >
            Lihat Lainnya
          </button>
          <button
            v-if="classes.length > 6"
            @click="loadLess"
            class="bg-[#11224e] rounded-md py-2 px-4 text-white"
          >
            Lihat Sedikit
          </button>
        </div>
      </div>
      <div class="">
        <div class="relative inline-block mb-3 mt-10">
          <span class="relative text-[2rem]">Ruang Praktek Siswa</span>
          <div class="absolute bottom-0 left-0 w-36 h-[1px] bg-current"></div>
        </div>
        <ul class="flex flex-wrap justify-between gap-5">
          <li v-for="rps in rps" :key="rps.id">
            <div class="card">
              <div class="cardHead">
                <img :src="rps.src" :alt="rps.name" class="w-48" />
              </div>
              <div class="cardBody text-center">
                <p class="font-semibold">{{ rps.name }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="">
        <div class="relative inline-block mb-3 mt-10">
          <span class="relative text-[2rem]">Ruang Penunjang</span>
          <div class="absolute bottom-0 left-0 w-36 h-[1px] bg-current"></div>
        </div>
        <div class="flex flex-col gap-10">
          <div
            v-for="rp in rp"
            :key="rp"
            class="card flex shadow-md border-t-2 rounded-2xl"
          >
            <div class="cardHead w-[600px]">
              <img
                :src="rp.src"
                :alt="rp.name"
                class="h-full bg-contain w-full"
              />
            </div>
            <div class="cardBody w-full flex flex-col justify-around p-5">
              <p class="text-[1.2rem] font-medium">
                {{ rp.name }}
              </p>
              <div class="flex gap-5 text-white">
                <div
                  class="shadow-md border-t rounded-xl p-3 bg-[#ff520e] w-full"
                >
                  <p>Panjang :</p>
                  <p>{{ rp.p }}</p>
                </div>
                <p class="w-10 text-2xl">x</p>
                <div
                  class="shadow-md border-t rounded-xl p-3 bg-[#20c641] w-full"
                >
                  <p>Lebar :</p>
                  <p>{{ rp.l }}</p>
                </div>
              </div>
              <div
                class="shadow-md border-t text-white bg-[#1a38be] rounded-xl p-3"
              >
                <p>Luas :</p>
                <p>{{ rp.L }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import r1 from "../../assets/img/kelas/1.jpg";
import r2 from "../../assets/img/kelas/2.jpg";
import r3 from "../../assets/img/kelas/3.jpg";
import r4 from "../../assets/img/kelas/4.jpg";
import r5 from "../../assets/img/kelas/5.jpg";
import r6 from "../../assets/img/kelas/6.jpg";
import r7 from "../../assets/img/kelas/7.jpg";
import r8 from "../../assets/img/kelas/8.jpg";
import r9 from "../../assets/img/kelas/9.jpg";
import r10 from "../../assets/img/kelas/10.jpg";
import r11 from "../../assets/img/kelas/11.jpg";
import r12 from "../../assets/img/kelas/12.jpg";
import r13 from "../../assets/img/kelas/13.jpg";
import r14 from "../../assets/img/kelas/14.jpg";
import r15 from "../../assets/img/kelas/15.jpg";
import r16 from "../../assets/img/kelas/16.jpg";
import r17 from "../../assets/img/kelas/17.jpg";
import r18 from "../../assets/img/kelas/18.jpg";
import r19 from "../../assets/img/kelas/19.jpg";
import r20 from "../../assets/img/kelas/20.jpg";
import r21 from "../../assets/img/kelas/21.jpg";
import r22 from "../../assets/img/kelas/22.jpg";
import r23 from "../../assets/img/kelas/23.jpg";
import r24 from "../../assets/img/kelas/24.jpg";
import tp from "../../assets/img/penunjang/TP2.jpg";
import perpus from "../../assets/img/penunjang/perpus.jpg";
import masjid from "../../assets/img/penunjang/masjid.jpg";
import parkir from "../../assets/img/penunjang/parkir.jpg";
import rpl1 from "../../assets/img/rps/rpl1.jpg";
import rpl2 from "../../assets/img/rps/rpl2.jpg";
import rpl3 from "../../assets/img/rps/rpl3.jpg";
import tkj1 from "../../assets/img/rps/tkj1.jpg";
import tkj2 from "../../assets/img/rps/tkj2.jpg";
import tsm1 from "../../assets/img/rps/tsm1.jpg";
import tsm2 from "../../assets/img/rps/tsm2.jpg";

const rp = ref([
  { id: 1, name: "Technopark", src: tp, p: "24 m", l: "8 m", L: "192 m²" },
  { id: 2, name: "Perpustakaan", src: perpus, p: "9 m", l: "9 m", L: "81 m²" },
  { id: 3, name: "Mesjid", src: masjid, p: "9 m", l: "9 m", L: "81 m²" },
  { id: 4, name: "Area Parkir", src: parkir, p: "4 m", l: "15 m", L: "60 m²" },
]);

const rps = ref([
  { id: 1, name: "RPS RPL 1", src: rpl1 },
  { id: 2, name: "RPS RPL 2", src: rpl2 },
  { id: 3, name: "RPS RPL 3", src: rpl3 },
  { id: 4, name: "RPS TKJ 1", src: tkj1 },
  { id: 5, name: "RPS TKJ 2", src: tkj2 },
  { id: 6, name: "RPS TSM 1", src: tsm1 },
  { id: 7, name: "RPS TSM 2", src: tsm2 },
]);

const db_classes = ref([
  { id: 1, name: "Ruang Kelas 1", src: r1 },
  { id: 2, name: "Ruang Kelas 2", src: r2 },
  { id: 3, name: "Ruang Kelas 3", src: r3 },
  { id: 4, name: "Ruang Kelas 4", src: r4 },
  { id: 5, name: "Ruang Kelas 5", src: r5 },
  { id: 6, name: "Ruang Kelas 6", src: r6 },
  { id: 7, name: "Ruang Kelas 7", src: r7 },
  { id: 8, name: "Ruang Kelas 8", src: r8 },
  { id: 9, name: "Ruang Kelas 9", src: r9 },
  { id: 10, name: "Ruang Kelas 10", src: r10 },
  { id: 11, name: "Ruang Kelas 11", src: r11 },
  { id: 12, name: "Ruang Kelas 12", src: r12 },
  { id: 13, name: "Ruang Kelas 13", src: r13 },
  { id: 14, name: "Ruang Kelas 14", src: r14 },
  { id: 15, name: "Ruang Kelas 15", src: r15 },
  { id: 16, name: "Ruang Kelas 16", src: r16 },
  { id: 17, name: "Ruang Kelas 17", src: r17 },
  { id: 18, name: "Ruang Kelas 18", src: r18 },
  { id: 19, name: "Ruang Kelas 19", src: r19 },
  { id: 20, name: "Ruang Kelas 20", src: r20 },
  { id: 21, name: "Ruang Kelas 21", src: r21 },
  { id: 22, name: "Ruang Kelas 22", src: r22 },
  { id: 23, name: "Ruang Kelas 23", src: r23 },
  { id: 24, name: "Ruang Kelas 24", src: r24 },
]);

// ambil 6 data classes awal
const classes = ref([...db_classes.value.slice(0, 6)]);
const limitStart = ref(classes.value.length); // batas awal pengambilan data
const limitEnd = ref(limitStart.value + 6); // batas akhir pengambilan data
// fungsi memuat data baru dari db_classes
const loadMore = () => {
  // data lama di classes digabung dengan 6 data dari db_classes selanjutnya
  classes.value = [
    ...classes.value,
    ...db_classes.value.slice(limitStart.value, limitEnd.value),
  ];

  // ubah limitStart dan limitEnd untuk data seterusnya
  limitStart.value = limitEnd.value;
  limitEnd.value = limitEnd.value + 6;
};
// Fungsi mengurangi data dari classes
const loadLess = () => {
  if (limitEnd.value > 6) {
    limitEnd.value -= 6;
    classes.value = [...db_classes.value.slice(0, limitEnd.value)];
  }
};
</script>

<style scoped></style>
