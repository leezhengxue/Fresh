<template>
  <div>
    <headernav />
    <div style="display: block; height: 100px"></div>

    <div class="hero-section hero-image">
      <div class="hero-wrapper"><h1>Caviar</h1></div>
    </div>
    <div class="caviar-section">
      <div class="content-title-wrapper">
        <h2>Siberian Sturgeon</h2>
        <p>
          The Siberian Sturgeon Caviar is the black caviar coming from the
          farmed Sturgeon. The grains of medium size have a tender structure and
          melt in your mouth, uncovering the subtle nutty flavor with sea notes.
          The beads are of a light to dark grey color with glistering
          appearance.
        </p>
      </div>
      <div class="content-description-wrapper">
        <div class="content-description-1">
          <h4>Color</h4>
          <p>Light to Dark Grey</p>
          <h4>Size</h4>
          <p>Medium to Large</p>
          <h4>Flavour</h4>
          <p>Subtle, smooth, firm bead with a strong taste of the sea</p>
        </div>
        <img class="caviar-image" src="../assets/caviar_1.png" />
      </div>
    </div>
    <div class="caviar-section">
      <div class="content-title-wrapper">
        <h2>Oscietra Caviar</h2>
        <p>
          Osetra Caviar is regarded as the most flavorful and most popular
          caviar around the world. Russian Osetra Caviar ‘Malossol’ is a true
          delight for a real connoisseur for its unique clean, sweet, crisp and
          subtle ‘nutty’ taste. Each pearl has a clear and glossy structure with
          an egg shell which is usually a little bit firmer than other types of
          caviar but still very tender and delicate.
        </p>
      </div>
      <div class="content-description-wrapper">
        <div class="content-description-1">
          <h4>Color</h4>
          <p>Black, with hints of chestnut color pearls</p>
          <h4>Size</h4>
          <p>Firm medium to large size beads</p>
          <h4>Flavour</h4>
          <p>Rich flavor of roasted nuts with bold notes of sea salt</p>
        </div>

        <img class="caviar-image" src="../assets/caviar_2.png" />
      </div>
    </div>
    <div class="caviar-section">
      <div class="content-title-wrapper">
        <h2>Herring Caviar Harus (Avruga)</h2>
        <p>
          Avruga is a product made from herring and other products (water,
          herring-40%, salt, corn starch, lemon juice, citric acid, xanthan gum,
          sodium benzoate, squid ink) that is marketed as a caviar substitute.
          Unlike caviar, it does not contain fish roe.
        </p>
      </div>
      <div class="content-description-wrapper">
        <div class="content-description-1">
          <h4>Color</h4>
          <p>Pearlescent black color</p>
          <h4>Size</h4>
          <p>Small</p>
          <h4>Flavour</h4>
          <p>A deliciously mild smoky flavor</p>
        </div>

        <img class="caviar-image" src="../assets/caviar_3.png" />
      </div>
    </div>
    <footernav />
  </div>
</template>

<script>
import headernav from "../components/header.vue";
import footernav from "../components/footer.vue";
export default {
  name: "Caviar",
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
  background-image: url("../assets/caviar_hero.jpg");
  background-size: cover;

  background-position-y: 52%;
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

.caviar-section {
  min-height: 400px;
  width: 100%;
  background: #231f20;
}

.content-title-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.content-title-wrapper h2 {
  font-family: "Work Sans", sans-serif;
  color: white;
  width: 80%;
  text-align: center;
  margin: 20px 0;
}
.content-title-wrapper p {
  font-family: "Quicksand", sans-serif;
  color: white;
  max-width: 900px;
  text-align: center;
  margin: 0;
}

.content-description-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding: 20px 0;
  width: 70%;
}
.content-description-1 {
  min-width: 250px;
  display: grid;
  /*   grid-template-columns:auto; */
  margin: 10px 20px;
  text-align: left;
  order: 1;
}
.content-description-1 h4 {
  font-family: "Rancho", cursive;
  font-weight: lighter;
  letter-spacing: 1px;
  font-size: 25px;
  color: white;
  margin: 0;
}
.content-description-1 p {
  font-family: "Quicksand", sans-serif;
  color: white;
  max-width: 250px;
  margin: 0 0 20px 0;
}

.caviar-image {
  height: 250px;
  width: 250px;
  margin: 10px;
  order: 2;
}

@media (max-width: 768px) {
  .content-description-1 {
    order: 2;
  }
  .caviar-image {
    order: 1;
  }
}

@media (max-width: 555px) {
  .hero-wrapper h1 {
    font-size: 36px;
    letter-spacing: 20px;
  }
}
</style>
