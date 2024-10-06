import React, { useState } from 'react'
import { Mail } from 'lucide-react'

const EventRegistration = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    setEmail('')
    alert('Thank you for joining our mailing list! We\'ll keep you updated on upcoming Bollywood-inspired romance events.')
  }

  return (
    <section id="register" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gradient mb-12">You Deserve Better Than an Arranged Marriage. Give Love a Chance!</h2>
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-pink-50 to-orange-50 rounded-lg shadow-lg p-8">
          <div className="text-center">
            <a href="#events" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-3 px-8 rounded-full hover:from-pink-600 hover:to-orange-600 transition duration-300 shadow-lg inline-block">
              Find My Soulmate
            </a>
          </div>
        </div>
      </div>
      <div className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gradient mb-8">Don't See an Event That Fits Your Niche?</h2>
          <p className="text-xl text-center text-gray-700 mb-8">
            Love will find a way! We're constantly adding new themed events. Join our mailing list to be the first to know about upcoming mixers tailored to your interests before they sell out!
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
              <button type="submit" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-r-md hover:from-pink-600 hover:to-orange-600 transition duration-300 flex items-center">
                <Mail className="mr-2" />
                Join Mailing List
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EventRegistration