import React, { Component } from 'react';
import formatCurrency from '../util';
import { Button } from './Button';

export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            name: "",
            address: "",
            email: "",
            showCheckout: false }
    }
    onCheckout = (data) => {
        this.setState({ showCheckout: data })
    }
    createOrder = (event) => {
        event.preventDefault();
        const odr = {
            name : this.state.name,
            address: this.state.address,
            email: this.state.email,
            cartItems: this.props.order
        }
        this.props.createOrder(odr);
    }
    handleInput = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    render() {
        const { order } = this.props;
        return (
            <div>
                {order.length === 0 ? <div className="cart cart-header">Cart is empty</div> :
                    <div className="cart cart-header">Cart Quantity : {order.length}</div>
                }
                <div className="cart">
                    <ul className="cart-items">
                        {order.map(it =>
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
                </div>
                {order.length !== 0 && (
                    <div>
                        <div className="cart">
                            <div className="total">
                                <div>
                                    Total:{" "}
                                    {formatCurrency(
                                        order.reduce((a, curr) => a + curr.price * curr.cartQuant, 0)
                                    )}
                                </div>
                                <Button action="checkout" checkout={this.onCheckout}>Proceed</Button>
                            </div>
                        </div>
                        {this.state.showCheckout && (
                            <div className="cart">
                                <form onSubmit={this.createOrder}>
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
                        )}
                    </div>
                )}
            </div>


        );
    }
}