import React from 'react';

export const Button = (props) => {
    
        return (
            <button className="button primary" onClick={() =>
                {
                    switch(props.action){
                    case "add":
                        props.addToBtnProp({btnid:props.identifier, val:1})
                        break;
                    case "remove":
                        props.removeBtnProp({btnid:props.identifier, val:-1});
                        break;
                    case "checkout":
                        props.checkout(true);
                    default: 
                    }
                }                 
            }>
                {props.action}
            </button>
        ); 
}