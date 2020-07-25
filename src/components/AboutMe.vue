<template>
   <v-container>
    <div class="text-center">
      <h1 class="display-2 font-weight-bold mb-3">
          {{ $t('aboutme') }}
      </h1>
      <p style="text-align:justify; word-wrap: break-word;">
        {{ $t('aboutme_content') }}
      </p>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'aboutme',

    data: () => ({
      
    }),
  }
</script>
