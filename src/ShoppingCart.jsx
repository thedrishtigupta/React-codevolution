
// Lifting state up, moving all the states to the closest common parent
// Share states- when two or more components need the same changing data
// The component with useState owns the data and control how it changes
// Children recieve the state as props
// Children request changes by calling setter functions passed down from the parent


import { useState } from "react";

export const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState({
        reactCourse: 0,
        vueCourse: 0,
    });

    const prices = {
        reactCourse: 49.99,
        vueCourse: 39.99,
    };

    const handleAddReactCourse = () => {
        if (cartItems.reactCourse < 5) {
            setCartItems(prev => ({
                ...prev,
                reactCourse: prev.reactCourse + 1,
            }));
        }
    };

    const handleAddVueCourse = () => {
        setCartItems(prev => ({
            ...prev,
            vueCourse: prev.vueCourse+1,
        }))
    };

    const clearCart = () => {
        setCartItems({
            reactCourse: 0,
            vueCourse: 0,
        });
    };

    return (
        <div>
            <h2>Shopping Cart Component</h2>
            <ProductCard
                name="React Course"
                price={prices.reactCourse}
                quantity={cartItems.reactCourse}
                onAddToCart={handleAddReactCourse}
            />
            <ProductCard
                name="Vue Course"
                price={prices.vueCourse}
                quantity={cartItems.vueCourse}
                onAddToCart={handleAddVueCourse}
            />
            <CartSummary cartItems={cartItems} prices={prices}/>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export const ProductCard = ({name, price, quantity, onAddToCart}) => {
    return (
        <div>
        <h3>{name}</h3>
        <p>${price}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
        </div>
    );
};


export const CartSummary = ({cartItems, prices}) => {
    const totalItems = cartItems.reactCourse + cartItems.vueCourse;
    const totalPrice =
        cartItems.reactCourse * prices.reactCourse +
        cartItems.vueCourse * prices.vueCourse;
    return (
        <div>
        <h3>Cart Summary</h3>
        <p>Total items: {totalItems}</p>
        <p>total price: ${totalPrice.toFixed(2)}</p>
        </div>
    );
};