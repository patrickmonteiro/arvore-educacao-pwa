<template>
  <q-page padding="">
    <div class="text-h4 text-center text-weight-bold text-grey-8">
      Livro premium
    </div>
    <div class="row justify-center">
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
      const urlBook = 'https://dental-college.s3.amazonaws.com/49709315336.epub'
      const offlineData = JSON.parse(localStorage.getItem('offline')) || { books: [] }

      this.$axios.get(urlBook, {
        responseType: 'arraybuffer'
      }).then(responseBook => {
        this.$axios.get(this.imgBook, {
          responseType: 'arraybuffer'
        }).then(responseImage => {
          if (!offlineData.books.find(book => book && book.bookUrl === urlBook)) {
            offlineData.books.push({
              bookUrl: urlBook,
              imageData: this.toBase64(responseImage.data)
            })
          }

          localStorage.setItem(`offline-book-${urlBook}`, this.toBase64(responseBook.data))
          localStorage.setItem('offline', JSON.stringify(offlineData))
        })
      })
    },
    lerLivro () {
      this.$router.push('/epub-reader')
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
