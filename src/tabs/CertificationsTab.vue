<template>
    <div>
        <h3>Certifications</h3>
        <ItemCard v-for="(item, index) in data" :key="index"
            :topLeft="item.name"
            :middle="item.issuer"
            :bottomLeft="item.date"
            :url="item.url" />
    </div>
</template>

<script>
import certificationsData from '../data/certifications-data.json'
import ItemCard from '../components/ItemCard.vue';

export default {
    data() {
        return {
            data: certificationsData
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
