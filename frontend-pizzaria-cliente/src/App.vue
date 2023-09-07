<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <footer-bar/>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

export default ({
  components: {
    NavBar,
    FooterBar
  },
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,300;0,400;0,500;0,900;1,400;1,900&display=swap'); 

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.container {
  background-color: white;
  max-width: 1076px;
  margin: 0 auto;
  /* background-color: tomato; */
  display: flex;
  flex-flow: row wrap;
}

.simple-container {
  max-width: 1076px;
  margin: 1em auto;
  padding: 10px;
}

a {
  text-decoration: none;
}

@media (max-width: 600px) {
  .simple-container {
    width: 90%;
    margin-bottom: 3em;
    /* background-color: darkorchid; */
  }
}
</style>
