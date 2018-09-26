<template>
  <v-app>
      <LabData/>

  </v-app>
</template>

<script>

import LabData from './LabData'



export default {
  name: 'App',
  components: {
    LabData,
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี มหาวิทยาลัยมหิดล'
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
