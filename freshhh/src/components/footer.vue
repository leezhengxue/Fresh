<template>
  <div>
    <div class="footer footer-image">
      <div class="footer-wrapper">
        <h2>follow us</h2>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div class="icons-container">
          <div class="fa fa-facebook"></div>
          <div class="fa fa-instagram"></div>
          <div class="fa fa-whatsapp"></div>
        </div>
        <h3>freshhhco9@gmail.com</h3>
        <h3>+6016-323 5018</h3>

        <div class="line"></div>
        <h4>Copyright © 2021. Freshhh Sdn. Bhd. All rights reserved.</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  props: {},
  setup() {},
};
</script>

<style scoped>
.footer {
  height: 250px;
  width: 100%;
}
.footer-image {
  position: relative;
}
.footer-image::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/footer_background.jpeg");
  background-size: cover;

  background-position-y: 52%;
  z-index: -1;
  filter: brightness(0.5);
}
.footer-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Work Sans", sans-serif;
  color: white;
}
.footer-wrapper h2 {
  font-size: 16px;
  text-transform: uppercase;
  margin: 3px 0;
}
.footer-wrapper h3 {
  font-size: 18px;
  font-weight: lighter;
  margin: 3px 0;
}
.footer-wrapper h4 {
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: lighter;
}
.line {
  height: 3px;
  width: 80%;
  background: white;
  margin: 20px auto;
}
.icons-container {
  display: flex;
  justify-content: center;
}
.fa {
  padding: 20px;
  text-align: center;
  margin: 10px;
  font-size: 30px;
  width: 30px;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fa-whatsapp {
  height: 10px;
  width: 10px;
  background: white;
  color: black;
}
.fa-instagram {
  height: 10px;
  width: 10px;
  background: white;
  color: black;
}
.fa-facebook {
  height: 10px;
  width: 10px;
  background: white;
  color: black;
}
</style>
