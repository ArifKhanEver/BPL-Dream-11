import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

const Players = ({playersData, setCoin, coin}) => {
    const playerData =use(playersData);
    const [selectedType, setSelectedType] = useState('Available')
    const [selectedPlayers, setSelectedPlayers] = useState([])

    return (
        <div className='container mx-auto my-14'>

            <div className='flex justify-between items-center'>
                <h2 className='font-bold'>{selectedType == "Available"? 'Available Players':`Selected Players(${selectedPlayers.length}/${playerData.length})`}</h2>
                <div>
                    <button onClick={()=>setSelectedType('Available')} className={`btn ${selectedType === 'Available'? 'btn-accent':''} rounded-r-none rounded-l-xl font-bold`}>Available</button>
                    <button onClick={()=>setSelectedType('Selected')} className={`btn ${selectedType === 'Selected'? 'btn-accent':''} rounded-l-none rounded-r-xl font-bold`}>Selected({selectedPlayers.length})</button>
                </div>
            </div>

            
            {
                selectedType === "Available"? <AvailablePlayers playerData={playerData} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayers> : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}  setCoin={setCoin} coin={coin}></SelectedPlayers>
            }
            
        </div>
    );
};

export default Players;