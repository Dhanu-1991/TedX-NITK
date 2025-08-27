import './App.css';
import Header from './header';
import Footer from './footer';
import PixelText from './components/pixelText';
import CountdownHero from './components/countDown';
import DateLocation from './dateLocation';
import WhatIsTedx from './components/WhatIsTedx';
import TheExperience from './theExperience';
import OurSpeakers from './ourSpeakers';
import PastSpeakers from './pastSpeakers';
import Tribute from './aTribute';
function App() {

  return (
    <>
      <Header />
      
      <main>
      <PixelText text="ALCHEMY" height={260} />
      <DateLocation />
      <CountdownHero targetDate="2025-09-15T18:00:00" background="/assets/event-bg.png" />
      <WhatIsTedx />
      <TheExperience />
      <OurSpeakers />
      <PastSpeakers />
      <Tribute />
      </main>
      <Footer />
    </>
  )
}

export default App
