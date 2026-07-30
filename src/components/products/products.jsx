//import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddtocartButton from '../../controls/buttons/AddtocartButton';
import Iconincrement from '/images/icon-increment-quantity.svg';
import Icondecrement from '/images/icon-decrement-quantity.svg';

import { addToCart, decreaseQuantity, increaseQuantity } from '../../store/products/productSlice';

export default function Products({ productsList }) {
    const { cartList } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const handleAddToCart = (productId) => {
        dispatch(addToCart({ productId }));
    }
    const handleIncrease = (productId) => {
        dispatch(increaseQuantity({ productId }));
    }
    const handleDecrease = (productId) => {
        dispatch(decreaseQuantity({ productId }));
    }

    return (
        <div className='w-full lg:w-2/3'>
            <h1 className='text-3xl font-bold text-black-900 mb-4'> Desserts </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                {productsList.map((product) => {
                    const cartItem = cartList.find(
                        (item) => item.productId === product.id
                    );

                    const quantity = cartItem ? cartItem.quantity : 0;

                    return (


                        <div className="w-full" key={product.id}>
                            <a className={`block h-48 rounded-xl overflow-hidden  border-2 ${quantity === 0 ? "border-transparent " : "border-red-800"}`} >
                                <picture alt="ecommerce" className="object-cover object-center w-full h-full block">
                                    <source
                                        media="(min-width: 1024px)"
                                        srcSet={product.image.desktop}
                                    />

                                    <source
                                        media="(min-width: 768px)"
                                        srcSet={product.image.tablet}
                                    />

                                    <img
                                        src={product.image.mobile}
                                        alt={product.name}
                                    />
                                </picture>
                            </a>
                            <div className="relative -mt-3  text-center z-0">
                                {quantity === 0 ?
                                    <AddtocartButton buttonClass={` mx-auto`} onClick={() => handleAddToCart(product.id)}>  Add to Cart </AddtocartButton>
                                    :
                                    <div className="quantity-stepper bg-primary flex items-center justify-between w-40 h-11 rounded-full mx-auto px-5 text-white">
                                        <button onClick={() => handleIncrease(product.id)} className='w-5 h-5 text-center'> <img className="m-auto" src={Iconincrement} /></button>
                                        <span>{quantity}  </span>
                                        <button onClick={() => handleDecrease(product.id)} className='w-5 h-5 text-center'> <img className="m-auto" src={Icondecrement} /> </button>
                                    </div>

                                }


                            </div>


                            <div>
                                <h3 className="text-brown-900 text-sm tracking-widest title-font mb-1">{product.category}</h3>
                                <h2 className="text-black-900 title-font text-lg font-bold">{product.name}</h2>
                                <p className="mt-1 text-primary font-semibold">${product.price}</p>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div >
    )
}
