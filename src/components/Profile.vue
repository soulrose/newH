<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs7 align="center">
        <v-card dark color="secondary">
          <div align="center">
                  <br>
                  <img src="https://randomuser.me/api/portraits/men/86.jpg" ><br><br>
                  <font color ="black"><b>MRN:</b> 4391010</font>&nbsp; <font color ="black"><b>ชื่อ-สกุล:</b> วิลเลี่ยม เล็บขบ</font>
                  <br> <font color ="black"><b>อายุ:</b> 30 ปี 2 เดือน 1 วัน</font> &nbsp; <font color ="black"><b>เพศ:</b> ชาย</font>
                  &nbsp; <font color ="black"><b>สถานภาพ:</b> โสด</font>
                   &nbsp; <font color ="black"><b>โทรศัพท์:</b> 0152525255</font>  <br>
                   <font color ="black"><b>สิทธิ:</b> ประกันสังคมในเขต</font> &nbsp;
                  <font color ="black"><b>ประวัติการแพ้ยา:</b> ไม่มี</font>


        </div>

          <v-list-tile-avatar>

          </v-list-tile-avatar>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="secondary" >
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <v-layout row wrap column align-right>


              <div>
                <font align="left"   color="black">170</font>
                <font align="left"  color="black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font>

              </div>



          <div  v-if="bmi   >= 30">
                  <img  style="width:85px" src=".\img\m2.png" >
                  </div>
            </div>




              <div v-else-if = "bmi  >= 25">
                <img style="width:85px"  src=".\img\m2.png" >
              </div>

              <div v-else-if="bmi  >= 23">
                <img style="width:85px"  src=".\img\m2.png" >

              </div>

              <div v-else-if="bmi  >= 18.6">
                <img style="width:85px"  src=".\img\m1.png" >
              </div>

              <div v-else-if="bmi  <= 18.5">
                <img  style="width:85px" src=".\img\m1.png" >
              </div>
              <div >
                <font  color="black">80</font>
                <font align="left"  color="black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font>

              </div>



                  <!--  <v-data-table
                      :headers="headers"
                      :items="vs"
                      hide-actions
                      class="elevation-1"

                    >
                    <template slot="items" slot-scope="props">
                      <td>{{ props.item.name }}</td>
                      <td class="text-xs-left">{{ props.item.WEI }}</td>
                      <td class="text-xs-left">{{ props.item.HEI }}</td>
                      <td class="text-xs-left">{{ props.item.C }}</td>
                      <td class="text-xs-left">{{ props.item.H }}</td>
                      <td class="text-xs-left">{{ props.item.P }}</td>


                    </template>

                  </v-data-table> ---->
                </v-layout>
              </v-slide-y-transition>
            </v-container>


        </v-card>


      <v-flex xs15>

          <v-card dark color="secondary" >
            <v-container fluid>
              <v-slide-y-transition mode="out-in">
                <v-layout row wrap column align-right>
                      <img  id="image" align="right"  style="width:50px;" src=".\img\h01.png" >
                </v-layout>
              </v-slide-y-transition>
          </v-container>
        </v-card>


        </v-flex>
      </v-flex>




    </v-layout>
  </v-container>



</template>

<script>


var img = document.createElement('img');
var img2 = document.createElement('img');

img.src = require('./img/h01.png');
img2.src = require('./img/h02.png');


    var image=document.getElementById("image");
    var img_array=[img.src,img2.src];

    console.log(img_array[0]);
    var index=0;
    var interval = 500;
    function slide()
    {
         img_array=[img.src,img2.src];

         if(index==0){
          document.getElementById("image").setAttribute("style","width:45px;position:relative;");
        }
        else{
          document.getElementById("image").setAttribute("style","width:50px;position:relative;");

        }



         if(index>=1){
           index=0;
         }else{
           index++;
         }


    //  image.src = img_array[0];

    }

window.onload = function() {
    setInterval(slide, interval);
};



//var image = document.getElementById("image");
var currentPos = 1;
//var images = ["h01.png", "h02.png"]

function volgendefoto() {
    if (++currentPos >= 3)
    currentPos = 1;
        var img = document.createElement('img');

        if(currentPos==1){
          img.width = 30;
        }
        else{
          img.width = 40;

        }

        img.src = require('./img/h01.png');

        //console.log(image.src);

      //  document.getElementById('image').appendChild(img);



        console.log(img.src);
}

//setInterval(volgendefoto, 1000);

  export default {
    data () {
      return {
                bmi : 50,
        headers: [
          {
            text: '',
            align: 'left',
            sortable: false,
            value: 'name',

          },
          { text: 'น้ำหนัก', value: 'WEI' },
          { text: 'ส่วนสูง', value: 'HEI' },
          { text: 'อุณหภูมิ', value: 'C' },
          { text: 'ความดันโลหิต', value: 'H' },
          { text: 'ชีพจร', value: 'P' },


        ],
        vs: [
          {
              "WEI": "80",
              "HEI": "160",
              "C": "35 C",
              "H": "100/70",
              "P": "80",
            },



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
