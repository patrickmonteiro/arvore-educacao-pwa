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
        <q-img
        :class="disable ? 'disable-book' : ''"
        class="col-xs-5 col-sm-2 col-md-2 responsive"
        :src="books[0].img"
        @click="toBookPremium(books[0].img)"
        />
        <div>
          <q-img
          :class="disable ? 'disable-book' : ''"
          class="col-xs-5 col-sm-2 col-md-2 responsive"
          :src="books[1].img"
          @click="toBookPremium(books[1].img)"
          />
          <q-btn
          class="text-white bg-primary q-mt-xs"
          size="xs"
          rounded
          push
          label="Iniciar Realidade Aumentada"
          @click="routeModify()"/>
        </div>
      </div>
    </q-carousel-slide>

    <q-carousel-slide :name="2" class="column no-wrap">
      <div class="row fit justify-center items-center q-gutter-md no-wrap">
        <q-img
          :class="disable ? 'disable-book' : ''"
          class="col-xs-5 col-sm-2 col-md-2 responsive"
          :src="books[2].img"
          @click="toBookPremium(books[2].img)"
        />
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
export default {
  name: 'CarouselBooks',
  props: {
    disable: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data () {
    return {
      slide: 1,
      books: [
        {
          img: '/epubs/lotr.jpg'
        },
        {
          img: '/epubs/hp.jpg'
        },
        {
          img: '/epubs/pj.jpg'
        }
      ]
    }
  },
  methods: {
    toBookPremium (img) {
      if (this.disable) {
        this.$q.notify({
          message: 'Acumule moedas para trocar pelo livro premium!',
          color: 'purple',
          icon: 'fas fa-coins'
        })
      } else {
        this.$router.push({ name: 'detalheLivroPremium', params: { imgBook: img } })
        this.routeModify()
      }
    },
    routeModify () {
      this.$router.push({ name: 'sucessoPremiumAr' })
    }
  }
}
</script>

<style scoped>
.disable-book {
  opacity: 0.5;
}
</style>
