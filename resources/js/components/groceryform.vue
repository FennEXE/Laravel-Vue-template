<template>
    <div v-if="formType==='create'">
		<input v-model="localGrocery.name">
		<input v-model="localGrocery.value" type="number" value="0.01" min="0.01" step="0.01"/>
		<input v-model="localGrocery.max" type="number" value="1" min="1" step="1" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 1 ? Math.abs(this.value) : 1"/>
 		<button @click="createProduct()">Add</button>
	</div>
	<div v-else>

		<h2>Edit: {{grocery.name}}</h2>
		<input v-model="localGrocery.name">
		<input v-model="localGrocery.price" type="number" value="0.01" min="0.01" step="0.01"/>
		<input v-model="localGrocery.max_amount" type="number" value="1" min="1" step="1" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 1 ? Math.abs(this.value) : 1"/>
		<button @click="editProduct()">Edit</button>
	</div>
</template>

<script>
export default {
	name: "GroceryForm",
	props: {
		groceryProp: {
			type: Object,
			required: true,
			default: {
				name: "GroceryName",
				value: 0.01,
				max: 1
			}
		}
	},
	data() {
		return {
			groceryId: this.$route.params.id,
			formType: this.$route.name,
			localGrocery: this.groceryProp,
		}
	},
	methods: {
		//Adds a new product to the list
		createProduct() {
			this.$store.dispatch('createProduct', {
				name: this.localGrocery.name, 
				value: this.localGrocery.value,
				amount: 0,
				max_amount: this.localGrocery.max
			});
			this.$router.push('/');
		},
		editProduct() {
			this.$store.dispatch('editProduct', {
				nid: this.groceryId,
				id: this.groceryId, 
				name: this.localGrocery.name, 
				price: this.localGrocery.price,
				amount: 0,
				max_amount: this.localGrocery.max_amount
			});
			this.$router.push('/');
		},
	},
	computed: {
		grocery() {
			const getById = this.groceryId;
			console.log(getById)
			return this.localGrocery = this.$store.getters.getGroceries.find(x => x["id"] == getById)
		}
	},
	created()
	{
        this.$store.dispatch('getAllGroceries');
    },
}

// 

// 		//Sends the edit to store/index.js
// 		editDone() {
// 			this.$store.dispatch('editProduct', {
// 				nid: this.productEdit,
// 				id: this.productList[i].id, 
// 				name: this.itemName, 
// 				price: this.itemPrice,
// 				amount: newAmount,
// 				max_amount: this.itemMax
// 			});
// 		},

// 		//Fills up the product list into Data to prevent the state being altered.
// 		fillProduct(products) {
// 			this.productList = JSON.parse(JSON.stringify(products));
// 		}
// 	},
// 	computed: {
// 		//Product getter for store/index.js
// 		products() {
// 			const productGetter = [...this.$store.getters.getGroceries]
// 			this.fillProduct(productGetter);
// 			return this.productList;
// 		}
// 	},
// 	created() {
// 		this.$store.dispatch('getAllGroceries');
// 	}	
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