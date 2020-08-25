<template>
	<div class='house-form'>
		<div class='tab-row'>

			<div
				v-for='(tab, index) in tabList'
				:key='index'
				@click='step = index'
				class='tab'
				:class='{currentTab: step === index}'
			>
				<simple-icon :icon='tab.icon' />
				<span class='underline'>{{tab.text}}</span>

			</div>
		</div>
		<div class='tab-view'>
			<div
				class='location-form'
				v-if='step === 0'
			>
				<div>
					<div class='flexible-grid'>
						<h2>Address</h2>
						<div class='form-group'>
							<label for='city'>City</label>
							<input
								type='text'
								v-model='city'
								id='city'
							>
						</div>
						<div class='form-group half-width'>
							<label for='state'>State</label>
							<input
								type='text'
								v-model='state'
								id='state'
							>
						</div>
						<div class='form-group'>
							<label for='zip'>Zip Code</label>
							<input
								type='text'
								v-model='zip'
								id='zip'
							>
						</div>

					</div>

				</div>
				<div>
					<div class='surroundings'>
						<div class='flexible-grid'>
							<h2>Area</h2>

							<div class='form-group'>
								<label for='hood'>District</label>
								<select
									id='hood'
									v-model='hood'
								>
									<option value=''>Select...</option>
									<option>Suburb</option>
									<option>Downtown</option>
									<option>Rural</option>
								</select>
							</div>
							<!-- <div class='flexible-grid'> -->
							<div>
								<input
									type='checkbox'
									name=''
									id='biking'
								>
								<label for='biking'>River Access</label>
							</div>
							<div>
								<input
									type='checkbox'
									name=''
									id='biking'
								>
								<label for='biking'>Bicycle Friendly</label>
							</div>
							<div>
								<input
									type='checkbox'
									name=''
									id='schools'
								>
								<label for='schools'>Close to Schools</label>

							</div>
							<div>
								<input
									type='checkbox'
									name=''
									id='biking'
								>
								<label for='biking'>Near Shopping</label>
							</div>

							<!-- </div> -->
						</div>

					</div>
				</div>
			</div>
			<div
				class='large-flex-grid'
				v-if='step === 1'
			>
				<div class='flexible-grid'>
					<h2>Types</h2>
					<div
						v-for='name in Object.keys(types)'
						class='outline'
						:class='{selectedType:types[name]}'
						:key='name'
						@click='types[name] = !types[name]'
					>
						{{name}}
					</div>
				</div>
				<div class='flexible-grid'>

					<h2>Size</h2>
					<div class='form-group'>
						<label for='bed'>Bed</label>
						<input
							type='number'
							min='0'
							max='10'
							v-model='bed'
							id='bed'
						>
					</div>
					<div class='form-group'>
						<label for='bath'>Bath</label>
						<input
							type='number'
							min='0'
							max='5'
							v-model='bath'
							id='bath'
						>
					</div>

					<div class='form-group'>
						<label for='lot'>Lot area</label>
						<input
							type='text'
							v-model='lot'
							id='lot'
						>
					</div>
					<div class='form-group'>
						<label for='house'>House area</label>
						<input
							type='text'
							v-model='house'
							id='house'
						>
					</div>
				</div>
				<div class='flexible-grid'>
					<h2>Value</h2>
					<div class='form-group span2'>
						<label for='min'>Min Price</label>
						<input
							type='text'
							v-model='min'
							id='min'
						>
					</div>
					<div class='form-group'>
						<label for='max'>Max Price</label>
						<input
							type='text'
							v-model='max'
							id='max'
						>
					</div>
					<div class='form-group'>
						<label for='year'>Year Made</label>
						<input
							type='text'
							v-model='year'
							id='year'
						>
					</div>

				</div>
			</div>
			<div
				v-if='step === 2'
				class='large-flex-grid'
			>
				<div class='flexible-grid'>
					<h2>Name</h2>
					<div class='form-group'>
						<label for='first'>First</label>
						<input
							type='text'
							v-model='first'
							id='first'
						>
					</div>
					<div class='form-group'>
						<label for='last'>Last</label>
						<input
							type='text'
							v-model='last'
							id='last'
						>
					</div>
				</div>
				<div class='flexible-grid'>
					<h2>Contact</h2>
					<div class='form-group'>
						<label for='phone'>Phone</label>
						<input
							type='text'
							v-model='phone'
							id='phone'
						>
					</div>
					<div class='form-group'>
						<label for='email'>Email</label>
						<input
							type='text'
							v-model='email'
							id='email'
						>
					</div>
				</div>
				<div class='flexible-grid'>
					<h2>Identity</h2>
					<div class='form-group'>
						<label for='age'>Age</label>
						<input
							type='number'
							min='18'
							max='110'
							id='age'
							v-model='age'
						>
					</div>
					<div class='form-group'>
						<label for='gender'>Gender</label>
						<select
							id='gender'
							v-model='gender'
						>
							<option value=''>Select...</option>
							<option>Male</option>
							<option>Female</option>
							<option>Both</option>
							<option>Other</option>
						</select>
					</div>
				</div>

			</div>
			<button
				class='cta-btn'
				@click='step++'
				v-if='step !== tabList.length -1'
			>
				Next
				<simple-icon :icon='rightArrow' />
			</button>
			<chat-btn v-else />
		</div>
	</div>
</template>

<script>
import SimpleIcon from "@/components/wrappers/SimpleIcon";
import ChatBtn from "@/components/buttons/ChatBtn";
import { location, home, user, rightArrow } from "../svgData";
//import componentName from './components/componenet-name.vue';

export default {
	name: "",

	data: function () {
		return {
			city: "",
			state: "",
			zip: "",
			hood: "",
			bed: "",
			bath: "",
			lot: "",
			house: "",
			min: "",
			max: "",
			year: "",
			first: "",
			last: "",
			phone: "",
			email: "",
			age: "",
			gender: "",
			step: 0,
			types: {
				House: false,
				Condo: false,
				Land: false,
			},
			rightArrow,
			tabList: [
				{
					text: "Location",
					icon: location,
				},
				{
					text: "Features",
					icon: home,
				},
				{
					text: "Contact",
					icon: user,
				},
			],
		};
	},
	components: {
		SimpleIcon,
		ChatBtn,
	},

	computed: {},

	props: {},

	methods: {},

	watch: {},

	mounted: function () {},
};
</script>


<style scoped>
.house-form {
	position: absolute;
	z-index: 2;
	bottom: -4em;
	left: 0;
	right: 0;
	margin: 0 4em;
	/* width: 100%; */
}

.tab-row {
	display: inline-flex;
	border-radius: 5px 5px 0 0;
	overflow: hidden;
}

.tab {
	display: flex;
	align-items: center;
	padding: 1em 1.5em;
	color: white;
	background: rgba(0, 0, 10, 0.8);
	cursor: pointer;
}

.currentTab {
	background: white;
	color: rgb(0, 0, 10);
}

.tab >>> svg {
	height: 1.5em;
	margin-right: 0.5em;
}

.tab-view {
	background: white;
	/* height: 220px; */
	border-radius: 0 10px 10px 10px;
	padding: 1em 2em;
	color: rgb(0, 0, 10);

	/* width: 500px; */
}

.location-form {
	display: flex;
	/* justify-content: space-around; */
}

.location-form > div {
	width: 50%;
}

.form-group {
	display: flex;
	flex-direction: column;
}

input[type="text"],
input[type="number"],
select {
	height: 2em;
}

.outline {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 2em;
	border: 1px solid rgb(0, 0, 10);
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
}

.selectedType {
	background: rgb(10, 10, 20);
	color: white;
}

.flexible-grid {
	display: grid;
	grid-gap: 0.5em;
	grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
	align-items: center;
	/* justify-items: center; */
}

.flexible-grid h2 {
	justify-self: center;
}

.surroundings {
	margin-left: 1em;
}

.half-width {
	grid-column: span 1;
	/* width: 50px; */
}

.large-flex-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
}

.contact-form {
	display: grid;
	grid-gap: 0.5em;
	grid-template-columns: 1fr 9.5em 9.5em;
}

.cta-btn {
	margin: 1em;
}

.cta-btn >>> svg {
	height: 1em;
	margin-left: 0.5em;
}

@media screen and (max-width: 650px) {
	.house-form {
		margin: 0;
	}
}
</style>