import shenzhen from "/shenzhen.jpg"
import pin from "/location.png"
import house from "/home.png"

const Card = () => {
  return (
    <article>
      <img src={shenzhen} className="photo" alt="Shenzhen's beautiful skyline" />

      <div className="place-details">
        <div className="place-details-info">
          <div className="place-details-location">
            <img src={pin} className="icon" alt="" />
            <p className="location">China</p>
            <a href="https://earth.google.com/web/search/Shenzhen,+Guangdong+Province,+China/@22.55516007,114.05387751,83.76628774a,68799.3974141d,35y,0h,0t,0r/data=CigiJgokCXMktY9B8kNAEXEktY9B8kPAGSbWwrXPMkhAIVcVGWQ6yFDA" target="_blank" rel="noopener noreferrer" className="place-details-location-link">View on Google Maps</a>
          </div>
          <h2 className="location-title">Shenzhen</h2>
        </div>

        <div className="place-details-itinerary">
          <div className="place-details-itinerary-details">
            <p>2005-2018</p>
            <p>about 11 years</p>
          </div>
          <p>A Special Economic Zone in China's south, this city has grown from a sleepy fishing village to a metropolis of @ 20 million in only forty years. Come here to meet people from all over China (as it's a migrant city) and many expats as well.</p>
        </div>
        
        <div className="personal-details">
          <img src={house} className="icon" alt="" />
          <p>I lived here for many years throughout my career as an English as a Foreign Language Teacher and real estate agent.</p>
        </div>
      </div>
    </article>
  )
}

export default Card