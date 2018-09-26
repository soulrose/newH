<template>
  <v-app>
  
   {{"RamaEMR"}}



  </v-app>
</template>
<script>
import HelloWorld from "./HelloWorld";



  export default {
  components: {
    HelloWorld
  },
    data: () => ({
      valid: false,
      mrn: "5108888",
      mrnRules: [
        v => !!v || 'MRN is required',
        v => v.length <= 7 || 'MRN have 7 characters'
      ]
    })
  };
</script>
