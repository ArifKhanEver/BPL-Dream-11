import Card from '../../ui/Card';

const AvailablePlayers = ({playerData, setCoin, coin, selectedPlayers, setSelectedPlayers}) => {

    return (
        <div>
            <div  className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-3'>

                {
                    playerData.map((player,index)=> 
                        <Card key={index} player={player} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>
                    )
                }
                
            </div>
        </div>
    );
};

export default AvailablePlayers;