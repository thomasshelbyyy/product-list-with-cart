import addToCartIcon from "../assets/icons/icon-add-to-cart.svg";
import plusIcon from "../assets/icons/icon-increment-quantity.svg";
import minusIcon from "../assets/icons/icon-decrement-quantity.svg";

const MenuCard = ({ image, category, name, price, thumbnail, addToCart, cart, incrementQuantity, decrementQuantity }) => {
    const isCartAdded = cart.find(item => item.name === name);
    return (
        <div className="w-full md:w-72">
            <div className="w-full relative mb-6">
                <img src={image} alt={`${name} image`} className="rounded-md" />
                {isCartAdded ? (
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 rounded-full text-black flex bg-custom-red px-4 py-1 justify-between items-center gap-3">
                        <button disabled={isCartAdded.quantity === 1}>
                            <img src={minusIcon} className="w-3 h-3" alt="Increase Quantity" onClick={() => decrementQuantity(name)} />
                        </button>
                        <span className="text-white px-6 font-semibold">{isCartAdded.quantity}</span>
                        <button><img src={plusIcon} className="w-3 h-3" alt="Decrease Quantity" onClick={() => incrementQuantity(name)} /></button>
                    </div>
                ) : (
                    <button onClick={() => addToCart(name, price, thumbnail)} className="w-fit absolute left-1/2 transform -translate-x-1/2 -bottom-4 rounded-full text-black hover:text-custom-red border border-custom-rose-900 hover:border-custom-red font-medium flex bg-white px-4 py-1 justify-center items-center">
                        <img src={addToCartIcon} alt="Add To Cart" className="w-4 h-4" />
                        Add To Cart
                    </button>
                )}
            </div>
            <small className="font-light pt-4">{category}</small>
            <p className="font-semibold text-xl text-custom-rose-900">{name}</p>
            <p className="font-medium text-custom-red text-lg">${price}</p>
        </div>
    );
};

export default MenuCard;
