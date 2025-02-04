<!-- eslint-disable no-unused-vars -->
<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/466461222_122147476844311374_535345381802440037_n.png?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=8Y3AEKeC9JwQ7kNvgEggd_A&_nc_oc=Adig1-krmza43KwTvciBSPi8ZwC2K1X9CmK31Ukm2hZBcIRt2xS6ZN1isxQciqIm1Po&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AMDY2J_MyoLGqbHWgc_e1xs&oh=00_AYAgkaMISm0yVcOT9B4W0WoZ3TOjAR3V_2YfqFPxUYCa1Q&oe=67A7E006" />

    </q-carousel>
  </div>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      slide: ref(1),
    }
  }
})

</script>
