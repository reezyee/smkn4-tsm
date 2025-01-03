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
        <p class="text-[2.5rem] font-semibold">Data Statistik</p>
      </div>
    </div>
    <p class="paddingX">
      <NuxtLink to="/">Beranda</NuxtLink> /
      <span class="text-[#2c52b3]">Artikel</span>
    </p>
    <div class="paddingX my-7 flex flex-col gap-5">
      <div class="flex justify-between text-center">
        <div class="border-t shadow-md w-96 py-5">
          <p>Jumlah Guru</p>
          <p>90</p>
        </div>
        <div class="border-t shadow-md w-96 py-5">
          <p>Jumlah Siswa</p>
          <p>1500</p>
        </div>
        <div title="Jumlah Rombongan Belajar" class="border-t shadow-md w-96 py-5">
          <p>Jumlah Rombel</p>
          <p>42</p>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="Guru w-72 bg-white rounded-xl p-2 border-t shadow-md">
          <p>Jumlah Guru</p>
          <Pie :data="teachersChartData" :options="teachersChartOptions" />
        </div>
        <div
          class="Jurusan w-[500px] bg-white rounded-xl p-2 border-t shadow-md"
        >
          <Bar :data="jurusanChartData" :options="jurusanChartOptions" />
        </div>
        <div class="Murid w-72 bg-white rounded-xl p-2 border-t shadow-md">
          <p>Jumlah Murid</p>
          <Pie :data="studentsChartData" :options="studentsChartOptions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Bar, Pie } from "vue-chartjs";
//Bar Chart untuk semua siswa di jurusannya
const jurusanChartData = computed(() => {
  return {
    labels: ["DKV", "PPLG", "TJKT", "TOI", "TBSM"],
    datasets: [
      {
        label: "Jumlah Siswa per Jurusan",
        backgroundColor: [
          "#e05739",
          "#007840",
          "#000ac5",
          "#d0d0d0",
          "#e00000",
        ],
        data: [196, 352, 374, 96, 369],
      },
    ],
  };
});

const jurusanChartOptions = ref({
  title: {
    display: true,
    text: "Line Chart Products",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
});

//Pie Chart untuk Guru
const teachersChartData = computed(() => {
  return {
    labels: ["Perempuan", "Laki - Laki"],
    datasets: [
      {
        label: "Jumlah Guru",
        backgroundColor: ["#ff0050", "#0037a6"],
        data: [47, 43],
      },
    ],
  };
});

const teachersChartOptions = ref({
  title: {
    display: true,
    text: "Line Chart Products",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
});

//Pie Chart untuk Guru
const studentsChartData = computed(() => {
  return {
    labels: ["Perempuan", "Laki - Laki"],
    datasets: [
      {
        label: "Jumlah Murid",
        backgroundColor: ["#ff0050", "#0037a6"],
        data: [610, 890],
      },
    ],
  };
});

const studentsChartOptions = ref({
  title: {
    display: true,
    text: "Line Chart Products",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
});
</script>

<style scoped></style>
