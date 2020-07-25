<template>
  <v-app style="width:100vw!important">
    <div style="overflow-y:auto;">
    <v-app-bar  color="green darken-1" dark>
      <Header />
    </v-app-bar>
    <v-main  id="content__main" >
      <router-view></router-view>
    </v-main>
     <v-divider></v-divider>
    <v-footer >
      <Footer />
    </v-footer>
    </div>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: "App",
  data: () => ({
  }),
  methods: {
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="sass" scoped>
html, body, #content__main, #content__route
  width: 100%
  height: 100%
  margin: 0
  padding: 0
</style>