<template>
  <div>
    <headernav />
    <div style="display: block; height: 100px"></div>

    <div class="hero-section hero-image">
      <div class="hero-wrapper"><h1>Urchin</h1></div>
    </div>
    <div class="urchin-section">
      <div class="urchin-section-wrapper">
        <!-- <div class="urchin-image">urchin image</div> -->
        <img class="urchin-image" src="../assets/urchin_1.png" />
        <div class="content-wrapper">
          <h2>Uni Narabi</h2>
          <div class="line"></div>

          <div class="description">
            <p>
              UNI NARABI is the most sought throughout the world, they are used
              for their clean and sweet umami flavor and vibrant color. This
              particular type of yellow uni roe is best for anyone who loves uni
              and is recommended for first-time uni buyers too!
            </p>
            <div class="content-description">
              <h4>Texture</h4>
              <p>Firm, dry and creamy</p>
              <h4>Taste</h4>
              <p>Sweet, savoury with a burst of umami</p>
              <h4>Color</h4>
              <p>Yellow, Orange to Light Orange</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="urchin-section">
      <div class="urchin-section-wrapper">
        <!-- <div class="urchin-image">urchin image</div> -->
        <img class="urchin-image" src="../assets/urchin_2.png" />
        <div class="content-wrapper">
          <h2>Uni Bara</h2>
          <div class="line"></div>

          <div class="description">
            <p>
              Freshly caught BARA UNI has a bright beautiful yellow colour with
              a firm texture and tastes like chestnuts.
            </p>
            <div class="content-description">
              <h4>Texture</h4>
              <p>Firm</p>
              <h4>Taste</h4>
              <p>Sweet</p>
              <h4>Color</h4>
              <p>Yellow to Bright Orange</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footernav />
  </div>
</template>

<script>
import headernav from "../components/header.vue";
import footernav from "../components/footer.vue";
export default {
  name: "Urchin",
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
  background-image: url("../assets/urchin_hero.jpg");
  background-size: cover;
  background-position-y: 50%;
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
  letter-spacing: 50px;
  text-transform: uppercase;
  color: white;
}
.urchin-section {
  min-height: 400px;
  width: 100%;
  background: #231f20;
  display: flex;
  justify-content: center;
  padding: 30px 0;
}
.urchin-section-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.urchin-image {
  height: 300px;
}
.content-wrapper {
  width: 30%;
  margin: 10px;
  min-width: 300px;
  color: white;
}
.content-wrapper h2 {
  font-family: "Work Sans", sans-serif;
  text-align: left;
  margin: 20px 0;
}
.line {
  height: 3px;
  width: 50%;
  background: white;
}
.description p {
  text-align: left;
  margin: 20px 0;
  font-family: "Quicksand", sans-serif;
}
.content-description {
  display: grid;
  /*  display:flex;
   flex-wrap:wrap; */
  grid-template-columns: 100px auto;
  margin: 20px auto 20px 0;
}
.content-description h4 {
  font-family: "Rancho", cursive;
  font-weight: lighter;
  letter-spacing: 1px;
  font-size: 25px;
  margin: 0;
  text-align: left;
  margin: auto 0 auto 0;
}
.content-description p {
  margin: auto 0 auto 10px;
}

@media (max-width: 555px) {
  .hero-wrapper h1 {
    font-size: 36px;
    letter-spacing: 20px;
  }
}
</style>
