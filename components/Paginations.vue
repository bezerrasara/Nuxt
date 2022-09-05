<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="5">
  </v-pagination>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        page: 1,
        
      }
    },
  }
</script>
