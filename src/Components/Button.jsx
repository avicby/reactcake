import React from 'react';

export const Button = (props) => {
    
        return (
            <button className="button primary" onClick={() =>                    
            props.sign === "+" ? 
            props.addToBtnProp({btnid:props.identifier, val:1}):
             props.removeBtnProp({btnid:props.identifier, val:-1})}>
                {props.sign}
            </button>
        ); 
}