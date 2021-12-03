<template>
  <div>
    <div class="header">
      <div class="header-wrapper">
        <div class="logo-circle-box" id="logo-circle-box"></div>
        <div class="logo" id="logo">
          <router-link to="/"> logo</router-link>
        </div>
        <nav>
          <div class="nav-links" id="navLinks">
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/oyster">Oyster</router-link>
              </li>
              <li>
                <router-link to="/caviar">Caviar</router-link>
              </li>
              <li>
                <router-link to="/urchin">Urchin</router-link>
              </li>
              <li>
                <router-link to="/lobster">Lobster</router-link>
              </li>
              <li>
                <router-link to="/contact-us">Contact</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  props: {},
  setup() {
    // function closemenu() {
    //   var navLinks = document.getElementById("navLinks");
    //   navLinks.style.right = "-350px";
    //   console.log("clicked close");
    // }
    // function openmenu() {
    //   var navLinks = document.getElementById("navLinks");
    //   navLinks.style.right = "0px";
    //   console.log("clicked open");
    // }
    // return {
    //   closemenu,
    //   openmenu,
    // };

    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("logo").style.height = "60px";
        document.getElementById("logo-circle-box").style.top = "-200%";
      } else {
        document.getElementById("logo").style.height = "100px";
        document.getElementById("logo-circle-box").style.top = "-150%";
      }
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
}
.header {
  height: 100px;
  background: #222222;
  width: 100%;
  position: fixed;
  z-index: 99;
  transition: 0.2s;
}
.header-wrapper {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.logo-circle-box {
  background: #222222;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  left: 15px;
  top: -150%;
  transition: 0.2s;
}
.logo {
  /* float: left;
  display: flex;
  justify-content: center; */
  height: 100px;
  width: 150px;
  background: pink;
  margin-left: 90px;
  margin-top: 15px;
  z-index: 2;
  transition: 0.2s;
}
nav {
  float: right;
  line-height: 100px;
}

nav ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  margin-right: 30px;
  position: relative;
}
nav ul li a {
  text-decoration: none;
  font-family: "Work Sans", sans-serif;
  letter-spacing: 1px;
  font-size: 18px;
  margin: 0 20px;
  color: #fff;
  /* text-transform:uppercase; */
}
nav ul li :hover {
  color: #ffd008;
  cursor: pointer;
}
</style>
