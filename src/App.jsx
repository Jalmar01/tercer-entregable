import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCardImg from './components/ResidentCardImg'
import FormSearch from './components/FormSearch'
import HeaderApp from './components/HeaderApp'


function App() {

  const randomId = getRandomNumber(126)

  const [idLocation, setIdLocation] = useState(randomId)

  const url = `https://rickandmortyapi.com/api/location/${idLocation}`

  const [location, getApiLocation, hasError] = useFetch(url)

  useEffect(() => {
    getApiLocation()
  }, [idLocation])

  return (
    <div className='app'> 
      <HeaderApp/>
      <FormSearch
        setIdLocation={setIdLocation}
      />
      {
        hasError
          ? <h2>❌hey! you must provide an id from 1 of 126 😪</h2>
          : (
       <>
              <LocationInfo 
                location={location}
            />
          <div className='resident-container'>
            {
              location?.residents.map(url => (
                <ResidentCardImg 
                  url={url}
                  key={url}
                />
              ))
            }
          </div>
       </>
            
          )
      }

    </div>
  )
}

export default App
