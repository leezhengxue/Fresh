<template>
  <div>
    <headernav />
    <div style="display: block; height: 100px"></div>

    <div class="hero-section hero-image">
      <div class="hero-wrapper">
        <div class="fresh-animation">
          <svg viewBox="0 0 100 20">
            <defs>
              <linearGradient id="gradient">
                <stop color="#000"></stop>
              </linearGradient>
              <pattern
                id="wave"
                x="0"
                y="-0.5"
                width="100%"
                height="100%"
                patternUnits="userSpaceOnUse"
              >
                <path
                  id="wavePath"
                  d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                  mask="url(#mask)"
                  fill="#231f20"
                >
                  <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="1.5s"
                    type="translate"
                    from="0,0"
                    to="40,0"
                    repeatCount="indefinite"
                  ></animateTransform>
                </path>
              </pattern>
            </defs>
            <text
              text-anchor="middle"
              x="50"
              y="15"
              font-size="20"
              fill="white"
              fill-opacity="0.4"
            >
              FRESHHH
            </text>
            <text
              text-anchor="middle"
              x="50"
              y="15"
              font-size="20"
              fill="url(#wave)"
              fill-opacity="1"
            >
              FRESHHH
            </text>
          </svg>
        </div>
        <h1>Top-tier seafood that are not just fresh but alive</h1>
      </div>
    </div>

    <div class="flow-section">
      <div class="flow-section-wrapper">
        <h1>How it works</h1>
        <div class="flow-steps-container">
          <div class="flow-steps-wrapper">
            <div class="step">
              <div class="circle"><p>1</p></div>
              <div class="icon-container">
                <img src="../assets/icon-01.png" />
              </div>
              <p>
                The freshest catch from sea to land everyday. Orders are all
                hand selected and prepared by experts.
              </p>
            </div>
            <div class="step">
              <div class="circle"><p>2</p></div>
              <div class="icon-container">
                <img src="../assets/icon-02.png" />
              </div>
              <p>Ingredients are delivered to Malaysia within 24 hours.</p>
            </div>
            <div class="step">
              <div class="circle"><p>3</p></div>
              <div class="icon-container">
                <img src="../assets/icon-03.png" />
              </div>
              <p>
                At Freshhh, we always ensure the condition of our premium
                products and carefully pack each order.
              </p>
            </div>
            <div class="step">
              <div class="circle"><p>4</p></div>
              <div class="icon-container">
                <img src="../assets/icon-04.png" />
              </div>
              <p>
                Our quality is guaranteed as within 48 hours of catch, your
                orders are on their way to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="oyster-section">
      <div class="oyster-section-wrapper">
        <div class="image-container-1 oyster-image">
          <h1>Oyster</h1>
        </div>
        <div class="description-container-1">
          <div class="description-wrapper">
            <h2 style="color: black">Premium</h2>
            <p style="color: black">
              Our oysters are truly free-range and live naturally on the seabed
              rather than being grown in nets and cages above the seabed. We
              believe this is one of the reasons why our oysters are some of the
              best in the world.
            </p>

            <router-link to="/oyster" class="rm-text-decoration"
              ><h4 style="color: black">More information ➜</h4></router-link
            >
          </div>
        </div>
      </div>
    </div>

    <div class="caviar-section">
      <div class="caviar-section-wrapper">
        <div class="image-container-2 caviar-image"><h1>Caviar</h1></div>
        <div class="description-container-2">
          <div class="description-wrapper">
            <h2>The World's Finest</h2>
            <p>
              Freshhh offers a complete line of delicious, high-quality caviar
              you can buy online for delivery right to your doorstep. With
              decades of experience, we source from the best caviar mongers,
              from reputable sources that always deliver fresh caviar of the
              highest quality.
            </p>
            <router-link to="/caviar" class="rm-text-decoration"
              ><h4>More information ➜</h4></router-link
            >
          </div>
        </div>
      </div>
    </div>

    <div class="urchin-section">
      <div class="urchin-section-wrapper">
        <div class="image-container-1 urchin-image"><h1>Urchin</h1></div>
        <div class="description-container-1">
          <div class="description-wrapper">
            <h2>High Quality</h2>
            <p>
              Our sea urchin has a bright yellow to orange color, a sweet
              flavor, and a creamy texture. It is delicious raw or in omelets,
              folded into pasta, or pureed into butter. Sea Urchin is perishable
              and is best eaten on the day of arrival.
            </p>
            <router-link to="/urchin" class="rm-text-decoration"
              ><h4>More information ➜</h4></router-link
            >
          </div>
        </div>
      </div>
    </div>

    <div class="lobster-section">
      <div class="lobster-section-wrapper">
        <div class="image-container-2 lobster-image"><h1>Lobster</h1></div>
        <div class="description-container-2">
          <div class="description-wrapper">
            <h2>Luxurious</h2>
            <p>
              Freshhh ship live lobsters to your door, so you can experience the
              thrill and flavor of cooking fresh lobster right at home. You will
              chuckle when you hear from us that "Lobsters will arrive ALIVE and
              FEISTY"!
            </p>
            <router-link to="/lobster" class="rm-text-decoration"
              ><h4>More information ➜</h4></router-link
            >
          </div>
        </div>
      </div>
    </div>

    <div class="contact-section">
      <div class="contact-section-wrapper">
        <div class="description-container-1">
          <div class="description-wrapper">
            <p style="color: black">
              Freshhh is a fishmonger based in Kuala Lumpur, we specialize in
              oysters supply. Freshhh have a great pleasure in bringing to you
              Malaysia’s one and only premium seafood supplier. Our oyster is
              not just fresh, but alive, our oyster is airflow from the Southern
              Oceans around Australia and northern Europe.
            </p>
          </div>
        </div>
        <div class="contact-link">
          <router-link
            to="/contact-us"
            class="rm-text-decoration"
            style="color: black"
            >Contact Us ➜</router-link
          >
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
  name: "Homepage",
  components: { headernav, footernav },
};
</script>

<style scoped>
.hero-section {
  height: 55vh;
}
.hero-image {
  position: relative;
  /* background-image: url("../assets/hero_section.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 55%;
  filter: brightness(0.5); */
}
.hero-image::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/hero_section.png");
  background-size: cover;
  background-position-y: 55%;
  z-index: -1;
  filter: brightness(0.7);
}
.hero-wrapper {
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 auto;
  margin-top: auto;
  z-index: 2;
}
svg {
  font-family: "Cabin Condensed", sans-serif;
  font-weight: bold;
  max-width: 600px;
}
.fresh-animation {
  margin-top: auto;
}
.hero-wrapper h1 {
  font-family: "Quattrocento", serif;
  font-size: 36px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  padding-bottom: 50px;
  /* width: 50%; */
}
.flow-section {
  min-height: 35vh;
  background: #231f20;
}
.flow-section-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;
}
.flow-section-wrapper h1 {
  font-family: "Quattrocento", serif;
  font-size: 36px;
  color: white;
  width: 100%;
}
.flow-steps-container {
  width: 90%;
}
.flow-steps-wrapper {
  display: flex;
}
.step {
  margin: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.step p {
  color: white;
  font-family: "Work Sans", sans-serif;
}
.circle {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: solid white 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle p {
  color: white;
}
.icon-container {
  height: 150px;
  width: 150px;
}
.icon-container img {
  height: 100%;
  width: 100%;
}

/* can set min height for each section so that it can be longer if the content is more */
.oyster-section {
  min-height: 55vh;
  background: white;
}
.oyster-section-wrapper {
  height: 100%;
  display: flex;
}

/* ---------- DESCRIPTION BOX ---------- */
.description-container-1 {
  width: 50vw;
  /* height: 100%; */
  display: flex;
  align-items: center;
}
.description-container-1 .description-wrapper {
  width: 80%;
  margin: 50px auto;
}
.description-container-2 {
  width: 100%;
  /* height: 30vh; */
  display: flex;
}
.description-container-2 .description-wrapper {
  width: 90%;
  margin: 50px auto;
}
.description-wrapper h2 {
  font-family: "Quattrocento", serif;
  width: 100%;
  font-size: 36px;
  letter-spacing: 12px;
  text-align: left;
  margin: 30px 0;
  text-transform: uppercase;
  color: white;
}
.description-wrapper p {
  font-family: "Work Sans", sans-serif;
  font-size: 24px;
  font-weight: 0;
  line-height: 40px;
  margin: 40px 0;
  text-align: justify;
  color: white;
}
.description-wrapper h4 {
  font-family: "Work Sans", sans-serif;
  width: 100%;
  font-size: 18px;
  text-align: right;
  margin: 30px 0;
  color: white;
}
/* ---------- DESCRIPTION BOX ---------- */

/* ---------- IMAGE BOX ---------- */
.image-container-1 {
  width: 50vw;
  min-height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container-1 h1 {
  font-family: "Quattrocento", serif;
  font-size: 72px;
  color: white;
  letter-spacing: 25px;
  text-transform: uppercase;
  z-index: 2;
}
.image-container-2 {
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-container-2 h1 {
  font-family: "Quattrocento", serif;
  font-size: 72px;
  color: white;
  letter-spacing: 25px;
  text-transform: uppercase;
  z-index: 2;
}
/* ---------- IMAGE BOX ---------- */

.caviar-section {
  min-height: 70vh;
  background: #333333;
}
.caviar-section-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.urchin-section {
  min-height: 55vh;
  background: #6a5f57;
}
.urchin-section-wrapper {
  height: 100%;
  display: flex;
}
.oyster-section-wrapper .image-container-1 {
  order: 3;
}
.lobster-section {
  min-height: 70vh;
  background: #3d3535;
}
.lobster-section-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.contact-section {
  min-height: 50vh;
  background: #a48970;
}
.contact-section-wrapper {
  height: 100%;
  display: flex;
}
.contact-link {
  width: 50vw;
  min-height: 50vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Work Sans", sans-serif;
  font-size: 24px;
  letter-spacing: 12px;
  text-transform: uppercase;
}

.rm-text-decoration {
  text-decoration: none;
}
/* -------------------------------IMAGES--------------------------------- */
.oyster-image {
  position: relative;
}
.oyster-image::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/oyster_section.jpg");
  background-size: cover;
  background-position-y: 55%;
  z-index: 1;
  filter: brightness(0.6);
}

.urchin-image {
  position: relative;
  /* background-image: url("../assets/urchin_section.jpg");
  filter: brightness(0.7);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 55%; */
}
.urchin-image::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/urchin_section.jpg");
  background-size: cover;
  background-position-y: 55%;
  z-index: 1;
  filter: brightness(0.6);
}
.caviar-image {
  position: relative;
  /* background-image: url("../assets/caviar_section.jpeg");
  filter: brightness(0.7);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 55%; */
}
.caviar-image::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/caviar_section.jpeg");
  background-size: cover;
  background-position-y: 55%;
  z-index: 1;
  filter: brightness(0.6);
}
.lobster-image {
  position: relative;
  /* background-image: url("../assets/lobster_section.jpg");
  filter: brightness(0.7);
  background-repeat: no-repeat;
  background-size: 160%;
  background-position-y: 65%; */
}
.lobster-image::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/lobster_section.jpg");
  background-size: 150%;
  background-position-y: 65%;
  z-index: 1;
  filter: brightness(0.6);
}

@media (max-width: 1024px) {
  .oyster-section {
    min-height: 70vh;
    background: white;
  }
  .oyster-section-wrapper {
    flex-wrap: wrap;
  }
  .oyster-section-wrapper .image-container-1 {
    order: 0;
  }
  .urchin-section {
    min-height: 70vh;
    background: #bb7645;
  }
  .urchin-section-wrapper {
    flex-wrap: wrap;
  }
  .contact-section {
    min-height: 70vh;
    background: #a48970;
  }
  .contact-section-wrapper {
    flex-wrap: wrap;
  }
  .contact-link {
    width: 100%;
    min-height: 50vh;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Work Sans", sans-serif;
    font-size: 24px;
    letter-spacing: 12px;
    text-transform: uppercase;
  }
  .description-container-1 {
    width: 100%;
  }
  .description-container-1 .description-wrapper {
    width: 90%;
  }
  .image-container-1 {
    width: 100%;
    min-height: 50vh;
  }
}

@media (max-width: 1024px) {
  .flow-steps-wrapper {
    flex-wrap: wrap;
  }
}
@media (max-width: 425px) {
  .description-wrapper h2 {
    font-size: 32px;
    letter-spacing: 8px;
  }
  .image-container-1 h1 {
    font-size: 48px;
    letter-spacing: 15px;
  }

  .image-container-2 h1 {
    font-size: 48px;
    letter-spacing: 15px;
  }
}
</style>
