<template>
    <div> 
      <div class="text-center"
  >

     <v-pagination
      v-model="page"
      :length="totalPaginas()"
      total-visible="10"
      >
        <li
       v-for="(p, index) in paginatedData()" 
      :key="index">
    
    
    </li>  
    
        
  </v-pagination>
 
  </div>
      <div 
        class="border-b border-gray-400 py-4s"
        v-for="post in posts" 
        :key="post.id"
        >

    <v-card>
      <!-- <v-card color="grey darken-4" class="white--text"> -->
    <v-card-title primary-title>
      <div>
        <p class="text-h5 text-blue">{{ post.title}}</p>
      </div>
    </v-card-title> 

    <modal 
    :post="post" />
    </v-card>
    
    <v-divider>
    </v-divider>
      </div> 
    </div>
</template>
  
<script>

import modal from '../components/modals/modal.vue'


  export default {
    
  components: { modal},
  data: () => ({
      page: 1,
      dadosPaginados: [], //tutorials
      elementosporpagina: 20, //pagesize
      pageCount: 0, //totalpages
      dialog: false,
      
      
      
    }),

  async asyncData ({$axios}){
  
  const posts = await $axios.$get('https://jsonplaceholder.typicode.com/posts') //?_limit=10
    return { 
      posts,
      
      
    }
    
  }, 
  
   methods: {
    totalPaginas(){
      return Math.ceil(this.posts.length / this.elementosporpagina)
    
    }, 
    paginatedData(){ 
      this.dadosPaginados= [];
      // let ini = (noPagina * this.elementosporpagina) - this.elementosporpagina;
      // let fin = (noPagina * this.elementosporpagina);
      const ini = this.page * this.elementosporpagina, 
       fin = ini + this.elementosporpagina;
      this.dadosPaginados = this.posts.slice(ini, fin);
      //console.log(this.dadosPaginados)

    // const start = this.page * this.elementosporpagina, 
    //       end = start + this.elementosporpagina;
    //  return this.posts.slice(start, end); 
}

    }
  }

</script>
  
  <style>
    .v-card--show {
      bottom: 0;
      opacity: 1 !important;
      position: absolute;
      width: 100%;
    }
    </style>
  
  