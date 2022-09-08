<template>
  
  <v-app dark>
    <v-navigation-drawer
    v-model="drawer"
  app
  
  >
     <v-list-item  >
          <v-list-item-content >
            <v-list-item-title class="text-h6">
              Postagens e fotos
            </v-list-item-title>

            <v-list-item-subtitle>
              Lista de Postagens
            </v-list-item-subtitle>

          </v-list-item-content>
        </v-list-item>
      <v-divider></v-divider>

      <v-list
      dense
      nav>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar
      
      
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      
      
      <v-app-bar-title>Aplication</v-app-bar-title>
   
    <v-spacer></v-spacer>
    <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-main> 
      
      <Nuxt />
    </v-main>
    
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Postagens',
          to: '/'
        },
        {
          icon: 'mdi-image',
          title: 'Fotos',
          to: '/fotos'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
