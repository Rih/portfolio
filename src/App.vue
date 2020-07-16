<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h3>Desarrollador.</h3>
      </div>

      <v-spacer></v-spacer>

      <v-switch v-model="language" @change="setLanguage" :label="$t('lang')"></v-switch>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    language: true
  }),
  methods: {
    setLanguage(event) {
      const newLocale = event ? "en" : "es";
      this.$locale.change(newLocale);
    }
  }
};
</script>
