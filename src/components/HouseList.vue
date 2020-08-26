<template>
	<div class='house-list dark_background'>
		<div class='grid-wrapper'>
			<div class='selected'>
				<img
					:src='houseList[0].img'
					alt='image of house'
				>
				<div class='body'>
					<div class='title'>
						<h2>{{houseList[0].address}}</h2>
						<div>{{houseList[0].city}} {{houseList[0].state}}, {{houseList[0].zip}}</div>
					</div>
					<div>{{houseList[0].bio}}</div>
					<button class='cta-btn'>See Details</button>
				</div>
			</div>

			<h2 class='main-title'>Listings</h2>
			<div class='house-grid'>
				<div
					v-for='(house, index) in houseList.slice(1)'
					:key='index'
					class='house'
					@click='selectHouse(index+1)'
				>
					<img
						:src='house.img'
						alt='image of house'
					>
				</div>

			</div>

		</div>

	</div>
</template>

<script>
import house1 from "@/assets/img/house1.jpg";
import house2 from "@/assets/img/house2.jpg";
import house3 from "@/assets/img/house3.jpg";
import house4 from "@/assets/img/house4.jpg";
import house5 from "@/assets/img/house5.jpg";
import house6 from "@/assets/img/house6.jpg";

export default {
	name: "house-list",

	data: function () {
		return {
			houseList: [
				{
					id: 1,
					address: "88 SW 10th Ave",
					city: "Coquillle",
					state: "OR",
					zip: 97232,
					bio:
						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla dicta autem dolore maiores ex possimus magnam quas.",
					img: house1,
				},
				{
					id: 2,
					address: "25 Elm St.",
					city: "Eugene",
					state: "OR",
					zip: 97405,
					bio:
						"Nulla dicta autem dolore maiores ex possimus magnam quas. Voluptatum cumque, id magni error beatae nostrum, sapiente culpa corrupti, dolorum repellendus fuga.",
					img: house2,
				},
				{
					id: 3,
					address: "255 NW Madrone Ave",
					city: "Roseburg",
					state: "OR",
					zip: 97233,
					bio:
						"Voluptatum cumque, id magni error beatae nostrum, sapiente culpa corrupti, dolorum repellendus fuga.",
					img: house3,
				},
				{
					id: 4,
					address: "100 Lorem Ave",
					city: "Roseburg",
					state: "OR",
					zip: 97233,
					bio:
						"Voluptatum cumque, id magni error beatae nostrum, sapiente culpa corrupti, dolorum repellendus fuga.",
					img: house4,
				},
				{
					id: 5,
					address: "33 Ipsum St",
					city: "Roseburg",
					state: "OR",
					zip: 97233,
					bio:
						"Voluptatum cumque, id magni error beatae nostrum, sapiente culpa corrupti, dolorum repellendus fuga.",
					img: house5,
				},
				{
					id: 6,
					address: "103rd Luminous Dr",
					city: "Portland",
					state: "OR",
					zip: 97033,
					bio:
						"Voluptatum cumque, id magni error beatae nostrum, sapiente culpa corrupti, dolorum repellendus fuga.",
					img: house6,
				},
				{
					id: 1,
					address: "88 SW 10th Ave",
					city: "Coquillle",
					state: "OR",
					zip: 97232,
					bio:
						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla dicta autem dolore maiores ex possimus magnam quas.",
					img: house1,
				},
				{
					id: 2,
					address: "25 Elm St.",
					city: "Eugene",
					state: "OR",
					zip: 97405,
					bio:
						"Nulla dicta autem dolore maiores ex possimus magnam quas. Voluptatum cumque, id magni error beatae nostrum, sapiente culpa corrupti, dolorum repellendus fuga.",
					img: house2,
				},
				{
					id: 3,
					address: "255 NW Madrone Ave",
					city: "Roseburg",
					state: "OR",
					zip: 97233,
					bio:
						"Voluptatum cumque, id magni error beatae nostrum, sapiente culpa corrupti, dolorum repellendus fuga.",
					img: house3,
				},
				{
					id: 4,
					address: "100 Lorem Ave",
					city: "Roseburg",
					state: "OR",
					zip: 97233,
					bio:
						"Voluptatum cumque, id magni error beatae nostrum, sapiente culpa corrupti, dolorum repellendus fuga.",
					img: house4,
				},
				{
					id: 5,
					address: "33 Ipsum St",
					city: "Roseburg",
					state: "OR",
					zip: 97233,
					bio:
						"Voluptatum cumque, id magni error beatae nostrum, sapiente culpa corrupti, dolorum repellendus fuga.",
					img: house5,
				},
				{
					id: 6,
					address: "103rd Luminous Dr",
					city: "Portland",
					state: "OR",
					zip: 97033,
					bio:
						"Voluptatum cumque, id magni error beatae nostrum, sapiente culpa corrupti, dolorum repellendus fuga.",
					img: house6,
				},
			],
		};
	},

	computed: {},

	props: {},

	methods: {
		selectHouse(index) {
			const selected = this.houseList[0];
			const nextSelected = this.houseList[index];

			this.houseList.splice(0, 1, nextSelected);
			this.houseList.splice(index, 1, selected);
		},
	},

	watch: {},

	mounted: function () {},
};
</script>


<style scoped>
.house-list {
	padding-top: 6em;
	padding-bottom: 2em;
}

.main-title {
	font-size: 2em;
	padding: 0.5em;
	text-align: center;
}

.grid-wrapper {
	display: grid;
	grid-template-columns: minmax(25em, 1fr) 2fr;
	grid-template-rows: 4em 1fr;
	grid-gap: 0.5em;
}

.selected {
	grid-row: 1 / span 2;
}

.house-grid {
	position: relative;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
	grid-auto-rows: 12em;
	grid-gap: 0.5em;
	overflow: auto;
	height: 30em;
	/* background: white; */
}

/* .house:first-child {
	grid-column: 1 / span 2;
} */

.house {
	cursor: pointer;
}

img {
	width: 100%;
	object-fit: cover;
}

.selected img {
	height: 20em;
}

.house img {
	height: 12em;
}

.body {
	height: 12em;
	padding: 1em;
	color: rgb(0, 0, 10);
	background: white;
}

.title {
	text-align: center;
	margin-bottom: 1em;
}

@media screen and (max-width: 650px) {
	.grid-wrapper {
		grid-template-columns: 1fr;
	}
	.house-grid {
		display: flex;
		height: 12em;
		padding: 0 2em;
	}

	.house img {
		width: 12em;
	}
}
</style>