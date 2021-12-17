import { UPDATE_CART, SORT_PRODUCT, FILTER_PRODUCT, CHECKOUT_CART,ON_CHECKOUT, CREATE_ORDER, HANDLE_CHECKOUT_INPUT } from "../type/types"

export const commonActions = (dispatch) => {
        return {
            updateCart : (val) => dispatch({type:UPDATE_CART, value: val}),
            sortProducts: (event) => dispatch({type:SORT_PRODUCT, value:event}),
            filterProducts: (event) => dispatch({type:FILTER_PRODUCT, value:event}),
            checkout: (val) => dispatch({type:CHECKOUT_CART, value:val}),
            onCheckout : (val) => dispatch({type:ON_CHECKOUT, val:val}),
            createOrder: (val) => dispatch({type:CREATE_ORDER, val:val}),
            handleInput: (val) => dispatch({type:HANDLE_CHECKOUT_INPUT, val:val})
          }
}

