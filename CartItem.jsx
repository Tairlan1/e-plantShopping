import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from './CartSlice';
import { Link } from 'react-router-dom';

const CartItem = () => {  // Named CartItem as per task, but functions as Cart page
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div>
      <Navbar totalQuantity={totalQuantity} />
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center', margin: '20px', borderBottom: '1px solid #ccc' }}>
            <img src={item.thumbnail} alt={item.name} style={{ width: '100px', marginRight: '20px' }} />
            <div>
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price}</p>
              <p>Total Cost: ${item.totalPrice}</p>
              <div>
                Quantity: {item.quantity}
                <button onClick={() => dispatch(increaseQuantity(item.id))} style={{ marginLeft: '10px' }}>+</button>
                <button onClick={() => dispatch(decreaseQuantity(item.id))} style={{ marginLeft: '5px' }}>-</button>
              </div>
              <button onClick={() => dispatch(removeItem(item.id))} style={{ marginTop: '10px' }}>Delete</button>
            </div>
          </div>
        ))
      )}
      <h2>Total Cart Amount: ${totalAmount}</h2>
      <button>Checkout (Coming Soon)</button>
      <Link to="/plants">
        <button style={{ marginLeft: '10px' }}>Continue Shopping</button>
      </Link>
    </div>
  );
};

// Reusing the same Navbar component
const Navbar = ({ totalQuantity }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', background: '#f0f0f0' }}>
      <Link to="/">Home</Link>
      <Link to="/plants">Plants</Link>
      <Link to="/cart">Cart ({totalQuantity})</Link>
    </nav>
  );
};

export default CartItem;