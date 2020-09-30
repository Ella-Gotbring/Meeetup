<template>
  <div class="fa">
    <hr />
    <a href="#" class="fa fa-facebook"></a>
    <a href="#" class="fa fa-twitter"></a>
    <a href="#" class="fa fa-instagram"></a>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <p>
      Connect with us!
    </p>
    <hr />
    <p>{{ new Date().getFullYear() }} <strong>Ella G</strong></p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.fa {
  padding: 15px;

  width: 10%;
  /* text-align: center; */
  text-decoration: none;
  margin: 5px 2px;
}

.fa:hover {
  opacity: 0.9;
}

.fa-facebook {
  background: #3b5998;
  color: white;
}

.fa-twitter {
  background: #55acee;
  color: white;
}

.fa-instagram {
  background: #125688;
  color: white;
}
.p {
  font-size: 1rem;
}
</style>
