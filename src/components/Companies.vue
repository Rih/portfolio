<template>
  <v-container>
    <v-row class="text-center">
      <div class="project-item__container">
        <v-card
          class="mx-auto project__item-box"
          cols="12"
        >
          
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
          description: 'Sistema de análisis e inventario en terreno para rodales y parcelas',
          link: 'http://www.sistematiza.cl',
          company_link: 'http://www.sistematiza.cl',
          techs: ['vuejs', 'django']
        },
        {
          index: 2,
          name: 'Visor de Mapas',
          company: 'Newdev SpA',
          description: '',
          link: 'http://www.sistematiza.cl',
          company_link: 'http://www.sistematiza.cl',
          techs: ['reactjs', 'android', 'django']
        },
        {
          index: 3,
          name: 'Newdev SpA',
          company: 'Sistematiza SpA',
          description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quisquam nesciunt placeat eos itaque voluptates provident ratione, dolore odio, eum sunt nobis velit adipisci praesentium dignissimos rerum unde illum iusto!',
          link: 'http://www.sistematiza.cl',
          company_link: 'http://www.sistematiza.cl',
          techs: ['reactjs', 'android', "django"]
        },
        {
          index: 4,
          name: "Newdev SpA",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quisquam nesciunt placeat eos itaque voluptates provident ratione, dolore odio, eum sunt nobis velit adipisci praesentium dignissimos rerum unde illum iusto!",
          link: "http://www.sistematiza.cl",
          techs: ["reactjs", "android", "django"]
        },
        {
          index: 5,
          name: "Newdev SpA",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quisquam nesciunt placeat eos itaque voluptates provident ratione, dolore odio, eum sunt nobis velit adipisci praesentium dignissimos rerum unde illum iusto!",
          link: "http://www.sistematiza.cl",
          techs: ["reactjs", "android", "django"]
        },
        {
          index: 6,
          name: "Newdev SpA",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quisquam nesciunt placeat eos itaque voluptates provident ratione, dolore odio, eum sunt nobis velit adipisci praesentium dignissimos rerum unde illum iusto!",
          link: "http://www.sistematiza.cl",
          techs: ["reactjs", "android", "django"]
        },
        {
          index: 7,
          name: "Newdev SpA",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quisquam nesciunt placeat eos itaque voluptates provident ratione, dolore odio, eum sunt nobis velit adipisci praesentium dignissimos rerum unde illum iusto!",
          link: "http://www.sistematiza.cl",
          techs: ["reactjs", "android", "django"]
        }
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
.project__item-box_project
  position: relative
  top: -10px
  right: -180px
.project__item-box_company
  position: relative
  top: -10px
  text-align: justify
  font-size: 10px
.project__item-box_description
  position: relative
  top: -20px
  text-align: justify
</style>