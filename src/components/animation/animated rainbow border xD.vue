<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Fredoka+One&display=swap"
      rel="stylesheet"
    />

    <div class="c-subscribe-box u-align-center">
      <div class="rainbow"><span></span><span></span></div>
      <div class="c-subscribe-box__wrapper">
        <h3 class="c-subscribe-box__title">Join my newsletter</h3>
        <p class="c-subscribe-box__desc">
          You like articles of the blog? Sign up for updates via email.
        </p>
        <form class="c-form c-form--accent c-subscribe-box__form">
          <input
            class="u-align-center"
            type="email"
            placeholder="name@cool.internet"
          />
          <input class="full-button" type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
// Global Variables
:root {
  --color-first: #65587f;
  --color-second: #f18867;
  --color-third: #e85f99;
  --color-forth: #50bda1;
  --block-width: 300px;
  --block-height: 270px;
  --border-width: 0.625rem;
  --border-radius-outer: 8px;
  --border-radius-inner: calc(var(--border-radius-outer) / 2);
  --font-plain: "IBM Plex Sans", sans-serif;
  --font-special: "Fredoka One", sans-serif;

  box-sizing: border-box;
  line-height: 1.4;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background: hsl(0, 0%, 95%);
  color: #5e5e5e;
  font-family: var(--font-plain);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rainbow {
  width: 100%;
  height: 100%;
  animation: o-rotate-360 linear 8s infinite;

  span {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    transform: translate(-50%, -50%);

    &:after {
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 100%;
    }

    &:first-child {
      background: var(--color-first);
      &:after {
        background: var(--color-second);
      }
    }

    &:last-child {
      background: var(--color-third);
      &:after {
        background: var(--color-forth);
      }
    }
  }
}

// Components

.c-subscribe-box {
  width: var(--block-width);
  height: var(--block-height);
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
  border-radius: var(--border-radius-outer);

  &__wrapper {
    width: calc(100% - var(--border-width));
    height: calc(100% - var(--border-width));
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 1.2rem 1rem 1.8rem;
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius-inner);
  }

  &__title {
    font-size: 1.6rem;
  }

  &__desc {
    font-size: 0.935rem;
    margin: 0.7rem auto 1.8rem;
    max-width: 240px;
  }

  &__form {
    margin-top: auto;
  }
}

.c-form {
  &--accent {
    input {
      &:hover,
      &:active,
      &:focus {
        border-color: var(--color-third); // accent color
        box-shadow: 0 0 0 3px hsla(335, 75%, 64%, 0.25);
      }
    }

    [type="submit"] {
      background: var(--color-third);
      border-color: var(--color-third);
      color: #fff;
    }
  }
}

// Objects

@keyframes o-rotate-360 {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

// Elements

[type="submit"] {
  margin-bottom: 0;
  font-family: var(--font-special);
  font-weight: normal;
  letter-spacing: 0.015em;
  font-size: 1.1rem;

  &:active {
    transform: scale(0.97);
  }
}

input {
  font-family: inherit;
  color: inherit;
  outline: none;
  font-size: 93%;
  transition: all 300ms ease;
}

h3 {
  margin: 0;
  letter-spacing: -0.015em;
  font-family: var(--font-special);
  font-weight: normal;
  line-height: 1.4;
}

// Utilities
.u-align-center {
  text-align: center;
}
</style>
/**https://codepen.io/ahmedhosna95/pen/BaNQweQ */
