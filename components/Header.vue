<template>
  <div class="">
    <div class="bg-[#fffeff] text-black max-w-screen z-20 font-titillium border-b paddingX flex justify-between">
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="../assets/img/logo.png" alt="Logo SMKN 4 Tasikmalaya" class="w-14" />
        <p class="font-bold text-[2rem] text-[#11224E]">SMKN 4 Tasikmalaya</p>
      </NuxtLink>
      <div class="Alternatif flex justify-center items-center gap-5">
        <div class="Sosmed flex justify-center items-center gap-5">
          <a title="Tiktok" href="http://" class="group rounded-full border border-black shadow-md w-10 h-10 flex justify-center items-center transition-all duration-150 hover:bg-[#11224e]">
            <Icon name="ic:sharp-tiktok" size="1.5rem" class="group-hover:text-white" />
          </a>
          <a title="YouTube" href="http://" class="group rounded-full border border-black shadow-md w-10 h-10 flex justify-center items-center transition-all duration-150 hover:bg-[#11224e]">
            <Icon name="mynaui:brand-youtube-solid" size="1.5rem" class="group-hover:text-white" />
          </a>
          <a title="Instagram" href="http://" class="group rounded-full border border-black shadow-md w-10 h-10 flex justify-center items-center transition-all duration-150 hover:bg-[#11224e]">
            <Icon name="hugeicons:instagram" size="1.5rem" class="group-hover:text-white" />
          </a>
          <a title="X" href="http://" class="group rounded-full border border-black shadow-md w-10 h-10 flex justify-center items-center transition-all duration-150 hover:bg-[#11224e]">
            <Icon name="hugeicons:new-twitter" size="1.5rem" class="group-hover:text-white" />
          </a>
        </div>
        <div class="flex justify-center items-center gap-1 border-l-2 border-[#11224e] ps-5">
          <Icon name="ion:ios-telephone" size="1.5rem" />
          <a title="Nomor Telepon Sekolah" href="tel:+62265312059" class="hover:text-[#2c52b3]">+62-265-312-059</a>
        </div>
        <div class="flex justify-center items-center gap-1 border-l-2 border-[#11224e] ps-5">
          <Icon name="ion:ios-telephone" size="1.5rem" />
          <a title="Email Sekolah" href="mailto:info@smkn4-tsm.sch.id" class="hover:text-[#2c52b3]">info@smkn4-tsm.sch.id</a>
        </div>
      </div>
    </div>
    <div class="Navbar bg-[#fffeff] text-black z-20 paddingX shadow-md font-titillium flex justify-end gap-7 sticky top-0">
      <NuxtLink to="/">
        <p class="">Beranda</p>
      </NuxtLink>
      <NuxtLink to="/artikel">
        <p class="">Artikel</p>
      </NuxtLink>
      <div class="Profile relative inline-block group cursor-pointer">
        <div class="OnHover group flex items-center">
          <p class="">Profil Sekolah</p>
          <Icon name="material-symbols:keyboard-arrow-down-rounded" class="group-hover:rotate-180" />
        </div>
        <div class="ListHover absolute left-0 z-10 hidden origin-top-right bg-white shadow-md w-[150px] divide-y divide-gray-100 group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
          <ul>
            <li class="hover:bg-slate-100 p-2">Sejarah</li>
            <li class="hover:bg-slate-100 p-2">Visi dan Misi</li>
            <li class="hover:bg-slate-100 p-2">Identitas Sekolah</li>
            <li class="hover:bg-slate-100 p-2">Struktur Organisasi</li>
            <li class="hover:bg-slate-100 p-2">Guru dan Staff</li>
            <li class="hover:bg-slate-100 p-2">Data Statistik</li>
          </ul>
        </div>
      </div>
      <div class="Kurikulum relative inline-block group cursor-pointer">
        <div class="OnHover group flex items-center">
          <p class="">Kurikulum</p>
          <Icon name="material-symbols:keyboard-arrow-down-rounded" class="group-hover:rotate-180" />
        </div>
        <div class="ListHover absolute left-0 z-10 hidden origin-top-right bg-white shadow-md w-[150px] divide-y divide-gray-100 group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
          <ul>
            <li title="Jurusan" class="hover:bg-slate-100 p-2">Kompetensi Keahlian</li>
            <li class="hover:bg-slate-100 p-2">Buku Pembelajaran</li>
            <li class="hover:bg-slate-100 p-2">Pembelajaran dan Jadwal</li>
          </ul>
        </div>
      </div>
      <div class="Siswa relative inline-block group cursor-pointer">
        <div class="OnHover group flex items-center">
          <p class="">Siswa</p>
          <Icon name="material-symbols:keyboard-arrow-down-rounded" class="group-hover:rotate-180" />
        </div>
        <div class="ListHover absolute left-0 z-10 hidden origin-top-right bg-white shadow-md w-[150px] divide-y divide-gray-100 group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
          <ul>
            <li class="hover:bg-slate-100 p-2">Rombongan Belajar</li>
            <li class="hover:bg-slate-100 p-2">Ekstrakurikuler</li>
            <li class="hover:bg-slate-100 p-2">Prestasi</li>
          </ul>
        </div>
      </div>
      <div class="Sapras relative inline-block group cursor-pointer">
        <div class="OnHover group flex items-center">
          <p title="Sarana dan Prasana" class="">Sapras</p>
          <Icon name="material-symbols:keyboard-arrow-down-rounded" class="group-hover:rotate-180" />
        </div>
        <div class="ListHover absolute left-0 z-10 hidden origin-top-right bg-white shadow-md w-[150px] divide-y divide-gray-100 group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
          <ul>
            <li class="hover:bg-slate-100 p-2">Tanah</li>
            <li class="hover:bg-slate-100 p-2">Ruang Kelas</li>
            <li class="hover:bg-slate-100 p-2">Ruang Praktek Siswa</li>
            <li class="hover:bg-slate-100 p-2">Ruang Penunjang</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
