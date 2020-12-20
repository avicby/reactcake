import React from "react";
import { Button } from './Button';
import formatCurrency from "../util";


export const Products = (props) => {
        return (
            <div>
               <ul className="products">
                   {props.products.map(prod => (
                       <li key={prod.id}>
                           <div className="product">
                               <a href={"#"+prod.id}>
                                   <img src={prod.image} alt={prod.description}></img>
                                    <p>{prod.description}</p>
                               </a>
                               <div className="product-price">
                                   <div>{formatCurrency(prod.price)}</div>
                                   <Button sign= "+" identifier={prod.id} addToBtnProp={props.addToCartProp} />
                               </div>
                           </div>
                       </li>
                   ))}
                </ul> 
            </div>
        );  
}
