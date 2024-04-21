import { useState } from 'react';
import './countryA.css'
import CountryDetail from '../../countryDetail/CountryDetail';
const CountryA = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited)
    }

    // const passWithParams = () =>{
    //     handleVisitedCountry(country)
    // }
    
    // console.log(handleVisitedCountry)
    return (
        <div className={`countryA ${visited ? `visited` : 'none-visited'}`}>
            <h3 style={{color: visited ? `white` : 'black'}}>name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
            <hr />
            <CountryDetail
             country={country} 
             handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}>
            </CountryDetail>
        </div>
    );
};

export default CountryA;