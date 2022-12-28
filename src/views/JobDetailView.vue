<template>
  <h3>JobDetail {{id}} </h3>
</template>

<script>
export default {
    name:'JobDetail',
    data(){
        return{
            id:this.$route.params.id

        }
    }

}
</script>

<style>

</style>