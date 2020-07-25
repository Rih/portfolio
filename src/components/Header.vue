<template>
  <div class="header-container">
    <div class="header-container__item align-center">
      <router-link to="/" exact>
        <v-icon>mdi-menu</v-icon>
      </router-link>
    </div>
    <v-spacer></v-spacer>
    <div class="header-container__item align-center">
    
      
    </div>
    <div class="header-container__item pull-right">
      <v-switch color="green" v-model="darkMode" @change="setDark" :label="$t('dark')"></v-switch>
    </div>
    <div class="header-container__item pull-right">
      <v-switch color="green" v-model="language" @change="setLanguage" :label="$t('lang')"></v-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  data: () => ({
    language: true,
    darkMode: true
  }),
  methods: {
    setLanguage(event) {
      const newLocale = event ? "es" : "en"
      this.$locale.change(newLocale)
    },
    setDark(event) {
      this.$vuetify.theme.dark = event
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.header-container
  display: flex
  align-self: space-between
  align-items: center
  justify-content: flex-start
  width: 100%
.header-container__menu
  display:flex
  justify-content: flex-start
  flex-direction: column

.header-container__menu-item
  background: red
  align-self: center

.header-container__item
  flex-direction: column
  align-self: space-between
  margin-right: 20px
</style>
