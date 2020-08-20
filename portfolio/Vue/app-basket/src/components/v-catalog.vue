<template>

    <div class="v-catalog">

        <router-link :to="{name:'cart', params:{cart_data: CART}}">

            <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>

        </router-link>
        
        <h1>Catalog</h1>

        <div class="v-catalog__list">

        <v-catalog-item
        v-for="post in POSTS"
        :key="post.name"
        :post_data = "post"
        @addToCart="addToCart"
        />

        </div>
    </div>
</template>

<script>

import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'

  export default {

    name: "v-catalog",
    components: {
       vCatalogItem 
    },

    props:{},
    data() {
        return {
            // bd.JSON FILE
//             posts: [
//                 {
//         image: "1.jpg",
//         name: "json-server32",
//         price: 100,
//         article:'T1',
//         available:true
//     },
//     {
//         image: "4.jpg",
//         name: "json-server125",
//         price: 1200,
//         article:'T21',
//         available:true
//     },
//      {
//         image: "2.jpg",
//         name: "json-server121",
//         price: 12200,
//         article:'T13',
//         available:true
//     },
//                 {
//         image: "33.jpg",
//         name: "json-server3wqwq2",
//         price: 1050,
//         article:'Tff1',
//         available:true
//     },
//                 {
//         image: "121.jpg",
//         name: "json-server32qw",
//         price: 1020,
//         article:'Ts1',
//         available:true
//     },
//                 {
//         image: "12111.jpg",
//         name: "json-server3w2",
//         price: 1003,
//         article:'T190',
//         available:true
//     },
//    ],
        }
    },
    computed: {
        ...mapGetters([

            'POSTS',
            'CART'
        ]),
    },
    methods: {
        ...mapActions([

            'GET_POSTS_FROM_API',
            'ADD_TO_CART'
        ]),

        addToCart(data) {

            this.ADD_TO_CART(data)
        }
    },
    mounted() {

        this.GET_POSTS_FROM_API()

        .then((response) => {

            if(response.data) {
                console.log('Data arrived!')
            }
        })
    },
    watch: {},
}
</script>


<style>
.v-catalog__link_to_cart {
    position: absolute;
    top:10px;
    right: 10px;
    padding: 15px;
    border:solid gray 1px;
}
.v-catalog__list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>