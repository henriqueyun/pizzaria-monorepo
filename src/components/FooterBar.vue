<template>
  <footer class="footer">
    <ul class="footer-menu">
      <li class="footer-item-title">
        <p>Projeto Pizzaria</p>
        <small>Desde de 2022 fazendo sua barriguinha feliz.</small>
      </li>
      <li class="footer-item-title">
        <p>Telefone</p>
        <a href="tel:123-456-7890"><small>(11) 94002-8922</small></a>
      </li>
      <li class="footer-item-title">
        <p>Endereço</p>
        <address>
          0 Dream Street, Wonderland<br>
        </address>
      </li> 
      <li class="footer-item-title social-media-list">
        <p>Encontre-nos nas redes sociais</p>
        <a target="_blank" href="https://facebook.com"><facebook class="social-media-icon"></facebook></a>
        <a target="_blank" href="https://twitter.com"><twitter class="social-media-icon"></twitter></a>
        <a target="_blank" href="https://linkedin.com"><linkedIn class="social-media-icon"></linkedIn></a>
        <a target="_blank" href="https://instagram.com"><instagram class="social-media-icon"></instagram></a>
      </li>
    </ul>
  </footer>
</template>

<script>
import Facebook from 'vue-material-design-icons/Facebook.vue'
import Twitter from 'vue-material-design-icons/Twitter.vue'
import LinkedIn from 'vue-material-design-icons/Linkedin.vue'
import Instagram from 'vue-material-design-icons/Instagram.vue'
export default {
  name: 'FooterBar',
  components: {
    Facebook,
    Twitter,
    LinkedIn,
    Instagram
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: black;
  color: white;
  padding: 2em 0;
  align-self: flex-end;
}

.footer-menu {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  max-width: 1076px;
  margin: 0 auto;
}

a {
  color: white;
}

.title {
  padding-top: 1em;
}
.social-media-icon {
  margin: 0.5em;
}

.footer-item-title p {
  margin-bottom: 1em;
}
</style>