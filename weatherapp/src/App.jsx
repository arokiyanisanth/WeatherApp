import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import './index.css'
import Current from './Component/Current';
import Forecast from './Component/Forecast';
import '../node_modules/bootstrap/dist/js/bootstrap'



const App = () => {
  //entire js code 
  // variable declaration
  const [city, setCity] = useState();
  const [clickedcity, setClickedCity] = useState();
  const [citysuggestion, setCitysuggestion] = useState([]);
  const [currentweather,setCurrent]=useState();
  const [forecast,setForecast]=useState();
  const [location,setLocation]=useState();

  // weatherurls
  const Weatherurl = "https://api.weatherapi.com/v1/search.json?key=4b9523bd4e6b44ebb4f134949252803&q="
  const WeatherOriginalUrl = (city) => `https://api.weatherapi.com/v1/forecast.json?key=4b9523bd4e6b44ebb4f134949252803&q=${city}&days=7&aqi=no&alerts=no
`
  // use effect for getting the city input
  useEffect(() => {
    if (city && city.length > 3) {
      fetchapi();

    };


  }, [city]);


  // api fetching from first url
  const fetchapi = async () => {
    try {
      const response = await axios.get(Weatherurl + city)
      const resp = response.data;
      console.log(resp)
      const cityData = resp.map((data) => {
        return `${data.name},${data.region},${data.country}`
      });

      setCitysuggestion(cityData);
    } catch (e) {
      console.log(e.target.value)
    }
  };
  // api fetching from second url
  const fetchWeatherOriginalUrl =async (city) => {
    try {
      const response = await axios.get(WeatherOriginalUrl(city));
      const resp = response.data;
      // console.log(resp);
      setCurrent(resp.current);
      setForecast(resp.forecast);
      setLocation(resp.location);
      console.log('current',resp.current);
      console.log('forecast',resp.forecast);
      console.log('location',resp.location);
    } catch (e) {
      console.log(e);
    }
  }


  // get the input from clicking the searching bar and console it to the console page
  const handleSelectedcity = (city) => {
    console.log('clicked city',city);
    setClickedCity(city);
    fetchWeatherOriginalUrl(city);
    setCitysuggestion([])

};

// for handling city

  const handleCityInput = (e) => {
    setCity(e.target.value);
    if (e.target.value===""){
      setCurrent();
      setForecast();
      setClickedCity();
      setLocation();
     

    }
  }

  // for backspace of input like removing each letter
  const handleKeyDown=(e)=>{
    if (e.key==="Backspace"){
      setClickedCity();
    }
  }

  // html code
  return (
   <>
   <h1 className='text-center fw-bold mt-2 text-warning  '  >WEATHER APP</h1>
    <div className='container  p-5 bgi introdesign mt-5 '>
      <div>
        <input className="form-control form-control-lg text-primary fw-bold style={{width: '18em'}}" value={clickedcity}  type="text" placeholder="Enter the city name" aria-label=".form-control-lg example" onKeyDown={handleKeyDown} onChange={handleCityInput} />
      </div>
      {/* {city&&<h1>{city}</h1>} */}
      {citysuggestion.map((city, index) => {
        return <div key={index} className='text-center border text-warning fw-bold' onClick={() => handleSelectedcity(city)} style={{ cursor: 'pointer' }}>{city}</div>;
      })}

      {currentweather && <Current currentweather={currentweather} location={location}/>}
     {forecast && <Forecast forecastweather={forecast} location={location}/>}
    </div>
    </>
  )

}

export default App
