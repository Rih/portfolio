<template>
    <div style="width:100%;">
      <div class="footer__container" style="">
        <div class="footer_item text-center">
          <p>Rodrigo - 2020™ </p>
          <p>+569 67618088</p>
        </div>
        <div class="footer_item text-center">
           <v-row  no-gutters>
             <v-col cols="12">
                <v-btn @click="downloadCV">{{ $t('cv') }}</v-btn>
             </v-col>
          
          </v-row>
        </div>
        <div class="footer_item text-center">
          <v-row no-gutters>
            <v-col cols="12">
            <a v-for="soc in social" :key="soc.index" :href="soc.link">
              <v-btn class="mx-2" fab color="gray">
              <v-tooltip class="mx-2" top>
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on">mdi-{{ soc.mdi }}</v-icon>
                  </template>
                  <span>{{ soc.description }}</span>
                </v-tooltip>
              </v-btn>
            </a>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'footer',
    data: () => ({
      pdfLink : {
       en: require('../assets/Resume_en_Rodrigo.pdf'),
       es: require('../assets/Resume_sp_Rodrigo.pdf'),
      },
      
      social: [
        {
          index: 1,
          name: 'linkedin',
          mdi: 'linkedin',
          description: 'Perfil Linkedin',
          link: 'https://www.linkedin.com/in/rodrigo-diaz-flores-37a5159b/',
        },
        
        
      ]
    }),
    methods:{
      downloadCV(){
        window.open(this.pdfLink[this.$i18n.locale])
      }
    },
  }
</script>

<style lang="sass" scoped>
.footer__container
  display: grid
  grid-template-columns: repeat(3, 1fr)
  flex-wrap: wrap
  @media (max-width: 540px)
    grid-template-columns: repeat(1, 1fr)
  
.footer_item
  align-self: center
</style>