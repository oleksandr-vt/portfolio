<script setup>
import Upwork from './icons/contacts/Upwork.vue'
import Gmail from './icons/contacts/Gmail.vue'
import LinkedIn from './icons/contacts/LinkedIn.vue'
import Github from './icons/contacts/Github.vue'
import Resume from './icons/contacts/Resume.vue'
import UkraineFlag from './icons/UkraineFlag.vue'
</script>

<template>
  <section class="contacts section-padding">
    <div class="container">
      <h2 class="contacts__title title">Contacts</h2>
      <p class="contacts__text text">You can get in touch with me at:</p>

      <div class="contacts__grid">
        <a class="contacts__link text" href="https://www.upwork.com/freelancers/oleksandrvintoniak" target="_blank">
          <Upwork />
          Upwork
        </a>

        <a class="contacts__link text" href="mailto:vintoniakoleksandr12@gmail.com">
          <Gmail />
          Email
        </a>

        <a class="contacts__link text" href="https://www.linkedin.com/in/oleksandr-vintoniak-091b23230/" target="_blank">
          <LinkedIn />
          LinkedIn
        </a>

        <a class="contacts__link text" href="https://github.com/oleksandr-vt" target="_blank">
          <Github />
          Github
        </a>
      </div>

      <a class="contacts__link contacts__link-resume text" href="Oleksandr_Vintoniak.pdf" target="_blank" download>
        <Resume />
        Download PDF Resume
      </a>

      <div class="contacts__insert">
        <UkraineFlag />
        <span class="text">Peace.</span>
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