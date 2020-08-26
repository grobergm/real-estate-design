<template>
	<div>
		<nav-bar />
		<landing />
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
import NavBar from "./components/NavBar";
import Landing from "./components/pages/Landing";

export default {
	name: "app",

	data: function () {
		return {};
	},

	components: {
		NavBar,
		Landing,
	},

	computed: {},

	props: {},

	methods: {},

	watch: {},

	mounted: function () {},
};
</script>


<style >
/* * {
	box-sizing: border-box;
} */

@font-face {
	font-family: "SourceSansPro";
	src: url("./assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf");
	font-weight: normal;
}

@font-face {
	font-family: "SourceSerifPro";
	src: url("./assets/fonts/Source_Serif_Pro/SourceSerifPro-Regular.ttf");
	font-weight: normal;
}

@font-face {
	font-family: "SourceSerifPro";
	src: url("./assets/fonts/Source_Serif_Pro/SourceSerifPro-Bold.ttf");
	font-weight: bold;
}

body,
html {
	margin: 0;
	font-family: "SourceSansPro";
	scroll-behavior: smooth;
	font-size: 16px;
}

h1,
h2,
h3 {
	font-family: "SourceSerifPro";
	margin: 0;
}

h1 {
	font-size: 4em;
}

.wrapper {
	position: relative;
}

.flex-wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.dark_background {
	background: rgb(10, 10, 20);
	color: white;
}

.light_background {
	background: rgb(220, 220, 210);
	color: white;
}

.highlight {
	background: rgb(255, 200, 0);
	/* border: none;
	color: black;
	font-weight: bold; */
}

.lowlight {
	background: rgb(0, 0, 10);
}

.outline_highlight {
	border: 1px solid rgb(255, 200, 0);
	color: rgb(255, 200, 0);
	background: transparent;
}

.uppercase {
	text-transform: uppercase;
}

.underline {
	display: inline-block;
	position: relative;
	overflow: hidden;
	cursor: pointer;
}

.underline:hover::after {
	transform: translateX(0);
}

.underline::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	height: 0.1em;
	width: 100%;
	background: currentColor;
	transform: translateX(-101%);
	transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

button {
	font-family: "SourceSansPro";
	font-size: 1em;
	padding: 0.5em 0.75em;
	cursor: pointer;
}

.cta-btn {
	color: white;
	background: #28a745;
	border: none;
	border-radius: 5px;
	display: flex;
	align-items: center;
	/* border: 1px solid rgb(10, 10, 20); */
}

@media screen and (max-width: 500px) {
	html,
	body {
		font-size: 12px;
	}
}
</style>