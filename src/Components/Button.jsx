import React from 'react';

export const Button = (props) => {
    
        return (
            <button className="buttonClass" onClick={() =>                    
            props.sign === "+" ? 
            props.updateCount({btnid:props.identifier, val:1}):
             props.updateCount({btnid:props.identifier, val:-1})}>
                {props.sign}
            </button>
            
            
            
        );
    
}


