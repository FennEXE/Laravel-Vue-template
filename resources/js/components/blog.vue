<template>
    <div>
		<b>TEST</b>
		<table id="groceryTable" v-for="(posts, i) in localPosts" :key="i">
			<tr >
				<td>{{posts[i].title}}</td>
				<td>{{posts[i].content}}</td>
			</tr>
		</table>	
	</div>
</template>

<script>
export default {
	name: "Blog",
	data() {
		return {
			posts: []
		}
	},
	methods: {
		
	},
	computed: {
		localPosts() {
			const localPosts = this.$store.getters.get_posts;
			return localPosts;
		}
	},
	created() {
		this.$store.dispatch('getAllPosts');
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