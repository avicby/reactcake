import { ON_CHECKOUT, CREATE_ORDER, HANDLE_CHECKOUT_INPUT } from "../type/types"

export const cartActions = (dispatch) => {
    return {
        onCheckout : (val) => dispatch({type:ON_CHECKOUT, val:val}),
        createOrder: (val) => dispatch({type:CREATE_ORDER, val:val}),
        handleInput: (val) => dispatch({type:HANDLE_CHECKOUT_INPUT, val:val})
    }
}