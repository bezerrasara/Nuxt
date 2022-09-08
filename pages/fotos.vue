<template>
<div>
  <div class="grey lighten-5"
  >
  <v-col cols="12" sm="12">
      <v-row>
        <v-col cols="4" sm="3">
          <v-select
            v-model="perPage"
            :items="pageSizes"
            label="Items per Page"
            @change="handlePageSizeChange"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="9">
     <v-pagination
      v-model="page"
      :length="totalPaginas()"
      >
  </v-pagination>
</v-col>
      </v-row>
    </v-col>
  {{ visiblePages }}
  </div>
  <v-container fluid class="grey lighten-5"        
        >
        <v-row dense>
      <v-col
      v-for="photo in dadosPaginados" 
      :key="photo.id"
    
      cols="12">
        
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <v-card-title primary-title>
    <div>
      <p class="text-h5 text-blue">
        {{ photo.title}}
      </p>
    </div>
        
    </v-card-title> 

    <ModalFotos 
    :photo="photo" />
  </v-card>
  </v-col>
  
    </v-row>
  
 <v-divider>

  </v-divider>
  
 
</v-container>
</div>

 
  
</template>

<script>
import ModalFotos from '../components/modals/modalFotos.vue';
export default {
  components: { ModalFotos },
    data: () => ({
      page: 1,
      dadosPaginados: [], 
      perPage: 50, 
      pageSizes: [1,2,3,4,5,6,7,8,9,10],
      
    }),
    
    async asyncData({ $axios }) {
        const photos = await $axios.$get("https://jsonplaceholder.typicode.com/photos?_limit=500");
        return {
            photos,
        };  
    },
    computed: {
    visiblePages () {
      this.dadosPaginados = this.photos.slice((this.page * this.perPage)-this.perPage, this.page* this.perPage)
    }
  },
  
   methods: {
    totalPaginas(){
      
      return Math.ceil(this.photos.length / this.perPage)
    
    }, 
    handlePageSizeChange(size) {
      this.perPage = size;
      this.page = 1;
      this.visiblePages;
    },
  }
    
}
</script>

<style>

</style>