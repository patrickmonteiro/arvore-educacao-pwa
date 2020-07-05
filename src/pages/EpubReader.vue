<template>
  <q-page>
    <div class="row" v-if="show">
      <div class="col-12 q-pa-sm">
        <q-select
          filled
          v-model="chapter"
          :options="toc"
          label="Sumário"
          dense
          option-value="href"
          option-label="label"
          option-disable="inactive"
          emit-value
          map-options
          @input="goToExcerpt"
        />
      </div>
    </div>
    <div id="epub-render"></div>
    <div class="row q-gutter-md q-px-sm" v-if="show">
      <q-btn
        @click="anterior()"
        icon="arrow_left"
        label="Anterior"
        class="col"
        dense
      />
      <q-btn
        @click="proximo()"
        icon-right="arrow_right"
        label="Próximo"
        class="col"
        dense
      />
    </div>
    <q-inner-loading :showing="!show">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
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
      show: false,
      src: '/4870695114727.pdf',
      book: {},
      rendition: {},
      chapter: '',
      toc: [],
      progressValue: 0
    }
  },
  mounted () {
    const offlineData = JSON.parse(localStorage.getItem('offline')) || { books: [] }
    const hasOfflineBook = offlineData.books.find(book => book && book.bookUrl === this.epubUrl)
    this.book = ePub(hasOfflineBook ? this.getOfflineBook(this.epubUrl) : this.epubUrl)

    this.book.loaded.navigation.then(({ toc }) => {
      this.toc = toc
    })
    this.book.ready.then(() => {
      this.show = true
    })

    this.rendition = this.book.renderTo('epub-render', {
      height: '75vh'
    })
    this.rendition.display()
  },
  methods: {
    getOfflineBook (url) {
      const bookBufferBase64 = localStorage.getItem(`offline-book-${url}`)
      return Uint8Array.from(atob(bookBufferBase64), c => c.charCodeAt(0)).buffer
    },
    proximo () {
      this.rendition.next()
    },
    anterior () {
      this.rendition.prev()
    },
    goToExcerpt () {
      console.log(this.chapter)
      if (this.chapter.toLowerCase().indexOf('xhtml') > 0) {
        this.rendition.display(this.chapter)
      } else {
        this.rendition.display('epubcfi(' + this.chapter + ')')
        this.rendition.annotations.highlight('epubcfi(' + this.chapter + ')')
      }
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
