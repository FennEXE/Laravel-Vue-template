<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import GroceryList from "./components/groceries.vue";
import GroceryForm from "./components/groceryform.vue";
export default {
  name: "App",
  components: {
    GroceryList,
    GroceryForm
  },
};
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