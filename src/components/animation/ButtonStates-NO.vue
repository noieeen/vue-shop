<template>
  <div>
    <a class="button">
      <span class="button__text">Hover & Click Me</span>
      <i class="button__icon fa fa-arrow-right"></i>
    </a>
  </div>
</template>
<script>
button = document.querySelector(".button");

// button.addEventListener('mouseup', function(){
//   this.classList.add('active');
//   setTimeout(function () {
//     button.classList.remove('active');
// }, 300);
// });
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Spartan&display=swap");
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  height: 100%;
  margin: 0;
}
body {
  display: flex;
  font-family: "Spartan", sans-serif;
  font-size: 14px;

  align-items: center;
  justify-content: center;

  background-color: #0e535c;
}
@keyframes scale-up {
  from {
    transform: scaleY(1) scaleX(1);
    opacity: 0.5;
  }
  to {
    transform: scaleX(1.3) scaleY(2);
    opacity: 0;
  }
}

.button {
  position: relative;
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 16px 36px;

  color: #ffffff;
  border-radius: 40px;
  background-color: #000000;

  cursor: pointer;
  user-select: none;
  &__text {
    position: relative;

    margin-right: 12px;

    transition: ease-in-out 0.18s;

    z-index: 2;
  }
  &__icon {
    position: relative;

    transition: ease-in-out 0.18s;

    z-index: 2;
  }
  &:before {
    content: "";
    position: absolute;

    width: 100%;
    height: 100%;

    background-color: #ffffff;
    opacity: 0.5;
    border-radius: 40px;

    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;

    width: 100%;
    height: 100%;

    background-color: #ffffff;
    z-index: 1;
    transition: ease-in-out 0.18s;
    transform-origin: center left;
    transform: scaleX(0);
    border-radius: 40px;
  }
  &:hover {
    color: #000000;
    &:after {
      transform-origin: center right;
      transform: scaleX(1);
      color: #ffffff;
    }
    .button__icon {
      transform: translate3d(400%, 0px, 0px);
      opacity: 0;
    }
    .button__text {
      transform: translate3d(12px, 0px, 0px);
    }
  }
  &:active:hover {
    opacity: 0.8;
    transition: opacity ease-in-out 0.3s;
  }
  &.active {
    &:before {
      animation: scale-up 0.3s ease;
    }
  }
}
</style>

/**https://codepen.io/vladracoare/pen/mdJworQ */