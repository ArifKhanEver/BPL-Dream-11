import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players';
import { ToastContainer } from 'react-toastify';


const playersData = fetch('/data.json'). then(res =>res.json());
function App() {
  const [coin, setCoin] = useState(50000)

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>

      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>

        <Players playersData={playersData} setCoin={setCoin} coin={coin}></Players>
      </Suspense>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
