import './App.css'

import Hero from './components/Hero';
import ParallaxBackground from './components/ParallaxBackground';
import Process from './components/Process';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-black text-white overflow-x-hidden relative flex flex-col min-h-screen">
      <div className="flex-grow">
        <ParallaxBackground />
        <div className="relative z-10">
          <Hero />
          <Process />
          <Services />
          <Portfolio />
          <Testimonials />
          <Team />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default App
