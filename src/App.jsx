import { useEffect } from 'react';
import ReactModal from 'react-modal';
import './index.css'
import Products from './components/products/products'
import Cart from './components/cart/cart';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from './store/products/productSlice';
import PopupOrderConfirmed from './components/cart/PopupOrderConfirmed';


ReactModal.setAppElement("#root");


function App() {
  const dispatch = useDispatch();
  const { productsList } = useSelector((state) => state.products);
  const { cartList } = useSelector((state) => state.products);


  useEffect(() => {
    dispatch(getProductsList());

  }, [dispatch]);
  const cart = cartList.map((cartItem) => {
    const product = productsList.find(
      (item) => item.id === cartItem.productId
    );

    return {
      ...product,
      quantity: cartItem.quantity,
    };
  }); return (
    <>
      <section className="text-gray-600 body-font py-6" >
        <div className="w-full  xl:w-7xl mx-auto px-3 lg:px-9">

          <div className="flex flex-col lg:flex-row justify-between">

            <Products productsList={productsList} cart={cart} />
            <Cart cart={cart} />

          </div>

        </div>
      </section>
      <PopupOrderConfirmed cart={cart} />


    </>
  )
}

export default App
