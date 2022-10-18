import React, { useEffect, useState } from 'react'
import CountryDetails from './CountryDetails/CountryDetails';
import Sidebar from './Sidebar/Sidebar';

const CountryMain = () => {
  const [countrys,setCountrys] = useState([])
  //State for grabbing which country got clicked
  const [getCountry, setGetCountry] = useState({})

  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(countrys => setCountrys(countrys));
  },[])

  return (
    <div className='container text-center px-0'>
      <header className='bg-dark text-white py-2 sticky-top'>
        <h4>The Ultimate Country App🔥</h4>
        <p className='m-0'>Total Enlisted Country: <strong className='text-warning'>{countrys.length}</strong></p>
      </header>
      <div className='d-flex'>
        <Sidebar countrys={countrys} setGetCountry={setGetCountry}/>
        <CountryDetails country={getCountry}/>
      </div>
    </div>
  )
}

export default CountryMain
