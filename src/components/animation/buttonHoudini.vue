<template>
    <div>
        <button>Neumorphism<span>Maybe I'm a button</span></button>
    </div>
</template>
<script>
export default {
    
}

CSS.registerProperty({
  name: '--color-gradient-start',
  syntax: '<color>',
  inherits: false,
  initialValue: 'transparent'
})
CSS.registerProperty({
  name: '--color-gradient-stop',
  syntax: '<color>',
  inherits: false,
  initialValue: 'transparent'
})

CSS.registerProperty({
  name: '--color-outset-start',
  syntax: '<color>',
  inherits: false,
  initialValue: 'transparent'
})
CSS.registerProperty({
  name: '--color-outset-stop',
  syntax: '<color>',
  inherits: false,
  initialValue: 'transparent'
})

CSS.registerProperty({
  name: '--color-inset-start',
  syntax: '<color>',
  inherits: false,
  initialValue: 'transparent'
})
CSS.registerProperty({
  name: '--color-inset-stop',
  syntax: '<color>',
  inherits: false,
  initialValue: 'transparent'
})
</script>
<style >
    button {
	
	--color-gradient-start: #4da7db;
	--color-gradient-stop: #5bc6ff;	
	
	--color-outset-start: #3c82aa;
	--color-outset-stop: #6ff1ff;		
	
	--color-inset-start: rgba(0,0,0,0);
	--color-inset-stop: rgba(0,0,0,0);	


	font-size: 2rem;	
	color: #002c59;
	margin: auto; 
	appearance: none;
	user-select: none;
	cursor: pointer; 
	border: 0;
	outline: 0;
	padding: .5em 1em;
	border-radius: 1.3em;
	background: linear-gradient(145deg, var(--color-gradient-start), var(--color-gradient-stop));
	box-shadow:  
		.4em .4em .8em  var(--color-outset-start), 
		-.4em -.4em .8em var(--color-outset-stop),
		inset .2em .2em .4em var(--color-inset-start), 
		inset -.2em -.2em .4em var(--color-inset-stop)		
	;		
	transition: 
		--color-gradient-stop .4s,
		--color-gradient-start .4s,
		--color-outset-start .8s,
		--color-outset-stop .8s,
		--color-inset-start .8s,
		--color-inset-stop .8s,
		color 1s
	;
	

	&:hover {
		--color-gradient-start: #5bc6ff;
		--color-gradient-stop: #4da7db;	
		--color-outset-start: rgba(0,0,0,0);
		--color-outset-stop: rgba(0,0,0,0);	
		--color-inset-start: #3c82aa;
		--color-inset-stop: #6ff1ff;	
		color: #001f3f;		
	}
	

}



body { display: flex; flex-direction: column; height: 100vh; background: #55b9f3; color: #002c59;}
h1 { text-align: center; }
span { font-size: .3em; font-size: italic; display: block; text-align: left; color: inherit; }



</style>