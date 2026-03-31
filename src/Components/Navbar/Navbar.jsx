import React from 'react';
import dreamCoin from '../../assets/dollar_1.png'
import dreamLogo from '../../assets/logo.png'
const Navbar = ({coin}) => {
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl"><img src={dreamLogo} alt="dream logo" /></a>
            </div>
            <div className="">
                <button className="flex justify-between items-center gap-2 font-bold text-xl">{coin} Coins<img src={dreamCoin} alt="dreamCoin" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;