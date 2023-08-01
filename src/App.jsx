import NavBar from "./components/NavBar"
import Intro from "./components/Intro"
import Card from "./components/Card"
import data from "./data"
import Footer from "./components/Footer"

function App() {
  const cards = data.map(travel => {
    return (
      <Card 
        key={travel.title}
        travel={travel}
        // 
      />
    )
  })

  return (
    <>
      <NavBar />
      <main>
        <Intro />
        {cards}
      </main>
      <Footer />
    </>
  )
}

export default App
