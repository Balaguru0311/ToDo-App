import Products from "./Products";
import Cart from "./Cart";
import { useState } from "react";


const Home = () => {
     const [goCart, setGoCart] = useState(false);
  return (
    <div>
        <h3 className="flex justify-center bold text-3xl">Products</h3>
        <div className="flex justify-end">
        <button className="border rounded p-2 text-white bg-blue-600 cursor-pointer" onClick={()=>setGoCart(!goCart)}>{goCart ? "Products" : "Cart"}</button>
        </div>
        {goCart ? <Cart/> : <Products/>} 
    </div>
  )
}

export default Home