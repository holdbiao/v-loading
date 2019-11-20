<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <button @click="show">show loading</button>
    <!-- <button>close</button> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'vue loading component'
    }
  },
  created () {
    // console.log(this.$Loading.show())
  },
  methods: {
    show () {
      this.$Loading.show({text: '提示文字'})
      setTimeout(_ => {
        this.close()
      }, 3000)
    },
    close () {
      this.$Loading.close()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
