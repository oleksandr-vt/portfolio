<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { slideUp, fadeIn } from '../../assets/js/animations'
import AboutArt from '../icons/AboutArt.vue'
import TailwindIcon from '../icons/skills/TailwindIcon.vue'
import ViteIcon from '../icons/skills/ViteIcon.vue'
import GulpIcon from '../icons/skills/GulpIcon.vue'
import HtmlIcon from '../icons/skills/HtmlIcon.vue'
import WebpackIcon from '../icons/skills/WebpackIcon.vue'
import NuxtIcon from '../icons/skills/NuxtIcon.vue'
import YarnIcon from '../icons/skills/YarnIcon.vue'
import CssIcon from '../icons/skills/CssIcon.vue'
import VueIcon from '../icons/skills/VueIcon.vue'
import BootstrapIcon from '../icons/skills/BootstrapIcon.vue'
import TSIcon from '../icons/skills/TSIcon.vue'
import JSIcon from '../icons/skills/JSIcon.vue'
import SassIcon from '../icons/skills/SassIcon.vue'
import NpmIcon from '../icons/skills/NpmIcon.vue'
import GsapIcon from '../icons/skills/GsapIcon.vue'
import PiniaIcon from '../icons/skills/PiniaIcon.vue'
import ParcelIcon from '../icons/skills/ParcelIcon.vue'
import GitIcon from '../icons/skills/GitIcon.vue'
import BemIcon from '../icons/skills/BemIcon.vue'

const scrollTriggerRef = ref(null)
const sectionAbout = ref(null)

const aboutTitle = ref(null)
const aboutTextOne = ref(null)
const aboutTextTwo = ref(null)
const aboutArt = ref(null)

const aboutAnimation = () => {
  const tlSection = gsap.timeline().to(sectionAbout.value, {
    duration: 0.1,
    opacity: 1,
    ease: 'Cubic.easeOut',
  })
  const tlTitle = slideUp({ el: aboutTitle.value })
  const tlTextOne = fadeIn({ el: aboutTextOne.value })
  const tlTextTwo = fadeIn({ el: aboutTextTwo.value })
  const tlArt = fadeIn({ el: aboutArt.value, duration: 1 })

  const timeline = gsap.timeline({ paused: true })
    .add(tlSection, 0)
    .add(tlTitle, 0)
    .add(tlTextOne, 0.25)
    .add(tlTextTwo, 0.5)
    .add(tlArt, 0.65)

  if (scrollTriggerRef.value) {
    scrollTriggerRef.value.kill()
  }

  scrollTriggerRef.value = ScrollTrigger.create({
    trigger: sectionAbout.value,
    start: 'top 70%',
    animation: timeline,
  })
}

const hasUserScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (!hasUserScrolled.value) {
      hasUserScrolled.value = true
      aboutAnimation()
    }
  })
})

onUnmounted(() => {
  if (hasUserScrolled.value) scrollTriggerRef.value.kill()
})
</script>

<template>
  <section class="about" ref="sectionAbout" :style="gsap ? 'opacity: 0;' : ''">
    <div class="about__href" id="about"></div>

    <div class="container">
      <div class="about__block">
        <div class="about__title title">
          <h2 ref="aboutTitle">About</h2>
        </div>

        <p class="about__text text">
          <span ref="aboutTextOne">
            During over 4 years of commercial experience as a freelancer, I have successfully completed more than 60 front-end projects with clients from all over the world.
          </span>

          <br><br>

          <span ref="aboutTextTwo">
            I am most focused on Vue and Nuxt development, as well as working on HTML, CSS and JavaScript projects. Here is the full set of technologies I am familiar with:
          </span>
        </p>
      </div>
    </div>

    <div class="about__inner">
      <div class="about__composition" ref="aboutArt">
        <AboutArt class="about__art" />

        <TailwindIcon class="about__icon icon-tailwind" />
        <ViteIcon class="about__icon icon-vite" />
        <GulpIcon class="about__icon icon-gulp" />
        <HtmlIcon class="about__icon icon-html" />
        <WebpackIcon class="about__icon icon-webpack" />
        <NuxtIcon class="about__icon icon-nuxt" />
        <YarnIcon class="about__icon icon-yarn" />
        <CssIcon class="about__icon icon-css" />
        <VueIcon class="about__icon icon-vue" />
        <BootstrapIcon class="about__icon icon-bootstrap" />
        <TSIcon class="about__icon icon-typescript" />
        <JSIcon class="about__icon icon-javascript" />
        <SassIcon class="about__icon icon-sass" />
        <NpmIcon class="about__icon icon-npm" />
        <GsapIcon class="about__icon icon-gsap" />
        <PiniaIcon class="about__icon icon-pinia" />
        <ParcelIcon class="about__icon icon-parcel" />
        <GitIcon class="about__icon icon-git" />
        <BemIcon class="about__icon icon-bem" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";

.about {
  text-align: center;

  &__href {
    position: absolute;
    top: -50px;
    left: 0;

    @media (max-width: $breakpoint992) {
      top: 0;
    }
  }

  .container {
    padding-bottom: 90px;

    @media (max-width: $breakpoint1680) {
      padding-bottom: 75px;
    }

    @media (max-width: $breakpoint1200) {
      padding-bottom: 55px;
    }

    @media (max-width: $breakpoint992) {
      padding-top: 30px;
    }

    @media (max-width: $breakpoint768) {
      padding-bottom: 42px;
    }
  }

  &__block {
    width: 100%;
    max-width: 1050px;
    margin: 0 auto;

    @media (max-width: $breakpoint1680) {
      max-width: 980px;
    }

    @media (max-width: $breakpoint1200) {
      max-width: 910px;
    }
  }

  &__inner {
    padding: 0 40px 120px;

    @media (max-width: $breakpoint1680) {
      padding: 0 40px 110px;
    }

    @media (max-width: $breakpoint1450) {
      padding: 0 40px 100px;
    }

    @media (max-width: $breakpoint992) {
      padding: 0 0 90px;
    }

    @media (max-width: $breakpoint768) {
      padding: 0 0 70px;
    }
  }

  &__composition {
    position: relative;
    width: 100%;
    max-width: 1264px;
    margin: 0 auto;

    @media (max-width: $breakpoint1680) {
      max-width: 1100px;
    }

    @media (max-width: $breakpoint992) {
      display: flex;
      justify-content: center;
    }
  }

  &__art {
    width: 100%;
    height: auto;
    opacity: 0.85;

    @media (max-width: $breakpoint992) {
      width: 1000px;
    }

    @media (max-width: $breakpoint768) {
      width: 800px;
    }

    @media (max-width: $breakpoint576) {
      width: 650px;
    }
  }

  &__icon {
    position: absolute;

    @media (max-width: $breakpoint1200) {
      transform: scale(0.85);
    }

    @media (max-width: $breakpoint768) {
      transform: scale(0.65);
    }

    @media (max-width: $breakpoint576) {
      transform: scale(0.55);
    }
  }

  .icon-tailwind {
    top: 11.5%;
    right: 28%;

    @media (max-width: $breakpoint992) {
      right: 23%;
    }

    @media (max-width: $breakpoint768) {
      top: 10%;
      right: 20%;
    }

    @media (max-width: $breakpoint576) {
      transform: scale(0.6);
      top: 6.5%;
      right: auto;
      left: 42%;
    }

    @media (max-width: $breakpoint420) {
      left: 40%;
    }
  }

  .icon-vite {
    top: 11%;
    left: 30%;

    @media (max-width: $breakpoint992) {
      top: 12%;
      left: 23%;
    }

    @media (max-width: $breakpoint768) {
      top: 11%;
      left: 19%;
    }

    @media (max-width: $breakpoint576) {
      top: 6%;
      left: 17%;
    }

    @media (max-width: $breakpoint420) {
      left: 12%;
    }
  }

  .icon-gulp {
    top: 18.5%;
    right: 16.5%;

    @media (max-width: $breakpoint992) {
      right: 11%;
    }

    @media (max-width: $breakpoint768) {
      top: 17%;
      right: auto;
      left: 84%;
    }

    @media (max-width: $breakpoint576) {
      top: 13%;
    }

    @media (max-width: $breakpoint420) {
      left: 85.5%;
    }
  }

  .icon-html {
    top: 23%;
    left: 33.5%;

    @media (max-width: $breakpoint992) {
      left: 32%;
    }

    @media (max-width: $breakpoint768) {
      top: 21%;
      left: 31%;
    }

    @media (max-width: $breakpoint576) {
      top: 15.5%;
      left: 25%;
    }

    @media (max-width: $breakpoint420) {
      transform: scale(0.5);
      top: 15%;
      left: 8%;
    }
  }

  .icon-webpack {
    top: 31%;
    left: 11%;

    @media (max-width: $breakpoint992) {
      left: 4%;
    }

    @media (max-width: $breakpoint768) {
      left: 2%;
    }

    @media (max-width: $breakpoint576) {
      transform: scale(0.6);
      left: -3%;
    }

    @media (max-width: $breakpoint420) {
      left: -5%;
    }
  }

  .icon-nuxt {
    top: 25.5%;
    left: 49%;

    @media (max-width: $breakpoint1200) {
      top: 24.5%;
      left: 47%;
    }

    @media (max-width: $breakpoint768) {
      left: 42%;
    }

    @media (max-width: $breakpoint576) {
      top: 22%;
      left: 32%;
      transform: scale(0.5);
    }

    @media (max-width: $breakpoint420) {
      top: 18%;
      left: 18%;
    }
  }

  .icon-yarn {
    top: 34%;
    right: 6%;

    @media (max-width: $breakpoint992) {
      right: 2%;
    }

    @media (max-width: $breakpoint768) {
      right: 0;
    }

    @media (max-width: $breakpoint576) {
      right: -4%;
    }

    @media (max-width: $breakpoint420) {
      transform: scale(0.5);
      top: 29%;
      right: -8%;
    }
  }

  .icon-css {
    top: 38%;
    right: 28%;

    @media (max-width: $breakpoint768) {
      right: 27%;
    }

    @media (max-width: $breakpoint576) {
      top: 43%;
      right: auto;
      left: 62%;
    }

    @media (max-width: $breakpoint420) {
      transform: scale(0.5);
      top: 28.5%;
      left: 45%;
    }
  }

  .icon-vue {
    top: 41.5%;
    left: 36%;

    @media (max-width: $breakpoint1200) {
      top: 39%;
      left: 35%;
    }

    @media (max-width: $breakpoint992) {
      left: 30%;
    }

    @media (max-width: $breakpoint768) {
      left: 27%;
    }

    @media (max-width: $breakpoint576) {
      top: 37%;
      left: 22%;
    }

    @media (max-width: $breakpoint420) {
      left: auto;
      top: 41%;
      right: -3%;
    }
  }

  .icon-bootstrap {
    top: 48%;
    left: 9.5%;

    @media (max-width: $breakpoint992) {
      top: 46.5%;
      left: 5%;
    }

    @media (max-width: $breakpoint576) {
      top: 42%;
      left: 2%;
    }

    @media (max-width: $breakpoint420) {
      top: 40.5%;
      left: 0;
    }
  }

  .icon-typescript {
    bottom: 40%;
    left: 29%;

    @media (max-width: $breakpoint420) {
      bottom: 41%;
    }
  }

  .icon-javascript {
    bottom: 38%;
    right: 31%;

    @media (max-width: $breakpoint1200) {
      right: 28%;
    }

    @media (max-width: $breakpoint576) {
      right: auto;
      left: 67%;
      bottom: 29%;
    }

    @media (max-width: $breakpoint420) {
      bottom: 25%;
      left: 65%;
    }
  }

  .icon-sass {
    bottom: 30.5%;
    left: 13.5%;

    @media (max-width: $breakpoint992) {
      left: 12%;
    }

    @media (max-width: $breakpoint576) {
      bottom: 25%;
      left: 3%;
    }

    @media (max-width: $breakpoint420) {
      bottom: 20%;
      left: 0;
    }
  }

  .icon-npm {
    right: 8%;
    bottom: 43%;

    @media (max-width: $breakpoint992) {
      right: 5%;
    }

    @media (max-width: $breakpoint576) {
      right: -1%;
      bottom: 44%;
    }

    @media (max-width: $breakpoint420) {
      bottom: 40%;
    }
  }

  .icon-gsap {
    bottom: 28.5%;
    left: 39%;

    @media (max-width: $breakpoint576) {
      transform: scale(0.6);
      bottom: 28%;
      left: 23%;
    }

    @media (max-width: $breakpoint420) {
      bottom: 29%;
      left: 13%;
    }
  }

  .icon-pinia {
    bottom: 16.5%;
    left: 24%;

    @media (max-width: $breakpoint992) {
      bottom: 15%;
      left: 23%;
    }

    @media (max-width: $breakpoint768) {
      left: 20%;
    }

    @media (max-width: $breakpoint576) {
      bottom: 10%;
      left: 12%;
    }

    @media (max-width: $breakpoint420) {
      bottom: 7%;
      left: 5%;
    }
  }

  .icon-parcel {
    bottom: 9%;
    left: 43%;

    @media (max-width: $breakpoint992) {
      bottom: 6%;
    }

    @media (max-width: $breakpoint420) {
      bottom: 5%;
    }
  }

  .icon-git {
    bottom: 20%;
    right: 28%;

    @media (max-width: $breakpoint992) {
      bottom: 17%;
    }

    @media (max-width: $breakpoint420) {
      right: 30%;
    }
  }

  .icon-bem {
    right: 12%;
    bottom: 24%;

    @media (max-width: $breakpoint992) {
      right: 10%;
    }

    @media (max-width: $breakpoint576) {
      right: 6%;
      bottom: 14%;
    }

    @media (max-width: $breakpoint420) {
      right: 3%;
      bottom: 13%;
    }
  }
}
</style>