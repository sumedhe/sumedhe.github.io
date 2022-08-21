<template>
    <div class="card">

        <table style="width:100%;">
            <tr>
                <td>
                    <div id="left">
                        <table style="width:100%;">
                            <tr>
                                <a v-if="url != null && url != ''" :href="url" target="_blank">
                                    <td v-if="topRight != null && topRight != ''" colspan="2">
                                        <span id="top-left">{{topLeft}}</span>
                                        <span id="top-right"> | {{topRight}}</span>
                                    </td>
                                    <td id="top-left" v-else colspan="2">
                                        {{topLeft}}
                                    </td>
                                </a>
                                <template v-else>
                                    <td v-if="topRight != null && topRight != ''" colspan="2">
                                        <span id="top-left">{{topLeft}}</span>
                                        <span id="top-right"> | {{topRight}}</span>
                                    </td>
                                    <td id="top-left" v-else colspan="2">
                                        {{topLeft}}
                                    </td>
                                </template>

                            </tr>

                            <tr>
                                <td id="middle" colspan="2">{{middle}}</td>
                            </tr>

                            <tr>
                                <td id="bottom-left" style="text-align:left; width:70%;"> {{bottomLeft}} </td>
                                <td id="bottom-right" style="text-align:right; width:30%;"> {{bottomRight}} </td>
                            </tr>
                        </table>
                    </div>
                </td>
                <td v-if="image != null && image != ''" style="width:10px;">
                    <!-- <img :src="getImageUrl(image)" width="75" height="75" /> -->
                    <a v-if="url != null && url != ''" :href="url" target="_blank">
                        <img :src="image" width="75" height="75" />
                    </a>
                    <img v-else :src="image" width="75" height="75" />
                </td>
            </tr>
        </table>

    </div>
    <!-- <div>
        <template v-if="value.hasOwnProperty('url')">
            <i :class="'fab v-align-middle link-icon fa-' + name" style="font-size:24px"></i>
            <span class="v-align-middle ml10"><a :href="value.url" target="_blank">{{value.display}}</a></span>
        </template>
        <template v-else>
            <i :class="'fab v-align-middle link-icon fa-' + name" style="font-size:24px"></i>
            <span class="v-align-middle ml10">{{value}}</span>
        </template>
    </div> -->
</template>

<script>
export default {
    props: {
        'topLeft': String,
        'topRight': String,
        'middle': String,
        'bottomLeft': String,
        'bottomRight': String,
        'url': String,
        'image': String
    },
    data() {
        return {
            
        }
    },
    setup() {
        return {
            getImageUrl: (name) => {
                return new URL(`../assets/${name}`, import.meta.url).href
            }
        } 
    }
}
</script>

<style scoped>

#top-left {
    font-weight: 500;
}

#top-right {
    font-weight: 500;
    color: rgb(84, 84, 155);
}

#middle {
    font-weight: 400;
    color: rgb(74, 74, 74);
}

#bottom-left {
    color: red;
}

#bottom-left {
    color: rgb(146, 146, 146);
    font-style: italic;
    font-size: small;
}


.card {
    background-color: white;
    border-bottom: 1px solid #dcdfe1;
}

#left{
    /* float:left; */
    /* width: 700px; */
}
#right{
    /* float:right;
    width: 300px; */
}

@media (min-width: 1024px) {

}
</style>
