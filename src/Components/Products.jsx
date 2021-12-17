import React from "react";
import { Button } from './Button';
import formatCurrency from "../util";
import Fade from "react-reveal/Fade"

export const Products = (props) => {
    return (
        <div>
            <Fade bottom cascade={true}>
                <ul className="products">
                    {props.products.map(prod => (
                        <li key={prod.id}>
                            <div className="product">
                                <a href={"#" + prod.id} onClick={() => this.openModal(prod)}>
                                    <img src={prod.image} alt={prod.description}></img>
                                    <p>{prod.description}</p>
                                </a>
                                <div className="product-price">
                                    <div>{formatCurrency(prod.price)}</div>
                                    <Button action="add" identifier={prod.id} addToBtnProp={props.addToCartProp} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </Fade>
        </div>
    );
}
