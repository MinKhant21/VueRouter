<template>
  <h3>Job</h3>
  <div v-for="job in jobs" :key="job">
    <route-link :to="/jobdetail/" :params="{{job.id}}">
      <h3>{{job.title}}</h3>
    </route-link>
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