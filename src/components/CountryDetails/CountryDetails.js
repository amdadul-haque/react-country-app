import React from 'react'
import './CountryDetails.css';

const CountryDetails = ({country}) => {
  return (
    <div className='CountryDetails bg-success flex-fill'>CountryDetails
      <h1>Name: <span className='text-warning'>{country.name}</span></h1>
      <p>Region: <b>{country.region}</b> Sub Region: <b>{country.subregion}</b></p>
      <p>Capital: <b>{country.capital}</b></p>
      <p>Population: <b>{country.population}</b></p>       
    </div>
  )
}

export default CountryDetails