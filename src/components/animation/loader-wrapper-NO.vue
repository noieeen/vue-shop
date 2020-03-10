<template>
  <div>
    <div id="loader-wrapper">
      <div id="loader"></div>

      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
    </div>

    <div id="content">
      <h1>Page Loaded!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto expedita
        perspiciatis id explicabo ut excepturi repudiandae iure optio similique
        facilis recusandae ratione pariatur quod consectetur doloribus
        laboriosam esse obcaecati eius velit veniam reprehenderit quam,
        necessitatibus ducimus quidem. Neque deserunt quis ex cupiditate itaque,
        dolorem consectetur ratione, accusantium quibusdam modi ea at sint iste
        quod aspernatur?
      </p>
    </div>
  </div>
</template>
<script>
export default {};
$(document).ready(function() {
  // Fakes the loading setting a timeout
  setTimeout(function() {
    $("body").addClass("loaded");
  }, 3500);
});
</script>
<style lang="scss">
@import "bourbon";

/* Demo Styles */

#content {
  margin: 0 auto;
  padding-bottom: 50px;
  width: 80%;
  max-width: 978px;
}

h1 {
  font-size: 40px;
}

/* The Loader */

#loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  overflow: hidden;

  // Modernizr no-js fallback
  .no-js & {
    display: none;
  }
}

#loader {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #16a085;
  animation: spin 1.7s linear infinite;
  z-index: 11;

  &:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #e74c3c;
    animation: spin-reverse 0.6s linear infinite;
  }

  &:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #f9c922;
    animation: spin 1s linear infinite;
  }
}

// Bourbon mixins
@include keyframes(spin) {
  0% {
    @include transform(rotate(0deg));
  }
  100% {
    @include transform(rotate(360deg));
  }
}

@include keyframes(spin-reverse) {
  0% {
    @include transform(rotate(0deg));
  }
  100% {
    @include transform(rotate(-360deg));
  }
}

#loader-wrapper .loader-section {
  position: fixed;
  top: 0;
  width: 51%;
  height: 100%;
  background: #222;
  z-index: 10;
}

#loader-wrapper .loader-section.section-left {
  left: 0;
}

#loader-wrapper .loader-section.section-right {
  right: 0;
}

/* Loaded styles */

.loaded #loader-wrapper .loader-section.section-left {
  transform: translateX(-100%);
  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.loaded #loader-wrapper .loader-section.section-right {
  transform: translateX(100%);
  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.loaded #loader {
  opacity: 0;
  transition: all 0.3s ease-out;
}

.loaded #loader-wrapper {
  visibility: hidden;
  transform: translateY(-100%);
  transition: all 0.3s 1s ease-out;
}
</style>
/*
npm install --save bourbon
https://codepen.io/rickzanutta/pen/yjaeB?__cf_chl_jschl_tk__=208d5a693779914264ecfd85139ea536806f948c-1583833338-0-AcP_4U-47tumXCeKWKQWmjorzbvMWU7YJCIe9KgcirPbLYS3eo5YNNYWOcaxavvufJpBARo5z5qcpSsEUIZxm0AhQf2QgL9UxCN8R7Spf97_HXp7VTUd5lpANK3rZtJCB3mji064mxsRmAESGCo90vAlbW2DhbPuphSzeEdrnOwq-QDymeofmaqm7838WqHFpZIXWIBtBILHz6f-9SSQB04PJ4M2kFwvu9FPpdmQTFUTP9m1tLx_TX1YGcMcMc1GhT0XpWJ5rs36zxKuUwAtsItLAVcGfu8HCcYZOwr78W6wFNW6oDeMyoNZJ7V1svbPJ_adq3vkiSu3QfPpfKuYl_UtmyEQvpfkOS5wBY-jSJQU
 */