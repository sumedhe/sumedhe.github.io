<template>
    <div>
        <template v-if="value.hasOwnProperty('url')">
            <i :class="'fab v-align-middle link-icon fa-' + name" style="font-size:24px"></i>
            <span class="v-align-middle ml10"><a :href="value.url" target="_blank">{{value.display}}</a></span>
        </template>
        <template v-else>
            <i :class="'fab v-align-middle link-icon fa-' + name" style="font-size:24px"></i>
            <span class="v-align-middle ml10">{{value}}</span>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        'name': String,
        'value': String
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
.link-icon {
  width: 25px;
  text-align: left;
}

@media (min-width: 1024px) {

}
</style>
