// 


import ProductCard from "./ProductCard";

function App() {
  const products = [
    {
      name: "Laptop Computer",
      price: 450000,
      image: "https://via.placeholder.com/250x150?text=Laptop",
      inStock: true,
    },
    {
      name: "Wireless Earbuds",
      price: 25000,
      image: "https://via.placeholder.com/250x150?text=Earbuds",
      inStock: false,
    },
    {
      name: "Smartphone",
      price: 320000,
      image: "https://via.placeholder.com/250x150?text=Smartphone",
      inStock: true,
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {products.map((p, i) => (
        <ProductCard
          key={i}
          name={p.name}
          price={p.price}
          image={p.image}
          inStock={p.inStock}
        />
      ))}
    </div>
  );
}

export default App;
