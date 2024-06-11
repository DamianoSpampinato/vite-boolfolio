<script>
export default{
    name: 'ProjectCard',
    props:{
        project: Object
    }
}
</script>

<template>
<div class="card">

  <div class="card-body">
    <h5 class="card-title">{{ project.name }}</h5>
    <p v-if="project.summary" class="card-text">Description: {{ project.summary }}</p>
    <span v-if="project.type"> type: {{ project.type.name }}</span>
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </div>
</div>
</template>


<style lang="scss" scoped>

</style>