// // Cart.jsx
// import React, { useState, useEffect } from 'react';
// import axios from '../../axiosConfig';

// const Cart = () => {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         axios.get('/carts')
//             .then(response => setCartItems(response.data))
//             .catch(error => console.error('Error fetching cart items: ', error));
//     }, []);

//     const removeFromCart = (id) => {
//         axios.delete(`/carts/${id}`)
//             .then(() => setCartItems(cartItems.filter(item => item.id !== id)))
//             .catch(error => console.error('Error removing item from cart: ', error));
//     };

//     return (
//         <div>
//             {cartItems.map(item => (
//                 <div key={item.id}>
//                     <h3>{item.product.name}</h3>
//                     <p>Quantity: {item.quantity}</p>
//                     <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Cart;

import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import "../style/cart.css"

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('/carts')
            .then(response => setCartItems(response.data))
            .catch(error => console.error('Error fetching cart items: ', error));
    }, []);

    const removeFromCart = (id) => {
        axios.delete(`/carts/${id}`)
            .then(() => setCartItems(cartItems.filter(item => item.id !== id)))
            .catch(error => console.error('Error removing item from cart: ', error));
    };

    return (
        <div className='cart-container'>
            <h1>The Cart</h1>
            {cartItems.map(item => (
                <div key={item.id}>
                    <h4>{item.title}</h4>
                    <p>Price : {item.price} per person</p>
                    <p>Capacity : {item.capacity} </p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;

