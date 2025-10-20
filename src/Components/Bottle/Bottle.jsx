import React from 'react';
import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    console.log(bottle);
    const {brand, image, price, inStock} = bottle;
    return (
        <div className='card bottle'>
            <img src={image} alt="" />
            <h3 >Brand:{brand} </h3>
            <h4 >${price}</h4>

            {
                inStock ? <p>Available ✅ </p> : <p>Stock out ❌ </p>
            }

            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;