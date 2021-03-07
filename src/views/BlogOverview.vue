<template>
    <div class="thumbnail-wrapper">
        <template v-if="posts && posts.length">
            <BlogThumbnail v-for="post of posts" :key="post.id" :post="post">
            </BlogThumbnail>
        </template>
    </div>
</template>

<script>
    import axios from 'axios';
    import BlogThumbnail from "../components/BlogThumbnail";

    export default {
        name: "BlogOverview",
        components: {
            BlogThumbnail
        },
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            axios.get(`https://api.mocki.io/v1/b4221a28`)
                .then(response => {
                    this.posts = response.data
                })
        }
    }
</script>

<style scoped lang="scss">
    .thumbnail-wrapper {
        @apply bg-gray-200;
        @apply mx-auto;
        @apply grid grid-cols-1 gap-4;
        max-width: 1000px;
    }
</style>