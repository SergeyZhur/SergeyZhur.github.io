<template>

    <div class="v-catalog-item">

         <img :src=" require('../assets/images/' + post_data.image) " alt="img">

         <p class="v-catalog-item__name">{{post_data.name}}</p>
         <p class="v-catalog-item__price">{{post_data.price}} P</p>

         <button class="v-catalog-item__btn btn"
          @click="addToCart">Add to card</button>
    </div>

</template>

<script>



  export default {
    name: "v-catalog-item",
    components: {},
    props:{
        post_data: {

            type:Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {

    addToCart() {

        this.$emit('addToCart',this.post_data)
    }
    },
    watch: {},
    mounted() {

        this.$set(this.post_data, 'quantity', 1)
    },
}
</script>


<style >
.v-catalog-item {
   flex-basis: 25%;
   box-shadow: 0 0 8px 0 #e0e0e0;
   padding: 15px;
   border-radius: 5%;
   margin: 15px;
}
.btn {
    outline: none;
    background: #26ae68;
    border: none;
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
}
.btn:hover {
    background: #228150;
    cursor: pointer;
}
.btn:active {
   background: #0f4b2c; 
}
</style>