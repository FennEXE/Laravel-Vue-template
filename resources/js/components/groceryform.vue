<template>
    <div v-if="formType==='create'">
		<input v-model="localGrocery.name">
		<input v-model="localGrocery.value" type="number" value="0.01" min="0.01" step="0.01"/>
		<input v-model="localGrocery.max" type="number" value="1" min="1" step="1" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 1 ? Math.abs(this.value) : 1"/>
	</div>
	<div v-else>
		<h2>Edit: Form</h2>
		<input v-model="localGrocery.name">
		<input v-model="localGrocery.price" type="number" value="0.01" min="0.01" step="0.01"/>
		<input v-model="localGrocery.max_amount" type="number" value="1" min="1" step="1" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 1 ? Math.abs(this.value) : 1"/>
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
				name: null,
				value: null,
				max: null
			}
		}
	},
	data() {
		return {
			formType: this.$route.name,
			localGrocery: this.groceryProp,
		}
	}
}
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