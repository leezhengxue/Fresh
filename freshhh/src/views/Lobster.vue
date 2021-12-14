<template>
  <div>
    <headernav />
    <div style="display: block; height: 100px"></div>

    <div class="hero-section hero-image">
      <div class="hero-wrapper"><h1>Lobster</h1></div>
    </div>
    <div style="height: 100%; width: 100%; position: relative">
      <div class="vertical-line"></div>
      <div class="lobster-section">
        <div class="lobster-image-wrapper">
          <img class="lobster-image" src="../assets/lobster_1.png" />
        </div>
        <div class="lobster-section-1">
          <div class="lobster-section-wrapper">
            <div class="content-wrapper">
              <h2>Boston Lobster</h2>
              <div class="line"></div>

              <div class="description">
                <p>
                  Boston Lobster is a popular seafood dish commonly served
                  boiled or steamed. It has a bright red shell and snow-white
                  meat when cooked. An extremely versatile lobster, it can be
                  served in many dishes; lobster mac n cheese, lobster roll,
                  lobster porridge, and more! It is highly favoured for its
                  tender and juicy claw meat with a sweet and succulent
                  pronounced flavour.
                </p>
                <div class="content-description">
                  <h4>Origin: USA / Canada</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- /* second lobster*/ -->
      <div class="lobster-section">
        <div class="lobster-image-2-wrapper">
          <img class="lobster-image-2" src="../assets/lobster_2.png" />
        </div>
        <div class="lobster-section-2">
          <div class="lobster-section-wrapper">
            <div class="content-wrapper">
              <h2>Blue Lobster</h2>
              <div class="line"></div>

              <div class="description">
                <p>
                  European Blue Lobsters are highly-prized and commonly used by
                  Michelin-starred restaurants for their top quality and texture
                  of meat. A unique and premium lobster compared to Boston
                  lobster, the European Blue Lobster meat is tender, delicate,
                  and sweet.
                </p>
                <div class="content-description">
                  <h4>Origin: South of Melbourne / South of Tasmania</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- /* third lobster*/ -->
      <div class="lobster-section">
        <div class="lobster-image-wrapper">
          <img class="lobster-image" src="../assets/lobster_3.png" />
        </div>
        <div class="lobster-section-1">
          <div class="lobster-section-wrapper">
            <div class="content-wrapper">
              <h2>Southern Rock Lobster</h2>
              <div class="line"></div>

              <div class="description">
                <p>
                  Australian Southern Rock Lobster (jasus edwardsii), commonly
                  known as spiny rock lobster, is one of the world’s most
                  indulgent foods. The spiny rock lobster's crystal white meat
                  is firm and noted for its premium quality and luxurious taste.
                  It is an excellent seafood dish to serve at your next
                  gathering with family and friends!
                </p>
                <div class="content-description">
                  <h4>Origin: Scotland / Netherland</h4>
                </div>
              </div>
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
  name: "Lobster",
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
  background-image: url("../assets/lobster_hero.jpg");
  background-size: cover;
  background-position-y: 45%;
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
/* remove the below for mobile */
/* lobster image position, top, margin-top, left, margin-left */
/* lobster-section-1 margin-left */
.vertical-line {
  width: 3px;
  height: 90%;
  background: white;
  position: absolute;
  left: 50%;
  top: 5%;
  z-index: 2;
}
.lobster-section {
  background: #231f20;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  position: relative;
  z-index: 1;
  padding: 20px 0;
}
.lobster-image-wrapper {
  width: 250px;
  height: 300px;
  position: absolute;
  top: 50%;
  margin-top: -150px;
  left: 50%;
  margin-left: -130px;
  z-index: 2;
  display: flex;
  justify-content: center;
}
.lobster-image {
  height: 300px;
}
.lobster-section-1 {
  min-height: 400px;
  width: 50%;
  background: #231f20;
  display: flex;
  margin-left: auto;
  z-index: 3;
}
.lobster-section-1 .lobster-section-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.lobster-section-1 .content-wrapper {
  width: 100%;
  margin: 10px;
  text-align: left;
}
.lobster-section-1 .content-wrapper h2 {
  font-family: "Work Sans", sans-serif;
  color: white;
  margin: 15px 0;
}

.lobster-section-1 .line {
  height: 3px;
  width: 70%;
  background: white;
}
.lobster-section-1 .description {
  font-family: "Quicksand", sans-serif;
  color: white;
  width: 80%;
  text-align: left;
}
.lobster-section-1 .description p {
  margin: 15px 0;
  line-height: 25px;
}
.lobster-section-1 .content-description {
  width: 100%;
}
.lobster-section-1 .content-description h4 {
  margin: 0;
  text-align: left;
  margin-bottom: 10px;
}
.lobster-section-1 .content-description p {
  margin: 0 0 0 10px;
}

/* lobster section version 2 ( left side)*/

.lobster-image-2-wrapper {
  width: 250px;
  height: 300px;
  position: absolute;
  top: 50%;
  margin-top: -150px;
  left: 50%;
  margin-left: -120px;
  z-index: 2;
  display: flex;
  justify-content: center;
}
.lobster-image-2 {
  height: 300px;
}
.lobster-section-2 {
  min-height: 400px;
  width: 50%;
  background: #231f20;
  display: flex;
  margin-right: auto;
  z-index: 3;
}
.lobster-section-2 .lobster-section-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
}

.lobster-section-2 .content-wrapper {
  width: 100%;
  margin: 10px;
  text-align: right;
}
.lobster-section-2 .content-wrapper h2 {
  font-family: "Work Sans", sans-serif;
  color: white;
  margin: 15px 0;
}
.lobster-section-2 .line {
  height: 3px;
  width: 70%;
  margin-left: auto;
  background: white;
}
.lobster-section-2 .description {
  font-family: "Quicksand", sans-serif;
  color: white;
  width: 80%;
  margin: 0 0 0 auto;
}
.lobster-section-2 .description p {
  margin: 15px 0;
  line-height: 25px;
}
.lobster-section-2 .content-description {
  width: 100%;
}
.lobster-section-2 .content-description h4 {
  margin: 0;
  margin-bottom: 10px;
}

@media (max-width: 555px) {
  .hero-wrapper h1 {
    font-size: 36px;
    letter-spacing: 20px;
  }
}

@media (max-width: 425px) {
  .vertical-line {
    display: none;
  }
  .lobster-image-wrapper {
    position: static;
    top: 0;
    margin-top: 0;
    left: 0;
    margin-left: 0;
  }
  .lobster-section-1 {
    width: 80%;
    margin-left: 0;
  }
  .lobster-section-1 .description {
    width: 100%;
  }
  .lobster-image-2-wrapper {
    position: static;
    top: 0;
    margin-top: 0;
    left: 0;
    margin-left: 0;
  }
  .lobster-section-2 {
    width: 80%;
    margin-right: 0;
  }
  .lobster-section-2 .description {
    width: 100%;
  }
}
</style>
