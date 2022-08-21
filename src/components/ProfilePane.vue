<template>
    <div id="profile-content">
        <img alt="Vue logo" class="logo" src="images/sumedhe.jpg" width="125" height="125" />
        <h2><b>{{data.name}}</b></h2>
        <p>{{data.headline}}</p>
        <p>{{data.company}}</p>

        <LinkEntry name="github" :value="data.github"></LinkEntry>
        <LinkEntry name="linkedin" :value="data.linkedin"></LinkEntry>
        <LinkEntry name="stack-overflow" :value="data.stackoverflow"></LinkEntry>
        <LinkEntry name="twitter" :value="data.twitter"></LinkEntry>
        <LinkEntry name="medium" :value="data.medium"></LinkEntry>
    </div>
</template>


<script>
import profileData from '../data/profile-data.json'
import LinkEntry from './LinkEntry.vue'

export default {
    data() {
        return {
            data: profileData
        };
    },
    components: { LinkEntry }
}
</script>

<style scoped>

img {
    border-radius: 50%;
}

@media (max-width: 1024px) {
    #profile-content {
        text-align: center;
    }
}
</style>
