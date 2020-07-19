<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
            {{ $t('aboutme') }}
        </h1>
      </v-col>
      <v-col cols="12">
        <AboutMe />
      </v-col>
      
    </v-row>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
            {{ $t('projects') }}
        </h1>
      </v-col>
      <v-col cols="12">
        <Projects />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Projects from '@/components/Projects.vue'
  import AboutMe from '@/components/AboutMe.vue'
  export default {
    name: 'portfolio',
    components: {
      Projects,
      AboutMe,
    }
  }
</script>
