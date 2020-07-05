<template>
  <q-page class="flex">
    <div class="flex column full-width">
      <p class="text-h5 text-bold q-pt-md q-pl-sm">Biblioteca Offline</p>
      <q-separator inset />
      <carousel-books-offline/>
    </div>

    <div class="flex column full-width">
      <p class="text-h5 text-bold q-pa-sm">Biblioteca</p>
      <q-separator inset />
      <carousel-books/>
    </div>

    <div class="flex column full-width q-pb-md">
      <span class="title flex">
        <p class="text-h5 text-bold q-pl-sm">
          Prateleira Premium
          <q-icon size="sm" name="star" color="yellow"></q-icon>
        </p>
      </span>
      <div class="subtitle flex">
        <p class="text-grey q-ml-sm">Tenha acesso a prateleira premium acumulando pontos no ranking.
          Pontos faltantes: 350
        </p>
      </div>
      <q-separator inset />
        <carousel-books-premium
          :disable="true"
        />
    </div>
  </q-page>
</template>

<script>
import CarouselBooksPremium from 'components/CarouselBooksPremium'
import CarouselBooks from 'components/CarouselBooks'
import CarouselBooksOffline from 'components/CarouselBooksOffline'
export default {
  name: 'PageIndex',
  components: {
    CarouselBooks,
    CarouselBooksPremium,
    CarouselBooksOffline
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
