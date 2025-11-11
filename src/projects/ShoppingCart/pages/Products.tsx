// src/pages/Products.tsx
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { Product } from "../../../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();

        // Adjust API fields to match our `Product` interface
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formatted = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
        }));

        setProducts(formatted);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const cached = localStorage.getItem("products");
    if (cached) {
      setProducts(JSON.parse(cached));
      setLoading(false);
    } else {
      fetchProducts();
    }
  }, []);

  if (loading) return <p className="p-8 text-center">Loading products...</p>;
  if (error) return <p className="p-8 text-center text-red-500">{error}</p>;

  return (
    <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Products;
