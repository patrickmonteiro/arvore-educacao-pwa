<template>
  <q-page padding="">
    <div class="text-h5 text-center text-weight-bold text-grey-8 q-py-lg">
      Que legal! Você ganhou moedas respondendo corretamente!
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
        label="Acessar minha carteira"
        class="full-width"
        @click="carteira"
        />
      </div>
      <div class="col-12 q-pt-md">
        <q-btn
        color="primary"
        label="Acontinuar Leitura"
        class="full-width"
        @click="continuar"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'CreditosCapitulo',
  methods: {
    carteira () {
      this.$router.push('/carteira')
    },
    continuar () {
      console.log('continuar')
    }
  }
}
</script>
