<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>

      <v-flex xs12>
        <v-card dark color="secondary">
        <v-card-text class="px-3 text-xs-center">
               <Carousel/>

             <BubbleChart/>
             <SimpleChart/>
             <ColumnChart/>

             <div v-if="type === 'A'">
               <BubbleChart/>
             </div>
             <div v-else-if="type === 'B'">
                 <SimpleChart/>
             </div>
             <div v-else-if="type === 'C'">
               <ColumnChart/>
             </div>
             <div v-else>
               <ColumnChart/>
             </div>

           <Pagination/>
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

                   <div id="example-1">
                        <v-btn
                          slot="activator"
                          color="primary"
                          dark
                           v-on:click="counter += 1"
                         >
                          Click Search
                        </v-btn>
                        <p>The button above has been clicked {{ counter }} times.</p>
                         </div>


                   </v-form>
               </v-card-text>
             </v-card>
           </v-flex>
           <v-flex xs8>
             <v-card dark color="secondary">
               <v-card-text class="px-4"><LabChart/></v-card-text>
             </v-card>
           </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import LabChart from "./chart/LabChart";
import BubbleChart from "./chart/BubbleChart";
import Pagination from "./Pagination";
import SimpleChart from "./chart/SimpleChart";
import ColumnChart from "./chart/ColumnChart";
import Carousel from "./Carousel";


  export default {
  components: {
    LabChart,
    BubbleChart,
    Pagination,
    SimpleChart,
    ColumnChart,
    Carousel
  },
    data: () => ({
      valid: false,
      mrn: "5108888",
      mrnRules: [
        v => !!v || 'MRN is required',
        v => v.length <= 7 || 'MRN have 7 characters'
      ],
      counter: 0
    })
  };
</script>
