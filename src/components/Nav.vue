<template>
  <div>
    <Slide width="300" right>
      <router-link id="home" to="/">
        <span>Home</span>
      </router-link>
      <a id="Projects" target="_blank" href="https://projects.eliasjohnson.com">
        <span>Projects</span>
      </a>
      <router-link id="Experience" to="/experience">
        <span>Experience</span>
      </router-link>
    </Slide>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";

export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    openMenu() {
      this.open = true;
    }
  },
  components: {
    Slide
  }
};
</script>

<style>
.bm-burger-bars {
  background-color: #686868;
}

/* Add styling for router-link components */
.router-link-active {
  color: #42b983;
}

a, router-link {
  display: block;
  padding: 10px 0;
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}

a:hover, router-link:hover {
  color: #42b983;
}
</style>
