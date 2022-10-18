import React from 'react'
import './Sidebar.css'

const Sidebar = ({countrys, setGetCountry}) => {  
  const setClickedCountry = (country)=> setGetCountry(country);
  return (
    <div className='Sidebar py-5'>
      {
        countrys.map(country => {
          return(
            <button onClick={()=> setClickedCountry(country)} className='btn my-1'>
              <img style={{width:'120px'}} className='img-fluid border' src={country.flags.svg} alt="" />
            </button>
          )
        })
      }
    </div>
  )
}

export default Sidebar