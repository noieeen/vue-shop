<template>
  <div>
    <svg
      viewBox="0 0 100 50"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <clipPath id="chop">
          <path
            d="M 1.479,13.07 H 39.13 l 3.34,-4.814 4.19,4.814 h 46.98 v 21.62 h -27.8 l -2.33,3.8 -2.56,-3.8 H 24.61 l -7.06,8.77 -6.91,-8.77 H 1.479 Z"
          />
        </clipPath>
      </defs>
      <path
        clip-path="url(#chop)"
        class="line"
        d="M -2.958,-3.78 12.98,32.62 17.75,21.94 22.1,32.13 33.44,6.546 h 6.49 L 23.71,44.62 h 6.08 L 42.56,15.45 55.51,44.62 H 61.6 L 45.5,6.546 h 6.48 L 63.35,31.8 73.51,10.17 h 25.56 l 3.53,4.54 -22.64,-0.17 v 18.74 l 22.34,0.1 0.4,-10.85 -22.24,0.33"
      />
    </svg>
  </div>
</template>
<script>
export default {};
</script>
<style>
.line {
  fill: none;
  stroke-width: 2.2;
  stroke: #48c;
  stroke-linecap: butt;
  animation: waveit 3s cubic-bezier(0.5, 0.4, 0.2, 1) infinite;
  stroke-dasharray: 0 10 76 65 47 60 55 42 50 27 100;
}

body {
  background-color: #fff;
}
@keyframes waveit {
  0% {
    stroke-dasharray: 0 86 0 105 0 105 0 90 0 90 0 90;
    stroke-dashoffset: 90;
    stroke-width: 0.1;
  }

  50% {
    stroke-dasharray: 0 10 76 65 47 60 55 42 50 27 100;
    stroke-dashoffset: 0;
    stroke-width: 2;
  }
}

svg {
  width: 100vw;
  height: 100vh;
}
</style>

/**https://codepen.io/andyfitz/pen/mdJJoXZ */