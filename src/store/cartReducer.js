const intCartState ={
    name: "",
    address: "",
    email: "",
    showCheckout: false,
    cartItems:[],
    order:[]
}
export const cartReducer = (state = intCartState, action) => {
    const newCartState = {...state};
    
    switch(action.type){
        case "ON_CHECKOUT":
            return {
                ...newCartState.showCheckout,
                showCheckout:true
            }
        case "CREATE_ORDER":
            return{

            }
        //     event.preventDefault();
        // const odr = {
        //     name : this.state.name,
        //     address: this.state.address,
        //     email: this.state.email,
        //     cartItems: this.props.order
        // } 
        case "HANDLE_CHECKOUT_INPUT":
            //this.setState({[event.target.name]:event.target.value})
             return {

             }  
        default:
            return newCartState;
    }
}