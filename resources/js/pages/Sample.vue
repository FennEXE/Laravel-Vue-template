<template>
	<div id="app">
		<h1>Sample.vue</h1>
		<router-view />
		<basicinput :test="tester" />
	</div>
</template>

<script>
import basicinput from "../components/basic-input.vue";
export default {
	name: "Sample",
	components: {
	basicinput
	},
	data() {
		return {
			tester: {
			name: "This is a test",
			value: 1.59,
			max: 5
		}
		}
	}
}
</script>

<style>
body {
	background-color: #3f3f3f;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(37, 37, 37);
  color: #a2bdd8;
  margin-top: 60px;
  border-radius: 25px;
}
</style>