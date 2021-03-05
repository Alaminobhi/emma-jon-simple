import React from 'react';

const ReviewItem = (props) => {
    const {name, img, price,category, key} = props.cart;

    return (
        <div>
            {
            <div>
            <div>
                <img src={img} alt=""/>
            </div>
            <h4>{name}</h4>
            <p>{price}</p>
            <button className="main-button"
            onClick={()=>props.removeProduct(key)}
            > Remove </button>
            </div>
            
            }
           
        </div>
    );
};

export default ReviewItem;