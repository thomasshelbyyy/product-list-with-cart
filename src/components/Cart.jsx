import { useEffect, useState } from "react"
import closeIcon from "../assets/icons/icon-remove-item.svg"
import treeIcon from "../assets/icons/icon-carbon-neutral.svg"
import cakeSvg from "../assets/icons/illustration-empty-cart.svg"

const Cart = ({ cart, handleRemove, setIsModalActive }) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculateTotal = (item) => {
            return item.reduce((total, it) => total + it.price * it.quantity, 0)
        }
        if (cart.length > 0) {
            setTotal(calculateTotal(cart))
        }
    }), [cart]
    return (
        <div className="bg-white rounded-md p-4 w-full md:w-96 h-fit">
            <h2 className="text-xl text-custom-rose-900 font-semibold">Your Cart ({cart.length})</h2>
            {cart.length > 0 ? (
                <>
                    {cart.map((item, index) => (
                        <div key={index}>
                            <div className="flex justify-between item-center pb-3">
                                <div>
                                    <p className="font-semibold text-custom-rose-900">{item.name}</p>
                                    <div className="text-sm flex gap-3">
                                        <span className="font-medium text-custome-red">X{item.quantity}</span>
                                        <span className="font-light">@{item.price}</span>
                                        <span className="font-semibold">${item.quantity * item.price}</span>
                                    </div>
                                </div>
                                <button onClick={() => handleRemove(item.name)} className="cursor-pointer">
                                    <img src={closeIcon} alt="" className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="w-full h-[1px] bg-gray-500 rounded-ld"></div>
                        </div>
                    ))}
                    <div className="flex justify-between py-3">
                        <span>Order Total</span>
                        <span className="font-semibold text-lg text-custom-rose-900">${total}</span>
                    </div>

                    <div className="flex justify-center my-3 bg-custom-rose-100 font-semibold text-custom-rose-500 items-center gap-1 py-2 rounded-md">
                        <img src={treeIcon} alt="" className="w-4 h-4" />
                        This is a carbon neutral delivery
                    </div>
                    <button onClick={() => setIsModalActive(true)} className="py-2 bg-custom-red text-white rounded-full w-full text-center font-medium">Confirm Order</button>
                </>
            ) : (
                <div className="flex flex-col justify-center items-center">
                    <img src={cakeSvg} alt="" className="w-40 h-40" />
                    <p className="text-custom-rose-500 font-medium">Your added items will appear here</p>
                </div>
            )}

        </div>
    )
}

export default Cart