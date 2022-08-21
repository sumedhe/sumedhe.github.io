<template>
    <div>
        <h3>Education</h3>
        <ItemCard v-for="(item, index) in data" :key="index"
            :topLeft="item.title"
            :middle="item.college"
            :bottomLeft="item.period" />
    </div>
</template>

<script>
import educationData from '../data/education-data.json'
import ItemCard from '../components/ItemCard.vue';

export default {
    data() {
        return {
            data: educationData
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
