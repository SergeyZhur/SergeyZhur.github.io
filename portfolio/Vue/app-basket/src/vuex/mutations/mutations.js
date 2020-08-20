export default {
    SET_POSTS_TO_STATE:(state, posts) => {

        state.posts = posts
    },
    SET_CART: (state, post) => {

        let isPostExists = false;

        if (state.cart.length) {

          state.cart.map(function (item) {

            if (item.article === post.article) {

                isPostExists = true;

              item.quantity++
            }
          })
          if (!isPostExists) {

            state.cart.push(post)
          }
        } else {

          state.cart.push(post)
        }
        
        // state.cart.push(post)
    },

    REMOVE_FROM_CART:(state, index) => {

    state.cart.splice(index, 1)
    },

    INCREMENT:(state, index) => {

    state.cart[index].quantity++

    },

    DECREMENT:(state, index) => {

   if(state.cart[index].quantity > 1) {

    state.cart[index].quantity--
     }

    }
}