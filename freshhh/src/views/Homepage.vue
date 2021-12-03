<template>
  <div>
    <headernav />
    <div style="display: block; height: 100px"></div>

    <div class="hero-section"></div>

    <div class="flow-section"></div>

    <div class="oyster-section">
      <div class="oyster-section-wrapper">
        <div class="description-container">
          <div class="description-wrapper">
            <h2>Premium</h2>
            <p>
              Our oysters are truly free-range and live naturally on the seabed
              rather than being grown in nets and cages above the seabed. We
              believe this is one of the reasons why our oysters are some of the
              best in the world.
            </p>
            <h4>More information ➜</h4>
          </div>
        </div>
        <div class="image-container">Image</div>
      </div>
    </div>

    <div class="caviar-section"></div>

    <div class="urchin-section">
      <div class="urchin-section-wrapper">
        <div class="image-container">Image</div>
        <div class="description-container">
          <div class="description-wrapper" style="color: white">
            <h2>High Class</h2>
            <p>
              Our sea urchin has a bright yellow to orange color, a sweet
              flavor, and a creamy texture. It is delicious raw or in omelets,
              folded into pasta, or pureed into butter. Sea Urchin is perishable
              and is best eaten on the day of arrival.
            </p>
            <h4>More information ➜</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="lobster-section"></div>

    <div class="contact-section"></div>
  </div>
</template>

<script>
import headernav from "../components/header.vue";
export default {
  name: "Homepage",
  components: { headernav },
};
</script>

<style scoped>
.hero-section {
  height: 55vh;
  background: orange;
}
.flow-section {
  height: 35vh;
  background: yellow;
}

/* can set min height for each section so that it can be longer if the content is more */
.oyster-section {
  height: 55vh;
  background: white;
}
.oyster-section-wrapper {
  height: 100%;
  display: flex;
}

/* ---------- DESCRIPTION BOX ---------- */
.description-container {
  width: 50vw;
  height: 100%;
  display: flex;
}
.description-wrapper {
  width: 80%;
  margin: auto auto;
}
.description-wrapper h2 {
  width: 100%;
  font-size: 36px;
  text-align: left;
  padding: 20px 0;
  text-transform: uppercase;
}
.description-wrapper p {
  font-size: 24px;
  line-height: 40px;
  text-align: justify;
}
.description-wrapper h4 {
  width: 100%;
  font-size: 18px;
  text-align: right;
  padding: 20px 0;
}
/* ---------- DESCRIPTION BOX ---------- */

/* ---------- IMAGE BOX ---------- */
.image-container {
  width: 50vw;
  height: 100%;
  background: grey;
}
/* ---------- IMAGE BOX ---------- */

.caviar-section {
  height: 70vh;
  background: #333333;
}
.urchin-section {
  height: 55vh;
  background: #6a5f57;
}
.urchin-section-wrapper {
  height: 100%;
  display: flex;
}
.lobster-section {
  height: 70vh;
  background: #3d3535;
}
.contact-section {
  height: 50vh;
  background: #a48970;
}
</style>
