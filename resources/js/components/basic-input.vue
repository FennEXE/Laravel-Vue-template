<template>
    <div>
		<h2>{{test}}</h2>
        <input @input="content.name" :value="content.name">
		<input @input="content.value" type="number" :value="content.value" min="0.01" step="0.01"/>
		<input @input="content.max" type="number" :value="content.max" min="1" step="1" oninput="this.value = 
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
				name: null,
                value: null,
                max: null
			}
		}
	},
    data () {
        return {
        content: this.test
        }
    },
    methods: {
        // localGrocery (e) {
        // this.$emit('input', "ping")
        // }
    }
    }
</script>