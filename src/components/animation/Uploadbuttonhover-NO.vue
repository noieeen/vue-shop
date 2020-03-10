<template>
  <div>
    <button class="button">
      <div class="icon">
        <div class="arrow"></div>
        <svg class="line" viewBox="0 0 24 24"></svg>
      </div>
      Upload
    </button>

    <!-- dribbble - twitter -->
    <a class="dribbble" href="https://dribbble.com/aaroniker" target="_blank"
      ><img
        src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg"
        alt=""
    /></a>
    <a class="twitter" target="_blank" href="https://twitter.com/aaroniker_me"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 72 72"
      >
        <path
          d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"
        ></path></svg
    ></a>
  </div>
</template>
<script>
export default {};
const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);

$$(".button").forEach(button => {
  let icon = $(".icon", button),
    line = $(".line", icon),
    svgPath = new Proxy(
      {
        y: null
      },
      {
        set(target, key, value) {
          target[key] = value;
          if (target.y !== null) {
            line.innerHTML = getPath(target.y, 0.25, null);
          }
          return true;
        },
        get(target, key) {
          return target[key];
        }
      }
    ),
    timeline = gsap.timeline({
      paused: true
    }),
    interval;

  svgPath.y = 12;

  timeline
    .to(icon, {
      "--arrow-y": 6,
      "--arrow-rotate": 70,
      ease: "elastic.in(1.1, .8)",
      duration: 0.7
    })
    .to(icon, {
      "--arrow-y": 0,
      "--arrow-rotate": 45,
      ease: "elastic.out(1.1, .8)",
      duration: 0.7
    });

  timeline
    .to(
      svgPath,
      {
        y: 15,
        duration: 0.15
      },
      0.65
    )
    .to(
      svgPath,
      {
        y: 12,
        ease: "elastic.out(1.2, .7)",
        duration: 0.6
      },
      0.8
    );

  button.addEventListener("mouseover", e => {
    timeline.restart();
    interval = setInterval(() => timeline.restart(), 1500);
  });

  button.addEventListener("mouseout", e => clearInterval(interval));
});

function getPoint(point, i, a, smoothing) {
  let cp = (current, previous, next, reverse) => {
      let p = previous || current,
        n = next || current,
        o = {
          length: Math.sqrt(
            Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)
          ),
          angle: Math.atan2(n[1] - p[1], n[0] - p[0])
        },
        angle = o.angle + (reverse ? Math.PI : 0),
        length = o.length * smoothing;
      return [
        current[0] + Math.cos(angle) * length,
        current[1] + Math.sin(angle) * length
      ];
    },
    cps = cp(a[i - 1], a[i - 2], point, false),
    cpe = cp(point, a[i - 1], a[i + 1], true);
  return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
}

function getPath(update, smoothing, pointsNew) {
  let points = pointsNew
      ? pointsNew
      : [
          [5, 12],
          [12, update],
          [19, 12]
        ],
    d = points.reduce(
      (acc, point, i, a) =>
        i === 0
          ? `M ${point[0]},${point[1]}`
          : `${acc} ${getPoint(point, i, a, smoothing)}`,
      ""
    );
  return `<path d="${d}" />`;
}
</script>
<style lang="scss">
.button {
  --background: #275efe;
  --background-hover: #2456e8;
  --text: #fff;
  --icon: #fff;
  display: flex;
  outline: none;
  cursor: pointer;
  border: 0;
  min-width: 113px;
  padding: 8px 20px 8px 12px;
  border-radius: 9px;
  line-height: 24px;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  background: var(--b, var(--background));
  transition: transform 0.3s, background 0.4s;
  transform: scale(var(--scale, 1)) translateZ(0);
  &:active {
    --scale: 0.95;
  }
  &:hover {
    --b: var(--background-hover);
  }
  .icon {
    --arrow-y: 0;
    --arrow-rotate: 45;
    width: 24px;
    height: 24px;
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin-right: 8px;
    pointer-events: none;
    .arrow,
    .line {
      position: absolute;
    }
    .arrow {
      left: 11px;
      top: 4px;
      width: 2px;
      height: 12px;
      border-radius: 1px;
      background: var(--icon);
      transform: translateY(calc(var(--arrow-y) * 1px)) translateZ(0);
      &:before,
      &:after {
        content: "";
        width: 2px;
        height: 7px;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 1px;
        background: inherit;
        transform-origin: 1px 1px;
        transform: rotate(var(--r, calc(var(--arrow-rotate) * -1deg)));
      }
      &:after {
        --r: calc(var(--arrow-rotate) * 1deg);
      }
    }
    .line {
      width: 24px;
      height: 24px;
      display: block;
      left: 0;
      top: 7px;
      fill: none;
      stroke: var(--icon);
      stroke-width: 2;
      stroke-linejoin: round;
      stroke-linecap: round;
    }
  }
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: inherit;
  &:before,
  &:after {
    box-sizing: inherit;
  }
}

// Center & dribbble
body {
  min-height: 100vh;
  display: flex;
  font-family: "Inter", Arial;
  justify-content: center;
  align-items: center;
  background: #eceffc;
  .dribbble {
    position: fixed;
    display: block;
    right: 20px;
    bottom: 20px;
    img {
      display: block;
      height: 28px;
    }
  }
  .twitter {
    position: fixed;
    display: block;
    right: 64px;
    bottom: 14px;
    svg {
      width: 32px;
      height: 32px;
      fill: #1da1f2;
    }
  }
}
</style>
/**https://codepen.io/aaroniker/pen/qBdVzdO */