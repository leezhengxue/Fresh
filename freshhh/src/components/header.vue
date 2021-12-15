<template>
  <div>
    <div class="header">
      <div class="header-wrapper">
        <div class="logo-circle-box" id="logo-circle-box"></div>
        <div class="logo" id="logo">
          <router-link to="/">
            <img
              class="logo-image"
              id="logo-image"
              src="../assets/logo_trans_w.png"
          /></router-link>
        </div>
        <nav>
          <div class="burger" @click="openmenu">
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
          </div>
          <div class="nav-links" id="navLinks">
            <ul>
              <div class="burger-close" @click="closemenu">
                <a class="close-logo">x</a>
              </div>
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

        document.getElementById("logo").style.marginTop = "0px";
        document.getElementById("logo-image").style.height = "100px";
        document.getElementById("logo-circle-box").style.top = "-200%";
      } else {
        document.getElementById("logo").style.height = "100px";

        document.getElementById("logo").style.marginTop = "15px";
        document.getElementById("logo-image").style.height = "120px";
        document.getElementById("logo-circle-box").style.top = "-150%";
      }
    }
    function closemenu() {
      var navLinks = document.getElementById("navLinks");
      navLinks.style.right = "-350px";
      console.log("clicked close");
    }
    function openmenu() {
      var navLinks = document.getElementById("navLinks");
      navLinks.style.right = "0px";
      console.log("clicked open");
    }
    return {
      closemenu,
      openmenu,
    };
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
  width: 200px;
  /* background: pink; */
  margin-left: 60px;
  margin-top: 15px;
  z-index: 2;
  transition: 0.2s;
}
.logo-image {
  height: 120px;
  width: auto;
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

/* -----------HAMBURGER------------- */
.burger {
  margin: 40px 120px 0 0;
  display: none;
}
.burger-close {
  display: none;
}
.burger-line {
  height: 3px;
  width: 30px;
  background: white;
  margin: 5px;
}
.close-logo {
  font-size: 30px;
  color: white;
  font-weight: 700;
}
@media (max-width: 768px) {
  .logo-circle-box {
    left: 50%;
    margin-left: -150px;
    top: -150%;
  }
  .logo {
    margin-left: -30px;
  }
  .burger {
    display: block;
    /* position: relative;
    left: 70px; */
    margin: 40px 20px 0 0;
  }
  .burger-close {
    display: block;
  }
  nav {
    line-height: 70px;
  }
  nav ul {
    flex-direction: column;
  }
  .nav-links {
    background: #222222;
    display: block;
    position: absolute;
    right: -350px;
    top: 0;
    height: 100vh;
    width: 280px;
    z-index: 99;
    transition: 0.5s ease-in;
  }
  .nav-links ul {
    margin: 0 auto;
  }

  nav ul li a {
    letter-spacing: 1px;
    font-size: 15px;
  }
  /* .nav-active {
    transform: translateX(0%);
  } */
  .logo {
    width: 100%;
  }
  .logo img {
    margin-left: 90px;
  }
}
</style>
