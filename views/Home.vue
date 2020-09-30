<template>
  <div class="home">
    <br />
    <Slider />
    <Event />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Event from "@/components/Event.vue";
import Slider from "@/components/Slider";

import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Event,
    Slider,
    Footer,
  },
};
</script>
