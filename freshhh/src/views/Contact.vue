<template>
  <div>
    <headernav />
    <div style="display: block; height: 100px"></div>

    <div class="hero-section hero-image">
      <div class="hero-wrapper"><h1>Contact Us</h1></div>
    </div>
    <div class="contact-section">
      <div class="contact-section-wrapper">
        <div class="box box-content-1">
          <h2>Call Us</h2>
          <p>+6016-323 5018</p>
        </div>
        <div class="box box-image-1">
          <!-- <img src="../assets/urchin_image.jpg" /> -->
        </div>
        <div class="box box-content-2">
          <h2>Email</h2>
          <p>freshhhco9@gmail.com</p>
        </div>
        <div class="box box-image-2"></div>
        <div class="box box-content-3">
          <h2>Address</h2>
          <p>
            NO. 15, Jlana 34b, Kampung Cheras Baru, 56100 Kuala Lumpur, Selangor
          </p>
        </div>
        <div class="box box-image-3"></div>
      </div>
    </div>
    <footernav />
  </div>
</template>

<script>
import headernav from "../components/header.vue";
import footernav from "../components/footer.vue";
export default {
  name: "Contact",
  components: { headernav, footernav },
};
</script>

<style scoped>
.hero-section {
  height: 30vh;
}
.hero-image {
  position: relative;
}
.hero-image::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/contact_us_hero.png");
  background-size: 110%;
  background-position-y: 54%;
  background-position-x: 55%;
  z-index: -1;
  filter: brightness(0.5);
}

.hero-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.hero-wrapper h1 {
  font-family: "Quattrocento", serif;
  font-size: 48px;
  letter-spacing: 30px;
  text-transform: uppercase;
  color: white;
}

.contact-section {
  min-height: 400px;
  width: 100%;
  background: #231f20;
}
.contact-section-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}
.box {
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.box-content-1 {
  background: #ffe9c8;
}
.box-content-1 h2 {
  font-family: "Quattrocento", serif;
  font-size: 32px;
  color: black;
}
.box-content-1 p {
  font-family: "Work Sans", sans-serif;
  color: black;
}
.box-content-2 {
  background: #cfaf7e;
}
.box-content-2 h2 {
  font-family: "Quattrocento", serif;
  font-size: 32px;
  color: black;
}
.box-content-2 p {
  font-family: "Work Sans", sans-serif;
  color: black;
}
.box-content-3 {
  background: #807464;
}
.box-content-3 h2 {
  font-family: "Quattrocento", serif;
  font-size: 32px;
  color: white;
}
.box-content-3 p {
  font-family: "Work Sans", sans-serif;
  color: white;
  width: 80%;
}
.box-image-1 {
  position: relative;
}
.box-image-1::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/urchin_image.jpg");
  background-size: cover;
  background-position-x: 50%;
  filter: brightness(0.7);
}
.box-image-2 {
  position: relative;
}
.box-image-2::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/oyster_section.jpg");
  background-size: cover;
  background-position-x: 50%;
  filter: brightness(0.7);
}
.box-image-3 {
  position: relative;
}
.box-image-3::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/caviar_image.jpg");
  background-size: cover;
  background-position-x: 70%;
  filter: brightness(0.7);
}

@media (max-width: 555px) {
  .hero-wrapper h1 {
    font-size: 36px;
    letter-spacing: 20px;
  }
}
</style>
