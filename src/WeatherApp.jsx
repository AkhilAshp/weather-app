import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";
export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState(
        {
            city:'coimbatore',
            description: "few clouds",
            feelslike: 35.09,
            humidity: 26,
            temp: 35.88,
            temp_max: 35.88,
            temp_min: 35.88
        }
    )

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}