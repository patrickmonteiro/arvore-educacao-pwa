<template>
  <q-page>
    <div id="epub-render"></div>
    <q-btn @click="anterior()">
      <q-icon name="arrow_left" />
      Anterior
    </q-btn>
    <q-btn @click="proximo()">
      Próximo
      <q-icon name="arrow_right" />
    </q-btn>
  </q-page>
</template>

<script>
import ePub from 'epubjs'
export default {
  name: 'EpubReader',
  props: {
    epubUrl: {
      required: false,
      type: String,
      default: 'https://dental-college.s3.amazonaws.com/49709315336.epub'
    }
  },
  data () {
    return {
      show: true,
      src: '/4870695114727.pdf',
      book: {},
      rendition: {}
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    this.book = ePub(this.epubUrl)
    // eslint-disable-next-line no-undef
    this.rendition = this.book.renderTo('epub-render')
    this.rendition.display()
  },
  methods: {
    proximo () {
      this.rendition.next()
    },
    anterior () {
      this.rendition.prev()
    }
  }
}
</script>

<style>
.container {
  max-width: 100%;
  max-height: 70%;
  min-width: 400px;
  min-height: 800px;
  width: 100%;
  height: 100%;
}
</style>
