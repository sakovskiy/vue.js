<template>
    <div>
        <div class="row">
            <button class="btn btn-primary" @click="getPosts">Get Posts</button>
        </div>
        <hr>
        <div class="row">
            <div class="card" style="width: 25%" v-for="post in posts">
                <div class="card-body">
                    <h5 class="card-title">{{post.title}}</h5>
                    <div class="card-text">{{post.body}}</div>
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
                posts: []
            }
        },
        methods:{
            getPosts(){
                axios.get(root+'/posts')
                    .then(response=>{
                        this.posts = response.data;
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