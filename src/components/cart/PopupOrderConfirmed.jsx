import { useDispatch, useSelector } from 'react-redux'
import Modal from "react-modal";
import { closeModal } from '../../store/products/productSlice';


export default function PopupOrderConfirmed({ cart }) {
    const dispatch = useDispatch();
    const { isOpen } = useSelector((state) => state.products);
    const handleCloseModal = () => {
        dispatch(closeModal())
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={() => handleCloseModal()}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        zIndex: 1000,
                    },
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        padding: "30px",
                        width: "600px",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: "100",
                        borderRadius: "10px",
                        border: "0px"
                    },
                }}
                contentLabel="Example Modal"
            >
                <div className='bg-[#fcf8f5] rounded-xl p-4 mb-4'>

                    {cart.map((item) =>
                        <div className="flex items-center border-b border-brown-800 pb-4 mb-4" key={item.id}>
                            <img src={item.image.thumbnail} className='w-11 h-11 rounded-sm' />
                            <div className='flex w-full justify-between items-center'>
                                <div className="mx-4">
                                    <p className="text-black-900 font-bold mb-1"> {item.name} </p>
                                    <p className="text-sm">
                                        <span className="text-primary font-bold"> {item.quantity} x </span>
                                        <span className="text-brown-800 px-3" > @ ${item.price}</span>
                                    </p>
                                </div>
                                <div>
                                    <span className="text-brown-900 font-semibold"> @ ${item.price * item.quantity}</span>

                                </div>
                            </div>
                        </div>
                    )}
                    <div className="flex justify-between items-center text-black-900 ">
                        <span className="text-sm ">Order Total</span>
                        <span className="font-bold text-2xl">$ {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
                    </div>
                </div>
                <button className="bg-primary h-14 w-full text-white text-base font-bold rounded-full " onClick={() => handleCloseModal()}> Start New Order</button >

            </Modal>
        </div>
    )
}
