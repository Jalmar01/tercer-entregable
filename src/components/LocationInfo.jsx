import "./styles/locationInfo.css"

const LocationInfo = ({location}) => {


  return (
    <article className="info">
        <h2>{location?.name}</h2>
        <ul>
            <li><span className="lavel" >Type: </span><span className="value" >{location?.type}</span></li>
            <li><span className="lavel" >Dimension: </span><span className="value" >{location?.dimension}</span></li>
            <li><span className="lavel" >Population: </span><span className="value" >{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo