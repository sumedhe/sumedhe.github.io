<template>
    <div>
        <h3>Experience</h3>
        <ItemCard v-for="(item, index) in data" :key="index"
            :topLeft="item.title"
            :topRight="item.company"
            :bottomLeft="item.period"
            :middle="item.description" />
    </div>
</template>

<script>
import experienceData from '../data/experience-data.json'
import ItemCard from '../components/ItemCard.vue';

export default {
    data() {
        return {
            data: experienceData
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
