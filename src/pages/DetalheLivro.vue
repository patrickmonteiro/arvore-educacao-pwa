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
        @click="lerLivro"
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
