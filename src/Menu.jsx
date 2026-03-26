import { MenuItem } from "./MenuItem";

export const Menu = () => {
    const handleOrder = (itemName, itemPrice) => {
        alert(`You ordered ${itemName} for $${itemPrice}`);
    }
    return (
        <div>
        <h2>Our Menu</h2>
        <MenuItem name="Burger" price={8} onOrder={handleOrder}/>
        <MenuItem name="Pizza" price={12} onOrder={handleOrder}/>
        <MenuItem name="Taco" price={6} onOrder={handleOrder}/>
        </div>
    );
};