<template>
    <div v-if="formType==='create'">
		<input v-model="localBlog.title">
		<input v-model="localBlog.content" type="text"/>
	</div>
	<div v-else>
		<input v-model="localBlog.title">
		<input v-model="localBlog.content" type="text"/>
	</div>
</template>


<script>
export default {
	name: "BlogForm",
	props: {
		blogProp: {
			type: Object,
			required: true,
			default: {
				title: null,
				content: null,
			}
		}
	},
	data() {
		return {
			formType: this.$route.name,
			localBlog: this.blogProp,
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