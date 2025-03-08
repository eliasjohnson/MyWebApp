<template>
  <div>
    <Slide width="300" right>
      <a id="home" href="/">
        <span>Home</span>
      </a>
      <a id="Projects" target="_blank" href="https://projects.eliasjohnson.com">
        <span>Projects</span>
      </a>
      <a id="Experience" href="experience">
        <span>Experience</span>
      </a>
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

</style>
