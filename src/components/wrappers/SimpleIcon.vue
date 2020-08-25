<template functional>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:viewBox="props.icon.viewBox"
	>
		<path
			fill="currentColor"
			:d="props.icon.path"
		/>
	</svg>
</template>

<script>
export default {
	props: {
		icon: Object,
	},
};
</script>

<style scoped>
/* svg {
	width: 100%;
} */
</style>