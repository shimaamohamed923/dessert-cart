
import EmptyItem from "./emptyItem.jsx"
import CartItem from './cartItem.jsx';

export default function Cart({ cart }) {

    return (

        <div className="w-full mt-5 lg:mt-0 h-fit lg:w-sm rounded-xl p-6 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">

            <h2 className="text-2xl font-bold text-primary">  Your Cart ({cart.length})</h2>
            {cart.length !== 0 ?
                <CartItem cart={cart} /> : <EmptyItem />
            }
        </div>
    )
}
