import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){

    const INIT_URL = 
    "https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

    const HOT_URL = 
    "https://images.unsplash.com/photo-1545955413-209e03defb1f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
    const COLD_URL = 
    "https://plus.unsplash.com/premium_photo-1711653116222-c88ce0285b83?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
    const RAIN_URL = 
    "https://images.unsplash.com/photo-1566056196575-62183907f1ad?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW55JTIwd2VhdGhlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity > 80
            ? <ThunderstormIcon />
            : info.temp > 15
            ? <WbSunnyIcon />
            : <AcUnitIcon />
          }
        </Typography>
        <Typography variant="body2" color='text.secondary' component={"span"}>
            <div> Teperature: {info.temp}&deg;C</div>
            <div> Humidity: {info.humidity}</div>
            <div> Min Temp: {info.tempMin}&deg;C</div>
            <div> Max Temp: {info.tempMax}&deg;C</div>
            <div> The weather described as <i>{info.weather}</i> & feels like: {info.feelsLike}&deg;C</div> 

        </Typography>
      </CardContent>
    </Card>
            </div>
             
         </div>
    )
}