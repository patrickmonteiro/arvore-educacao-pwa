<template>
  <q-page padding="">
    <div class="text-h5 text-center text-bold">
      Livro premium
    </div>
    <q-separator inset />
    <div class="row justify-center q-pt-lg">
      <div class="col-8">
         <q-img
          :src="imgBook"
          class="responsive float-right"
          spinner-color="white"
        />
      </div>
      <div class="col-12 q-pt-md">
        <q-btn
        icon="fas fa-coins"
        color="primary"
        label="Adquirir com moedas"
        class="full-width"
        :loading="loading"
        @click="livroAdquirido"
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
    livroAdquirido () {
      this.loading = true
      setTimeout(() => {
        this.$router.push({ name: 'sucessoLivroPremium' })
      }, 3000)
    }
  }
}
</script>
