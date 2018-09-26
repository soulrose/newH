<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo_rama_h_en-01.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220; Rama Hospital.&#8221;
          <footer>
            <small>
              <em>&mdash;โรงพยาบาลรามาธิบดี</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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

blockquote {
color: #23449b;
}
</style>
