<template>
    <div>
		<div v-if="formVisible == 0">
		<table id="groceryTable">
			<tr>
				<th>Product</th>
				<th>Prijs</th>
				<th>Aantal</th>
				<th>Max</th>
				<th>Subtotaal</th>
				<th>Opties</th>
			</tr>
			<tr v-for="(product, i) in products" :key="i">	
				<td>{{productList[i].name}}</td>
				<td>{{productList[i].price}}</td>
				<td><input v-model="productList[i].amount" value="0" placeholder="0" type="number" min="0" :max="productList[i].max_amount" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : 0" v-on:change="amount(i, productList[i].amount)"/></td>
				<td>{{productList[i].max_amount}}</td>
				<td>{{stopNan(productList[i].price, productList[i].amount, i)}}</td>
				<td><button @click="deleteProduct(i)">Delete</button><button @click="editProduct(i)">Edit</button></td>
			</tr>
			<tr>
				<th colspan="4"></th>
				<th>Totaal</th>
			</tr>
			<tr>
				<td colspan="4"></td>
				<td>{{total()}} </td>
			</tr>
		</table>
		<input v-model="itemName">
		<input v-model="itemValue" type="number" value="0.01" min="0.01" step="0.01"/>
		<input v-model="itemMax" type="number" value="1" min="1" step="1" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 1 ? Math.abs(this.value) : 1"/>
		<button @click="createProduct()">Add</button>	
		</div>
		<div v-if="formVisible == 1">
			<input v-model="itemName">
			<input v-model="itemPrice" type="number" min="0.01" step="0.01"/>
			<input v-model="itemMax" type="number" value="0" min="1" step="1"/>
			<button @click="editDone()">Done</button>
		</div>	
	</div>
</template>

<script>
export default {
	name: "GroceryList",
	data() {
		return {
			productList: [],
			itemId: null,
			formVisible: false,
			subTotal: [],
			itemName: '',
			itemValue: 1.99,
			itemPrice: null,
			itemAmount: null,
			itemMax: 1,
			productEdit: null
		}
	},
	methods: {
		//Sends a dispatch to mutate the amount of a product in the store index.js
		amount(i, e) {
			this.$store.dispatch('changeAmount', {
				nid: i,
				amount: e
			})
		},

		//Counts the total price of all products.
		total()
		{
			return this.productList.reduce((total, product) => (product.price*product.amount) + total, 0).toFixed(2);
		},

		//Adds a new product to the list
		createProduct() {
			this.$store.dispatch('createProduct', {
				name: this.itemName, 
				value: this.itemValue,
				amount: 0,
				max_amount: this.itemMax
			});
		},

		//Deletes a product from the list
		deleteProduct(product) {
			this.$store.dispatch('deleteProduct', product);
		},

		//opens up the edit menu for a product.
		editProduct(product) {
			this.productEdit = product
			this.itemName = this.productList[product].name
			this.itemPrice = this.productList[product].price
			this.itemMax = this.productList[product].max_amount
			this.formVisible = true;
		},

		//Sends the edit to store/index.js
		editDone() {
			let newAmount = 0
			let i = this.productEdit
			this.$store.dispatch('editProduct', {
				nid: this.productEdit,
				id: this.productList[i].id, 
				name: this.itemName, 
				price: this.itemPrice,
				amount: newAmount,
				max_amount: this.itemMax
			});
			this.$set(this.productList[i], 'amount', this.itemAmount);
			this.$set(this.productList[i], 'max_amount', this.itemMax);
			this.$set(this.productList[i], 'name', this.itemName);
			this.$set(this.productList[i], 'value', Number(this.itemPrice).toFixed(2));
			this.itemName = '';
			this.itemPrice = 0.01;
			this.itemAmount = null;
			this.itemId = null
			this.formVisible = false;
		},

		//Ensures the value is a number.
		stopNan(value, amount, i) {
			if(isNaN(amount) == true) {
				amount = 0;
			}
			this.subTotal[i] = Number(value * amount).toFixed(2)
			return Number(this.subTotal[i]).toFixed(2);
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