<template>
  <div class="hello">
    <hr />
    <p>Register to a meetup today!</p>
    <hr />
    <div>
      <ul class="row">
        <li v-for="item in list" :key="item.id">
          <div class="column">
            <div class="location">
              {{ item.location }}
            </div>
            <div class="date">
              {{ item.date }}
            </div>

            <p class="reg">
              <router-link class="button" to="/Register" tag="button"
                >Register</router-link
              >
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { getLocation } from "../data/data.js";

export default {
  name: "Event",

  data: () => ({
    list: [],
  }),
  created() {
    this.list = getLocation();
  },
  // methods: {
  //   register: function(message) {
  //     alert(message);
  //   },
  // },
};
</script>

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
.location {
  font-size: 1.5rem;
  margin: 20px;
  padding: 10px;
}
.date {
  font-size: 2rem;
}
</style>
