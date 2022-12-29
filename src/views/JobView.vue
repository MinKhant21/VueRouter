<template>
  <h3>Job</h3>
  <div v-for="job in jobs" :key="job">
        <router-link>
        <h3>{{job.title}}</h3>
        </router-link>
  </div>
</template>

<script>
export default {
    name:'JobView',
    data(){
        return{
            jobs:[ 
                {id:1,title:'Web'},
                {id:1,title:'Mobile'},
                {id:1,title:'Desktop'},
            ]
        }
    }
    
}
</script>

<style>

</style>