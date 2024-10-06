import React from 'react'
import { Heart } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Heart className="text-pink-500 mr-2" />
          <span className="text-2xl font-bold text-gray-800">Jab We Met</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-gray-600 hover:text-pink-500">Home</a></li>
            <li><a href="#story" className="text-gray-600 hover:text-pink-500">Our Story</a></li>
            <li><a href="#events" className="text-gray-600 hover:text-pink-500">Events</a></li>
            <li><a href="#register" className="text-gray-600 hover:text-pink-500">Register</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header