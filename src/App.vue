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
        data () {
            return {
                message: 'This is a test',
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
                beers: [
                    {
                        id: 192,
                        name: "Punk IPA 2007 - 2010",
                        tagline: "Post Modern Classic. Spiky. Tropical. Hoppy.",
                        first_brewed: "04/2007",
                        description: "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
                        image_url: "https://images.punkapi.com/v2/192.png",
                        abv: 6.0,
                    },
                    {
                        id: 194,
                        name: "Punk IPA 2007 - 2010",
                        tagline: "Post Modern Classic. Spiky. Tropical. Hoppy.",
                        first_brewed: "04/2007",
                        description: "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
                        image_url: "https://images.punkapi.com/v2/194.png",
                        abv: 6.0,
                    },
                    {
                        id: 195,
                        name: "Punk IPA 2007 - 2010",
                        tagline: "Post Modern Classic. Spiky. Tropical. Hoppy.",
                        first_brewed: "04/2007",
                        description: "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
                        image_url: "https://images.punkapi.com/v2/195.png",
                        abv: 6.0,
                    },
                    {
                        id: 196,
                        name: "Punk IPA 2007 - 2010",
                        tagline: "Post Modern Classic. Spiky. Tropical. Hoppy.",
                        first_brewed: "04/2007",
                        description: "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
                        image_url: "https://images.punkapi.com/v2/196.png",
                        abv: 6.0,
                    },,
                    {
                        id: 197,
                        name: "Punk IPA 2007 - 2010",
                        tagline: "Post Modern Classic. Spiky. Tropical. Hoppy.",
                        first_brewed: "04/2007",
                        description: "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
                        image_url: "https://images.punkapi.com/v2/197.png",
                        abv: 6.0,
                    },
                ]
            }
        }
    };

</script>


