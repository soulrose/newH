<template>

  <v-app>
      <Page/>

  </v-app>

</template>

<script>
import Login from './Login'
import Page from './Page'

export default {
  name: 'App',
  components: {
    Page,
    Login
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
