<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import debounce from "debounce"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { slideUp, fadeIn, staggerIn } from '../../assets/js/animations'
import { animationPlaceholderPX } from '../../assets/js/helpers'
import TailwindIcon from '../icons/skills/TailwindIcon.vue'
import ViteIcon from '../icons/skills/ViteIcon.vue'
import HtmlIcon from '../icons/skills/HtmlIcon.vue'
import WebpackIcon from '../icons/skills/WebpackIcon.vue'
import NuxtIcon from '../icons/skills/NuxtIcon.vue'
import I18nIcon from '../icons/skills/I18nIcon.vue'
import CssIcon from '../icons/skills/CssIcon.vue'
import VueIcon from '../icons/skills/VueIcon.vue'
import BootstrapIcon from '../icons/skills/BootstrapIcon.vue'
import TSIcon from '../icons/skills/TSIcon.vue'
import JSIcon from '../icons/skills/JSIcon.vue'
import SassIcon from '../icons/skills/SassIcon.vue'
import NpmIcon from '../icons/skills/NpmIcon.vue'
import PiniaIcon from '../icons/skills/PiniaIcon.vue'
import GitIcon from '../icons/skills/GitIcon.vue'
import BemIcon from '../icons/skills/BemIcon.vue'
import FigmaIcon from '../icons/skills/FigmaIcon.vue'
import ClaudeIcon from '../icons/skills/ClaudeIcon.vue'
import CodexIcon from '../icons/skills/CodexIcon.vue'
import CursorIcon from '../icons/skills/CursorIcon.vue'
import VscodeIcon from '../icons/skills/VscodeIcon.vue'
import CopilotIcon from '../icons/skills/CopilotIcon.vue'

const stats = [
  { num: '70+', label: 'Projects delivered' },
  { num: '5+', label: 'Years freelancing' },
  { num: 'Vue / Nuxt', label: 'Core stack' },
]

const clusters = [
  {
    title: 'Core Frontend',
    text: 'Vue & Nuxt applications — SPA, SSR, static — with typed, state-managed, localized code.',
    skills: [
      { key: 'vue', name: 'Vue.js', icon: VueIcon },
      { key: 'nuxt', name: 'Nuxt.js', icon: NuxtIcon },
      { key: 'javascript', name: 'JavaScript', icon: JSIcon },
      { key: 'typescript', name: 'TypeScript', icon: TSIcon },
      { key: 'pinia', name: 'Pinia', icon: PiniaIcon },
      { key: 'i18n', name: 'i18n', icon: I18nIcon },
    ],
  },
  {
    title: 'Markup & Styling',
    text: 'Pixel-perfect, responsive, cross-browser builds with a methodical structure.',
    skills: [
      { key: 'html', name: 'HTML5', icon: HtmlIcon },
      { key: 'css', name: 'CSS3', icon: CssIcon },
      { key: 'sass', name: 'Sass', icon: SassIcon },
      { key: 'tailwind', name: 'Tailwind', icon: TailwindIcon },
      { key: 'bootstrap', name: 'Bootstrap', icon: BootstrapIcon },
      { key: 'bem', name: 'BEM', icon: BemIcon },
    ],
  },
  {
    title: 'AI-Powered Workflow',
    text: 'The editors and AI copilots I build with every day — to move fast and stay precise.',
    skills: [
      { key: 'claude', name: 'Claude', icon: ClaudeIcon },
      { key: 'codex', name: 'Codex', icon: CodexIcon },
      { key: 'vscode', name: 'VS Code', icon: VscodeIcon },
      { key: 'cursor', name: 'Cursor', icon: CursorIcon },
      { key: 'copilot', name: 'Copilot', icon: CopilotIcon },
    ],
  },
  {
    title: 'Build & Tooling',
    text: 'Design-to-code, fast bundling, and reliable version control.',
    skills: [
      { key: 'figma', name: 'Figma', icon: FigmaIcon },
      { key: 'vite', name: 'Vite', icon: ViteIcon },
      { key: 'webpack', name: 'Webpack', icon: WebpackIcon },
      { key: 'npm', name: 'npm', icon: NpmIcon },
      { key: 'git', name: 'Git', icon: GitIcon },
    ],
  },
]

const scrollTriggerRef = ref(null)
const sectionAbout = ref(null)

const aboutTitle = ref(null)
const aboutIntro = ref(null)
const statRefs = ref(null)
const clusterRefs = ref(null)

const timeline = ref(null)

const killScrollTrigger = () => {
  if (!scrollTriggerRef.value) return
  scrollTriggerRef.value.kill()
  scrollTriggerRef.value = null
}

const updateScrollTrigger = () => {
  killScrollTrigger()
  scrollTriggerRef.value = ScrollTrigger.create({
    trigger: sectionAbout.value,
    start: `top 70%`,
    animation: timeline.value,
  })
}

const debouncedUpdateScrollTrigger = debounce(updateScrollTrigger, 100)

onMounted(() => {
  const tlTitle = slideUp({ el: aboutTitle.value })
  const tlIntro = fadeIn({ el: aboutIntro.value })
  const tlStats = statRefs.value.map((el, index) => staggerIn({ el, index }))
  const tlClusters = clusterRefs.value.map((el, index) => staggerIn({ el, index }))

  timeline.value = gsap.timeline({ paused: true })
    .add(tlTitle, 0)
    .add(tlIntro, 0.25)
    .add(tlStats, 0.55)
    .add(tlClusters, 0.7)

  updateScrollTrigger()
  window.addEventListener("resize", debouncedUpdateScrollTrigger)
})

onUnmounted(() => {
  window.removeEventListener("resize", debouncedUpdateScrollTrigger)
  killScrollTrigger()
})
</script>

<template>
  <section class="about section-padding" ref="sectionAbout">
    <div class="about__href" id="about"></div>

    <div class="container">
      <div class="about__title title">
        <h2 ref="aboutTitle">About</h2>
      </div>

      <div class="about__intro" ref="aboutIntro">
        <p class="about__text text">
          I'm a <b>Vue.js</b> &amp; <b>Nuxt.js</b> specialist with over 5 years of commercial freelance
          experience and 70+ projects delivered for clients across the US, Europe, and beyond.
        </p>

        <p class="about__text text">
          My focus is building front-ends the right way the first time — pixel-precise, performant,
          and easy to hand off. From complex Nuxt apps to real-time dashboards and MVPs, I bring the
          same care to clean architecture and maintainable code.
        </p>
      </div>

      <div class="about__stats">
        <div class="about__stat" v-for="(stat, index) in stats" :key="index" ref="statRefs">
          <span class="about__stat-num">{{ stat.num }}</span>
          <span class="about__stat-label">{{ stat.label }}</span>
        </div>
      </div>

      <div class="about__clusters">
        <div class="about__cluster" v-for="(cluster, index) in clusters" :key="index" ref="clusterRefs">
          <h3 class="about__cluster-title">{{ cluster.title }}</h3>
          <p class="about__cluster-text">{{ cluster.text }}</p>

          <div class="about__skills">
            <div class="about__skill" v-for="skill in cluster.skills" :key="skill.key">
              <div class="about__skill-icon" :class="`about__skill-icon--${skill.key}`">
                <component :is="skill.icon" />
              </div>
              <span class="about__skill-label">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/css/variables.scss" as *;

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

  &__intro {
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

  &__text {
    &:not(:last-child) {
      margin-bottom: 24px;

      @media (max-width: $breakpoint768) {
        margin-bottom: 18px;
      }
    }

    b {
      font-weight: 700;
      color: $color-aqua;
    }
  }

  // Stats row
  &__stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 70px;

    @media (max-width: $breakpoint1450) {
      gap: 24px;
    }

    @media (max-width: $breakpoint1200) {
      margin-top: 55px;
    }

    @media (max-width: $breakpoint768) {
      gap: 16px;
      margin-top: 45px;
    }

    @media (max-width: $breakpoint576) {
      grid-template-columns: 1fr;
    }
  }

  &__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 28px 20px;
    border: 2px solid $color-aqua;
    background: $color-primary-hover;
    box-shadow: $shadow-md;

    @media (max-width: $breakpoint768) {
      padding: 20px 16px;
      box-shadow: $shadow-sm;
    }

    &-num {
      font-size: 46px;
      font-weight: 700;
      line-height: 1;
      color: $color-aqua;

      @media (max-width: $breakpoint1450) {
        font-size: 40px;
      }

      @media (max-width: $breakpoint1200) {
        font-size: 34px;
      }

      @media (max-width: $breakpoint768) {
        font-size: 30px;
      }
    }

    &-label {
      font-size: 20px;
      font-weight: 500;

      @media (max-width: $breakpoint1200) {
        font-size: 18px;
      }

      @media (max-width: $breakpoint768) {
        font-size: 16px;
      }
    }
  }

  // Skill clusters
  &__clusters {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 30px;

    @media (max-width: $breakpoint1450) {
      gap: 24px;
    }

    @media (max-width: $breakpoint768) {
      grid-template-columns: 1fr;
      gap: 16px;
      margin-top: 24px;
    }
  }

  &__cluster {
    display: flex;
    flex-direction: column;
    padding: 36px;
    text-align: left;
    border: 2px solid $color-aqua;
    background: $color-primary-hover;
    box-shadow: $shadow-md;

    @media (max-width: $breakpoint1450) {
      padding: 30px;
    }

    @media (max-width: $breakpoint768) {
      padding: 24px;
      box-shadow: $shadow-sm;
    }

    @media (max-width: $breakpoint576) {
      padding: 20px;
    }

    &-title {
      font-size: 32px;
      font-weight: 700;
      line-height: 1.1;

      @media (max-width: $breakpoint1200) {
        font-size: 28px;
      }

      @media (max-width: $breakpoint768) {
        font-size: 26px;
      }
    }

    &-text {
      margin-top: 12px;
      font-size: 19px;
      font-weight: 500;
      line-height: 1.35;
      color: rgba($color-white, 0.75);

      @media (max-width: $breakpoint1200) {
        font-size: 17px;
      }

      @media (max-width: $breakpoint768) {
        font-size: 16px;
      }
    }
  }

  &__skills {
    display: flex;
    flex-wrap: wrap;
    gap: 24px 30px;
    margin-top: auto;
    padding-top: 32px;

    @media (max-width: $breakpoint1450) {
      gap: 24px;
    }

    @media (max-width: $breakpoint768) {
      gap: 20px 24px;
      padding-top: 26px;
    }
  }

  &__skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 74px;
    height: 68px;
    transition: transform 0.25s ease;

    @media (max-width: $breakpoint768) {
      width: 64px;
      height: 64px;
      gap: 8px;
    }

    &:hover {
      transform: translateY(-3px);
    }

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;

      @media (max-width: $breakpoint768) {
        scale: 0.85;
      }

      :deep(svg) {
        width: auto;
        max-width: 100%;
        height: 100%;
      }

      &--sass,
      &--bem {
        height: 36px;
        margin-top: 2px;
      }

      &--tailwind {
        height: 30px;
        margin-top: 5px;
      }

      &--i18n,
      &--npm {
        height: 26px;
        margin-top: 7px;
      }
    }

    &-label {
      font-size: 15px;
      font-weight: 500;
      line-height: 1.2;
      text-align: center;
      color: rgba($color-white, 0.8);

      @media (max-width: $breakpoint768) {
        font-size: 13px;
      }
    }
  }
}
</style>
