

<template>
  
    <div>
      
      <div 
        class="border-b border-gray-400 py-4s"
        v-for="post in posts" 
        :key="post.id"
        >
      <v-card>
      <!-- <v-card color="grey darken-4" class="white--text"> -->
            <v-card-title primary-title>
                <div>
      <p class="text-h5 text-blue">{{ post.title}}</p></div>
    </v-card-title> 

    <modal 
    :post="post" />
  </v-card>
  
    <v-divider>

    </v-divider>
  
      </div>
      

      <!-- {{totalPaginas()}} -->
      
      
    </div>
    
  </template>
  

  <script>

import modal from '../components/modals/modal.vue'
import { match } from 'assert'
  export default {
  components: { modal}, //
  data: () => ({
      dialog: false,
      elementosPorPagina: 10,
      dadosPaginados: []

      
    }),

  async asyncData ({$axios}){
  
  const posts = await $axios.$get('https://jsonplaceholder.typicode.com/posts?_limit=50')
    return { 
      posts,
    }
  },
  methods: {
    totalPaginas(){
      return match.ceil(this.posts.length / this.elementosPorPagina)
    
    },
    getDadosPagina(noPagina) {
      this.dadosPaginados=[];
      let ini = (noPagina*this.elementosPorPagina) - this.elementosPorPagina;
      let fin = (noPagina * this.elementosPorPagina);
      this.dadosPaginados = this.posts.slice(ini, fin);
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
  
  