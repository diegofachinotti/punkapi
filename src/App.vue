<template>
    <v-app id="punkapi">

        <v-data-table
                :headers="headers"
                :items="beers"
                class="elevation-1">
            <template v-slot:items="props">
                <td><img :src="props.item.image_url" height="35" /></td>
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.tagline }}</td>
                <td class="text-xs-right">{{ props.item.first_brewed }}</td>
                <td class="text-xs-right">{{ props.item.abv }}</td>
            </template>
        </v-data-table>


        <div class="text-xs-center">
            <v-pagination v-model="page" :length="5"></v-pagination>
        </div>

        <v-switch v-model="strengthSwitch" label="Strong beers only" value="7"></v-switch>

    </v-app>
</template>

<script>
    export default {
        name: 'app',
        mounted(){
            this.fetchData();
        },
        methods: {
            fetchData: function () {

                // Use Axios to fetch the data
                const axios = require("axios");
                axios
                    .get('https://api.punkapi.com/v2/beers?malt=Extra%20Pale' +
                        '&abv_gt='+ this.strength +
                        '&page='+ this.page +
                        '&per_page=80')
                    .then((response) => {
                        // Hadle success
                        console.log("Data received");
                        this.beers = response.data;
                    });
            }
        },
        data () {
            return {
                noAvailableMonitoring: false,
                headers: [
                    {
                        text: 'Image',
                        align: 'left',
                        sortable: false,
                        value: 'image_url'
                    },
                    {
                        text: 'Name',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    { text: 'Tag line', align: 'right', value: 'tagline' },
                    { text: 'First brewed', align: 'right', value: 'first_brewed' },
                    { text: 'ABV', align: 'right', value: 'abv' }
                ],
                beers: [],
                strength: 0,
                page: 1
            }
        },
        computed: {
            strengthSwitch: {
                    get() {
                       return this.strengh;
                    },
                    set (optionValue) {
                        this.strengh = optionValue;
                        this.fetchData();
                    }
                }

        }
    };

</script>


