<template>
  <!-- Container -->
  <div class="bg-[#fffeff] text-black font-titillium">
    <div class="relative w-full" @mouseenter="stopAutoScroll" @mouseleave="startAutoScroll">
      <!-- Carousel Wrapper -->
      <div class="relative h-[80vh] overflow-hidden">
        <!-- Slide 1 -->
        <div v-show="currentSlide === 0" class="absolute inset-0 transition-opacity duration-1000">
          <!-- Hero container -->
          <figure class="Hero relative flex-shrink-0 opacity-100 w-full h-[80vh] snap-center">
            <img src="../assets/img/TP.jpg" alt="Portal SMKN 4 Tasikmalaya" class="Hero_img w-full h-full opacity-30" />
            <!--Image-->
            <!-- Shapes in above  -->
            <div class="Shapes_above">
              <img class="shape absolute opacity-60 top-0" src="../assets/svg/Ellipse.svg" alt="" />
              <img class="shape absolute opacity-60 top-0 left-2" src="../assets/svg/Ellipse1.svg" alt="" />
              <img class="shape absolute opacity-60 -top-2 left-3" src="../assets/svg/Ellipse2.svg" alt="" />
              <img class="shape absolute opacity-60 top-3 left-14" src="../assets/svg/Ellipse3.svg" alt="" />
            </div>
            <!-- Shapes in below -->
            <div class="Shapes_below">
              <img class="shape1 absolute opacity-60 bottom-0 right-0" src="../assets/svg/Ellipse.svg" alt="" />
              <img class="shape1 absolute opacity-60 bottom-0 right-2 rotate-180" src="../assets/svg/Ellipse1.svg" alt="" />
              <img class="shape1 absolute opacity-60 -bottom-2 right-3 rotate-180" src="../assets/svg/Ellipse2.svg" alt="" />
              <img class="shape1 absolute opacity-60 bottom-3 right-14 rotate-180" src="../assets/svg/Ellipse3.svg" alt="" />
            </div>
            <!-- Hero content -->
            <figcaption class="Hero_content absolute bottom-0 flex justify-start ms-10 items-center w-full h-[80vh] paddingX">
              <!-- Content Text -->
              <div class="Content_text flex flex-col gap-14 cursor-default">
                <div class="flex flex-col gap-5">
                  <div class="">
                    <p class="text-[3rem] text-black font-bb text-center pe-32">Selamat Datang di</p>
                    <p class="text-[4.5rem] font-bold leading-[4rem]">
                      Website Resmi
                      <br />
                      SMK Negeri 4 Tasikmalaya
                    </p>
                  </div>
                  <q class="text-lg tracking-widest font-medium">Membuat anak-anak bisa berkata jujur adalah permulaan pendidikan.</q>
                </div>
                <button class="Content_btn group border border-[#11224e] text-lg tracking-wider rounded-md w-fit py-2 px-4 bg-[#11224e] text-white">
                  <NuxtLink class="flex items-center gap-2">
                    <p>Lihat Profil Sekolah</p>
                    <Icon name="material-symbols:arrow-right-alt-rounded" size="1.3rem" class="group-hover:translate-x-2" />
                  </NuxtLink>
                </button>
              </div>
              <!-- Content Image -->
              <div class="Content_img absolute bottom-0 right-24 w-[450px] text-center">
                <img src="../assets/img/KepalaSekolah.png" alt="Kepala Sekolah" class="drop-shadow-2xl w-11/12" />
              </div>
            </figcaption>
          </figure>
        </div>

        <!-- Slide 2 -->
        <div v-show="currentSlide === 1" class="absolute inset-0 transition-opacity duration-1000">
          <!-- Hero Container -->
          <figure class="Hero relative flex-shrink-0 opacity-100 w-full h-[80vh] snap-center">
            <img src="../assets/img/TP.jpg" alt="Portal SMKN 4 Tasikmalaya" class="w-full h-full opacity-30" />
            <!-- Background -->
            <!-- Shapes above -->
            <div class="Shapes_above">
              <img class="shape2 absolute opacity-60 top-0" src="../assets/svg/Ellipse.svg" alt="" />
              <img class="shape2 absolute opacity-60 top-0 left-2" src="../assets/svg/Ellipse1.svg" alt="" />
              <img class="shape2 absolute opacity-60 -top-2 left-3" src="../assets/svg/Ellipse2.svg" alt="" />
              <img class="shape2 absolute opacity-60 top-3 left-14" src="../assets/svg/Ellipse3.svg" alt="" />
            </div>
            <!-- Shapes below -->
            <div class="Shapes_below">
              <img class="shape3 absolute opacity-60 bottom-0 right-0" src="../assets/svg/Ellipse.svg" alt="" />
              <img class="shape3 absolute opacity-60 bottom-0 right-2 rotate-180" src="../assets/svg/Ellipse1.svg" alt="" />
              <img class="shape3 absolute opacity-60 -bottom-2 right-3 rotate-180" src="../assets/svg/Ellipse2.svg" alt="" />
              <img class="shape3 absolute opacity-60 bottom-3 right-14 rotate-180" src="../assets/svg/Ellipse3.svg" alt="" />
            </div>
            <!-- Hero content -->
            <figcaption class="Hero_content absolute bottom-0 flex justify-start items-center w-full h-[80vh] paddingX">
              <!-- Content text -->
              <div class="Content_text flex flex-col gap-14 z-10">
                <div class="flex flex-col gap-5">
                  <div class="">
                    <p class="text-[4.5rem] font-bold leading-[4rem]">
                      Informasi PPDB <br />
                      SMK Negeri 4 Tasikmalaya
                    </p>
                  </div>
                  <ol class="font-titilium ms-5 font-medium list-disc text-lg tracking-wide">
                    <li>Tanggal Pelaksanaan</li>
                    <li>Kuota dan Jalur Pendaftaran</li>
                    <li>Alur Pendaftaran</li>
                  </ol>
                </div>
                <button class="Content_btn group border border-[#11224e] text-lg tracking-wider rounded-md w-fit py-2 px-4 bg-[#11224e] text-white">
                  <NuxtLink class="flex items-center gap-2">
                    <p>Lihat Selengkapnya</p>
                    <Icon name="material-symbols:arrow-right-alt-rounded" size="1.3rem" class="group-hover:translate-x-2" />
                  </NuxtLink>
                </button>
              </div>
              <!-- Content image -->
              <div class="Content_img absolute right-0 w-[600px] bottom-0 text-center">
                <img src="../assets/img/Students.png" alt="Siswa Siswi" class="drop-shadow-2xl w-10/12" />
              </div>
            </figcaption>
          </figure>
        </div>

        <!-- Slide 3 -->
        <div v-show="currentSlide === 2" class="absolute inset-0 transition-opacity duration-1000">
          <!-- Hero Container -->
          <figure class="Hero relative flex-shrink-0 opacity-100 w-full h-[80vh] snap-center">
            <img src="../assets/img/TP.jpg" alt="Portal SMKN 4 Tasikmalaya" class="w-full h-full opacity-30" />
            <!--Background-->
            <!-- Shapes above -->
            <div class="Shapes_above">
              <img class="shape4 absolute opacity-60 top-0" src="../assets/svg/Ellipse.svg" alt="" />
              <img class="shape4 absolute opacity-60 top-0 left-2" src="../assets/svg/Ellipse1.svg" alt="" />
              <img class="shape4 absolute opacity-60 -top-2 left-3" src="../assets/svg/Ellipse2.svg" alt="" />
              <img class="shape4 absolute opacity-60 top-3 left-14" src="../assets/svg/Ellipse3.svg" alt="" />
            </div>
            <!-- Shapes below -->
            <div class="Shapes_below">
              <img class="shape5 absolute opacity-60 bottom-0 right-0" src="../assets/svg/Ellipse.svg" alt="" />
              <img class="shape5 absolute opacity-60 bottom-0 right-2 rotate-180" src="../assets/svg/Ellipse1.svg" alt="" />
              <img class="shape5 absolute opacity-60 -bottom-2 right-3 rotate-180" src="../assets/svg/Ellipse2.svg" alt="" />
              <img class="shape5 absolute opacity-60 bottom-3 right-14 rotate-180" src="../assets/svg/Ellipse3.svg" alt="" />
            </div>
            <!-- Hero content -->
            <figcaption class="Hero_content absolute bottom-0 flex justify-end items-center w-full h-[80vh] paddingX">
              <!-- Content text -->
              <div class="Hero_text flex flex-col gap-14">
                <div class="flex flex-col gap-5">
                  <div class="">
                    <p class="text-[3rem] text-black font-bb">Mari bergabung bersama kami</p>
                    <p class="text-[4.5rem] font-bold leading-[4rem]">Yuk, cari tahu jurusan apa <br />saja yang tersedia di sini!</p>
                  </div>
                  <q class="font-titilium font-medium text-lg tracking-widest"> Masa depan adalah milik mereka yang menyiapkan hari ini </q>
                </div>
                <button class="Content_btn group border border-[#11224e] font-titillium text-lg tracking-wider rounded-md w-fit py-2 px-4 bg-[#11224e] text-white">
                  <NuxtLink class="flex items-center gap-2">
                    <p>Lihat Jurusan</p>
                    <Icon name="material-symbols:arrow-right-alt-rounded" size="1.3rem" class="group-hover:translate-x-2" />
                  </NuxtLink>
                </button>
              </div>
              <!-- Content image -->
              <div class="Content_img absolute left-20 w-[450px] -bottom-16 text-center">
                <img src="../assets/img/batik.png" alt="Kepala Sekolah" class="drop-shadow-2xl" />
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <!-- Previous Slide -->
      <button class="prev group absolute top-1/2 left-2 transform -translate-y-1/2 border border-[#11224e] text-[#11224e] hover:bg-[#11224e] hover:text-white flex p-2 rounded-full z-20" @click="prevSlide">
        <Icon name="material-symbols:arrow-left-alt-rounded" size="2rem" class="group-hover:scale-75" />
      </button>
      <!-- Next Slide -->
      <button class="next group absolute top-1/2 right-2 transform -translate-y-1/2 border border-[#11224e] text-[#11224e] hover:bg-[#11224e] hover:text-white flex hover: p-2 rounded-full z-20" @click="nextSlide">
        <Icon name="material-symbols:arrow-right-alt-rounded" size="2rem" class="group-hover:scale-75" />
      </button>
    </div>
    <div class="">
      <div class="paddingX absolute w-[100%] h-14 bottom-0">
        <div class="bg-[#11224e] text-white shadow py-10 rounded-xl">
          <p class="text-center font-titillium tracking-wider font-bold">TERWUJUDNYA LULUSAN YANG CERDAS, AKTIF, KOMPETITIF, ADAPTIF, DAN PRODUKTIF BERLANDASKAN IMAN DAN TAKWA</p>
        </div>
      </div>
      <!-- Principal's Speech -->
      <div class="relative paddingX mt-24 flex justify-center">
        <div class="bg-white shadow-md border-t w-[80%] flex justify-center gap-10 py-5 rounded-xl">
          <div class="">
            <img src="../assets/img/KepalaSekolah.png" alt="" class="drop-shadow-2xl" />
            <div class="Text text-center bg-[#11224e] text-white rounded-lg py-2 leading-6">
              <p class="tracking-wide text-[1.5rem]">Kurniawan, S.Pd., M.Pd.</p>
              <p class="tracking-wider">Kepala Sekolah</p>
            </div>
          </div>
          <div class="text-md font-titillium w-5/12 text-justify">
            <p>Assalamu'alaikum Wr, Wb</p>
            <br />
            <p>
              Puji syukur kita panjatkan ke hadirat Allah SWT atas limpahan rahmat dan karunia-Nya, sehingga SMKN 4 Tasikmalaya dapat terus berkiprah dalam mencetak generasi muda yang unggul, berkarakter, dan siap bersaing di dunia kerja maupun
              melanjutkan pendidikan ke jenjang yang lebih tinggi.
            </p>
            <br />
            <p>
              Selamat datang di situs resmi SMKN 4 Tasikmalaya, sebuah media informasi yang kami persembahkan untuk memberikan gambaran menyeluruh mengenai sekolah kami. Situs ini dirancang untuk memudahkan akses informasi bagi seluruh siswa, orang
              tua, alumni, dan masyarakat luas.
            </p>
            <NuxtLink class="cursor-pointer group flex items-center mt-5 underline underline-offset-4 text-[#2c52b3]">
              <p>Baca Selengkapnya</p>
              <Icon name="material-symbols:arrow-right-alt-rounded" size="1.3rem" class="group-hover:translate-x-2" />
            </NuxtLink>
          </div>
        </div>
      </div>
      <svg id="wave" style="transform: rotate(0deg); transition: 0.3s" viewBox="0 0 1440 95" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(17, 34, 78, 1)" offset="0%"></stop>
            <stop stop-color="rgba(17, 34, 78, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style="transform: translate(0, 0px); opacity: 1"
          fill="url(#sw-gradient-0)"
          d="M0,20L80,25C160,30,320,40,480,40C640,40,800,30,960,25C1120,20,1280,20,1440,23.3C1600,27,1760,33,1920,30C2080,27,2240,13,2400,10C2560,7,2720,13,2880,16.7C3040,20,3200,20,3360,20C3520,20,3680,20,3840,30C4000,40,4160,60,4320,61.7C4480,63,4640,47,4800,48.3C4960,50,5120,70,5280,66.7C5440,63,5600,37,5760,28.3C5920,20,6080,30,6240,41.7C6400,53,6560,67,6720,65C6880,63,7040,47,7200,40C7360,33,7520,37,7680,38.3C7840,40,8000,40,8160,40C8320,40,8480,40,8640,35C8800,30,8960,20,9120,20C9280,20,9440,30,9600,31.7C9760,33,9920,27,10080,30C10240,33,10400,47,10560,48.3C10720,50,10880,40,11040,40C11200,40,11360,50,11440,55L11520,60L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
        ></path>
      </svg>
      <div class="bg-[#11224e]">
        <div class="paddingX flex justify-between">
          <div class="Text text-white flex flex-col justify-around">
            <div class="flex flex-col gap-5">
              <p class="text-[2rem]">Sarana dan Prasarana</p>
              <ol class="list-disc ms-5">
                <li>Lapang</li>
                <li>Masjid</li>
                <li>Perpustakaan</li>
                <li>Ruang Praktek Siswa</li>
              </ol>
            </div>
            <button class="bg-[#ffff] group border border-white text-black rounded-md py-2 px-4">
              <NuxtLink class="flex items-center gap-2 justify-center">
                <p class="font-medium">Lihat Selengkapnya</p>
                <Icon name="material-symbols:arrow-right-alt-rounded" size="1.3rem" class="group-hover:translate-x-2" />
              </NuxtLink>
            </button>
          </div>
          <iframe width="800" height="450" src="https://www.youtube.com/embed/5l2u9rHS36k?si=lsYwqx2j3TWc6EmXcontrols=0&rel=0&modestbranding=1&showinfo=0&disablekb=1" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
      <svg id="wave" style="transform: rotate(180deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(17, 34, 78, 1)" offset="0%"></stop>
            <stop stop-color="rgba(17, 34, 78, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style="transform: translate(0, 0px); opacity: 1"
          fill="url(#sw-gradient-0)"
          d="M0,20L80,25C160,30,320,40,480,40C640,40,800,30,960,25C1120,20,1280,20,1440,23.3C1600,27,1760,33,1920,30C2080,27,2240,13,2400,10C2560,7,2720,13,2880,16.7C3040,20,3200,20,3360,20C3520,20,3680,20,3840,30C4000,40,4160,60,4320,61.7C4480,63,4640,47,4800,48.3C4960,50,5120,70,5280,66.7C5440,63,5600,37,5760,28.3C5920,20,6080,30,6240,41.7C6400,53,6560,67,6720,65C6880,63,7040,47,7200,40C7360,33,7520,37,7680,38.3C7840,40,8000,40,8160,40C8320,40,8480,40,8640,35C8800,30,8960,20,9120,20C9280,20,9440,30,9600,31.7C9760,33,9920,27,10080,30C10240,33,10400,47,10560,48.3C10720,50,10880,40,11040,40C11200,40,11360,50,11440,55L11520,60L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// Current slide index
const currentSlide = ref(0);

// Auto-scroll interval
let interval = null;

// Change to the next slide
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 3; // 3 slides
  if (currentSlide.value === 0) {
    // gsap.from('.Hero', {
    //     opacity: 0.8,
    //     ease: 'power4.out',
    //     duration: 1
    // })
    gsap.from(".shape", {
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      delay: 0.5,
    });
    gsap.from(".shape1", {
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      delay: 0.5,
    });
  }
  if (currentSlide.value === 1) {
    // gsap.from('.Hero', {
    //     opacity: 0.8,
    //     ease: 'power4.out',
    //     duration: 1
    // })
    gsap.from(".shape2", {
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      delay: 0.5,
    });
    gsap.from(".shape3", {
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      delay: 0.5,
    });
  }
  if (currentSlide.value === 2) {
    // gsap.from('.Hero', {
    //     opacity: 0.8,
    //     ease: 'power4.out',
    //     duration: 1
    // })
    gsap.from(".shape4", {
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      delay: 0.5,
    });
    gsap.from(".shape5", {
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      delay: 0.5,
    });
  }
};

// Change to the previous slide
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + 3) % 3; // 3 slides
  if (currentSlide.value === 0) {
    // gsap.from('.Hero', {
    //     opacity: 0.8,
    //     ease: 'power4.out',
    //     duration: 1
    // })
    gsap.from(".shape", {
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      delay: 0.5,
    });
    gsap.from(".shape1", {
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      delay: 0.5,
    });
  }
  if (currentSlide.value === 1) {
    // gsap.from('.Hero', {
    //     opacity: 0.8,
    //     ease: 'power4.out',
    //     duration: 1
    // })
    gsap.from(".shape2", {
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      delay: 0.5,
    });
    gsap.from(".shape3", {
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      delay: 0.5,
    });
  }
  if (currentSlide.value === 2) {
    // gsap.from('.Hero', {
    //     opacity: 0.8,
    //     ease: 'power4.out',
    //     duration: 1
    // })
    gsap.from(".shape4", {
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      delay: 0.5,
    });
    gsap.from(".shape5", {
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      delay: 0.5,
    });
  }
};

// Start auto-scroll
const startAutoScroll = () => {
  interval = setInterval(nextSlide, 6000); // 6 seconds
};

// // Stop auto-scroll
const stopAutoScroll = () => {
  clearInterval(interval);
};

onMounted(() => {
  startAutoScroll();
  gsap.from(".shape", {
    opacity: 0,
    duration: 1.2,
    stagger: 0.1,
    delay: 0.5,
  });
  gsap.from(".shape1", {
    opacity: 0,
    duration: 1.2,
    stagger: 0.1,
    delay: 0.5,
  });
});

onUnmounted(() => {
  stopAutoScroll();
});
</script>

<style scoped></style>
