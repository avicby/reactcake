import React, { Component } from 'react';
import formatCurrency from '../util';
import { Button } from './Button';

export default class Cart extends Component{
    render(){
        const {order} = this.props;
        return(
            <div>
                {order.length === 0 ? <div className="cart cart-header">Cart is empty</div>:
                <div className="cart cart-header">Cart Quantity : {order.length}</div>
                }
                <div className="cart">
                    <ul className="cart-items">
                    {order.map(it => 
                        <li key={it.oid}>
                            <div>
                                <img src ={it.image} alt={it.itmName}></img>
                            </div>
                            <div>
                                <div>{it.itmName}</div>
                                <div className="right">
                                    {formatCurrency(it.price)} x {it.cartQuant} { " " }
                                    <Button sign= "-" identifier={it.oid} removeBtnProp={this.props.removeFromCart}/>
                                </div>
                            </div>
                        </li>
                    )}
                    </ul>
                </div>
                {order.length!==0 && (
                    <div className="cart">
                        <div className="total">
                            <div>
                                Total:{" "}
                                {formatCurrency(
                                    order.reduce((a,curr) => a+curr.price*curr.cartQuant, 0)
                                )}  
                            </div>
                            <button className="button primary">Proceed</button>
                        </div>
                    </div>
                )}
            </div>
            

        );
    }
}