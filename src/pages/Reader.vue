<template>
  <q-page>
      <q-pdfviewer
        v-model="show"
        :src="src"
        type="html5"
        content-class="fit container"
      inner-content-class="fit container"
      />
  </q-page>
</template>

<script>
export default {
  name: 'Reader',
  data () {
    return {
      show: true,
      src: '/4870695114727.pdf'
    }
  },
  mounted () {
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
