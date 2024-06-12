<script>
import axios from 'axios';
    export default {
        name: 'ProjectShow.vue',
        
        data(){

            return{
                project: null
            }
        },
        methods: {
            getProject(){
                axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
                .then((response) => {
                this.project= response.data.results;
                
            });
            }
        },
        mounted(){
            this.getProject()
        }
    }
</script>

<template>
    <div class="container">
        <div v-if="project">

            <h1>Nome: {{ project.name }}</h1>
            <p>summary: {{ project.summary }}</p>
        <div v-if="project.type">
            Type: <strong>{{ project.type.name }}</strong>
        </div>
    <div v-if="project.client_name">
        {{ project.client_name }}
    </div>
<div v-if="project.technologies.length > 0">
    <span v-for="technology in project.technologies" class="badge rounded-pill text-bg-primary m-1 ">{{ technology.name }}</span>
</div>
<div v-if="project.img">
    <img :src="`http://127.0.0.1:8000/storage/${project.img}`" alt="non funziona il link">

</div>
</div>
</div>
</template>

<style lang="scss">
</style>