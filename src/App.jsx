import data from "./data/data.json"
import MenuCard from "./components/MenuCard"
import { useState } from "react"
import Cart from "./components/Cart"
import ConfirmOrder from "./components/ConfirmOrder"


function App() {
  const [cart, setCart] = useState([])
  const [isModalActive, setIsModalAcive] = useState(false)

  const AddToCart = (name, price, thumbnail) => {
    setCart(prev => [...prev, { name, price, quantity: 1, image: thumbnail }])
  }

  const incrementQuantity = name => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  const decrementtQuantity = name => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.name === name ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }

  const handleRemove = name => {
    setCart(prevCart =>
      prevCart.filter(item => item.name !== name)
    )
  }

  return (
    <div className="w-full min-h-screen bg-custom-rose-100 p-8">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="w-full ">
          <h1 className="font-bold text-2xl text-custom-rose-900">Desserts</h1>
          <div className="flex flex-wrap gap-6">
            {data.map((menu, index) => (
              <MenuCard category={menu.category} image={menu.image.desktop} name={menu.name} price={menu.price} key={index} addToCart={AddToCart} cart={cart} decrementQuantity={decrementtQuantity} incrementQuantity={incrementQuantity} thumbnail={menu.image.thumbnail} />
            ))}
          </div>
        </div>
        <Cart cart={cart} handleRemove={handleRemove} setIsModalActive={setIsModalAcive} />
      </div>
      {isModalActive && <ConfirmOrder cart={cart} setCart={setCart} setIsModalActive={setIsModalAcive} />}
    </div>
  )
}

export default App
