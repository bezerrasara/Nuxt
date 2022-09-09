<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="blue lighten-2" dark v-bind="attrs" v-on="on">
          Ver
        </v-btn>
      </template>

      <v-card dark >
        <v-card-title  class="text-h5 pink"  >
          {{ post.title}}
        </v-card-title>
     

        <v-card-text class="mt-10">
          <p>{{post.body}}</p>
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
  props: ['post'],
  data() {

    return {
      dialog: false,
    }
  },
}
</script>