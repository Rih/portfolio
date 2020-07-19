<template>
    <div style="width:100%;background: red;">
      <div style="width:100%;display:flex; align-items: center; height:90px; position:fixed; bottom:0px">
        <v-col class="align-center">
          <a class="right" href="/">rodrigo - 2020</a>
        </v-col>
        <v-col class="align-center">
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
      </div>
    </div>
</template>

<script>
  export default {
    name: 'footer',
    data: () => ({
     social: [
       {
         index: 1,
         name: 'linkedin',
         mdi: 'linkedin',
         description: 'Perfil Linkedin',
         link: 'https://www.linkedin.com/in/rodrigo-diaz-flores-37a5159b/',
       },
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
     ]
    }),
  }
</script>
