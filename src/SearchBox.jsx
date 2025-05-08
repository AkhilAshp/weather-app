import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './Style.css';

export default function SearchBox(){
    const [city, setCity] = useState("");
    const API_KEY = '31309ce7f38aaf19043f018acfab45e0';
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

    let getWeatherInfo = async()=>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);// not the actual data incomplete stream data( a response object)
        let jsonResponse = await response.json(); // actual complete data from api request
        // console.log(jsonResponse);
        let result = {
            temp: jsonResponse.main.temp,
            temp_max: jsonResponse.main.temp_max,
            temp_min: jsonResponse.main.temp_min,
            humidity: jsonResponse.main.humidity,
            feels_like: jsonResponse.main.feels_like,
            description: jsonResponse.weather[0].description
        }
        console.log(result);
    }
    let handleChange = (evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit = (evt) => {
        evt.preventDefault();
        getWeatherInfo();
        setCity("");
    }
    return(
        <div className="searchBox">
            <h3>Search for weather😉</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="city" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br>
                <br></br>
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}