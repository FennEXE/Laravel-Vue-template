<template>
	<div id="app">
		<router-view />
		<basicinput :data="data" />
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