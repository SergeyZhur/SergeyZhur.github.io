
import Axios from 'axios'

export default {

    GET_POSTS_FROM_API({commit}) {

        return Axios('http://localhost:3000/posts', {
            method:"GET"
        })

        .then((posts) => {

            commit('SET_POSTS_TO_STATE', posts.data)

            return posts;
        })
        .catch((error) => {

            console.log(error)

            return error;
        })
    },
    
    ADD_TO_CART({commit}, posts) {

        commit('SET_CART', posts);

    },

    INCREMENT_CART_ITEM({commit}, index){
        
        commit('INCREMENT',index)
    },

    DECREMENT_CART_ITEM({commit}, index){

        commit('DECREMENT',index)
    },

    DELETE_FROM_CART({commit}, index) {

        commit('REMOVE_FROM_CART', index);
    }
}