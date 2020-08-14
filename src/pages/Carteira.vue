<template>
  <q-page padding>
    <div class="text-h5 text-center text-weight-bold">
      Carteira
    </div>
    <q-separator inset />
    <div class="row q-pt-md justify-center items-center">
      <q-card
        class="my-card text-white col-xs-12 col-sm-6 col-md-4 bg-card-wallet"
      >
        <q-card-section class="row justify-center items-center">
          <div class="col-9">
            <div class="text-h6">
              Você possui <strong>400</strong> moedas em sua carteira</div>
            <!-- <div class="text-subtitle2">As moedas podem ser utilizadas para adquirir livros da prateleira premium</div> -->
          </div>
          <div class="col-3">
            <q-img
              src="coin.png"
              class="responsive float-right"
              spinner-color="white"
              ratio="1"
            />
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
        </q-card-section>
      </q-card>
    </div>
    <div class="row q-mt-md" v-if="banner">
      <q-banner dense inline-actions class="bg-orange-5 text-white col-12 rounded-borders">
        Acumulando 500 moedas você poderá trocar por um livro da prateleira premium!
        <template v-slot:action>
          <q-btn flat dense icon="close" @click="banner = false" />
        </template>
      </q-banner>
    </div>
    <div class="row q-pt-sm">
      <div class="col-12">
        <div class="text-h5 text-center text-weight-bold">
          Livros Premium
        </div>
        <q-separator inset />
        <carousel-books-premium />
      </div>
    </div>
  </q-page>
</template>

<script>
import CarouselBooksPremium from 'components/CarouselBooksPremium'
export default {
  name: 'Carteira',
  components: {
    CarouselBooksPremium
  },
  data () {
    return {
      banner: true
    }
  }
}
</script>

<style scoped>
.bg-card-wallet {
  background: #B27AFF;
}
</style>
