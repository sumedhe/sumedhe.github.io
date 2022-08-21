<template>
    <div>
        <h3>Projects</h3>
        <ItemCard v-for="(item, index) in data" :key="index"
            :topLeft="item.name"
            :middle="item.description"
            :bottomLeft="item.tagline"
            :url="item.url" />
    </div>
</template>

<script>
import projectsData from '../data/projects-data.json'
import ItemCard from '../components/ItemCard.vue';

export default {
    data() {
        return {
            data: projectsData
        };
    },
    components: { ItemCard }
}
</script>

<style scoped>
.card {
    /* border-style: groove; */
    background-color: white;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
}
@media (min-width: 1024px) {

}
</style>
