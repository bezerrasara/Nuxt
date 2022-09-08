<template>
  <div>
    <div class="grey lighten-5">

      <v-col cols="12" sm="12">
        <v-row>
          <v-col cols="4" sm="3">
            <v-select v-model="perPage" :items="pageSizes" label="Items per Page" @change="handlePageSizeChange">
            </v-select>
          </v-col>
          <v-col cols="12" sm="9">

            <v-pagination v-model="page" :length="totalPaginas()">

            </v-pagination>
          </v-col>
        </v-row>
      </v-col>

      {{ visiblePages }}

    </div>
    <v-container fluid class="grey lighten-5">
      <v-row dense>
        <v-col cols="12" sm="8">
          <v-text-field v-model="search" label="Search by Title">
          </v-text-field>
        </v-col>
        <v-col v-for="post in dadosPaginados" :key="post.id" cols="12">
          <v-card class="pa-2" outlined tile color="">

            <v-card-title class="text-h5">

              <p>{{ post.title}}</p>

            </v-card-title>

            <modal :post="post" />
          </v-card>
        </v-col>

      </v-row>
      <v-divider>
      </v-divider>
    </v-container>
  </div>
</template>
  
<script>
import modal from '../components/modals/modal.vue'

export default {

  components: { modal },
  data: () => ({
    search: "",
    page: 1,
    dadosPaginados: [],
    perPage: 14,
    pageSizes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

  }),

  async asyncData({ $axios }) {

    const posts = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
    return {
      posts,
    }

  },
  computed: {
    visiblePages() {
      this.dadosPaginados = this.posts.slice((this.page * this.perPage) - this.perPage, this.page * this.perPage)

      return this.searchTitle(
        this.search,
        // this.page,
        // this.perPage

      );

    }
  },

  methods: {
    totalPaginas() {

      return Math.ceil(this.posts.length / this.perPage)

    },
    handlePageSizeChange(size) {
      this.perPage = size;
      // this.page = 1;
      // this.visiblePages;

    },

    searchTitle(search, page, perPage) {
      if (search) {
        this.posts = this.posts.filter(post => {
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
.v-card--show {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
  
  