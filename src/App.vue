<template>
  <div id="app">
    <button @click="insertError">Add Error</button>
  </div>
</template>

<script>
import store from './store'

export default {
  name: 'app',
  methods: {
    insertError () {
      store.dispatch('addError', new Error('An error'))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
