import React, { Component } from "react";
import { Button } from './Button';
import formatCurrency from "../util";

export default class Products extends Component {
    render() {
        return (
            <div>
               <ul className="products">
                   {this.props.products.map(prod => (
                       <li key={prod.id}>
                           <div className="product">
                               <a href={"#"+prod.id}>
                                   <img src={prod.image} alt={prod.description}></img>
                                    <p>{prod.description}</p>
                               </a>
                               <div className="product-price">
                                   <div>{formatCurrency(prod.price)}</div>
                                   <Button sign= "+" identifier={prod.id} updateCount={this.props.changeCount} />
                               </div>
                           </div>
                       </li>
                   ))}
                </ul> 
            </div>
        )
    }
}
