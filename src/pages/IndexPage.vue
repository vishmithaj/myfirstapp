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
      <q-carousel-slide
        :name="1"
        img-src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/466580916_122147476940311374_6848501145376280298_n.png?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=2285d6&_nc_ohc=I0AJxcjGq6wQ7kNvgHygdX7&_nc_oc=Adgj_0EdLGVda8PCadARrykPmhhOaUVE_gSqIC44K44GaJ8dje_GjE3-w9t6LfCnwW8&_nc_zt=23&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=AkrL7x6N9RlCMZuEUeBmHdk&oh=00_AYCVm4_788gCKCy__AeFSHoA8w5uisG-d8auHSQGorNJ2g&oe=67ABDEF5"
      />
    </q-carousel>
  </div>
  <h4>Hi guys! Welcome to <strong>SL TECH RAVI</strong> App.</h4>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    }
  },
}
</script>
