
import IconNeutral from "/images/icon-carbon-neutral.svg";
import { openModal, removeItem } from '../../store/products/productSlice'
import { useDispatch } from "react-redux";
import removeIcon from '/images/icon-remove-item.svg'

export default function CartItem({ cart }) {
    const dispatch = useDispatch();
    const handleOpenModal = () => {
        dispatch(openModal())
    }
    const handleRemoveItem = (productId) => {
        dispatch(removeItem({ productId }))
    }
    return (
        <>
            {cart.map((item) =>
                <div className="flex justify-between items-center py-4  border-b border-brown-800" key={item.id}>
                    <div>
                        <p className="text-black-900 font-bold mb-1"> {item.name} </p>
                        <p className="text-sm">
                            <span className="text-primary font-bold"> {item.quantity} x </span>
                            <span className="text-brown-800 px-3" > @ ${item.price}</span>
                            <span className="text-brown-900 font-semibold"> @ ${item.price * item.quantity}</span>
                        </p>
                    </div>

                    <button onClick={() => handleRemoveItem(item.id)} className="flex items-center justify-center w-4 h-4 rounded-full border border-brown-800">
                        <img src={removeIcon} alt="Remove" />
                    </button>

                </div>
            )}
            <div className="flex justify-between items-center text-black-900 my-5">
                <span className="text-sm ">Order Total</span>
                <span className="font-bold text-2xl">$ {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
            </div>
            <div>
                <div className="flex justify-center items-center bg-[#fcf8f5] h-14 w-full rounded-lg mb-5">
                    <img src={IconNeutral} />
                    <span className="text-black-900 text-sm"> This is a <span className="font-bold">carbon-neutral </span>delivery</span>
                </div>
                <button className="bg-primary h-14 w-full text-white text-base font-bold rounded-full " onClick={() => handleOpenModal()}> Confirm Order</button >
            </div>
        </>
    )
}
