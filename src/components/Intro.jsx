import traveller from "/jolene.png"

const Intro = () => {
  return (
    <section className='intro-section'>
      <img src={traveller} className="traveller" alt="Meet the traveller" />
      <div className="intro-section-text">
        <p className="intro">I choose my first career as an English as a Foreign Language Teacher to travel the world!</p>
        <p className="intro">I thought I tarryed too long in China to meet that goal, but happily been to more places than I thought!</p>
        <p className="intro">Here are most of the places I've been to starting with the latest.</p>
      </div>
    </section>
  )
}

export default Intro