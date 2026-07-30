import React from 'react';
import emptyCartImg from '/images/illustration-empty-cart.svg';

export default function EmptyItem() {
    return (
        <div className=" flex flex-col items-center">
            <div className="my-5">
                <img src={emptyCartImg} alt="empty cart" />

            </div>

            <p className="font-bold text-brown-900">Your Added items will appear here</p>
        </div>
    )
}
