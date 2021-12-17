import React, { Component } from 'react';
import formatCurrency from '../util';
import { Button } from './Button';
import Fade from "react-reveal/Fade"
import { connect } from 'react-redux';
import { cartActions } from '../action/cartActions';

export const Cart = (props) => {
    return (
        <div>
            {props.cartItems.length === 0 ? <div className="cart cart-header">Cart is empty</div> :
                <div className="cart cart-header">Cart Quantity : {props.cartItems.length}</div>
            }
            <div className="cart">
                <Fade left cascade>
                <ul className="cart-items">
                    {props.cartItems.map(it =>
                        <li key={it.oid}>
                            <div>
                                <img src={it.image} alt={it.itmName}></img>
                            </div>
                            <div>
                                <div>{it.itmName}</div>
                                <div className="right">
                                    {formatCurrency(it.price)} x {it.cartQuant} {" "}
                                    <Button action="remove" identifier={it.oid} removeBtnProp={this.props.removeFromCart} />
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
                </Fade>
            </div>
            {props.cartItems.length !== 0 && (
                <div>
                    <div className="cart">
                        <div className="total">
                            <div>
                                Total:{" "}
                                {formatCurrency(
                                    props.cartItems.reduce((a, curr) => a + curr.price * curr.cartQuant, 0)
                                )}
                            </div>
                            <Button action="checkout" checkout={this.props.onCheckout}>Proceed</Button>
                        </div>
                    </div>
                    {props.showCheckout && (
                        <Fade right cascade>
                        <div className="cart">
                            <form onSubmit={this.props.createOrder}>
                                <ul className="form-container">
                                    <li>
                                        <label>Email</label>
                                        <input name="email" type="email" required onChange={this.handleInput}></input>
                                    </li>
                                    <li>
                                        <label>Address</label>
                                        <input name="address" type="address" required onChange={this.handleInput}></input>
                                    </li>
                                    <li>
                                        <label>Name</label>
                                        <input name="name" type="text" required onChange={this.handleInput}></input>
                                    </li>
                                    <li>
                                        <label>Phone Number</label>
                                        <input name="phone" type="text" pattern="[1-9]{1}[0-9]{9}" required onChange={this.handleInput}></input>
                                    </li>
                                    <li>
                                        <Button action="submitForm">Checkout</Button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                        </Fade>
                    )}
                </div>
            )}
        </div>
    );
    
}
// class Cart extends Component {
   
//     render() {
//         const { cartItems } = this.props;
       
//     }
// }
// const mapStateToProps = (state,props) => {
//     return {
//       showCheckout: state.showCheckout,
//       order : props.order,
//       cartItems: state.cartItems,
//       name : state.name,
//       address : state.address,
//       email : state.email
//     }
// }  
// export default connect(mapStateToProps,cartActions)(Cart);