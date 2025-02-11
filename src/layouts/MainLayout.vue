<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          SL TECH RAVI
        </q-toolbar-title>

        <div>version 1.0</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Navigation
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [

{
    title: 'Tiktok',
    caption: 'Follow us',
    icon: 'tiktok',
    link: 'https://tiktok.com/@sltechravi'
  },
  {
    title: 'Youtube',
    caption: 'Subscribe us',
    icon: 'web',
    link: 'https://youtube.com/@sltechravi'
  },
  {
    title: 'Facebook',
    caption: 'Like us',
    icon: 'facebook',
    link: 'https://facebook.com/sltechravi'
  },
  {
    title: 'About',
    caption: 'About us',
    icon: 'info',
    link: '/AboutPage'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
