<template>
  <div class="home-container">
    <Nav class="nav"/>
    <Banner class="banner"></Banner>
  </div>
</template>

<script>
import Nav from "@/components/Nav"
import Banner from "@/components/Banner";
//import ProjectsRow from "@/components/ProjectsRow";

export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    openMenu() {
      this.open = true;
    }
  },
  name: 'Home',
  components: {
    //ProjectsRow,
    Banner,
    Nav
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.banner {
  padding-bottom: 25px;
  /* Removed negative z-index */
}
</style>
