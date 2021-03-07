<template>
    <div>
        <h1><strong>{{ post.title }}</strong></h1>
        <p>{{ post.content }}</p>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "BlogDetail",
        data() {
            return {
                post: Object
            }
        },
        mounted() {
            const postId = parseInt(this.$route.params.id);
            axios.get(`https://api.mocki.io/v1/faac04d7`)
                .then(response => {
                    this.post = response.data.find(x => x.id === postId)
                })
        }
    }
</script>

<style scoped>

</style>