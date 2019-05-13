<template>
    <div>
    <div class="title">
        foo components
    </div>
    <ul class="tag-list">
        <li v-for="tag in tagList" :key="tag.id">{{tag.title}}</li>
    </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    asyncData({store}){ // 异步数据 这个方法只在服务端执行，客户端运行是不会执行的
        return store.dispatch('set_tag_list');
    },
    mounted() {
        // this.$store.dispatch('set_tag_list');
    },
    computed: {
        ...mapGetters([
            'tagList'
        ])
    },
    metaInfo: {
      title: 'foo',
    }
}
</script>
