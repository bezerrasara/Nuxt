<template>
 <div class="grey lighten-5">

<v-pagination v-model="page" :length="totalPaginas()">

</v-pagination>
{{ visiblePages }}

<v-col cols="12" sm="14">
<v-row>
<v-col cols="4" sm="3">
<v-select v-model="perPage" :items="pageSizes" label="Items per Page" @change="handlePageSizeChange">
</v-select>
<v-text-field v-model="search" label="Search by Title">
</v-text-field>
</v-col>
</v-row>
</v-col>
</div>

</template>

<script>

export default {
  props: ['post'],

  data() {
    return {
      search: "",
    page: 1,
    dadosPaginados: [],
    perPage: 14,
    pageSizes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

    }

    
  },
  computed: {
    visiblePages() {
      this.dadosPaginados = this.posts.slice((this.page * this.perPage) - this.perPage, this.page * this.perPage)

      return this.searchTitle(
        this.search,
        this.page,
        this.perPage

      );

    }
  },
  methods: {
    totalPaginas() {
      return Math.ceil(this.posts.length / this.perPage)
    },

    handlePageSizeChange(size) {
      this.perPage = size;
      this.page = 1;
      this.visiblePages;
    },

    searchTitle(search, page, perPage) {
      if (search) {
        this.page = page,
        this.perPage = perPage,
        this.dadosPaginados = this.posts.filter(post => {
          return Object.values(post)
            .join(",")
            .toLowerCase()
            .includes(search);

        });
      }
    },
  }
}
</script>
<style>

</style>