<template>
    <div id="app">
      <h1>Edit: {{edit.name}}</h1>
        <router-view />
        <GroceryForm :groceryProp="edit" />
        <button @click="editProduct()">Edit</button>
    </div>
</template>

<script>
import GroceryForm from "../components/groceryform.vue";
export default {
  name: "GroceryEdit",
  components: {
    GroceryForm
  },
  data() {
    return {
      product: null,
      edit: {
        name: "Placeholder",
        price: 0.01,
        max_amount: 1
      },
			groceryId: this.$route.params.id,
    }
  },
  methods: {
		editProduct() {
			this.$store.dispatch('editProduct', {
				nid: this.groceryId,
				id: this.groceryId, 
				name: this.edit.name, 
				price: this.edit.price,
				amount: 0,
				max_amount: this.edit.max_amount,
			});
      console.log(this.edit);
			this.$router.push('/');
		},
    deepCopy(products) {
			this.edit = JSON.parse(JSON.stringify(products));
		}
	},
  computed: {
		grocery() {
			const getById = this.groceryId;
      const product = this.$store.getters.getGroceries.find(x => x["id"] == getById)
			this.deepCopy(product);
      return product;
		}
	},
	created()
	{
    this.$store.dispatch('getAllGroceries');
    console.log(this.grocery);
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