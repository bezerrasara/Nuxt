<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="blue lighten-2" dark v-bind="attrs" v-on="on">
          Ver
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ photo.title}}
        </v-card-title>

        <v-img :src="`${photo.url}`" aspect-ratio="1">
        </v-img>

        <v-card-text>
          <p>{{photo.url}}</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['photo'],
  data() {

    return {
      dialog: false,
    }
  },
}
</script>