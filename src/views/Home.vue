<template>
  <div>
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

template{
  background: #000000;
}

.banner{
  padding-bottom: 25px;
  z-index: -1;
}

</style>
