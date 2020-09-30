<template>
  <div id="Slider">
    <vue-image-slider
      :images="imageArray"
      :intervalVal="5000"
      :height="500"
      :width="1500"
    />
  </div>
</template>

<script>
import VueImageSlider from "vue-image-slider";
export default {
  name: "Slider",
  components: {
    VueImageSlider,
  },
  data() {
    return {
      imageArray: [
        "https://cdn.pixabay.com/photo/2016/11/14/19/20/stockholm-1824368_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/07/08/10/34/italy-3523640_1280.jpg",
        "https://cdn.pixabay.com/photo/2014/11/13/23/34/london-530055__340.jpg",
      ],
    };
  },
};
</script>

<style scoped></style>
