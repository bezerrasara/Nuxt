<template>
  <div class="text-center"
  >
     <v-pagination
      v-model="page"
      :length="5"
      :total-visible="10"
      
       >
       <!-- @nextPage="pageChangeHandle('next')"
      @previousPage="pageChangeHandle ('anterior')" 
      @loadPage="pageChangeHandle"  -->
    
      
      
    </v-pagination >
    
    
  </div>
  
</template>

<script>


export default {
  
 
    data () {
      return {
        page: 1,
        totalVisible: 10,
        pagecount: 0,
        
        //totalPage: Math.ceil(this.posts.length / 10),
        dadosPaginados: []
      }
      
    },  
  }
    
 

  
</script>
<style>
 
</style>