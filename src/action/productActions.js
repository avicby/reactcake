import { UPDATE_CART, SORT_PRODUCT, FILTER_PRODUCT, CHECKOUT_CART } from "../type/types"

export const productActions = (dispatch) => {
        return {
            updateCart : (val) => dispatch({type:UPDATE_CART, value: val}),
            sortProducts: (event) => dispatch({type:SORT_PRODUCT, value:event}),
            filterProducts: (event) => dispatch({type:FILTER_PRODUCT, value:event}),
            checkout: (val) => dispatch({type:CHECKOUT_CART, value:val}),
            createOrder:(val) => console.log("Implement checkout ")
                                   
          }
}

