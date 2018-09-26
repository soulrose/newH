
<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="secondary">
        <div>
        <GChart
              type="LineChart"
              :data="chartData"
              :options="chartOptions"
              style="width: auto; height: 500px;"
            />

        </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
import { GChart } from 'vue-google-charts'

 var desserts= [
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


            ];

            var lineShowData =[];
            var shortTest= [];
            var resultVal= [];


             if(desserts!==null){
               for(var i=0;i<desserts.length;i++){
                        shortTest.push(desserts[i].SHORTTEST);
                        resultVal.push(desserts[i].REPORTDATETIME);
                        resultVal.push(desserts[i].RESULTVAL);
               }
             }

            lineShowData.push(shortTest);
            lineShowData.push(resultVal);

          



var datalineShow =[
  ["Lab", desserts[0].SHORTTEST, desserts[1].SHORTTEST, desserts[2].SHORTTEST, desserts[3].SHORTTEST, desserts[5].SHORTTEST],
  [desserts[0].REPORTDATETIME, parseInt(desserts[8].RESULTVAL), 167, 120, 10, 150],
  [desserts[1].REPORTDATETIME, 79, 136, 130, 10, 177],
  [desserts[2].REPORTDATETIME, 78, null, 50, 20, 100],
  [desserts[3].REPORTDATETIME, 72, 278, 230, 10, 200],
  [desserts[4].REPORTDATETIME, 81, 200, 210, 60, 250],
  [desserts[5].REPORTDATETIME, 72, 170, 100, 10, 350],
  [desserts[6].REPORTDATETIME, 68, 477, 80, 10, 250]
];

export default {
  name: 'Areachart',
  components: {
    GChart
  },
  data () {
  return {
      // Array will be automatically processed with visualization.arrayToDataTable function

      chartData: datalineShow,
      chartOptions: {
        colorAxis: { colors: ["yellow", "red"] },
        hAxis: {
         title: 'Time'
       },
       vAxis: {
         title: 'Value'
       },
       width: 900,
       height: 500,
       title: 'Lab Rama 2018',
       is3D: false
      }




    };
  },
  computed: {
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Lab Results',
          subtitle: 'แสดงเฉพาะห้อง Lab (หมายเหตุ LL, HH = ค่าวิกฤต / L, H = ค่าต่ำหรือสูงกว่าค่าอ้างอิง)'
        },

        width: 400,
        height: 240,
        title: 'Lab Rama 2018',
        colors: ['#678e95', '#9ecbe1', '#97cfc1'],
        is3D: false
      })
    }
  },
  methods: {
    onChartReady (chart, google) {
      this.chartsLib = google
    }
  }
}
</script>
