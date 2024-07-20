import { useEffect, useState } from "react"
import checkIcon from "../assets/icons/icon-order-confirmed.svg"

const ConfirmOrder = ({ cart, setCart, setIsModalActive }) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculateTotal = () => {
            return cart.reduce((total, item) => total + item.quantity * item.price, 0)
        }

        setTotal(calculateTotal())
    }, [cart])

    const handleConfirm = () => {
        setCart([])
        setIsModalActive(false)
    }
    return (
        <div className="fixed w-screen h-screen top-0 left-0 bg-black/40 flex justify-center items-end md:items-center">
            <div className="w-full md:w-96 max-w-96 bg-custom-rose-50 rounded-md p-4">
                <img src={checkIcon} alt="" className="w-6 h-6" />
                <h2 className="font-semibold text-2xl py-2">Confirm Order</h2>
                <p className="text-custom-rose-500">We hope you enjoy your food</p>
                <div className="bg-custom-rose-100 p-3 rounded-md">
                    {cart.length > 0 && cart.map((item, index) => (
                        <div key={index} className="pb-3">
                            <div className="flex justify-between items-center pb-2">
                                <div className="flex gap-2">
                                    <img src={item.image} alt="" className="w-12 h-12 rounded-md" />
                                    <div className="flex flex-col justify-between">
                                        <p className="font-semibold text-custom-rose-900">{item.name}</p>
                                        <p className="text-sm text-red">X{item.quantity} <span className="pl-2 text-custom-rose-500">@{item.price}</span></p>
                                    </div>
                                </div>

                                <p className="text-custom-rose-900 font-semibold text-lg">${item.quantity * item.price}</p>
                            </div>

                            <div className="w-full h-[1px] bg-custom-rose-300"></div>
                        </div>
                    ))}

                    <div className="flex justify-between pb-2">
                        <p className="font-medium text-lg text-custom-rose-500">Order Total</p>
                        <p className="font-semibold text-xl text-custom-rose-900">${total}</p>

                    </div>
                    <button onClick={handleConfirm} className="bg-custom-red text-white rounded-full px-3 py-2 w-full">Start new order</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmOrder