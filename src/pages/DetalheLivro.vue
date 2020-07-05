<template>
  <q-page padding="">
    <div class="text-h5 text-center text-weight-bold">
      Detalhes sobre o livro
    </div>
    <q-separator inset />
    <div class="row justify-center q-pt-md">
      <div class="col-8">
         <q-img
          :src="imgBook"
          class="responsive float-right"
          spinner-color="white"
        />
      </div>
      <div class="col-12 q-pt-md">
        <q-btn
        icon-right="share"
        color="secondary"
        label="Compartilhar Via"
        class="full-width"
        :loading="loading"
        @click="show()"
        />
      </div>
      <div class="col-12 q-pt-md">
        <q-btn
        color="primary"
        label="Ler Agora"
        class="full-width"
        :loading="loading"
        @click="lerLivro"
        />
      </div>
      <div class="col-12 q-pt-md">
        <q-btn
        color="primary"
        icon-right="cloud_download"
        outline
        label="Baixar para biblioteca offline"
        class="full-width"
        :loading="loading"
        @click="baixarLivro"
        />
      </div>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'DetalheLivroPreium',
  props: {
    imgBook: {
      required: true,
      type: String
    },
    urlBook: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    toBase64 (arrayBuffer) {
      return btoa(new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), ''))
    },
    baixarLivro () {
      // const urlBook = 'https://dental-college.s3.amazonaws.com/49709315336.epub'
      const offlineData = JSON.parse(localStorage.getItem('offline')) || { books: [] }

      this.$axios.get(this.urlBook, {
        responseType: 'arraybuffer'
      }).then(responseBook => {
        this.$axios.get(this.imgBook, {
          responseType: 'arraybuffer'
        }).then(responseImage => {
          if (!offlineData.books.find(book => book && book.bookUrl === this.urlBook)) {
            offlineData.books.push({
              bookUrl: this.urlBook,
              imageData: this.toBase64(responseImage.data)
            })
          }

          localStorage.setItem(`offline-book-${this.urlBook}`, this.toBase64(responseBook.data))
          localStorage.setItem('offline', JSON.stringify(offlineData))
          this.$q.notify({
            message: 'Livro salvo com sucesso',
            color: 'secondary'
          })
        })
      })
    },
    lerLivro () {
      this.$router.push({ name: 'epubReader', params: { epubUrl: this.urlBook } })
      // this.$router.push({ name: 'detalheLivro', params: { imgBook: img, urlBook: epub } })
    },
    show (grid) {
      this.$q.bottomSheet({
        message: 'Compartilhar Via',
        grid,
        actions: [
          {},
          {
            label: 'Bluetooth',
            icon: 'bluetooth',
            color: 'blue',
            id: 'share'
          },
          {
            label: 'WhatsApp',
            icon: 'fab fa-whatsapp',
            color: 'green',
            id: 'upload'
          }
        ]
      }).onOk(action => {
        // console.log('Action chosen:', action.id)
      }).onCancel(() => {
        // console.log('Dismissed')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}
</script>
