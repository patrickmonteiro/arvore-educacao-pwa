<template>
<div>
  <q-carousel
    v-if="listBooksOffline.length > 0"
    v-model="slide"
    ref="carousel"
    transition-prev="slide-right"
    transition-next="slide-left"
    swipeable
    animated
    infinite
    height="270px"
    class="bg-grey-1"
  >
    <q-carousel-slide :name="1" class="column no-wrap">
      <div class="row fit justify-center items-center q-gutter-md no-wrap" v-for="(book, index) in listBooksOffline" :key="index">
        <q-img
          @click="toBook('/epubs/49709315336.jpg')"
          class="col-xs-5 col-sm-2 col-md-2 responsive"
          :src="`data:image/jpeg;base64,${book.imageData}`" />
        <!-- <q-img @click="toBook('/epubs/49709315346.jpg')" class="col-xs-5 col-sm-2 col-md-2 responsive" src="/epubs/49709315346.jpg" /> -->
      </div>
    </q-carousel-slide>

    <template v-slot:control>
      <q-carousel-control
        position="bottom-right"
        :offset="[15, 4]"
        class="q-gutter-xs"
      >
        <q-btn
          push round dense color="secondary" text-color="white" icon="arrow_left"
          @click="$refs.carousel.previous()"
        />
        <q-btn
          push round dense color="secondary" text-color="white" icon="arrow_right"
          @click="$refs.carousel.next()"
        />
      </q-carousel-control>
    </template>
  </q-carousel>
  <div v-else class="text-center">
    Você ainda não possui livros salvos.
  </div>
</div>
</template>

<script>
export default {
  name: 'CarouselBooks',
  data () {
    return {
      slide: 1,
      listBooksOffline: []
    }
  },
  mounted () {
    this.setOfflineBooks()
  },
  methods: {
    setOfflineBooks () {
      const offlineData = JSON.parse(localStorage.getItem('offline')) || { books: [] }
      this.listBooksOffline = offlineData.books
      console.log(this.listBooksOffline.length > 0)
      // this.book = ePub(hasOfflineBook ? this.getOfflineBook(this.epubUrl) : this.epubUrl)
    },
    toBook (img) {
      this.$router.push({ name: 'detalheLivro', params: { imgBook: img } })
    }
  }
}
</script>
