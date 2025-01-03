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
        <p class="text-[2.5rem] font-semibold">Visi - Misi - Tujuan</p>
      </div>
    </div>
    <p class="paddingX">
      <NuxtLink to="/">Beranda</NuxtLink> /
      <span class="text-[#2c52b3]">Visi dan Misi</span>
    </p>
    <div class="paddingX">
        <div class="card text-center">
            <div class="cardHead border-b border-gray-700">
                <p class="text-[1.5rem]">Visi</p>
            </div>
            <div class="cardBody h-full my-3">
                <p class="tracking-wide">"TERWUJUDNYA LULUSAN YANG CERDAS, AKTIF, KOMPETITIF, ADAPTIF, DAN PRODUKTIF BERLANDASKAN IMAN DAN TAKWA" <br> <br> "(CAKAP BERIMTAK)"</p>
            </div>
        </div>
        <div class="flex gap-5 mb-7">
            <div class="card w-[50%]">
                <div class="cardHead border-b border-gray-700">
                    <p class="text-[1.5rem] text-center">Misi</p>
                </div>
                <div class="cardBody">
                    <ul class="ms-5 list-decimal mt-3">
                        <li v-for="misi in misi" :key="misi" class="text-justify">{{ misi.name }}</li>
                    </ul>
                </div>
            </div>
            <div class="card w-[50%]">
                <div class="cardHead border-b border-gray-700">
                    <p class="text-[1.5rem] text-center">Tujuan</p>
                </div>
                <div class="cardBody">
                    <ul class="ms-5 list-decimal mt-3">
                        <li v-for="tujuan in tujuan" :key="tujuan" class="text-justify">{{ tujuan.name }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
const misi = ref([
    {name: 'Menyiapkan Sumber Daya Manusia yang cerdas dan kompeten baik hardskill maupun softskill.'},
    {name: 'Meningkatkan dan mengembangkan aktifitas serta kreatifitas seluruh warga sekolah dalam berbagai kegiatan positif.'},
    {name: 'Mewujudkan manajemen pengelolaan yang efektif, efesien, transparan, akuntabel dan layanan prima.'},
    {name: 'Menumbuhkan dan mengembangkan potensi dan kemampuan Sumber Daya Manusia yang berdaya saing tinggi melalui berbagai kegiatan akademik maupun non akademik.'},
    {name: 'Menyelenggarakan berbagai program kegiatan dalam upaya meningkatkan Sumber Daya Manusia yang mampu menyesuaikan dengan perkembangan.'},
    {name: 'Mengembangkan sarana prasarana dan lingkungan sekolah yang menyenangkan sebagai wadah menumbuhkembangkan daya kreasi dan inovasi untuk menghasilkan produk teknologi tepat guna.'},
    {name: 'Membangun jiwa wirausaha yang handal melalui pembelajaran Teaching Factory (TEFA) dan Kelas Industri.'},
    {name: 'Menjalin dan mengembangkan kemitraan dengan Industri dan Dunia Kerja (IDUKA) serta lembaga lainnya yang relevan.'},
    {name: 'Menanamkan dan membudayakan sikap dan perilaku yang baik pada aktivitas di sekolah maupun dalam kehidupan sehari-hari.'},
])

const tujuan = ref([
    {name: 'Sekolah meraih prestasi pencapaian nilai rata-rata UN dan indeks integritas diatas rata-rata Nasional pada tahun 2026.'},
    {name: 'Sekolah Menghasilkan Tamatan yang siap bekerja Minimal 50 % Tamatan bekerja pada tahun tamat.'},
    {name: 'Terciptanya aktivitas dan kreatifitas yang positif oleh seluruh warga sekolah.'},
    {name: 'Sekolah meraih prestasi akademik dan non akademik minimal di tingkat provinsi Jawa Barat dan Nasional.'},
    {name: 'Sekolah memiliki tenaga pendidik dan kependidikan yang berkualifikasi minimal S1 dan linier dengan tugasnya, bersertifikat pendidik dan telah mengikuti diklat implementasi kurikulum merdeka pada tahun 2024.'},
    {name: 'Sekolah mencapai kriteria sekolah berwawasan lingkungan (adiwiyata) pada tahun 2026.'},
    {name: 'Sekolah terakreditasi dengan Nilai A pada tahun 2024.'},
    {name: 'Sekolah memiliki Lembaga Sertifikasi Profesi (LSP) yang terlisensi, Tempat Uji Kompetensi (TUK) yang terverifikasi dan Bursa Kerja Khusus (BKK) yang terakreditasi pada tahun 2025.'},
    {name: 'Sekolah memiliki Perpustakaan yang terakreditasi A pada tahun 2026.'},
    {name: 'Sekolah menjadi Badan Layanan Umum Daerah (BLUD) pada tahun 2025.'},
    {name: 'Sekolah mengimplementasikan Kurikulum Merdeka untuk seluruh tingkat pada tahun 2024.'},
    {name: 'Sekolah memiliki Dokumen Kurikulum Merdeka untuk seluruh tingkat pada tahun 2024.'},
    {name: 'Sekolah menerapkan Kurikulum Merdeka dengan Pembelajaran Berdiferensiasi dan Pembelajaran Sosial-Emosional untuk seluruh tingkat pada tahun 2024.'},
    {name: 'Sekolah memiliki sarana prasaranasesuai dengan standar pelayanan minimal pendidikan dan standar IDUKA pada tahun 2026.'},
    {name: 'Sekolah memiliki Teaching Factory di semua program keahlian yang sesuai dengan standar industri dan representatif pada tahun 2024.'},
    {name: 'Sekolah melaksanakan program menumbuh kembangkan Budi Pekerti dan akhlak mulia melalui pendidikan karakter pada kegiatan, intra, ekstra kurikuler dan non kurikuler.'},
])
</script>

<style scoped></style>
