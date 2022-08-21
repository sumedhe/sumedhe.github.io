<template>
    <div>
        <h3>Achievements</h3>
        <ItemCard v-for="(item, index) in data" :key="index"
            :topLeft="item.name"
            :topRight="item.award"
            :bottomLeft="item.date"
            :middle="item.issuer"
            :image="item.image"
            :url="item.url" />
    </div>
</template>

<script>
import achievementsData from '../data/achievements-data.json'
import ItemCard from '../components/ItemCard.vue';

export default {
    data() {
        return {
            data: achievementsData
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
