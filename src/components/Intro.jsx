import traveller from "/jolene.png"
import world from "/flag-earth.png"

const Intro = () => {
  return (
    <section className='intro-section'>
      <div className="intro-section-img">
        <img src={traveller} className="traveller" alt="Meet the traveller" />
        <img src={world} className="world" alt="" />
      </div>
      <div className="intro-section-text">
        <p className="intro">Wowey, this was a hard project!</p>
        <p className="intro">Not the React, but remembering all the places I've travelled to!</p>
        <p className="intro">This was an interesting memory exercise for me. I thought I'd mainly travelled around China, but happily I had many more entries!</p>
        <p className="intro">Just to make it confusing for myself, I listed everything in backwards.</p>
      </div>
    </section>
  )
}

export default Intro