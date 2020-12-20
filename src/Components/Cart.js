import React, { Component } from 'react';

export default class Cart extends Component{
    render(){
        return(
            <div>
                <ul>
                <div className="col">
                <div><b>Order: </b></div>
                {this.props.order.map(it => 
                  <li className="listBtnClass" key={it.oid}>
                    {it.cartQuant} {it.itmName}
                  </li>
                )}
              </div>
                </ul>
            </div>
            

        );
    }
}