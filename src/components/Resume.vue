<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
            {{ $t('companies') }}
        </h1>
      </v-col>
      <v-col cols="12">
        <Companies />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
            {{ $t('studies') }}
        </h1>
      </v-col>
      <v-col cols="12">
        <Studies />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
            {{ $t('certifications') }}
        </h1>
      </v-col>
      <v-col class="mb-8">
        <v-btn @click="() => downloadCV('sp')">Español</v-btn>
        <v-btn @click="() => downloadCV('en')">English</v-btn>
      </v-col>
      <v-col class="mb-4" cols="12">
        <Certification />
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
  import Companies from '@/components/Companies.vue'
  import Studies from '@/components/Studies.vue'
  import Certification from '@/components/Certification.vue'
  export default {
    name: 'HelloWorld',

    data: () => ({
     pdfLink : {
       en: require('../assets/Resume_en_Rodrigo.pdf'),
       sp: require('../assets/Resume_sp_Rodrigo.pdf'),
     }
    }),
    methods:{
      downloadCV(lang){
        window.open(this.pdfLink[lang])
      }
    },
    components: {
      Companies,
      Studies,
      Certification,
    }
  }
</script>
