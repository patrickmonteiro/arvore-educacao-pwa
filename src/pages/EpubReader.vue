<template>
  <q-page>
    <div id="epub-render"></div>
  </q-page>
</template>

<script>
export default {
  name: 'EpubReader',
  props: {
    epubUrl: {
      required: false,
      type: String,
      // default: '/49709315336.epub'
      default: 'https://s3.amazonaws.com/moby-dick/OPS/fonts/STIXGeneral.otf'
    }
  },
  data () {
    return {
      show: true,
      src: '/4870695114727.pdf'
    }
  },
  created () {
    // eslint-disable-next-line no-undef
    const book = ePub(this.epubUrl)
    const rendition = book.renderTo('epub-render', { flow: 'paginated', height: '100%' })
    rendition.display()
    // eslint-disable-next-line no-undef
    console.log(book)
  },
  methods: {
    fetchPDF (payload) {
      this.$axios.post('/my/url/to/pdf', payload, { responseType: 'blob' }).then(res => {
        // create the blob
        const blob = new Blob([res.data], { type: res.data.type })
        // set reactive variable
        this.src = window.URL.createObjectURL(blob)
      }).catch(err => {
        console.log(err)
        this.$q.notify({
          message: 'Error downloading PDF',
          type: 'negative',
          textColor: 'white',
          color: 'negative',
          icon: 'error',
          closeBtn: 'close',
          position: 'top'
        })
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
