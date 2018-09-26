<template>
  <div id="app2">
      <h2>{{person1.name}} </h2>
      <h2>{{person1.last}} </h2>
      <h2>{{person1.age}}</h2>
      <h2>{{person1FullName}}</h2>


  </div>
</template>
<script>
export default {
name : 'app2',
  data () {
    return{
      person1 : {
          name : "mongkol",
          last : "kij",
          age : "25",
      }
  }
},
computed: {
  person1FullName(){
    return this.person1.name  + " " + this.person1.last
   }
 }
}
</script>
<style>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
