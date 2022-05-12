<template>
    <div>
		<input v-model="grocery.name">
		<input v-model="grocery.value" type="number" value="0.01" min="0.01" step="0.01"/>
		<input v-model="grocery.max" type="number" value="1" min="1" step="1" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 1 ? Math.abs(this.value) : 1"/>
 		<button @click="createProduct()">Add</button>
	</div>
</template>

<script>
export default {
	name: "GroceryForm",
	props: {
		grocery: {
			type: Object,
			required: true,
			default: {
				name: "Test",
				value: 0.01,
				max: 1
			}
		}
	},
	methods: {
		//Adds a new product to the list
		createProduct() {
			this.$store.dispatch('createProduct', {
				name: this.grocery.name, 
				value: this.grocery.value,
				amount: 0,
				max_amount: this.grocery.max
			});
			this.$router.push('/');
		},

		//Sends the edit to store/index.js
		editDone() {
			this.$store.dispatch('editProduct', {
				nid: this.productEdit,
				id: this.productList[i].id, 
				name: this.itemName, 
				price: this.itemPrice,
				amount: newAmount,
				max_amount: this.itemMax
			});
		},

		//Fills up the product list into Data to prevent the state being altered.
		fillProduct(products) {
			this.productList = JSON.parse(JSON.stringify(products));
		}
	},
	computed: {
		//Product getter for store/index.js
		products() {
			const productGetter = [...this.$store.getters.getGroceries]
			this.fillProduct(productGetter);
			return this.productList;
		}
	},
	created() {
		this.$store.dispatch('getAllGroceries');
	}	
};
</script>

<style scoped>
th{
	min-width: 100px;
}
div{
	padding-top: 20px;
	padding-bottom: 40px;
}
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
input {
	background-color: rgb(65, 65, 65);
	color: #a2bdd8;
	font-size: 0.8em;
	border-radius: 5px;
	text-align: center;
	width: 150px;
}
#groceryTable {
	margin: 0 auto;
	font-size: 2em;
}
</style>