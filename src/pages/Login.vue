<template>
  <q-page class="flex flex-row flex-center column">
    <div class="q-pa-md">
      <div class="column q-mb-xl">
        <img
          alt="Árvore educação"
          src="/logo_arvore_educacao.svg"
        >
      </div>
    </div>
    <div class="q-pa-md full-width">
      <div class="column q-mt-md">
        <q-input outlined label="Insira seu login" />
      </div>
      <div class="column q-mt-md">
        <q-btn color="primary" label="Avançar" @click="irPara()"/>
      </div>
    </div>
    <div class="flex flex-center">
      <a class="text-primary q-mr-xl" href="/">Esqueci como entrar</a>
      <a class="text-primary" href="/">Primeiro acesso?</a>
    </div>
    <div class="separator q-pr-sm q-pl-sm">
      <div class="separator-style">
        <div class="border-before"></div>
        <p class="text-separator q-mt-md">ou</p>
        <div class="border-after"></div>
      </div>
    </div>
    <div class="q-pa-md">
      <q-btn class="q-mr-xl btn-fixed-width" no-caps color="primary" outline>
        <img src="~assets/icon-google.svg" />
        <div class="q-ml-sm text-center">
          Google
        </div>
      </q-btn>
      <q-btn class="btn-fixed-width" no-caps color="primary" outline>
        <img src="~assets/icon-microsoft.svg" />
        <div class="q-ml-sm text-center">
          Microsoft
        </div>
      </q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageLogin',
  methods: {
    irPara () {
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>

<style>
.separator {
  width: 100vw;
}

.separator-style {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.border-before {
  width: 45%;
  height: 1px;
  left: 0px;
  background: rgb(223, 226, 231) none repeat scroll 0% 0%;
  position: absolute;
}

.text-separator {
  text-align: center;
  color: rgb(87, 89, 91);
  font-weight: bold;
  font-size: 13px;
}

.border-after {
  width: 45%;
  height: 1px;
  right: 0px;
  background: rgb(223, 226, 231) none repeat scroll 0% 0%;
  position: absolute;
}

.btn-fixed-width{
  width: 150px
}
</style>
