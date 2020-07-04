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
      default: 'https://dental-college.s3.amazonaws.com/49709315336.epub'
    }
  },
  data () {
    return {
      show: true,
      src: '/4870695114727.pdf'
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    const book = ePub('https://dental-college.s3.amazonaws.com/49709315336.epub')
    const rendition = book.renderTo('epub-render', { flow: 'paginated', height: '100%' })
    rendition.display()
    // eslint-disable-next-line no-undef
    console.log(book)
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
