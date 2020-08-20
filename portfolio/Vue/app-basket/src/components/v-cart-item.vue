<template>
    <div class="v-cart-item">

      <img class="cart-item__image" :src=" require('../assets/images/' + cart_item_data.image) " alt="img">

      <div class="v-cart-item__info">
          <p>{{cart_item_data.name}}</p>
          <p>{{cart_item_data.price}}</p>
          <p>{{cart_item_data.article}}</p>
      </div>

      <div class="v-cart-item__quantity">
          <p>Qty</p>

          <span class="wrapper__btns">
              <span class="quantity__btn" @click="decrementItem">-</span>
              {{cart_item_data.quantity}}
               <span class="quantity__btn" @click="incrementItem">+</span>
          </span>

      </div>

      <button @click="deleteFromCart" class="btn">Delete</button>

    </div>
</template>

<script>


  export default {
    name: "v-cart",
    components: {},
    props:{

        cart_item_data: {

            type: Object,
            default() {
                return {}
            }
        }
    },

    data() {
        return {}
    },

    computed: {},
    mounted() {
        // this.$set(this.cart_item_data, 'quantity', 1)
    },
    methods: {

        decrementItem() {

            this.$emit('decrement')

        },

        incrementItem() {

            this.$emit('increment')

        },

        deleteFromCart() {

            this.$emit('deleteFromCart')

        }
    },
    watch: {},
}
</script>


<style>
.v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 15px;
}
.cart-item__image {
    margin-top: 20px;
    border-radius: 5%;
    box-shadow: 0 0 8px 0 #e0e0e0;
}
.quantity__btn {
    cursor: pointer;
}
.wrapper__btns {
    font-size: 20px;
}
</style>