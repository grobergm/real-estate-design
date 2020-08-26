<template>
	<nav>
		<div class='logo'>
			LOGO
		</div>
		<div class='links'>
			<div class='underline'>
				<a href='#featured'>Featured</a>
			</div>
			<div class='underline'>
				<a href='#about'>About</a>
			</div>
			<div class='underline'>
				<a href='#contact'>Contact</a>
			</div>
		</div>
		<div class='auth-links'>
			<div class='underline'>Sign up</div>
			<button class='cta-btn'>Log in</button>
		</div>

	</nav>
</template>

<script>
//import componentName from './components/componenet-name.vue';

export default {
	name: "nav-bar",

	data: function () {
		return {};
	},

	computed: {},

	props: {},

	methods: {},

	watch: {},

	mounted: function () {},
};
</script>


<style scoped>
nav {
	position: absolute;
	z-index: 5;
	top: 0;
	left: 0;
	right: 0;
	padding: 1em 0;
	background: rgba(0, 0, 10, 0.8);
	color: white;
	font-weight: bold;
}

.logo {
	border: 1px solid white;
	padding: 0.5em;
}

.links,
.auth-links,
nav {
	display: flex;
	justify-content: space-around;
	align-items: center;
}

button,
.links div {
	margin-left: 1em;
}

a {
	text-decoration: none;
	color: white;
}

/* @media screen and (max-width: 600px) {
	nav {
		padding: 1em;
	}
} */
</style>