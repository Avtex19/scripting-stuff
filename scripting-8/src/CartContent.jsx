import React from 'react';
import CartView from './CartView';
import { useGlobalContext } from './context';

function CartContent() {
  const { cart, total, clearCart } = useGlobalContext();

  const hasItems = cart.length > 0;

  return (
    <section className="content">
      <header>
        <h2>Your Bag</h2>
        {hasItems ? null : (
          <h4 className="empty-content">is currently empty</h4>
        )}
      </header>
      <div>
        {hasItems && (
          <>
            {cart.map((item) => (
              <CartView key={item.id} {...item} />
            ))}
          </>
        )}
      </div>
      {hasItems && (
        <footer>
          <hr />
          <div className="content-in-total">
            <h4>
              <span>total</span> <span>${total}</span>
            </h4>
          </div>
          <button className="btn clear-btn" onClick={clearCart}>
            clear cart
          </button>
        </footer>
      )}
    </section>
  );
}

export default CartContent;