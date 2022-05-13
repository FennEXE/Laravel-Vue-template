<template>
    <div>
		<input @input="test">
		<input @input="test" type="number" value="0.01" min="0.01" step="0.01"/>
		<input @input="test" type="number" value="1" min="1" step="1" oninput="this.value = 
 !!this.value && Math.abs(this.value) >= 1 ? Math.abs(this.value) : 1"/>
	</div>
</template>

<script>
export default {
    name: "Sample",
    props: {
		test: {
			type: Object,
			required: true,
			default: {
				gname: "GroceryName",
				gvalue: 0.01,
				gmax: 1
			}
		}
	},
    data () {
        return {
        content: this.value
        }
    },
    methods: {
        localGrocery (e) {
        this.$emit('input', "ping")
        }
    }
    }
</script>