<template>
  <v-app>

      <Pagination/>
      <Mrn/>
      <LabData/>
      <router-view></router-view>
      <HelloWorld/>
      <RamaDataTable/>
      <SignUp/>

  </v-app>
</template>

<script>
import HelloWorld from './HelloWorld'
import Mrn from './Mrn'
import RamaDataTable from './RamaDataTable'
import LabData from './LabData'
import MenuLeft from './RamaListsMenuLeft'
import SignUp from './SignUp'
import Pagination from './Pagination'


export default {
  name: 'App',
  components: {
    HelloWorld ,
    RamaDataTable,
    LabData,
    SignUp,
    Mrn,
    Pagination
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
