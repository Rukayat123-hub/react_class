import { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Jollof Rice", price: 1500, quantity: 2 },
    { id: 2, name: "Plantain", price: 500, quantity: 1 },
    { id: 3, name: "Zobo Drink", price: 700, quantity: 1 },
  ]);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty 🛍️</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                marginBottom: "15px",
                backgroundColor: "#f8fafc",
                padding: "10px",
                borderRadius: "10px",
                display: "inline-block",
                width: "300px",
              }}
            >
              <p style={{ fontSize: "18px", margin: "8px 0" }}>
                {item.name} - ₦{item.price.toLocaleString()} x{" "}
                {item.quantity} ={" "}
                <strong>
                  ₦{(item.price * item.quantity).toLocaleString()}
                </strong>
              </p>

              <div>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  style={btnStyle}
                >
                  +
                </button>
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  style={btnStyle}
                >
                  -
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{ ...btnStyle, backgroundColor: "#ef4444" }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3>Total: ₦{total.toLocaleString()}</h3>

          <button
            onClick={clearCart}
            style={{
              ...btnStyle,
              backgroundColor: "#f59e0b",
              marginTop: "10px",
            }}
          >
            ♻ Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

// Basic button styling
const btnStyle = {
  margin: "5px",
  padding: "6px 12px",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default ShoppingCart;
