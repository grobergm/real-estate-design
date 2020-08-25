<template>
	<div class='hero wrapper'>
		<div class='title'>
			<h1>Welcome!</h1>
			<p>Let's find your next home.</p>
			<div>
				<div class='underline'>
					Explore Now
				</div>
				<simple-icon :icon='rightArrow' />
			</div>
		</div>
		<video
			autoplay
			loop
			muted
			playsinline
			src='@/assets/media/room.mp4'
		></video>
		<house-form />

	</div>
</template>

<script>
import HouseForm from "./HouseForm";

import SimpleIcon from "@/components/wrappers/SimpleIcon";
import { rightArrow } from "../svgData";

export default {
	name: "hero-banner",

	data: function () {
		return {
			rightArrow,
		};
	},
	components: {
		SimpleIcon,
		HouseForm,
	},
};
</script>


<style scoped>
.hero {
	height: 600px;
	color: white;
	/* margin-bottom: 1em; */
	/* color: rgb(0, 0, 10); */
}

.title {
	position: absolute;
	z-index: 2;
	left: 10%;
	top: 25%;
	/* transform: translateY(-50%); */
}

.hero video {
	position: absolute;
	left: 0;
	top: 0;
	object-fit: cover;
	width: 100%;
	height: 600px;
}

.hero p {
	font-size: 1.5em;
	margin-top: 0;
}

.underline {
	margin-right: 0.5em;
}

.hero >>> svg {
	height: 1em;
}
</style>