import { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from './componets/NavBar'
import Card from './componets/Card'
import ChangeTemp from './componets/ChangeTemp'

function App() {

    const [ weather, setWeather ] = useState( { } )
    const [ city, setCity ] = useState ( "" )

    useEffect(() => {
      navigator.geolocation.getCurrentPosition( (position) => {
          axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=978df9b08bba67d3413de88c32c09e1b&units=metric&lang=es`)
            .then( resp => setWeather(resp.data) )
            .catch( error => console.error( error ) )
      });
      }, []);

    const onSubmit = () => {
      axios 
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=978df9b08bba67d3413de88c32c09e1b&units=metric&lang=es`)
          .then( resp => setWeather(resp.data) )
          .catch( error => console.error( error ) )
    } 
  
      console.log(weather)

  return (
    <div className="App">
     <NavBar
     city = { city }
     setCity = { setCity }
     onSubmitData = { onSubmit }
     />

     <Card
     data = {weather}
     />

     <ChangeTemp/>
    </div>
  )
}

export default App
