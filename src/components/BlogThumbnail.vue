<template>
        <div class="thumbnail">
            <div class="content">
                <router-link :to="'/blog/' + post.id">
                    <h1 class="title"><strong>{{post.title}}</strong></h1>
                    <p>{{post.content}}</p>
                </router-link>

                <div class="thumbnail-specs">
                    <span class="date">{{post.createdAt | formatDate}}</span>
                    <div class="likes" v-on:click='onLike'>
                        <i v-bind:class="{ 'fas': isLiked, 'far': !isLiked }"
                           class="fa-heart"></i>
                        {{ likeAmount }} {{ 'like' | pluralize(likeAmount) }}
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "BlogThumbnail",
        props: {
            post: Object,
        },
        data: function () {
            return {
                likeAmount: Math.floor(Math.random() * 10),
                isLiked: false
            }
        },
        methods: {
            onLike: function () {
                this.isLiked = !this.isLiked;

                if (this.isLiked) {
                    this.likeAmount += 1;
                } else {
                    this.likeAmount -= 1;
                }
            }
        }
    }
</script>

<style lang="scss">
.thumbnail {
    @apply bg-white;
    @apply p-4;
    .content {
        .title {
            @apply mb-2;
        }
        .thumbnail-specs {
            @apply flex justify-between;
            @apply pt-4;
            .date {
                @apply block;
                @apply text-gray-400;
            }
            .likes {
                @apply text-gray-400 cursor-pointer;
            }
        }
    }
}
</style>