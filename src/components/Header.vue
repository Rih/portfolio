<template>
  <div class="header-container">
    <div class="header-container__item align-center">
      <router-link
        to="/" exact
      >
        <v-btn class="action-icon mx-2" fab small color="gray">
          <h3>{{ $t('resume') }}</h3>
        </v-btn>
      </router-link>
      
    </div>

    <v-spacer></v-spacer>
    <router-link
        to="/es/resume" exact
      >
        <v-btn class="action-icon mx-2" fab small color="gray">
          Resume
        </v-btn>
      </router-link>
    <v-spacer></v-spacer>
    <div class="header-container__item pull-right" >
      <v-switch color="green" v-model="language" @change="setLanguage" :label="$t('lang')"></v-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  data: () => ({
    language: true
  }),
  methods: {
    setLanguage(event) {
      const newLocale = event ? "es" : "en";
      this.$locale.change(newLocale);
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
    width: 120px

</style>
