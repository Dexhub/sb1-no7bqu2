import React from 'react'
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Heart className="text-pink-500 mr-2" />
            <span className="text-xl font-bold">Jab We Met</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-500"><Instagram /></a>
            <a href="#" className="hover:text-pink-500"><Facebook /></a>
            <a href="#" className="hover:text-pink-500"><Twitter /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Jab We Met. All rights reserved.</p>
          <p>Creating Bollywood-worthy love stories in the Bay Area</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer