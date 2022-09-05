<template>
<div>
  
      <div 
      v-for="photo in photos" :key="photo.id"
        >
      
      
        <v-card>
      <!-- <v-card color="grey darken-4" class="white--text"> -->
            <v-card-title primary-title>
                <div>
      <p class="text-h5 text-blue">{{ photo.title}}</p></div>
    </v-card-title> 
    
   

    <ModalFotos 
    :photo="photo" />
    
    
  </v-card>
 <v-divider>

  </v-divider>
  
 
</div>
</div>

 
  
</template>

<script>
import ModalFotos from '../components/modals/modalFotos.vue';
export default {
    data: () => ({
        show: false,
    }),
    async asyncData({ $axios }) {
        const photos = await $axios.$get("https://jsonplaceholder.typicode.com/photos?_limit=10");
        return {
            photos,
        };  
    },
    components: { ModalFotos }
}
</script>

<style>

</style>