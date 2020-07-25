<template>
  <v-app >
    <v-app-bar app color="green darken-1" dark>
      <Header />
    </v-app-bar>
    <v-content app>
      <router-view></router-view>
    </v-content>
     <v-divider></v-divider>
    <v-footer app>
      <Footer />
    </v-footer>
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
