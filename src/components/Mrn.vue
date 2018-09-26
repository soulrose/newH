<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="secondary">
          <v-card-text class="px-0">
                <HelloWorld/>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs4>
        <v-card  color="secondary">
          <v-card-text class="px-4">
            <h3 class="headline">Search MRN <v-icon large>search</v-icon></h3>

            <v-form v-model="valid">
              <v-text-field
              mask="#######"
              v-model="mrn"
              :rules="mrnRules"
              :counter="7"
              label="MRN"
              required
              ></v-text-field>
              <v-bottom-sheet v-model="sheet">
                   <v-btn
                     slot="activator"
                     color="primary"
                     dark
                   >
                     Click Search
                   </v-btn>
                    </v-bottom-sheet>
              </v-form>
          </v-card-text>
        </v-card>
      </v-flex>


    </v-layout>
  </v-container>
</template>
<script>
import HelloWorld from "./HelloWorld";
import LabChart from "./chart/LabChart";


  export default {
  components: {
    HelloWorld,
    LabChart
  },
    data: () => ({
      valid: false,
      mrn: "5108888",
      mrnRules: [
        v => !!v || "MRN is required",
        v => v.length <= 7 || "MRN have 7 characters"
      ]
    })};
</script>
