import { useEffect } from "react";
import { useState } from "react";
import CountryA from "../Country/countryA/CountryA";
// import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
           .then(res => res.json())
           .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = (country) =>{
        // console.log('add visited this country')
        // console.log(country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
        // console.log(newVisitedCountries)
    }

    const handleVisitedFlags = (flag) =>{
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }

    // remove item from an array in a state
    // use filter to select all the elements expect the one you want to remove
    

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited country*/}
            <div>
              <h4>Visited countries: {visitedCountries.length}</h4>
              <ol>
                {
                   visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>) 
                }
              </ol>
            </div>
            <div>
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            {/* {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            } */}

            {/* displey country */}
            <div className="country-container">
                {
                    countries.map(country => <CountryA key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags} country={country}></CountryA>)
                }
            </div>
        </div>
    );
};

export default Countries;