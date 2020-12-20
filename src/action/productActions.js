import { UPDATE_CART, SORT_PRODUCT, FILTER_PRODUCT } from "../type/types"

export const productActions = (dispatch) => {
        return {
            updateCart : (val) => dispatch({type:UPDATE_CART, value: val}),
            sortProducts: (event) => dispatch({type:SORT_PRODUCT, value:event}),
            filterProducts: (event) => dispatch({type:FILTER_PRODUCT, value:event}),
            //remFrmCart: (val) => dispatch({type:REMOVE_CART, value:val})
          }
}

