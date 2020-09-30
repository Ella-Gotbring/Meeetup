<template>
  <div class="review">
    <h2>Review your meetup</h2>

    <input id="name" v-model="name" placeholder="Enter your name" />
    <br />

    <select id="location" name="location">
      <br />
      <option value="select location">Select your location</option>
      <option value="stockholm">Stockholm</option>
      <option value="milano">Milano</option>
      <option value="london">London</option>
    </select>

    <br />
    <br />

    <textarea
      input
      type="text"
      v-model="textInput"
      id="textarea"
      placeholder="Please write your review here..."
      col="30"
      name="review"
    ></textarea>
    <p>{{ message }}</p>
    <br />

    <br />

    <span class="rate"><i>★</i><i>★</i><i>★</i><i>★</i><i>★</i></span>
    <br />
    <br />
    <button id="button" v-on:click="submit('Your review has been submitted')">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      textInput: "",
    };
  },

  methods: {
    submit: function(message) {
      alert(message);
    },
  },
  computed: {
    message() {
      const maxLength = 100;
      if (this.textInput.length === 0) {
        return "";
      }
      let remaining = maxLength - this.textInput.length;
      return `There are ${remaining} charactes remaining.`;
    },
  },
};
</script>

<style scoped>
#name,
#location {
  width: 30%;
  padding: 10px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}
#textarea {
  width: 30%;
  height: 100px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: white;
  resize: none;
}
#button {
  background-color: #6fa4c7;
  border: none;
  color: white;
  padding: 16px 30px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}

/* These styles are applied by default.
   They will also override the hover
   style for all stars to the right
   of the currently hovered star. */
.rate i,
.rate i:hover ~ i {
  color: #222;
  text-shadow: none;
  transition: color 200ms, text-shadow 200ms;
  /* This will remove the delay when
     moving the cursor left or right
     within the set of stars. */
  transition-delay: 0;
}

/* This is the style that will be
   applied to all stars and then
   subsequently removed from the stars
   to the right of the one being
   hovered. */
.rate:hover i {
  color: #fc0;
  text-shadow: #fc0 0 0 20px;
}

/* Make the effect apply one star at a
   time. Limiting the selector to when
   .rate is hovered removes the effect
   without delay when cursor leaves
   the .rate area. */
.rate:hover i:nth-child(2) {
  transition-delay: 30ms;
}

.rate:hover i:nth-child(3) {
  transition-delay: 60ms;
}

.rate:hover i:nth-child(4) {
  transition-delay: 90ms;
}

.rate:hover i:nth-child(5) {
  transition-delay: 120ms;
}

/* Miscellaneous styles. */
.rate i {
  cursor: pointer;
  font-style: normal;
}

/* body {
  align-items: center;
  background: #000;
  display: flex;
  font-size: 48px;
  height: 100%;
  justify-content: center;
  margin: 0;
} */
/* #review {
  border-radius: 10px;
  background-color: #bfdce9;
  padding: 30px;
  position: absolute;
  top: 0px;
  right: 0px;
} */
</style>
