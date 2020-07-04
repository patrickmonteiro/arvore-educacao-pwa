<template>
  <q-page class="flex">
    <div class="flex column full-width">
      <h4 class="text-bold q-ml-sm">Biblioteca Offline</h4>
      <q-separator inset />
      <carousel-books
      />
    </div>
    <div class="flex column full-width">
      <span class="title flex">
        <h4 class="text-bold q-ml-sm">Prateleira Premium
          <q-icon size="sm" name="star" color="yellow"></q-icon>
        </h4>
      </span>
      <div class="subtitle flex">
        <p class="text-grey q-ml-sm">Tenha acesso a prateleira premium acumulando pontos no ranking.
          Pontos faltantes: 350
        </p>
      </div>
      <q-separator inset />
      <!-- <q-carousel
        v-model="slide"
        disabled
        swipeable
        animated
        arrows
        height="230px"
        class="text-white"
      >
        <q-carousel-slide name="style" class="row justify-start items-center q-gutter-xs no-wrap">
          <q-img disabled class="rounded-borders col-4 full-height" src="/epubs/49709315336.jpg" />
          <q-img disabled class="rounded-borders col-4 full-height" src="/epubs/49709315336.jpg" />
          <q-img disabled class="rounded-borders col-4 full-height" src="/epubs/49709315336.jpg" />
        </q-carousel-slide>
      </q-carousel> -->
    </div>
  </q-page>
</template>

<script>
import CarouselBooks from 'components/CarouselBooks'
export default {
  name: 'PageIndex',
  components: {
    CarouselBooks
  },
  data () {
    return {
      padding: true,
      vertical: false,
      arrows: true,
      navigation: false,

      navPos: 'bottom',
      navigationPositions: [
        { value: 'top', label: 'top' },
        { value: 'right', label: 'right' },
        { value: 'bottom', label: 'bottom (default)' },
        { value: 'left', label: 'left' }
      ],
      slide: 1,
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  },
  methods: {
    toBook () {
      alert('teste')
    }
  }
}
</script>

<style scoped>
.title {
  margin: 0;
}

h4 {
  margin-top: 8px;
  margin-bottom: 0;
  margin-right: 0;
  margin-left: 8px;
}
</style>
