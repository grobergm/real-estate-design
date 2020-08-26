<template>
	<div class='landing'>
		<hero-banner />
		<house-list />
		<div
			class='preview-grid'
			ref='featured'
			id='featured'
			:class='{animate:checkAnimation("featured")}'
		>
			<div class='text-col dark_background wrapper'>
				<div class='corner-circle highlight'></div>
				<p class='uppercase'>featured</p>
				<div>
					<h1>what's new</h1>
					<p><em>Lorem ipsum dolor sit amet consectetur</em></p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cumque vel quibusdam pariatur possimus rem ea nobis aspernatur, eligendi velit rerum, minus ipsam odit. Reprehenderit minus pariatur rem illum similique?</p>

				</div>
				<button class='outline-btn uppercase'>learn more</button>
			</div>
			<img
				class='tall-img'
				src='@/assets/img/stairs.jpg'
				alt='stairs'
			>
			<img
				class='tall-img'
				src='@/assets/img/kitchen.jpg'
				alt='kitchen'
			>
			<img
				class='wide-img'
				src='@/assets/img/green.jpg'
				alt='house'
			>
			<img
				class='extra-img'
				src='@/assets/img/garden.jpg'
				alt='house'
			>
		</div>

		<div
			class='three-cols wrapper'
			ref='about'
			:class='{animate:checkAnimation("about")}'
			id='about'
		>
			<h1>about us</h1>
			<div class='flex-wrapper'>
				<div class='summary-col'>
					<div class='highlight'>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="laugh-beam"
							class="svg-inline--fa fa-laugh-beam fa-w-16"
							role="img"
							viewBox="0 0 496 512"
						>
							<path
								fill="currentColor"
								d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm24 199.4c3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.7 8.6-10.8 11.9-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.2 7.4-15.8 4.1-15.1-4.5zm-160 0c3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.7 8.6-10.8 11.9-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.3 7.4-15.8 4-15.1-4.5zM398.9 306C390 377 329.4 432 256 432h-16c-73.4 0-134-55-142.9-126-1.2-9.5 6.3-18 15.9-18h270c9.6 0 17.1 8.4 15.9 18z"
							/></svg>

					</div>
					<h3 class='uppercase'>Lorem Ipsum</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cumque vel quibusdam pariatur possimus rem ea nobis aspernatur, eligendi velit rerum, minus ipsam odit. Reprehenderit minus pariatur rem illum similique?</p>
				</div>
				<div class='summary-col'>
					<div class='highlight'>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="chart-line"
							class="svg-inline--fa fa-chart-line fa-w-16"
							role="img"
							viewBox="0 0 512 512"
						>
							<path
								fill="currentColor"
								d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"
							/></svg>
					</div>
					<h3 class='uppercase'>Reprehenderit</h3>
					<p>Omnis cumque vel quibusdam pariatur possimus rem ea nobis aspernatur, eligendi velit rerum, minus ipsam odit. Reprehenderit minus pariatur rem illum similique?</p>
				</div>
				<div class='summary-col'>
					<div class='highlight'>
						<simple-icon :icon='leaf' />

					</div>
					<h3 class='uppercase'>Omnis cumque</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cumque vel quibusdam pariatur possimus rem ea nobis aspernatur, eligendi velit rerum, minus ipsam odit.</p>
				</div>

			</div>
			<div class='light_background b-r angle'></div>
			<div class='light_background t-l angle'></div>
		</div>

		<div class='dark_background wrapper angle-section'>
			<div class='t-r angle lowlight'></div>
			<div class='abs-text'>
				<h1>our mission</h1>
				<div class='uppercase'>Lorem ipsum dolor sit amet consectetur</div>
				<div class='block-quote'>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cumque vel quibusdam pariatur possimus rem ea nobis aspernatur, eligendi velit rerum, minus ipsam odit. Reprehenderit minus pariatur rem illum similique?</p>
				</div>

				<p class='quote-author'>- Lorem Ipsum</p>

			</div>
			<img
				src='@/assets/img/road.jpg'
				alt='road in trees'
				class='b-l angle'
			>
		</div>
		<div
			class='wrapper col-card light_background'
			ref='contact'
			:class='{animate:checkAnimation("contact")}'
			id='contact'
		>
			<div class='white_background'></div>
			<div class='cta highlight'></div>
			<div class='cta dark_background'>
				<h2 class='uppercase'>
					contact us
					<simple-icon :icon='headSet' />

				</h2>
				<p>Omnis cumque vel quibusdam pariatur possimus rem ea nobis aspernatur, eligendi velit rerum, minus ipsam odit. Reprehenderit minus pariatur rem illum similique?</p>
				<chat-btn />
				<div class='flex-wrapper'>
					<span>Office:</span>
					<span>(888) 555-1234</span>
				</div>
				<div class='flex-wrapper'>
					<span>Email:</span>
					<span>lorem@ipsum.com</span>
				</div>
			</div>
		</div>
		<div class='dark_background footer'></div>
	</div>
</template>

<script>
import ChatBtn from "../buttons/ChatBtn";
import HouseList from "../HouseList";
import HeroBanner from "../HeroBanner";
import SimpleIcon from "../wrappers/SimpleIcon";
import { laugh, chart, leaf, headSet } from "../../svgData";

export default {
	name: "landing",

	data: function () {
		return {
			windowHeight: 0,
			scrollHeight: 0,
			featured: 0,
			about: 0,
			contact: 0,
			laugh,
			chart,
			leaf,
			headSet,
		};
	},

	components: {
		ChatBtn,
		HouseList,
		HeroBanner,
		SimpleIcon,
	},

	methods: {
		getTop(ref) {
			return this.$refs[ref].offsetTop;
		},

		checkAnimation(ref) {
			return this[ref] - this.scrollHeight < 0.5 * this.windowHeight;
		},

		getPositions() {
			this.windowHeight = window.innerHeight;
			this.featured = this.getTop("featured");
			this.about = this.getTop("about");
			this.contact = this.getTop("contact");
		},

		getScroll() {
			this.scrollHeight = window.scrollY;
		},
	},

	mounted() {
		this.getPositions();
		window.addEventListener("scroll", this.getScroll);
		window.addEventListener("resize", this.getPositions);
		window.addEventListener("orientationchange", this.getPositions);
	},

	beforeDestroy() {
		window.removeEventListener("scroll", this.getScroll);
		window.removeEventListener("resize", this.getPositions);
		window.removeEventListener("orientationchange", this.getPositions);
	},
};
</script>


<style scoped>
img {
	max-width: 100%;
}

.preview-grid {
	display: grid;
	grid-template-columns: 18em 1fr 1fr;
	grid-template-rows: 30em 18em;
	grid-gap: 0.5em;
}

.text-col {
	grid-row: 1 / span 2;
	padding: 2em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
}

.corner-circle {
	position: absolute;
	top: -4em;
	right: -4em;
	height: 8em;
	width: 8em;
	border-radius: 50%;
	transition: transform 0.5s ease-in-out;
}

.animate .corner-circle {
	transform: scale(2);
}

.preview-grid img {
	width: 100%;
	object-fit: cover;
}

.preview-grid h1 {
	font-size: 5em;
}

.tall-img {
	height: 30em;
	object-position: top center;
}

.wide-img {
	height: 18em;

	grid-column: 2 / span 2;
}

.extra-img {
	display: none;
	height: 48.5em;
	grid-column: 4 / 5;
	grid-row: 1 / span 2;
}

.angle {
	position: absolute;
}

.b-l {
	bottom: 0;
	left: 0;
	clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
}

.b-r {
	bottom: 0;
	right: 0;
	clip-path: polygon(0% 100%, 100% 0%, 100% 100%);
}

.t-l {
	top: 0;
	left: 0;
	clip-path: polygon(0% 0%, 0% 100%, 100% 0%);
}

.t-r {
	top: 0;
	right: 0;
	clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
}

.three-cols {
	height: 32em;
	padding: 0 5%;
	overflow: hidden;
}

.three-cols h1 {
	position: relative;
	z-index: 2;
	padding-top: 1em;
	/* padding-right: 2em; */
	/* padding-bottom: 1em; */
	transform: translateX(100%);
	transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	text-align: right;
}

.animate.three-cols h1 {
	transform: translateX(0);
}

.three-cols .angle {
	height: 18em;
	width: 18em;
}

.summary-col {
	position: relative;
	z-index: 2;
	width: 15em;
	height: 18em;
	text-align: center;
	opacity: 0;
	transform: translateX(100%);
	transition: all 0.5s ease-in-out;
}

.summary-col:nth-child(2) {
	transition-delay: 0.2s;
}
.summary-col:last-child {
	transition-delay: 0.4s;
}

.animate .summary-col {
	opacity: 1;
	transform: translateX(0);
}

.summary-col .highlight {
	height: 3em;
	width: 3em;
	border-radius: 10px;
	margin: 1em auto;
	padding: 1.5em;
	color: rgb(10, 10, 20);
}

.angle-section {
	height: 36em;
}
.angle-section .t-r {
	height: 18em;
	width: 18em;
}

.angle-section img {
	height: 30em;
	width: 50%;
	object-fit: cover;
	object-position: bottom;
}

.angle-section .abs-text {
	text-align: right;
	position: absolute;
	right: 2em;
	top: 8em;
	max-width: 50%;
}

.block-quote {
	border-right: 0.25em solid white;
	margin-right: 0.5em;
	padding-right: 0.5em;
	font-style: italic;
}

.quote-author {
	margin-right: 1em;
}

.outline-btn {
	background: transparent;
	border: 1px solid white;
	color: white;
}

.col-card {
	height: 45em;
}

.col-card .white_background {
	background: white;
	position: absolute;
	left: 0;
	width: 50%;
	height: 45em;
}

.cta {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 18em;
	width: 18em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 10px;
	padding: 2em;
}

.cta-btn-row {
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 3em;
}

.cta h2 {
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.cta >>> svg {
	height: 2em;
	/* color: rgb(0, 63, 57); */
}

.cta.highlight {
	z-index: 2;
	transform: translate(-50%, -50%) rotate(0);
	transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.animate .cta.highlight {
	transform: translate(-50%, -50%) rotate(20deg);
}

.cta.dark_background {
	z-index: 2;
}

.footer {
	height: 18em;
}

@media screen and (min-width: 1000px) {
	.preview-grid {
		grid-template-columns: 18em repeat(3, 1fr);
	}

	.extra-img {
		display: block;
	}
}

@media screen and (max-width: 600px) {
	.preview-grid {
		grid-template-columns: 18em 1fr;
	}

	.preview-grid img:nth-child(3) {
		display: none;
	}

	.wide-img {
		height: 18em;
		grid-column: 2;
	}

	.three-cols {
		padding: 0;
	}

	.summary-col p {
		display: none;
	}

	.summary-col:first-child {
		transform: translate(0, -4em);
	}
	.summary-col:nth-child(2) {
		transform: translate(0, 4em);
	}
	.summary-col:last-child {
		transform: translate(0, 8em);
	}
}
</style>