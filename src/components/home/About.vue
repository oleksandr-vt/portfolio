<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import debounce from "debounce"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { slideUp, fadeIn, staggerIn } from '../../assets/js/animations'
import ReactIcon from '../icons/skills/ReactIcon.vue'
import NextIcon from '../icons/skills/NextIcon.vue'
import TanStackIcon from '../icons/skills/TanStackIcon.vue'
import ShadcnIcon from '../icons/skills/ShadcnIcon.vue'
import VueIcon from '../icons/skills/VueIcon.vue'
import NuxtIcon from '../icons/skills/NuxtIcon.vue'
import PiniaIcon from '../icons/skills/PiniaIcon.vue'
import I18nIcon from '../icons/skills/I18nIcon.vue'
import TSIcon from '../icons/skills/TSIcon.vue'
import JSIcon from '../icons/skills/JSIcon.vue'
import HtmlIcon from '../icons/skills/HtmlIcon.vue'
import CssIcon from '../icons/skills/CssIcon.vue'
import SassIcon from '../icons/skills/SassIcon.vue'
import TailwindIcon from '../icons/skills/TailwindIcon.vue'
import NodeIcon from '../icons/skills/NodeIcon.vue'
import SupabaseIcon from '../icons/skills/SupabaseIcon.vue'
import PostgresIcon from '../icons/skills/PostgresIcon.vue'
import VercelIcon from '../icons/skills/VercelIcon.vue'
import CloudflareIcon from '../icons/skills/CloudflareIcon.vue'
import VitestIcon from '../icons/skills/VitestIcon.vue'
import PlaywrightIcon from '../icons/skills/PlaywrightIcon.vue'
import ViteIcon from '../icons/skills/ViteIcon.vue'
import GitIcon from '../icons/skills/GitIcon.vue'
import FigmaIcon from '../icons/skills/FigmaIcon.vue'
import ClaudeIcon from '../icons/skills/ClaudeIcon.vue'
import CodexIcon from '../icons/skills/CodexIcon.vue'
import CursorIcon from '../icons/skills/CursorIcon.vue'
import CopilotIcon from '../icons/skills/CopilotIcon.vue'
import VscodeIcon from '../icons/skills/VscodeIcon.vue'

const stats = [
  { num: '70+', label: 'Projects delivered' },
  { num: '5+', label: 'Years freelancing' },
  { num: 'React/Vue', label: 'Core stack' },
]

const clusters = [
  {
    title: 'React Ecosystem',
    text: 'Next.js apps with server-side rendering, Zustand and TanStack Query for state and data, and shadcn/ui interfaces.',
    skills: [
      { key: 'react', name: 'React', icon: ReactIcon },
      { key: 'next', name: 'Next.js', icon: NextIcon },
      { key: 'tanstack', name: 'TanStack', icon: TanStackIcon },
      { key: 'shadcn', name: 'shadcn/ui', icon: ShadcnIcon },
    ],
  },
  {
    title: 'Vue Ecosystem',
    text: 'Production Vue & Nuxt apps (SPA, SSR, static) with Pinia state and localized content.',
    skills: [
      { key: 'vue', name: 'Vue.js', icon: VueIcon },
      { key: 'nuxt', name: 'Nuxt.js', icon: NuxtIcon },
      { key: 'pinia', name: 'Pinia', icon: PiniaIcon },
      { key: 'i18n', name: 'i18n', icon: I18nIcon },
    ],
  },
  {
    title: 'Languages & Styling',
    text: 'Typed, standards-first code and pixel-perfect, responsive, cross-browser layouts.',
    skills: [
      { key: 'typescript', name: 'TypeScript', icon: TSIcon },
      { key: 'javascript', name: 'JavaScript', icon: JSIcon },
      { key: 'html', name: 'HTML5', icon: HtmlIcon },
      { key: 'css', name: 'CSS3', icon: CssIcon },
      { key: 'sass', name: 'Sass', icon: SassIcon },
      { key: 'tailwind', name: 'Tailwind', icon: TailwindIcon },
    ],
  },
  {
    title: 'Backend & Deploy',
    text: 'Server-side Next.js and Node, Supabase and Postgres for data, deploys on Vercel or Cloudflare.',
    skills: [
      { key: 'node', name: 'Node.js', icon: NodeIcon },
      { key: 'supabase', name: 'Supabase', icon: SupabaseIcon },
      { key: 'postgres', name: 'PostgreSQL', icon: PostgresIcon },
      { key: 'vercel', name: 'Vercel', icon: VercelIcon },
      { key: 'cloudflare', name: 'Cloudflare', icon: CloudflareIcon },
    ],
  },
  {
    title: 'Testing & Tooling',
    text: 'From Figma handoff to production: fast Vite builds, unit and end-to-end tests, clean Git history.',
    skills: [
      { key: 'vitest', name: 'Vitest', icon: VitestIcon },
      { key: 'playwright', name: 'Playwright', icon: PlaywrightIcon },
      { key: 'vite', name: 'Vite', icon: ViteIcon },
      { key: 'git', name: 'Git', icon: GitIcon },
      { key: 'figma', name: 'Figma', icon: FigmaIcon },
    ],
  },
  {
    title: 'AI-Powered Workflow',
    text: 'AI agents and editors I work with every day. They speed up the routine; I own the architecture and review every line.',
    skills: [
      { key: 'claude', name: 'Claude', icon: ClaudeIcon },
      { key: 'codex', name: 'Codex', icon: CodexIcon },
      { key: 'cursor', name: 'Cursor', icon: CursorIcon },
      { key: 'copilot', name: 'Copilot', icon: CopilotIcon },
      { key: 'vscode', name: 'VS Code', icon: VscodeIcon },
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
    .add(tlStats, 0.50)
    .add(tlClusters, 1.04)

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
          I'm Oleksandr Vintoniak, a front-end developer working in both the <b>React / Next.js</b> and <b>Vue / Nuxt</b> ecosystems, with 5+ years of freelance experience and 70+ projects delivered for clients across the US, Europe, and beyond.
        </p>

        <p class="about__text text">
          My focus is building front-ends the right way the first time — pixel-precise, performant, and easy to hand off. Whether it's a Next.js product, a complex Nuxt app, or an MVP on a deadline, I take it from Figma to a tested, live deploy, and the code stays clean long after launch.
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
                <component :is="skill.icon" aria-hidden="true" />
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
    max-width: 915px;
    margin: 0 auto;

    @media (max-width: $breakpoint1680) {
      max-width: 845px;
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
    gap: 26px;
    margin-top: 56px;

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
      font-size: 38px;
      font-weight: 700;
      line-height: 1;
      color: $color-aqua;

      @media (max-width: $breakpoint1450) {
        font-size: 36px;
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
    gap: 26px;
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
    padding: 30px;
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
      font-size: 28px;
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

      &--sass {
        height: 36px;
        margin-top: 2px;
      }

      &--tailwind {
        height: 30px;
        margin-top: 5px;
      }

      &--vercel {
        height: 32px;
        margin-top: 4px;
      }

      &--cloudflare {
        height: 28px;
        margin-top: 6px;
      }

      &--i18n {
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
