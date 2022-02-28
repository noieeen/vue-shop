<template>
    <div>
        <div class="container">
    <svg xmlns="http://www.w3.org/2000/svg" class="Layer_1" viewBox="0 0 800 600">
        <g class="loader" fill="none" stroke-miterlimit="10">
            <path class="base" stroke="#979797" stroke-width="16.2" d="M370.54 214.76c-19-13.14-38.11-28.52-62.53-16.51-8.95 4.41-18.75 10.83-23.69 19.9-8.9 16.33-4.68 44.74 11.83 54.94 21.7 13.43 64.43 17.07 82.26-4.93 15.59-19.27 11.73-48.16-12.26-57.65"/>
            <g class="full-outer">
                <path class="full" stroke="#446dc2" stroke-width="7.8" d="M342.53 197.48c-7.11-4.13-5.3-3.36-21.88-3.56-25.86-.31-40 13.74-37.64 39.93.79 8.83 1.2 29.75 11.9 36.52 22.28 14.09 56.29 15 81.58 12.42 13.7-1.38 22.42-42.4 11-50.16"/>
            </g>
            <g class="fractured">
                <path class="end" stroke="#446dc2" stroke-width="7.8" d="M342.51 197.48c-7.1-4.13-5.3-3.36-21.87-3.56-25.82-.31-39.93 13.85-37.64 40"/>
                <path class="middle" stroke="#446dc2" stroke-width="7.8" d="M283 233.85c.79 8.83 1.2 29.75 11.89 36.52 22.25 14.06 56.16 15 81.44 12.44"/>
                <path class="lead" stroke="#446dc2" stroke-width="7.8" d="M376.06 282.83c13.69-1.39 22.84-42.44 11.4-50.2"/>
            </g>
            <path class="end-dup" stroke="#446dc2" stroke-width="7.8" d="M342.51 197.48c-7.1-4.13-5.3-3.36-21.87-3.56-25.82-.31-39.93 13.85-37.64 40"/>
            <path class="middle-dup" stroke="#446dc2" stroke-width="7.8" d="M283 233.85c.79 8.83 1.2 29.75 11.89 36.52 22.25 14.06 56.16 15 81.44 12.44"/>
            <path class="lead-dup" stroke="#446dc2" stroke-width="7.8" d="M376.06 282.83c13.69-1.39 22.84-42.44 11.4-50.2"/>
        </g>
    </svg>

    <div class="text-container">
        <p class="loader-text">Loading...</p>
        <p class="shite">Shitemorphism</p>
    </div>
    
</div>
    </div>
</template>
<script ></script>
<script>

import {gsap} from 'gsap'
import SplitText from 'gsap'
import DrawSVGPlugin from 'gsap'
import {select,selectAll} from 'js-select-from-object';

console.clear();

gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);

select = e => document.querySelector(e);
selectAll = e => document.querySelectorAll(e);

const container = select('.container');
let gltl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
let split = new SplitText(".loader-text", {type:"chars", charsClass:"char"});

function animIn() {
    tl = gsap.timeline();
    tl.to('.container', {
        autoAlpha: 1,
        duration: 2
    })
    .from('.base', {
        drawSVG: 0,
        duration: 1,
        transformOrigin: "center center",
        ease: 'power2.inOut'
    }, 0)
    .from('.char', {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: 'power2'
    }, 0)
    .from('.full-outer', {
        rotate: 360,
        ease: 'none',
        repeat: 3,
        transformOrigin: "center center",
        duration: 0.5
    }, 0)
    .from('.full', {
        drawSVG: 0,
        transformOrigin: "center center",
        ease: "power2.inOut",
        duration: 1
    }, 0.5)
    .set('.full', { autoAlpha: 0 });
    
    return tl;
}

function animFracture() {
    tl = gsap.timeline({id: "fracture"});
    tl.set('.fractured', { autoAlpha: 1 })
    .to('.fractured', {
        rotate: -360,
        ease: 'none',
        repeat: 20,
        transformOrigin: "center center",
        duration: 0.5
    })
    .to('.end', {
        rotate: -60,
        ease: 'none',
        transformOrigin: "left 40px",
        duration: 2
    }, 0)
    .set('.end', { autoAlpha: 0, immediateRender: false }, 3)
    .set('.end-dup', { autoAlpha: 1, immediateRender: false, rotation: -60,transformOrigin: "left 40px" }, 3)
    .to('.end-dup', {
        x: -800,
        y: 800,
        rotation: -1080,
        ease: 'none',
        transformOrigin: "20px 15px",
        duration: 1.2
    }, 3)
    .to('.char', {
        x: "random(200, 600, 30)", 
        y: 400,
        rotation: "random(90, 270)",
        duration: 0.8,
        stagger: 0.01,
        ease: 'none'
    }, 2.2)
    .to('.middle', {
        rotate: -60,
        ease: 'none',
        transformOrigin: "92px 45px",
        duration: 2
    }, 3)
    .set('.middle', { autoAlpha: 0, immediateRender: false }, 5)
    .set('.middle-dup', { autoAlpha: 1, immediateRender: false, rotation: -60,transformOrigin: "92px 45px" }, 5)
    .to('.middle-dup', {
        x: 800,
        y: 200,
        rotation: -1080,
        ease: 'none',
        transformOrigin: "center center",
        duration: 1.2
    }, 5)
    .set('.lead', { autoAlpha: 0, immediateRender: false }, 8)
    .set('.lead-dup', { autoAlpha: 1, immediateRender: false }, 8)
    .to('.lead-dup', {
        x: 50,
        y: -400,
        rotation: -1080,
        ease: 'sine',
        transformOrigin: "center center",
        duration: 1.2
    }, 8)
    .to('.lead-dup', {
        x: 300,
        y: 800,
        rotation: -3000,
        ease: 'power0.in',
        transformOrigin: "center center",
        duration: 1.4
    })
    .to('.base', {
        drawSVG: "100% 100%",
        duration: 0.6,
        transformOrigin: "center center",
        ease: 'power2.inOut'
    }, "-=4.3")
    .to('.shite', {
        autoAlpha: 1,
        duration: 4
    })
    .to('.shite', {
        autoAlpha: 0,
        duration: 2
    })
    .to('.container', {
        autoAlpha: 0,
        duration: 1
    }, "-=2")
    
    return tl;
}

function init() {
    gsap.set(['.end-dup', '.middle-dup', '.lead-dup'], { autoAlpha: 0 });
    
    gltl.add(animIn())
        .add(animFracture())
        .timeScale(1);
}

window.onload = () => {
	init();
    // GSDevTools.create();
};
</script>
<style>
    html {
	box-sizing: border-box;
}

*, *:before, *:after {
	box-sizing: inherit;
}

html, body {
	width: 100%;
	height: 100%;
    margin: 0;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f1f3f6;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* // overflow: hidden; */
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.container {
	position: relative;
	width: 800px;
    min-width: 800px;
	height: 600px;
    border-radius: 10px;
	visibility: hidden;
    margin: auto;
    box-shadow: 
        inset 0 0 15px rgba(55, 84, 170, 0), 
        inset 0 0 20px rgba(255, 255, 255, 0), 
        10px 10px 18px rgba(55, 84, 170, 0.15), 
        -10px -10px 32px white, 
        inset 0px 0px 4px rgba(255, 255, 255, 0.2);
}

.loader {
    width: 800px;
    height: 600px;
}

.text-container {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loader-text {
    position: absolute;
    z-index: 1;
    top: 315px;
    left: 310px;
    font-size: 14px;
}

.shite {
    visibility: hidden;
    opacity: 0;
}

.fractured {
    visibility: hidden;
}
</style>

/**https://codepen.io/petebarr/pen/MWwwNVP */