<template>
  <main>
    <div class="cyriaque">
      <div class="section main-section">
        <div
          :class="{
            'section-bg': true,
            'video-bg': true,
            loaded: videoLoaded
          }"
        >
          <video :src="String(videoUrl)" autoplay loop muted @canplay="videoLoaded = true"></video>
        </div>
        <div class="section-content">
          <header>
            <h1>Cyriaque Delaunay</h1>
            <h2>{{ subtitle }}</h2>
          </header>
          <div class="links-container">
            <a
              v-for="(link, linkIndex) in links"
              :href="link.url"
              :key="linkIndex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="link"
                @mouseenter="subtitle = link.label"
                @mouseleave="subtitle = originalSubTitle"
              >
                <img :src="link.icon" :alt="link.label" />
              </div>
            </a>
          </div>

          <div :class="`bg-infos ${showBgLabel ? 'active' : ''}`">
            <span class="background-label">
              {{ bgLabel }} &nbsp;&nbsp;
              <b @click="updateVideoBackground()">[change]</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
interface link {
  label: string
  url: string
  icon: string
}

interface Background {
  name: string
  label: string
}

let currentBg = ref()

const backgrounds: Background[] = [
  {
    name: 'halo',
    label: 'Halo : The Master Chief Collection (2014)'
  },
  {
    name: 'dkc2',
    label: 'Donkey Kong Country 2 (1995)'
  },
  {
    name: 'skyrim',
    label: 'The Elder Scrolls V : Skyrim (2011)'
  },
  {
    name: 'ori',
    label: 'Ori and the blind forest (2015)'
  }
]

const links: link[] = [
  {
    url: 'https://github.com/Ciriak',
    icon: 'github.png',
    label: 'My Github'
  },
  {
    url: 'http://steamcommunity.com/id/Ciriak',
    icon: 'steam.png',
    label: 'My Steam account'
  },
  // {
  //   url: 'https://x.com/Ciriak_',
  //   icon: 'x.png',
  //   label: 'My X account'
  // },
  {
    url: 'https://www.linkedin.com/in/cyriaque-delaunay-833504121/',
    icon: 'linkedin.png',
    label: 'My LinkedIn'
  }
]

const originalSubTitle = 'Front-End Developer'

const subtitle = ref(originalSubTitle)
const videoUrl = ref('')
const bgLabel = ref('')
const showBgLabel = ref(true)
const videoLoaded = ref(false)

/**
 * Select a random video and return its url
 */
function getVideoBg() {
  const background = backgrounds[Math.floor(Math.random() * backgrounds.length)]
  return background
}

/**
 * Update the video background
 */
function updateVideoBackground() {
  const background = getVideoBg()
  if (background === currentBg.value) {
    updateVideoBackground()
    return
  }
  currentBg.value = background
  videoUrl.value = '/video-bg/' + background.name + '.mp4'
  bgLabel.value = background.label
}

onMounted(() => {
  updateVideoBackground()
})
</script>
