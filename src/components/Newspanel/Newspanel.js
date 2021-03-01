import React from 'react';
import '../Newspanel/Newspanel.css';

const newspanel = ( props ) => {
    
    
    return(
        <div className="newspanel">
            <img src={props.image} />
            <div>{props.title}</div>
           <div><a href={props.url}>Read More</a></div>
        </div>
    );
    
}

export default newspanel;

