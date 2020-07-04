<template>
  <q-page padding="">
    <div class="text-h5 text-center text-weight-bold text-grey-8 q-py-lg">
      Uau! Agora você adquiriu um livro premium para sua biblioteca.
    </div>
    <div class="row justify-center">
      <div class="col-8">
         <q-img
          src="book_lover.svg"
          class="responsive float-right"
          spinner-color="white"
        />
      </div>
      <div class="col-12 q-pt-md">
        <q-btn
        color="primary"
        label="Minha Biblioteca"
        class="full-width"
        @click="dashboard"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'SucessoLivroPremium',
  methods: {
    dashboard () {
      this.$router.push('/dashboard')
    }
  }
}
</script>
