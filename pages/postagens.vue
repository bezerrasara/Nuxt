

<template>
  
    <div>
      <div 
        class="border-b border-gray-400 py-4s"
        v-for="post in posts" 
        :key="post.id"
        >
      
    
  <v-card
      max-width="800"
    class="mx-auto"
  >
  <v-card-title class="pb-0">
      <p class="text-h5 text-blue">{{ post.title}}</p>
    </v-card-title> 

    <modal 
    :post="post" />
  </v-card>
      </div>
      <paginations />
    </div>
  </template>
  

  <script>
import Paginations from '../components/Paginations.vue'
import modal from './modal.vue'
  export default {
  components: { modal, Paginations },
   
    data: () => ({
      dialog: false,
      
    }),

  async asyncData ({$axios}){
  
  const posts = await $axios.$get('https://jsonplaceholder.typicode.com/posts?_limit=50')
    return { 
      posts,
    }
  },
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
  
  