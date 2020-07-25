<template>
  <v-container>
    <v-row class="text-center">
      <div class="company-item__container">
        <v-card
          class="mx-auto company-item__box"
          cols="12"
        >
          <v-card-title>
            <v-col>Ingeniero de Software</v-col>
            <v-col>marzo 2020 - julio 2020</v-col> 
          </v-card-title>
          <v-card-subtitle>
            <v-col>Sistematiza SpA</v-col>
          </v-card-subtitle>
          <v-card-text>
            Sistematiza SpA
          </v-card-text>
          <v-card-actions>
            Sistematiza SpA
          </v-card-actions>
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

.company-item__container
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  flex-flow: column wrap
  width: 100%

.company-item__box
  width: 100%
  align-self: flex-start
</style>