/* eslint-disable react/prop-types */

import pin from "/location.png"
import house from "/home.png"

const Card = (props) => {
  return (
    <article>
      <img src={props.travel.img} className="photo" alt="photo" />

      <div className="place-details">
        <div className="place-details-info">
          <div className="place-details-location">
            <img src={pin} className="icon" alt="" />
            <p className="location">{props.travel.location}</p>
            <a href={props.travel.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="place-details-location-link">{props.travel.coordinates}</a>
          </div>
          <h2 className="location-title">{props.travel.title}<span className="translation">   {props.travel.translation}</span></h2>
        </div>

        <div className="place-details-itinerary">
          <div className="place-details-itinerary-details">
            <p>{props.travel.year}</p>
            <p>{props.travel.duration}</p>
          </div>
          <p>{props.travel.description}</p>
        </div>

        {props.travel.personal && <div className="personal-details">
          <img src={house} className="icon" alt="" />
          <p>{props.travel.personal}</p>
        </div>}
      </div>
    </article>
  )
}

export default Card