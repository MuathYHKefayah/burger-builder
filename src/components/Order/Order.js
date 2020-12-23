import React from 'react';
import classes from './Order.css';

const order = (props) => (
        <div className={classes.Order}>
            <span><strong>Ingredients:</strong></span>&nbsp;
            {   
                Object.keys(props.ingredients).map((item, i) => {
                    return(
                    <span 
                        key={i} 
                        style={{
                            textTransform:'capitalize', 
                            display: 'inline-block',
                            margin: '0 8px',
                            border: '1px solid #ccc',
                            padding: '5px'
                        }}
                        ><strong>{item}</strong> ({props.ingredients[item]}) &nbsp; </span> 
                    );
                })
            }
            <p><strong>Customer Information :</strong></p>
            <div className={classes.Info}>
                <span><strong>Name - </strong>{props.customer.name}</span>&nbsp;
                <span><strong>Email - </strong>{props.customer.email}</span>&nbsp;
                <br/>
                <span><strong>Street - </strong>{props.customer.address.street}</span>&nbsp;
                <span><strong>Postal Code - </strong>{props.customer.address.postalCode}</span>&nbsp;
                <br/>
                <span><strong>Delivery Method - </strong>{props.deliveryMethod}</span>&nbsp;
            </div>
            <p><strong>Price: </strong>&nbsp;{props.price} $</p>
        </div>
);

export default order;