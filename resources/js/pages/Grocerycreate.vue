<template>
    <div id="app">
        <h2>Create a new product</h2>
        <router-view />
        <GroceryForm :groceryProp="create" />
        <button @click="createProduct()">Add</button>
    </div>
</template>


<script>
import GroceryForm from "../components/groceryform.vue";
export default {
  name: "GroceryCreate",
  components: {
    GroceryForm
  },
  data() {
    return {
      create: {
        name: "New Grocery",
        value: 0.01,
        max: 1
      },
    }
  },
  methods: {
		//Adds a new product to the list
		createProduct() {
			this.$store.dispatch('createProduct', {
				name: this.create.name, 
				value: this.create.value,
				amount: 0,
				max_amount: this.create.max
			});
			this.$router.push('/');
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