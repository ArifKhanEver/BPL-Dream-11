import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, setCoin, coin}) => {

    const handleDeleteSelectedPlayer = (player)=> {
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.name !== player.name)

        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price)

        toast.error(`${player.name} is Deselected`);
        
    }

    return (
        <div className='space-y-3 mt-4'>
            { selectedPlayers.length ===0? <div className='grid place-content-center h-[400px]'> <h2>No players Available</h2></div> :
                selectedPlayers.map(player=>
                    <div className='border border-amber-700 rounded-xl flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-3'>
                            <div className='flex items-center rounded-2xl ml-2 p-4'>
                                <img className='rounded-2xl' width={100} height={100} src={player.image} alt="" />
                            </div>
                            <div>
                                <h3 className='flex gap-2 font-bold text-xl'><FaUser></FaUser> {player.name}</h3>
                                <h4 className='font-bold'>{player.role}</h4>
                            </div>
                        </div>
                        <div>
                            <button className='btn mr-2 text-red-600' onClick={()=>handleDeleteSelectedPlayer(player)}>
                                <MdDeleteForever></MdDeleteForever>
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default SelectedPlayers;