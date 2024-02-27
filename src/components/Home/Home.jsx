/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import swal from 'sweetalert';

const Home = () => {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    useEffect(() =>{
        fetch("./cards.json")
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

const handleSelectCard = (card) => {
    const isExist = selectedCards.find(item=> item.id == card.id)
    let count = card.credit;
    if(isExist){
        return swal("Sorry!", "You have already enrolled!", "warning");
    }
    else {
        selectedCards.forEach((item)  => {
             count = count + item.credit;
        })
        const totalRemain = 20 - count;
        
        if(count > 20){
           return swal("Sorry!", "You have already enrolled 20 Credit!", "warning");
        }
        setRemaining(totalRemain);
        setTotalCost(count);
        setSelectedCards([...selectedCards,card]);
    }
 
    
}


    return (
        <div className='container-r w-full flex flex-col lg:flex-row justify-center  lg:justify-around  mx-auto'>
            <div className="card-container w-8/12  mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-24  my-10 justify-items-center">
                {
                    cards.map((card) => (
                        <div key={card.id} className="card  flex items-center justify-around  card-compact w-56  h-96  bg-white  shadow-xl">
                    <div className="card-img w-11/12  h-2/5 m-3 bg-slate-600 rounded-md">
                      <img className='photo w-full h-full  rounded-md' src={card?.cover_img} alt="Your Image" />
                    </div>
                    <h2 className='card-title mx-auto font-bold text-sm'>{card?.title}</h2>
                    <p className='text-center text-slate-500' ><small>{card?.description}</small></p>
                    <div className="info flex w-full justify-around">
                        <p className="price flex text-sm text-slate-600"><img src="./dollar-sign.png" alt="" /> price: {card?.price}</p>
                        <p className="price flex text-sm text-slate-600"><img src="../Frame.png" alt="" /> credit: {card?.credit}hr</p>
                    </div>
                    <button onClick={() => handleSelectCard(card)} className='btn btn-primary w-44'>Select</button>
                </div> 
                    )
                    )
                }
            </div>
            <div className="cart lg:w-4/12  mx-auto     my-10">
                <Cart selectedCards={selectedCards} remaining={remaining} totalCost={totalCost} ></Cart>
                </div>
        </div>
    );
};

export default Home;