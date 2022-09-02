<template>
<div>
      <div 
      v-for="photo in photos" :key="photo.id"
        >
      
      
      <v-card
      max-width="800"
    class="mx-auto"
  >
     <!-- <v-img
      src={{photo.url}}
      height="200px"
    ></v-img>  -->

    <v-card-title>
       {{ photo.title}}
    </v-card-title>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ photo.thumbnailUrl}}
        </v-card-text>
        
      </div>
    </v-expand-transition>
  </v-card>
</div>
</div>

 
  
</template>

<script>
export default {
  data: () => ({
      show: false,
    }),



    async asyncData ({$axios}){

const photos = await $axios.$get('https://jsonplaceholder.typicode.com/photos?_limit=10')
  return { 
    photos,
  }
},

}
</script>

<style>

</style>