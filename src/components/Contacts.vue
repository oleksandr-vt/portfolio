<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import debounce from "debounce"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { slideUp, fadeIn } from '../assets/js/animations'
import { animationPlaceholderPX } from '../assets/js/helpers'
import Upwork from './icons/contacts/Upwork.vue'
import Gmail from './icons/contacts/Gmail.vue'
import LinkedIn from './icons/contacts/LinkedIn.vue'
import Github from './icons/contacts/Github.vue'
import Resume from './icons/contacts/Resume.vue'
import UkraineFlag from './icons/UkraineFlag.vue'

const scrollTriggerRef = ref(null)
const sectionContacts = ref(null)

const contactsTitle = ref(null)
const contactsText = ref(null)
const [contactsLink1, contactsLink2, contactsLink3, contactsLink4, contactsLink5] = [ref(null), ref(null), ref(null), ref(null), ref(null)]
const contactsPeace = ref(null)

const timeline = ref(null)

const killScrollTrigger = () => {
  if (!scrollTriggerRef.value) return
  scrollTriggerRef.value.kill()
  scrollTriggerRef.value = null
}

const updateScrollTrigger = () => {
  killScrollTrigger()
  scrollTriggerRef.value = ScrollTrigger.create({
    trigger: sectionContacts.value,
    start: `top 70%-=${animationPlaceholderPX()}`,
    animation: timeline.value,
  })
}

const debouncedUpdateScrollTrigger = debounce(updateScrollTrigger, 100)

const handleButtonClick = (str) => {
  gtag('event', `contacts_${str}_button`)
}

onMounted(() => {
  const tlTitle = slideUp({ el: contactsTitle.value })
  const tlText = fadeIn({ el: contactsText.value })
  const tlLink1 = slideUp({ el: contactsLink1.value, y: '25%' })
  const tlLink2 = slideUp({ el: contactsLink2.value, y: '25%' })
  const tlLink3 = slideUp({ el: contactsLink3.value, y: '25%' })
  const tlLink4 = slideUp({ el: contactsLink4.value, y: '25%' })
  const tlLink5 = slideUp({ el: contactsLink5.value, y: '25%' })
  const tlPeace = fadeIn({ el: contactsPeace.value })

  timeline.value = gsap.timeline({ paused: true })
    .add(tlTitle, 0)
    .add(tlText, 0.3)
    .add(tlLink1, 0.5)
    .add(tlLink2, 0.6)
    .add(tlLink3, 0.7)
    .add(tlLink4, 0.8)
    .add(tlLink5, 0.95)
    .add(tlPeace, 1.1)

  updateScrollTrigger()
  window.addEventListener("resize", debouncedUpdateScrollTrigger)
})

onUnmounted(() => {
  window.removeEventListener("resize", debouncedUpdateScrollTrigger)
  killScrollTrigger()
})
</script>

<template>
  <section class="contacts section-padding" ref="sectionContacts">
    <div class="container">
      <div class="contacts__block">
        <div class="contacts__href" id="contacts"></div>

        <div class="contacts__title title">
          <h2 ref="contactsTitle">Contacts</h2>
        </div>

        <p class="contacts__text text" ref="contactsText">You can get in touch with me at:</p>

        <div class="contacts__grid">
          <a class="contacts__link text" ref="contactsLink1" @click="handleButtonClick('upwork')"
            href="https://www.upwork.com/freelancers/oleksandrvintoniak" target="_blank">
            <Upwork />
            Upwork
          </a>

          <a class="contacts__link text" ref="contactsLink2" @click="handleButtonClick('email')"
            href="mailto:vintoniakoleksandr12@gmail.com">
            <Gmail />
            Email
          </a>

          <a class="contacts__link text" ref="contactsLink3" @click="handleButtonClick('linkedin')"
            href="https://www.linkedin.com/in/oleksandr-vintoniak-091b23230/" target="_blank">
            <LinkedIn />
            LinkedIn
          </a>

          <a class="contacts__link text" ref="contactsLink4" @click="handleButtonClick('github')"
            href="https://github.com/oleksandr-vt" target="_blank">
            <Github />
            Github
          </a>
        </div>

        <a class="contacts__link contacts__link-resume text" ref="contactsLink5" @click="handleButtonClick('resume')"
          href="Oleksandr_Vintoniak.pdf" target="_blank" download>
          <Resume />
          Download PDF Resume
        </a>

        <div class="contacts__insert" ref="contactsPeace">
          <UkraineFlag />
          <span class="text">Peace.</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";

.contacts {
  text-align: center;

  .container {
    padding-bottom: 50px;

    @media (max-width: $breakpoint768) {
      padding-bottom: 30px;
    }
  }

  &__block {
    position: relative;
  }

  &__href {
    position: absolute;
    top: -50px;
    left: 0;

    @media (max-width: $breakpoint992) {
      top: -30px;
    }
  }

  &__text {
    font-weight: 500;
    margin-bottom: 80px;

    @media (max-width: $breakpoint1680) {
      margin-bottom: 60px;
    }

    @media (max-width: $breakpoint768) {
      margin-bottom: 40px;
    }

    @media (max-width: $breakpoint420) {
      margin-bottom: 35px;
    }
  }

  &__grid {
    width: 100%;
    max-width: 520px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;

    @media (max-width: $breakpoint1680) {
      max-width: 450px;
    }

    @media (max-width: $breakpoint1450) {
      max-width: 440px;
    }

    @media (max-width: $breakpoint1200) {
      max-width: 420px;
    }

    @media (max-width: $breakpoint992) {
      max-width: 410px;
    }

    @media (max-width: $breakpoint768) {
      max-width: 340px;
      gap: 30px;
    }

    @media (max-width: $breakpoint420) {
      place-items: center;
    }
  }

  &__link {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 30px;
    font-weight: 500;

    @media (max-width: $breakpoint1680) {
      gap: 25px;
    }

    @media (max-width: $breakpoint768) {
      gap: 20px;
    }

    @media (max-width: $breakpoint420) {
      flex-direction: column;
    }

    &:hover {
      text-decoration: underline;
    }

    svg {
      @media (max-width: $breakpoint1680) {
        width: 100%;
        max-width: 65px;
        height: auto;
      }

      @media (max-width: $breakpoint1450) {
        max-width: 60px;
      }

      @media (max-width: $breakpoint768) {
        max-width: 50px;
      }
    }

    &-resume {
      margin: 140px auto;

      @media (max-width: $breakpoint1680) {
        margin: 120px auto;
      }

      @media (max-width: $breakpoint768) {
        margin: 90px auto;
      }

      svg {
        @media (max-width: $breakpoint1680) {
          max-width: 55px;
        }

        @media (max-width: $breakpoint1450) {
          max-width: 50px;
        }

        @media (max-width: $breakpoint768) {
          max-width: 40px;
        }
      }
    }
  }

  &__insert {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media (max-width: $breakpoint1680) {
      gap: 25px;
    }

    @media (max-width: $breakpoint768) {
      gap: 20px;
    }

    svg {
      @media (max-width: $breakpoint1680) {
        width: 100%;
        max-width: 46px;
        height: auto;
      }

      @media (max-width: $breakpoint768) {
        max-width: 36px;
      }
    }
  }
}
</style>