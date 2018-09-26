<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>

      <img src="@/assets/logo_rama_h_en-01.png" alt="Vuetify.js" class="logorama mb-1" >
      <MenuLeft/>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>


    <v-content>

      <router-view></router-view>


    </v-content>


    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app class="pa-3">
        <v-spacer></v-spacer>
         <span>©2018 Informatics Health, Ramathibodi Hospital. All Rights Reserved. / Dev Version 00.00.01 11/09/2561
   </span>
       </v-footer>
  </v-app>
</template>

<script>

import MenuLeft from "./components/RamaListsMenuLeft";



export default {
  name: 'App',
  components: {
    
    MenuLeft
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี มหาวิทยาลัยมหิดล"
    }
  }
}

</script>

<style scoped>
.logorama {
  width: 95%;
  height: auto;
}
</style>
