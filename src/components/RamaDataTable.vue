<template>
<v-container fluid>
  <v-slide-y-transition mode="out-in">



    <v-layout row wrap column align-left>
      <v-data-table
        :headers="headers"
        :items="desserts"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.RQ_ID }}</td>
          <td class="text-xs-right">{{ props.item.MRN }}</td>
          <td class="text-xs-right">{{ props.item.PLACER }}</td>
          <td class="text-xs-right">{{ props.item.SDLOC }}</td>
          <td class="text-xs-right">{{ props.item.VALUETYPE }}</td>
          <td class="text-xs-right">{{ props.item.PRODUCTID }}</td>
          <td class="text-xs-right">{{ props.item.PERFORMUNIT }}</td>
          <td class="text-xs-right">{{ props.item.CODTEST }}</td>
          <td class="text-xs-right">{{ props.item.SHORTTEST }}</td>
          <td class="text-xs-right">{{ props.item.LABCOMMENT }}</td>
          <td class="text-xs-right">{{ props.item.RESULTVAL }}</td>
          <td class="text-xs-right">{{ props.item.UNIT }}</td>
          <td class="text-xs-right">{{ props.item.RANGE }}</td>
          <td class="text-xs-right">{{ props.item.FLAG }}</td>
          <td class="text-xs-right">{{ props.item.PRESTATUS }}</td>
          <td class="text-xs-right">{{ props.item.OBSERVDATETIME }}</td>
          <td class="text-xs-right">{{ props.item.OBSERVER }}</td>
          <td class="text-xs-right">{{ props.item.REPORTDATETIME }}</td>
          <td class="text-xs-right">{{ props.item.PRINTSTATUS }}</td>
          <td class="text-xs-right">{{ props.item.HTMLRPT }}</td>
          <td class="text-xs-right">{{ props.item.PRINTSTATUS }}</td>
          <td class="text-xs-right">{{ props.item.STATUSCODE }}</td>
          <td class="text-xs-right">{{ props.item.SEQ }}</td>



        </template>
      </v-data-table>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>


    <script>

      export default {
        data () {
          return {
            headers: [
              {
                text: '',
                align: 'left',
                sortable: false,
                value: 'name'
              },
              { text: 'RQ_ID', value: 'RQ_ID' },
              { text: 'MRN', value: 'MRN' },
              { text: 'PLACER', value: 'PLACER' },
              { text: 'SDLOC', value: 'SDLOC' },
              { text: 'VALUETYPE', value: 'VALUETYPE' },
              { text: 'PRODUCTID', value: 'PRODUCTID' },
              { text: 'PERFORMUNIT', value: 'PERFORMUNIT' },
              { text: 'CODTEST', value: 'CODTEST' },
              { text: 'SHORTTEST', value: 'SHORTTEST' },
              { text: 'LABCOMMENT', value: 'LABCOMMENT' },
              { text: 'RESULTVAL', value: 'RESULTVAL' },
              { text: 'UNIT', value: 'UNIT' },
              { text: 'RANGE', value: 'RANGE' },
              { text: 'FLAG', value: 'FLAG' },
              { text: 'PRESTATUS', value: 'PRESTATUS' },
              { text: 'OBSERVDATETIME', value: 'OBSERVDATETIME' },
              { text: 'OBSERVER', value: 'OBSERVER' },
              { text: 'REPORTDATETIME', value: 'REPORTDATETIME' },
              { text: 'PRINTSTATUS', value: 'PRINTSTATUS' },
              { text: 'HTMLRPT', value: 'HTMLRPT' },
              { text: 'PRINTSTATUS', value: 'PRINTSTATUS' },
              { text: 'STATUSCODE', value: 'STATUSCODE' },
              { text: 'SEQ', value: 'SEQ' }

            ],
            desserts: [
              {
              		"RQ_ID": "39119450",
              		"MRN": "4391010",
              		"PLACER": "2088",
              		"SDLOC": "OGY220",
              		"VALUETYPE": "ST",
              		"PRODUCTID": "100001",
              		"PERFORMUNIT": "LAK0101",
              		"CODTEST": "100001",
              		"SHORTTEST": "VDRL (Serum)",
              		"LABCOMMENT": "",
              		"RESULTVAL": "Non-reactive",
              		"UNIT": "",
              		"RANGE": "Non reactive",
              		"FLAG": "N",
              		"PRESTATUS": "F",
              		"OBSERVDATETIME": "8/15/14 12:07",
              		"OBSERVER": "1490",
              		"REPORTDATETIME": "8/15/14 14:06",
              		"PRINTSTATUS": "N",
              		"HTMLRPT": "\\LIS\\REPORT\\2014\\08\\14\\20140814_10140703374.htm",
              		"STATUSCODE": "active",
              		"SEQ": "1"
              	},
              	{
              		"RQ_ID": "20902403",
              		"MRN": "4391010",
              		"PLACER": "8089",
              		"SDLOC": "HS0301",
              		"VALUETYPE": "ST",
              		"PRODUCTID": "100027",
              		"PERFORMUNIT": "LAK0101",
              		"CODTEST": "100665",
              		"SHORTTEST": "HBsAg Interpret resu",
              		"LABCOMMENT": "",
              		"RESULTVAL": "Negative",
              		"UNIT": "",
              		"RANGE": "",
              		"FLAG": "N",
              		"PRESTATUS": "F",
              		"OBSERVDATETIME": "6/18/12 10:17",
              		"OBSERVER": "5498",
              		"REPORTDATETIME": "6/18/12 12:10",
              		"PRINTSTATUS": "N",
              		"HTMLRPT": "\\LIS\\REPORT\\2012\\06\\18\\20120618_10120442457.htm",
              		"STATUSCODE": "active",
              		"SEQ": "1"
              	},
              	{
              		"RQ_ID": "39119450",
              		"MRN": "4391010",
              		"PLACER": "2088",
              		"SDLOC": "OGY220",
              		"VALUETYPE": "ST",
              		"PRODUCTID": "100027",
              		"PERFORMUNIT": "LAK0101",
              		"CODTEST": "100665",
              		"SHORTTEST": "HBsAg Interpret resu",
              		"LABCOMMENT": "",
              		"RESULTVAL": "Negative",
              		"UNIT": "",
              		"RANGE": "",
              		"FLAG": "N",
              		"PRESTATUS": "F",
              		"OBSERVDATETIME": "8/15/14 12:07",
              		"OBSERVER": "3404",
              		"REPORTDATETIME": "8/15/14 12:53",
              		"PRINTSTATUS": "N",
              		"HTMLRPT": "\\LIS\\REPORT\\2014\\08\\14\\20140814_10140703374.htm",
              		"STATUSCODE": "active",
              		"SEQ": "1"
              	},
              	{
              		"RQ_ID": "20902403",
              		"MRN": "4391010",
              		"PLACER": "8089",
              		"SDLOC": "HS0301",
              		"VALUETYPE": "ST",
              		"PRODUCTID": "100028",
              		"PERFORMUNIT": "LAK0101",
              		"CODTEST": "100028",
              		"SHORTTEST": "Anti-HBs/ELISA",
              		"LABCOMMENT": "Protective >= 10 mIU/mL",
              		"RESULTVAL": "292.67 Positive",
              		"UNIT": "mIU/mL",
              		"RANGE": "MRR",
              		"FLAG": "*",
              		"PRESTATUS": "F",
              		"OBSERVDATETIME": "6/18/12 10:17",
              		"OBSERVER": "5498",
              		"REPORTDATETIME": "6/18/12 12:10",
              		"PRINTSTATUS": "N",
              		"HTMLRPT": "\\LIS\\REPORT\\2012\\06\\18\\20120618_10120442457.htm",
              		"STATUSCODE": "active",
              		"SEQ": "1"
              	},
              	{
              		"RQ_ID": "39119450",
              		"MRN": "4391010",
              		"PLACER": "2088",
              		"SDLOC": "OGY220",
              		"VALUETYPE": "ST",
              		"PRODUCTID": "100028",
              		"PERFORMUNIT": "LAK0101",
              		"CODTEST": "100028",
              		"SHORTTEST": "Anti-HBs/ELISA",
              		"LABCOMMENT": "Protective >= 10 mIU/mL",
              		"RESULTVAL": "225.40 Positive",
              		"UNIT": "mIU/mL",
              		"RANGE": "MRR",
              		"FLAG": "*",
              		"PRESTATUS": "F",
              		"OBSERVDATETIME": "8/15/14 12:07",
              		"OBSERVER": "3404",
              		"REPORTDATETIME": "8/15/14 12:53",
              		"PRINTSTATUS": "N",
              		"HTMLRPT": "\\LIS\\REPORT\\2014\\08\\14\\20140814_10140703374.htm",
              		"STATUSCODE": "active",
              		"SEQ": "1"
              	},
              	{
              		"RQ_ID": "39119450",
              		"MRN": "4391010",
              		"PLACER": "2088",
              		"SDLOC": "OGY220",
              		"VALUETYPE": "ST",
              		"PRODUCTID": "100034",
              		"PERFORMUNIT": "LAK0101",
              		"CODTEST": "100581",
              		"SHORTTEST": "HIV Interpret result",
              		"LABCOMMENT": "",
              		"RESULTVAL": "Negative",
              		"UNIT": "",
              		"RANGE": "",
              		"FLAG": "N",
              		"PRESTATUS": "F",
              		"OBSERVDATETIME": "8/15/14 12:07",
              		"OBSERVER": "3404",
              		"REPORTDATETIME": "8/15/14 12:53",
              		"PRINTSTATUS": "N",
              		"HTMLRPT": "\\LIS\\REPORT\\2014\\08\\14\\20140814_10140703374.htm",
              		"STATUSCODE": "active",
              		"SEQ": "1"
              	},
              	{
              		"RQ_ID": "48695160",
              		"MRN": "4391010",
              		"PLACER": "3390",
              		"SDLOC": "SDOSU20",
              		"VALUETYPE": "ST",
              		"PRODUCTID": "100034",
              		"PERFORMUNIT": "SDLAB31",
              		"CODTEST": "100581",
              		"SHORTTEST": "HIV Interpret result",
              		"LABCOMMENT": "",
              		"RESULTVAL": "Negative",
              		"UNIT": "",
              		"RANGE": "",
              		"FLAG": "N",
              		"PRESTATUS": "F",
              		"OBSERVDATETIME": "8/26/15 18:09",
              		"OBSERVER": "12877",
              		"REPORTDATETIME": "8/26/15 19:05",
              		"PRINTSTATUS": "N",
              		"HTMLRPT": "\\LIS\\REPORT\\2015\\08\\26\\20150826_21020150814492.htm",
              		"STATUSCODE": "active",
              		"SEQ": "1"
              	},
              	{
              		"RQ_ID": "39119450",
              		"MRN": "4391010",
              		"PLACER": "2088",
              		"SDLOC": "OGY220",
              		"VALUETYPE": "ST",
              		"PRODUCTID": "100048",
              		"PERFORMUNIT": "LAK0101",
              		"CODTEST": "100656",
              		"SHORTTEST": "Anti HCV Interpret r",
              		"LABCOMMENT": "",
              		"RESULTVAL": "Negative",
              		"UNIT": "",
              		"RANGE": "",
              		"FLAG": "N",
              		"PRESTATUS": "F",
              		"OBSERVDATETIME": "8/15/14 12:07",
              		"OBSERVER": "3404",
              		"REPORTDATETIME": "8/15/14 12:53",
              		"PRINTSTATUS": "N",
              		"HTMLRPT": "\\LIS\\REPORT\\2014\\08\\14\\20140814_10140703374.htm",
              		"STATUSCODE": "active",
              		"SEQ": "1"
              	},
              	{
              		"RQ_ID": "37028969",
              		"MRN": "4391010",
              		"PLACER": "7406",
              		"SDLOC": "OPD07",
              		"VALUETYPE": "NM",
              		"PRODUCTID": "100067",
              		"PERFORMUNIT": "LAK0101",
              		"CODTEST": "100914",
              		"SHORTTEST": "HbA1C (EDTA-blood)",
              		"LABCOMMENT": "",
              		"RESULTVAL": "5.51",
              		"UNIT": "%",
              		"RANGE": "4.80 - 5.90",
              		"FLAG": "N",
              		"PRESTATUS": "F",
              		"OBSERVDATETIME": "5/23/14 9:07",
              		"OBSERVER": "5499",
              		"REPORTDATETIME": "5/23/14 9:34",
              		"PRINTSTATUS": "N",
              		"HTMLRPT": "\\LIS\\REPORT\\2014\\05\\22\\20140522_10140430760.htm",
              		"STATUSCODE": "active",
              		"SEQ": "1"
              	},
              	{
              		"RQ_ID": "37028969",
              		"MRN": "4391010",
              		"PLACER": "7406",
              		"SDLOC": "OPD07",
              		"VALUETYPE": "NM",
              		"PRODUCTID": "100067",
              		"PERFORMUNIT": "LAK0101",
              		"CODTEST": "100915",
              		"SHORTTEST": "Estimated Average Gl",
              		"LABCOMMENT": "",
              		"RESULTVAL": "111",
              		"UNIT": "mg/dL",
              		"RANGE": "",
              		"FLAG": "N",
              		"PRESTATUS": "F",
              		"OBSERVDATETIME": "5/23/14 9:07",
              		"OBSERVER": "5499",
              		"REPORTDATETIME": "5/23/14 9:34",
              		"PRINTSTATUS": "N",
              		"HTMLRPT": "\\LIS\\REPORT\\2014\\05\\22\\20140522_10140430760.htm",
              		"STATUSCODE": "active",
              		"SEQ": "2"
              	},
              	{
              		"RQ_ID": "39119450",
              		"MRN": "4391010",
              		"PLACER": "2088",
              		"SDLOC": "OGY220",
              		"VALUETYPE": "ST",
              		"PRODUCTID": "150002",
              		"PERFORMUNIT": "LAK0201",
              		"CODTEST": "150501",
              		"SHORTTEST": "Urine centrifuge",
              		"LABCOMMENT": "",
              		"RESULTVAL": "Centrifuged 10 ml. urine",
              		"UNIT": "",
              		"RANGE": "Centrifuge 10 ml",
              		"FLAG": "N",
              		"PRESTATUS": "F",
              		"OBSERVDATETIME": "8/15/14 12:08",
              		"OBSERVER": "4367",
              		"REPORTDATETIME": "8/15/14 12:19",
              		"PRINTSTATUS": "N",
              		"HTMLRPT": "\\LIS\\REPORT\\2014\\08\\14\\20140814_15140703374.htm",
              		"STATUSCODE": "active",
              		"SEQ": "1"
              	},
              	{
              		"RQ_ID": "39119450",
              		"MRN": "4391010",
              		"PLACER": "2088",
              		"SDLOC": "OGY220",
              		"VALUETYPE": "ST",
              		"PRODUCTID": "150002",
              		"PERFORMUNIT": "LAK0201",
              		"CODTEST": "150511",
              		"SHORTTEST": "Blood",
              		"LABCOMMENT": "",
              		"RESULTVAL": "Negative",
              		"UNIT": "",
              		"RANGE": "Negative",
              		"FLAG": "N",
              		"PRESTATUS": "F",
              		"OBSERVDATETIME": "8/15/14 12:08",
              		"OBSERVER": "4367",
              		"REPORTDATETIME": "8/15/14 12:19",
              		"PRINTSTATUS": "N",
              		"HTMLRPT": "\\LIS\\REPORT\\2014\\08\\14\\20140814_15140703374.htm",
              		"STATUSCODE": "active",
              		"SEQ": "10"
              	}


            ]
          }
        }
      }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
