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

    </v-app>
</template>

<script>
    export default {
        name: 'app',
        mounted(){

            // Use Axios to fetch the data
            const axios = require("axios");
            axios
                .get('https://api.punkapi.com/v2/beers')
                .then((response) => {
                    // Hadle success
                    this.beers = response.data;
                });
        },
        data () {
            return {
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
                beers: []
            }
        }
    };

</script>


