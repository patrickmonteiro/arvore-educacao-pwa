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
        <q-img @click="toBook()" class="col-xs-5 col-sm-2 col-md-2 responsive" src="/epubs/49709315336.jpg" />
        <q-img @click="toBook()" class="col-xs-5 col-sm-2 col-md-2 responsive" src="/epubs/49709315346.jpg" />
      </div>
    </q-carousel-slide>

    <q-carousel-slide :name="2" class="column no-wrap">
      <div class="row fit justify-center items-center q-gutter-md no-wrap">
        <q-img @click="toBook()" class="col-xs-5 col-sm-2 col-md-2 responsive" src="/epubs/49709315446.jpg" />
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
    toBook () {
      this.$router.push('/epub-reader')
    }
  }
}
</script>
