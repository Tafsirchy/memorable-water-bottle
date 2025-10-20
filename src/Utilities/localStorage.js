/**
 * 1. To get something from local storage you will get it as a string
 * 2. Convert this to javascript object/array
 * 
 */

//getting data from local storage
const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');

    if(storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

//saving data to local storage
const saveCartToLocalStorage = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)
}

//adding item to local storage
const addItemToLocalStorage = (id) => {
    const cart = getCartFromLocalStorage();
    const newCart = [...cart, id];
    // cart.push(id);

    // save new cart to local storage
    saveCartToLocalStorage(newCart);
}

//removing item from local storage
const removeItemFromLocalStorage = (id) => {
    const storedCart = getCartFromLocalStorage();
    const remainingCart = storedCart.filter(storedId => storedId !== id);
    saveCartToLocalStorage(remainingCart);
}

export { getCartFromLocalStorage as getStoreCart, addItemToLocalStorage as addToStoreCart, removeItemFromLocalStorage as removeFromStoreCart };