import React from 'react'
import { Heart, Shield, Users, Coffee } from 'lucide-react'

const EventExperience = () => {
  // ... (keep the existing steps array)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gradient mb-12">How Jab We Met Speed Dating Works</h2>
        {/* ... (keep the existing timeline of steps) */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-6">
            We're here to make your journey to finding a meaningful connection as comfortable and enjoyable as possible. Join us for a friendly, no-pressure evening of meeting new people.
          </p>
          <a href="#events" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-3 px-8 rounded-full hover:from-pink-600 hover:to-orange-600 transition duration-300 shadow-lg inline-block">
            Find My Soulmate
          </a>
        </div>
      </div>
    </section>
  )
}

export default EventExperience