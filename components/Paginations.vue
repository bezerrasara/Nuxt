<template>
    <div class="text-center">
      <v-pagination
      
        v-model="page"
        :length="10"
        :post="post"

        
      ></v-pagination>
    </div>
  </template>
  
  <script>
    export default {
        props: ['post'],
      data () {
        return {
            
        page: 1,
        // totalPages: 0,
        // pageSize: 3,

        }
      },
    }
  </script>