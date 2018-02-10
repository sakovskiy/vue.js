<template>
    <div>
        <div class="row">
            <button class="btn btn-primary" @click="getPhotos">Get Photos</button>
        </div>
        <hr>
        <div class="row">
            <div class="card" style="width: 25%" v-for="photo in photos">
                <img class="card-img-top" :src="photo.url" :alt="photo.title">
                <div class="card-body">
                    <h5 class="card-title">{{photo.title}}</h5>
                    <a href="#" class="btn btn-primary">More</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const root = 'https://jsonplaceholder.typicode.com';
    export default {
        data(){
            return {
                photos: []
            }
        },
        methods:{
            getPhotos(){
                axios.get(root+'/photos?albumId=1')
                    .then(response=>{
                        this.photos = response.data;
                    })
                    .catch(error=>{
                        console.log(error);
                    });
            }
        }
    }
</script>

<style scoped>

</style>