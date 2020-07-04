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
        <q-img @click="toBookPremium('/epubs/lotr.jpg')" class="col-xs-5 col-sm-2 col-md-2 responsive" src="/epubs/lotr.jpg" />
        <q-img @click="toBookPremium('/epubs/hp.jpg')" class="col-xs-5 col-sm-2 col-md-2 responsive" src="/epubs/hp.jpg" />
      </div>
    </q-carousel-slide>

    <q-carousel-slide :name="2" class="column no-wrap">
      <div class="row fit justify-center items-center q-gutter-md no-wrap">
        <q-img @click="toBookPremium('/epubs/pj.jpg')" class="col-xs-5 col-sm-2 col-md-2 responsive" src="/epubs/pj.jpg" />
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
  data () {
    return {
      slide: 1
    }
  },
  methods: {
    toBookPremium (img) {
      this.$router.push({ name: 'detalheLivroPremium', params: { imgBook: img } })
    }
  }
}
</script>
