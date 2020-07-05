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
      type: String
    }
  },
  data () {
    return {
      show: false,
      book: {},
      rendition: {},
      chapter: '',
      toc: [],
      progressValue: 0,
      countPage: 0
    }
  },
  mounted () {
    console.log(this.epubUrl)
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
      this.setCountPage()
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
    },
    setCountPage () {
      if (this.countPage < 5) {
        this.countPage++
      } else {
        this.countPage = 0
        this.setQuestions()
      }
    },
    setQuestions () {
      this.$q.dialog({
        title: 'Pergunta do Capítulo',
        message: 'Do que trata o primeiro capitulo do livro?',
        options: {
          type: 'radio',
          model: 'opt1',
          // inline: true
          items: [
            { label: 'Baleias', value: 'opt1' },
            { label: 'Sentimentos', value: 'opt2' },
            { label: 'Árvores', value: 'opt3' }
          ]
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        this.setPoints()
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
    setPoints () {
      this.$q.notify({
        message: 'Pontos creditados na carteira',
        color: 'green',
        icon: 'fas fa-coins'
      })
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
