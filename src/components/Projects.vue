<template>
  <v-container>
    <v-row class="text-center">
      <div class="project-item__container">
        <v-card
          class="mx-auto project__item-box"
          v-for="project in projects"
          :key="project.index"
          cols="12"
        >
          <a :href="project.link">
            <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
          </a>
          <v-divider></v-divider>
          <v-row no-gutters>
            <v-col cols="12">
              <h3 class="project__item-box_title">{{ project.name }}</h3>
              <div class="project__item-box_project">
                <a v-if="project.link" :href="project.link">
                  <v-tooltip class="mx-2" top>
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on">mdi-link-variant</v-icon>
                    </template>
                    <span>Revisar</span>
                  </v-tooltip>
                </a>
              </div>
            </v-col>
            <v-col cols="12">
              <a :href="project.company_link">
                <span class="project__item-box_company">{{ project.company }} - {{ project.company_location }}</span>
              </a>
            </v-col>
          </v-row>
          <v-card-text>
            <p class="project__item-box_description">{{ project.description }}</p>
          </v-card-text>
          <v-divider class="mx-2"></v-divider>
          <v-card-text>
            <v-col cols="10">
              <v-chip class="mr-4" outlined v-for="(tech, t) in project.techs" :key="t">{{ tech }}</v-chip>
            </v-col>
          </v-card-text>
        </v-card>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "projects",
  methods: {
    getMessage(key) {
      return this.$i18n.t(key);
    }
  },
  data: () => {
    return {
      projects: [
        {
          index: 1,
          name: 'PWA Inventario',
          company: 'Sistematiza SpA',
          company_location: 'Valdivia, Chile',
          description: 'Sistema de análisis e inventario en terreno para rodales y parcelas',
          link: 'http://xstock.sistematiza.cl',
          company_link: 'http://www.sistematiza.cl',
          techs: ['VueJS', 'Django', 'docker']
        },
        {
          index: 2,
          name: 'Visor de Mapas',
          company: 'Sistematiza SpA',
          company_location: 'Valdivia, Chile',
          description: 'Plataforma publicación de sitios de mapas sobre estándar geoserver',
          link: 'http://visualizador.sistematiza.cl',
          company_link: 'http://www.sistematiza.cl',
          techs: ['VueJS', 'Django', 'docker']
        },
        {
          index: 3,
          name: 'TecnoTracker',
          company: 'Newdev SpA',
          company_location: 'Valdivia, Chile',
          description: 'POC de tracking y alerta infectados covid',
          link: 'http://www.newdev.cl',
          company_link: 'http://www.newdev.cl',
          techs: ['react-native', 'Android', "Django"]
        },
        {
          index: 4,
          name: "Marketplace Ultrabox",
          company: "Ultrabox SA",
          company_location: 'Bogotá, Colombia',
          description: "Desarrollo y mantenimiento plataforma marketplace de importación de productos a colombia",
          link: "http://www.ultrabox.com",
          company_link: 'http://www.ultrabox.com/principal/marketplace',
          techs: ["ReactJS", "chatbot", "Django"]
        },
        {
          index: 5,
          name: "Módulo Gestión de Alimentos",
          company: "Servicio Salud Valdivia",
          company_location: 'Valdivia, Chile',
          description: "Módulo de entrega de alimentos, del sector macro sur",
          link: "https://www.rasvaldivia.cl/rasvaldivia/index.php",
          company_link: 'http://www.ssvaldivia.cl',
          techs: ["JQuery", "PHP Codeigniter", "oracle"]
        },
        {
          index: 6,
          name: "Módulo Historial Clinico Electrónico",
          company: "Servicio Salud Valdivia",
          company_location: 'Valdivia, Chile',
          description: "Módulo de historial de antecedentes clínicos de pacientes",
          link: "https://www.rasvaldivia.cl/rasvaldivia/index.php",
          company_link: 'http://www.ssvaldivia.cl',
          techs: ["JQuery", "PHP Codeigniter", "Oracle"]
        },
        {
          index: 7,
          name: "Plataforma ClassroomTV",
          company: "ClassroomTV SpA",
          company_location: 'Santiago, Chile',
          description: "Desarrollo y mantenimiento plataforma e-learning de capacitación",
          link: "https://www.classroomtv.com",
          company_link: 'https://www.classroomtv.com',
          techs: ["BackboneJS", "PHP Yii", "MySQL"]
        },
        {
          index: 8,
          name: "Sistema de Pagos Masivos",
          company: "Itau - Corpbanca",
          company_location: 'Santiago, Chile',
          description: "Desarrollo de backoffice de Pagos masivos de nóminas",
          link: '#',
          company_link: '#',
          techs: ["JQuery", ".NET", "C#", "SQLServer"]
        },
      ]
    };
  },
  
};
</script>

<style lang="sass" scoped>
.project__item-container
  display: flex
  flex-wrap: wrap

.project-item__container
  display: flex
  justify-content: space-between
  flex-wrap: wrap


.project__item-box
  margin: 10px
  width: 400px
  height: 490px
  align-items: stretch
  align-self: center

.project__item-box_title
  text-align: center
  margin-top:5px
  font-size: 18px

.project__item-box_project
  position: relative
  top: -25px
  right: -180px
.project__item-box_company
  position: relative
  top: -20px
  text-align: justify
  font-size: 10px
.project__item-box_description
  position: relative
  top: -20px
  text-align: justify
</style>