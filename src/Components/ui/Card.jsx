import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({player, setCoin, coin, selectedPlayers, setSelectedPlayers}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer=()=> {
        
        let newCoin = coin - player.price;
        if(newCoin > 0) {
            setCoin(coin - player.price)
        }else {
            toast.error('Not Enough Coin to Purchase');
            return
        }
        toast(`${player.name} is selected`)
        setIsSelected(true); 
        setSelectedPlayers([...selectedPlayers, player])
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className='lg:h-50 object-cover'
                    src={player.image}

                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> <FaUser></FaUser> {player.name}</h2>

                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <FaFlag></FaFlag>
                            <p>{player.country}</p>
                        </div>
                        <button className='btn'>{player.role}</button>
                    </div>
                    <div className="divider"></div>
                    <div className='flex justify-between'>
                        <h2 className='font-bold'>Rating: {player.rating}</h2>
                    </div>
                    <div className='flex justify-between'>
                        <p>{player.battingStyle}</p>
                        <p className='text-right'>{player.bowlingStyle}</p>
                    </div>
                    <div className="flex card-actions justify-between">
                        <h3 className='font-semibold'>Price: {player.price}</h3>
                        <button className="btn" onClick={handleChoosePlayer} disabled={isSelected}>{isSelected? 'Selected':'Choose Player'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;