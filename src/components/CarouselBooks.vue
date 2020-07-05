<template>
  <q-carousel
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
      <div class="row fit justify-center items-center q-gutter-md no-wrap">
        <q-img @click="toBook(books[0].img, books[0].epub)" class="col-xs-5 col-sm-2 col-md-2 responsive" :src="books[0].img" />
        <q-img @click="toBook(books[1].img, books[1].epub)" class="col-xs-5 col-sm-2 col-md-2 responsive" :src="books[1].img" />
      </div>
    </q-carousel-slide>

    <q-carousel-slide :name="2" class="column no-wrap">
      <div class="row fit justify-center items-center q-gutter-md no-wrap">
        <q-img @click="toBook(books[2].img, books[2].epub)" class="col-xs-5 col-sm-2 col-md-2 responsive" :src="books[2].img" />
        <q-img @click="toBook(books[3].img, books[3].epub)" class="col-xs-5 col-sm-2 col-md-2 responsive" :src="books[3].img" />
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
</template>

<script>
const URL_EPUB = 'https://dental-college.s3.amazonaws.com'
export default {
  name: 'CarouselBooks',
  data () {
    return {
      slide: 1,
      books: [
        {
          img: `${URL_EPUB}/49709315336.jpg`,
          epub: `${URL_EPUB}/49709315336.epub`
        },
        {
          img: `${URL_EPUB}/49709315393.jpg`,
          epub: `${URL_EPUB}/49709315393.epub`
        },
        {
          img: `${URL_EPUB}/49709315356.jpg`,
          epub: `${URL_EPUB}/49709315356.epub`
        },
        {
          img: `${URL_EPUB}/49709315375.jpg`,
          epub: `${URL_EPUB}/49709315375.epub`
        }
      ]
    }
  },
  methods: {
    toBook (img, epub) {
      this.$router.push({ name: 'detalheLivro', params: { imgBook: img, urlBook: epub } })
    }
  }
}
</script>
