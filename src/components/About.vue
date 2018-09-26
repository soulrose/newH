<template>
  <v-app>

    
           <Profile/>
           <LineChart/>
           <RamaDataTable/>



  </v-app>
</template>
<script>
import LineChart from "./chart/LineChart";
import Profile from "./Profile";
import RamaDataTable from "./RamaDataTable";

  export default {
  components: {
  LineChart,
  Profile,
  RamaDataTable


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
