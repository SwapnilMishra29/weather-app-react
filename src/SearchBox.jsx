import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}){

    let [city, setCity] = useState("");
    let [err, setErr] = useState(false)
    
    const Api_URL = "https://api.openweathermap.org/data/2.5/weather"
    const Api_KEY = '9036bd1fb67c06647551bf146fd8c174';

    let getWeatherInfo = async () => {
        try{
        let response = await fetch(`${Api_URL}?q=${city}&appid=${Api_KEY}&units=metric`);
        let jsonRes = await response.json();
        console.log(jsonRes);
        let result = {
            city: city,
            temp: jsonRes.main.temp,
            tempMin: jsonRes.main.temp_min,
            tempMax: jsonRes.main.temp_max,
            humidity: jsonRes.main.humidity,
            feelsLike: jsonRes.main.feels_like,
            weather: jsonRes.weather[0].description,

        }
        console.log(result);
        return result;
        }catch(err){
            throw err
        }
    }

    

    let handleChange = async(evt) => {
         setCity(evt.target.value);
    }
    
    let handleSubmit = async(evt) => {
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let NewInfo = await getWeatherInfo();
        updateInfo(NewInfo);
        }catch(err){
            setErr(true);
        }
        
    }

    return(

        <div className="SearchBox">
           <form onSubmit={handleSubmit}>
               <TextField 
               id="city" 
               label="City name " 
               variant="outlined" 
               required
               value={city}
               onChange={handleChange}/>
               <br></br><br></br>

            <Button variant="contained" type="submit">search</Button>
             {err && <p style={{color:"red"}}>No such place exits</p>}
           </form>

        </div>
    )
}