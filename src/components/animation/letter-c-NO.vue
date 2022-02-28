<template>
  <div>
    <div class="letter-c">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
      >
        <defs></defs>
        <title>letter-c</title>
        <path
          class="cls cls-1"
          style="--line: 1"
          d="M369.73,272.72A185.36,185.36,0,0,1,199.36,385C97,385,14.06,302,14.06,199.69S97,14.38,199.36,14.38A185.35,185.35,0,0,1,368.89,124.75"
        />
        <path
          class="cls cls-2"
          style="--line: 2"
          d="M284.61,236.05a92.65,92.65,0,1,1-.47-73.8"
        />
        <path
          class="cls cls-3"
          style="--line: 3"
          d="M305.89,245.22a115.82,115.82,0,1,1-.47-92.13"
        />
        <path
          class="cls cls-4"
          style="--line: 4"
          d="M327.17,254.38a139,139,0,1,1-.47-110.46"
        />
        <path
          class="cls cls-5"
          style="--line: 5"
          d="M348.45,263.55a162.14,162.14,0,1,1-.47-128.8"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
body
  background-color: #000
  display: flex
  height: 100vh
  width: 100vw
  justify-content: center
  align-items: center

$colors: #293bff, #8b14ff, #d57fff, #fff, #ff7b77, #ed3c9e, #13afff, #2972ff

@keyframes line
  50%
    stroke-width: 20
    stroke-dashoffset: 1000

.cls
  $delay: calc(.1s * var(--line))
  $ease: cubic-bezier(0,1.89,1,-0.72)
  fill: none
  stroke-linecap: round
  stroke-miterlimit: 10
  stroke-width: 5
  stroke-dasharray: 1000
  stroke-dashoffset: 5000
  @for $i from 1 through 5
    /* &-#{$i} */
      /**/stroke: nth($colors, $i)
  animation: line 2s infinite ease-in $delay

.letter-c
  display: block
  width: 70vw
  height: 70vh
  svg
    width: 100%
    height: 100%
</style>
/**https://codepen.io/ruidovisual/pen/WNvXxKB */