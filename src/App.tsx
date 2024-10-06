import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import DatingStats from './components/DatingStats'
import EventExperience from './components/EventExperience'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import EventTypes from './components/EventTypes'
import Story from './components/Story'
import EventRegistration from './components/EventRegistration'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <DatingStats />
      <EventExperience />
      <Benefits />
      <Testimonials />
      <EventTypes />
      <Story />
      <EventRegistration />
      <div className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gradient mb-8">Don't See an Event That Fits Your Niche?</h2>
          <p className="text-xl text-center text-gray-700 mb-8">
            We're constantly adding new themed events. Join our mailing list to be the first to know about upcoming mixers tailored to your interests!
          </p>
          <div className="text-center">
            <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-3 px-8 rounded-full hover:from-pink-600 hover:to-orange-600 transition duration-300 shadow-lg">
              Join Mailing List
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App