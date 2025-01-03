<template>
  <div
    class="bg-[#fffeff] text-black max-w-screen z-20 font-titillium border-b paddingX flex justify-between"
  >
    <NuxtLink to="/" class="flex items-center gap-2">
      <img
        src="../assets/img/logo.png"
        alt="Logo SMKN 4 Tasikmalaya"
        class="w-14"
      />
      <p class="font-bold text-[2rem] text-[#11224E]">SMKN 4 Tasikmalaya</p>
    </NuxtLink>
    <div class="Alternatif flex justify-center items-center gap-5">
      <div class="Sosmed flex justify-center items-center gap-5">
        <a
          v-for="(sosmed, i) in sosmeds"
          :key="i"
          :title="sosmed.name"
          :href="sosmed.link"
          class="group rounded-full border border-black shadow-md w-10 h-10 flex justify-center items-center transition-all duration-150 hover:bg-[#11224e]"
        >
          <Icon
            :name="sosmed.icon"
            size="1.5rem"
            class="group-hover:text-white"
          />
        </a>
      </div>
      <div
        v-for="(other, i) in others"
        :key="i"
        class="flex justify-center items-center gap-1 border-l-2 border-[#11224e] ps-5"
      >
        <Icon :name="other.icon" size="1.5rem" />
        <a
          :title="other.tittle"
          :href="other.link"
          class="hover:text-[#2c52b3]"
          >{{ other.name }}</a
        >
      </div>
    </div>
  </div>
  <div
    class="Navbar bg-[#fffeff] text-black z-50 paddingX shadow-md font-titillium flex justify-end gap-7 sticky top-0"
  >
    <NuxtLink to="/">
      <p class="">Beranda</p>
    </NuxtLink>
    <NuxtLink to="/artikel">
      <p class="">Artikel</p>
    </NuxtLink>
    <div class="Profile relative inline-block group cursor-pointer">
      <div class="OnHover group flex items-center">
        <p class="">Profil Sekolah</p>
        <Icon
          name="material-symbols:keyboard-arrow-down-rounded"
          class="group-hover:rotate-180"
        />
      </div>
      <div
        class="ListHover absolute left-0 z-10 hidden origin-top-right bg-white shadow-md w-[150px] divide-y divide-gray-100 group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300"
      >
        <ul>
          <li
            v-for="profile in profiles"
            :key="profile"
            class="hover:bg-slate-100 p-2"
          >
            <NuxtLink :to="profile.path">{{ profile.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <NuxtLink to="/galeri">
      <p class="">Galeri</p>
    </NuxtLink>
    <div class="Siswa relative inline-block group cursor-pointer">
      <div class="OnHover group flex items-center">
        <p class="">Siswa</p>
        <Icon
          name="material-symbols:keyboard-arrow-down-rounded"
          class="group-hover:rotate-180"
        />
      </div>
      <div
        class="ListHover absolute left-0 z-10 hidden origin-top-right bg-white shadow-md w-[140px] divide-y divide-gray-100 group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300"
      >
        <ul>
          <NuxtLink
            v-for="student in students"
            :key="student"
            :to="student.path"
          >
            <li class="hover:bg-slate-100 p-2">
              {{ student.name }}
            </li>
          </NuxtLink>
        </ul>
      </div>
    </div>
    <div class="Sapras relative inline-block group cursor-pointer">
      <div class="OnHover group flex items-center">
        <p title="Sarana dan Prasana" class="">Sapras</p>
        <Icon
          name="material-symbols:keyboard-arrow-down-rounded"
          class="group-hover:rotate-180"
        />
      </div>
      <div
        class="ListHover absolute left-0 z-10 hidden origin-top-right bg-white shadow-md w-[150px] divide-y divide-gray-100 group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300"
      >
        <ul>
          <li
            v-for="sapras in sapras"
            :key="sapras"
            class="hover:bg-slate-100 p-2"
          >
            <NuxtLink :to="sapras.path">{{ sapras.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const sosmeds = ref([
  { icon: "ic:sharp-tiktok", name: "TikTok", link: "https://" },
  { icon: "mynaui:brand-youtube-solid", name: "Youtube", link: "https://" },
  { icon: "hugeicons:instagram", name: "Instagram", link: "https://" },
  { icon: "hugeicons:new-twitter", name: "X", link: "https://" },
  // {icon: 'ic:sharp-tiktok', name: 'TikTok', link: 'https://'}
]);

const others = ref([
  {
    icon: "ion:ios-telephone",
    name: "+62-265-312-059",
    link: "tel:+62265312059",
    tittle: "Nomor Telepon Sekolah",
  },
  {
    icon: "material-symbols:mail",
    name: "info@smkn4-tsm.sch.id",
    link: "mailto:info@smkn4-tsm.sch.id",
    tittle: "Email Sekolah",
  },
]);

const profiles = ref([
  { name: "Sejarah", path: "/profil/sejarah" },
  { name: "Visi dan Misi", path: "/profil/visimisi" },
  { name: "Identitas Sekolah", path: "/profil/identitas" },
  // { name: "Struktur Organisasi", path: "/profil/strukor" },
  { name: "Guru dan Staff", path: "/profil/gustaf" },
  { name: "Data Statistik", path: "/profil/statistik" },
]);

const students = ref([
  { name: "Kejuruan", path: "/siswa/proke" },
  { name: "Ekstrakurikuler", path: "/siswa/ekskul" },
  // { name: "Prestasi", path: "/profil/prestasi" },
]);

const sapras = ref([
  { name: "Tanah", path: "/sapras/tanah" },
  { name: "Ruangan", path: "/sapras/ruangan" },
  // { name: "Peralatan dan Aset", path: "/profil/alset" },
]);
</script>

<style scoped></style>
