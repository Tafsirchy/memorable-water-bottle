import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addToStoreCart, getStoreCart } from '../../Utilities/localStorage';

const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);

    // useEffect to load the cart from local storage
    useEffect(() => {
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles);

        const storedCart = [];

        for(const id of storedCartIds){
            // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }

        console.log(storedCart);
        setCart(storedCart);

    }, [bottles]);

    const handleAddToCart = (bottle) => {
        // alert('Added to cart');
        const newCart = [...cart, bottle];
        setCart(newCart);

        // save the bottle id in the storage
        addToStoreCart(bottle.id);
    }

    console.log(bottles);
    return (
        <div>
            <h3>Bottles: {bottles.length} </h3>
            <p>Added to cart: {cart.length}</p>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle handleAddToCart={handleAddToCart} key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
}; 

export default Bottles;