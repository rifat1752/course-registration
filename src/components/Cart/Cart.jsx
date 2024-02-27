/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';


const Cart = ({selectedCards,remaining, totalCost}) => {
    return (
        <div className='w-60 h-96  bg-white mx-auto drop-shadow-2xl rounded-xl'>
            <div className=" cart-container flex flex-col justify-between px-2 w-60 mx-auto">
            <h1 className='h-14 text-base font-semibold text-blue-700 pt-4 border-b-2 border-gray-300 '>Credit Hour Remaining {remaining} hr</h1>
            <h1 className='mt-2 text-lg font-bold'>Course Name</h1>
            <div className='h-56'>
            {
                <ol>
                {selectedCards.map((card, index) => (
                    <li className='text-slate-600 text-sm' key={card.id}>{`${index + 1}. ${card.title}`}</li>
                ))}
            </ol>
            }
            </div>
            
            <p className=' h-14 w-full self-end  font-bold py-2  my-4 border-t-2 border-gray-300 '>Total Credit Hour : {totalCost}</p>
            </div>
        </div>
    );
};

export default Cart;