import { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from './componets/NavBar'
import Card from './componets/Card'
import ChangeTemp from './componets/ChangeTemp'

function App() {

  const Geolocation = () => {
    console.log("hola mundo")
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    console.log(latitude)
    console.log(longitude)
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log(error);
        }
      );
    }, []);



  const[ weather, setWeather ] = useState( { } )
  useEffect( () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=978df9b08bba67d3413de88c32c09e1b`)
    .then( resp => console.log(resp) )
    .catch( error => console.error( error ) )
    console.log(weather)
  }, [] )





  return (
    <div className="App">
     <NavBar/>

     <Card
     data = {weather}
     />

     <ChangeTemp/>
    </div>
  )
}}

export default App
