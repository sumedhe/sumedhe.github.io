<template>
    <div>
        <h3>Community Positions</h3>
        <ItemCard v-for="(item, index) in dataV" :key="index"
            :topLeft="item.position"
            :middle="item.organization"
            :bottomLeft="item.period" />

        <h3>Volunteering</h3>
        <ItemCard v-for="(item, index) in dataC" :key="index"
            :topLeft="item.position"
            :middle="item.organization"
            :bottomLeft="item.period" />

    </div>
</template>

<script>
import volunteeringData from '../data/volunteering-data.json'
import communityPositionsData from '../data/community-positions-data.json'
import ItemCard from '../components/ItemCard.vue';


export default {
    data() {
        return {
            dataV: volunteeringData,
            dataC: communityPositionsData
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
