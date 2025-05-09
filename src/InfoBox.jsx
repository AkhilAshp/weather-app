import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny'; 
import WaterDropIcon from '@mui/icons-material/WaterDrop';

export default function InfoBox({info}){
    const HOT_URL = 'https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3Vubnl8ZW58MHx8MHx8fDA%3D'; 
    const COLD_URL = 'https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D';
    const RAIN_URL = 'https://images.unsplash.com/photo-1438449805896-28a666819a20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UkFJTklOR3xlbnwwfHwwfHx8MA%3D%3D';
    
    return(
        <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80 ? RAIN_URL : (info.temp >30)?HOT_URL:COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}
                &nbsp;
                {info.humidity > 80 ? <WaterDropIcon/> : (info.temp >30) ? <SunnyIcon/>: <AcUnitIcon/>}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                <p>Temperature: {info.temp}&deg;C</p>
                <p>Humidity: {info.humidity}</p>
                <p>Min Temp. : {info.temp_min}</p>
                <p>Max Temp. : {info.temp_max}</p>
                <p>The weather can be described as {info.description} and feels like {info.feels_like}&deg;C.</p>
                </Typography>
            </CardContent>
            </Card>
        </div>
    )
}