<template>
    <div>
        <div id="app">
  <line-button text="Hover on me!" width="280" height="80" stroke-width="4" />
</div>

    </div>
</template>
<script>

import gsap from 'gsap'
export default {
    
}
Vue.component('line-button', {
  props: ['text', 'width', 'height', 'strokeWidth'],
  data: function() {
    return {
      topLine: `M ${this.width} ${this.strokeWidth / 2} L ${this.width} ${this.strokeWidth / 2} Z`,
      topHover: `M ${this.width} ${this.strokeWidth / 2} L 0 ${this.strokeWidth / 2} Z`,
      bottomLine: `M 0 ${(this.height - (this.strokeWidth / 2))} L 0 ${(this.height - (this.strokeWidth / 2))} Z`,
      bottomHover: `M 0 ${(this.height - (this.strokeWidth / 2))} L ${this.width} ${(this.height - (this.strokeWidth / 2))} Z`,
      leftLine: `M ${this.strokeWidth / 2} 0 L ${this.strokeWidth / 2} 0 Z`,
      leftHover: `M ${this.strokeWidth / 2} 0 L ${this.strokeWidth / 2} ${this.height} Z`,
      rightLine: `M ${(this.width - (this.strokeWidth / 2))} ${this.height} L ${(this.width - (this.strokeWidth / 2))} ${this.height} Z`,
      rightHover: `M ${(this.width - (this.strokeWidth / 2))} ${this.height} L ${(this.width - (this.strokeWidth / 2))} 0 Z`,
    }
  },
  methods: {
    btnMouseOver: function() {
      TweenLite.killTweensOf(this.$refs.pathLeftLine);
      TweenLite.killTweensOf(this.$refs.pathBottomLine);
      TweenLite.killTweensOf(this.$refs.pathRightLine);
      TweenLite.killTweensOf(this.$refs.pathTopLine);
      
      TweenLite.to(this.$refs.pathLeftLine, 0.125, {attr: {d: this.leftHover}, delay: 0, duration: 0.125, ease: Bounce.easeOut});
      TweenLite.to(this.$refs.pathBottomLine, 0.125, {attr: {d: this.bottomHover}, delay: 0.125, duration: 0.125, ease: Bounce.easeOut});
      TweenLite.to(this.$refs.pathRightLine, 0.125, {attr: {d: this.rightHover}, delay: 0.250, duration: 0.125, ease: Bounce.easeOut});
      TweenLite.to(this.$refs.pathTopLine, 0.125, {attr: {d: this.topHover}, delay: 0.375, duration: 0.125, ease: Bounce.easeOut});
    },
    btnMouseOut: function() {
      TweenLite.killTweensOf(this.$refs.pathLeftLine);
      TweenLite.killTweensOf(this.$refs.pathBottomLine);
      TweenLite.killTweensOf(this.$refs.pathRightLine);
      TweenLite.killTweensOf(this.$refs.pathTopLine);
      
      TweenLite.to(this.$refs.pathLeftLine, 0.125, {attr: {d: this.leftLine}, delay: 0.375, duration: 0.125, ease: Bounce.easeOut});
      TweenLite.to(this.$refs.pathBottomLine, 0.125, {attr: {d: this.bottomLine}, delay: 0.250, duration: 0.125, ease: Bounce.easeOut});
      TweenLite.to(this.$refs.pathRightLine, 0.125, {attr: {d: this.rightLine}, delay: 0.125, duration: 0.125, ease: Bounce.easeOut});
      TweenLite.to(this.$refs.pathTopLine, 0.125, {attr: {d: this.topLine}, delay: 0, duration: 0.125, ease: Bounce.easeOut});
    },
  },
  template: `
<button class="line-button" v-on:mouseover="btnMouseOver" v-on:mouseout="btnMouseOut">
  {{ text }}
  <svg v-bind:stroke-width="strokeWidth">
    <path v-bind:d="topLine" ref="pathTopLine" />
    <path v-bind:d="bottomLine" ref="pathBottomLine" />
    <path v-bind:d="leftLine" ref="pathLeftLine" />
    <path v-bind:d="rightLine" ref="pathRightLine" />
  </svg>
</button>
`
});

// let app: object = new Vue({
//   el: '#app'
// });

</script>
<style>
    @import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");

#app {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}

.line-button {
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  background-color: transparent;
  width: 280px;
  height: 80px;
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  position: relative;
  transition: background-color 500ms ease-out;
}

.line-button svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.line-button svg path {
  stroke: #000000;
}

.line-button:hover {
  background-color: #e4e4e4;
}

</style>

/**https://codepen.io/takaneichinose/pen/GRJKJKL */