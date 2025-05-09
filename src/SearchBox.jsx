import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox({updateInfo}){
    const [city, setCity] = useState("");
    const API_KEY = '31309ce7f38aaf19043f018acfab45e0';
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

    const [err, setErr] = useState(false);
    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);// not the actual data incomplete stream data( a response object)
        let jsonResponse = await response.json(); // actual complete data from api request
        // console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            temp_max: jsonResponse.main.temp_max,
            temp_min: jsonResponse.main.temp_min,
            humidity: jsonResponse.main.humidity,
            feels_like: jsonResponse.main.feels_like,
            description: jsonResponse.weather[0].description
        }
        // console.log(result);
        return result;
        }catch(err){
            throw err;
        }
    }
    let handleChange = (evt)=>{
        setCity(evt.target.value);
        setErr(false);
    }

    let handleSubmit =async (evt) => {
        try{
            evt.preventDefault();
        let newInfo =await getWeatherInfo();
        // console.log(newInfo);
        setCity("");
        updateInfo(newInfo);
        }catch(err){
            setErr(true);
        }
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
            {err && <p style={{color:'red'}}>No such place exits!</p>}
        </div>
    )
}