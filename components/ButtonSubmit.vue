<template>
    <div>
        <div>
            <h1>BUTTON SUBMIT COMPONENT</h1>
            <v-btn @click="increment" >increase</v-btn>
            <v-btn @click="decrement" >decrease</v-btn>
        </div>

    </div>

</template>

<script>

export default {

    methods : {
        increment() {
        this.$store.commit('increment')
        console.log(console.log(this.$store.state.count))
        },
        decrement() {
        this.$store.commit('decrement')
        console.log(console.log(this.$store.state.count))
        }
  },
}

</script>