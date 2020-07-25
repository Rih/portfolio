<template>
  <v-container>
    <v-row class="text-center">
      <div class="about-me__container">
      <div  class="about-me__item mb-4">
          <v-avatar 
            class="profile"
            size="260"
          >
            <img class="aboutme__photo" :src="require('../assets/FotoRodrigo.jpg')" alt="yo">
          </v-avatar>
          <v-col class="py-0">
          <v-list-item
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">{{ $t('name') }}</v-list-item-title>
              <v-list-item-subtitle>{{ $t('profession') }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </div>
      <div  class="about-me__item text mb-4">
        <AboutMe />
      </div>
      </div>
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

    <v-row class="contact__container text-center">
      <v-col cols="12" class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
            {{ $t('profiles') }}
        </h1>
      </v-col>
      <v-col cols="6">
        <template>
          <v-card
            class="mx-auto"
            max-width="400"
            tile
          >
            <v-list-item >
              <v-list-item-content>
                <v-list-item-title>Repositorios</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-for="repo in repos" :key="repo.index"  two-line>
              <v-list-item-content>
                <v-list-item-title><a :href="repo.link"> {{ repo.name }}</a></v-list-item-title>
                <v-list-item-subtitle>{{ repo.description }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </template>
      </v-col>
      <v-col cols="6">
        <template>
          <v-card
            class="mx-auto"
            max-width="400"
            tile
          >
            <v-list-item >
              <v-list-item-content>
                <v-list-item-title>Competencia</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-for="soc in social" :key="soc.index"  two-line>
              <v-list-item-content>
                <v-list-item-title><a :href="soc.link"> {{ soc.name }}</a></v-list-item-title>
                <v-list-item-subtitle>{{ soc.description }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </template>
      </v-col>
    </v-row>
    <v-row class="contact__container text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
            {{ $t('contact') }}
        </h1>
      </v-col>
      <v-col cols="12">
          <v-btn class="contact__form_btn" @click="contactMe"> 
            <h1 class="display-2 font-weight-bold mb-3">{{ $t('keep_touch') }}</h1>
          </v-btn>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
  import Projects from '@/components/Projects.vue'
  import AboutMe from '@/components/AboutMe.vue'
  export default {
    name: 'portfolio',
    data(){
      return {
        textGeneral: {
          shaped: false,
          rounded: true,
          clearable: true,
          persistentHint: true,
          outlined: true,
        },
        email: {
          text: '',
          shaped: false,
          rounded: true,
          persistentHint: true,
          outlined: false,
        },
        contact:{
          es: 'https://docs.google.com/forms/d/e/1FAIpQLSftBHrsRtzs8eC3DoCRZqB44Mwrq4hVRtOrXq13yay40RLs1g/viewform?usp=sf_link',
          en: 'https://docs.google.com/forms/d/e/1FAIpQLSeKhANR-9fkwVOfJiml8lh8AHYhSiWNXMAOGwxqDtWpSnngwA/viewform?usp=sf_link'
        },
        repos: [
          {
            index: 2,
            name: 'github',
            mdi: 'github',
            description: 'Perfil github',
            link: 'https://www.github.com/Rih',
          },
          {
            index: 3,
            name: 'gitlab',
            mdi: 'gitlab',
            description: 'Perfil gitlab',
            link: 'https://gitlab.com/rodrihgo.sistematiza',
          },
          {
            index: 4,
            name: 'gitlab',
            mdi: 'gitlab',
            description: 'Perfil gitlab',
            link: 'https://gitlab.com/rodrihgo',
          },
          {
            index: 5,
            name: 'bitbucket',
            mdi: 'bitbucket',
            description: 'Perfil bitbucket',
            link: 'https://bitbucket.org/rodrihgod',
          }
        ],
        social: [
          {
            index: 1,
            name: 'hackerrank',
            description: 'Perfil Hackerrank',
            link: 'https://www.hackerrank.com/drigox90rih',
          },
          {
            index: 2,
            name: 'codewars',
            description: 'Perfil Codewars',
            link: 'https://www.codewars.com/users/Rih',
          },
          {
            index: 3,
            name: 'codersrank',
            description: 'Perfil Codersrank',
            link: 'https://profile.codersrank.io/user/rih',
          },
          {
            index: 5,
            name: 'stackoverflow español',
            description: 'Perfil Stackoverflow Español',
            link: 'https://es.stackoverflow.com/users/90099/rodrihgo',
          },
          {
            index: 6,
            name: 'stackoverflow',
            description: 'Perfil Stackoverflow',
            link: 'https://stackoverflow.com/users/6495833/rodrihgo',
          }
        ]
      }
    },
    methods:{
      contactMe(){
        console.log(this.$i18n.locale)
        window.open(this.contact[this.$i18n.locale])
      }
    },
    mounted(){
      
    },
    components: {
      Projects,
      AboutMe,
    }
  }
</script>


<style lang="sass" scoped>
.contact__container
  width: 100%
.contact__form_btn
  height: 6.5em!important

.about-me__container
  display: grid
  grid-template-columns: repeat(2, 1fr)
  flex-wrap: wrap
  @media (max-width: 768px)
    grid-template-columns: repeat(1, 1fr)
  
.about-me__item
  margin: 10px
  flex-direction: column
  align-items: flex-start
  align-self: center
  .text
    max-width: 80%
</style>