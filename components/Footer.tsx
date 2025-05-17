'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.footer-content', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
  }, { scope: container })

  return (
    <footer ref={container} className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto footer-content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Innovacode</h3>
            <p className="text-gray-400">
              Transforming ideas into digital reality through innovative web, mobile, and app solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition">Mobile App Development</a></li>
              <li><a href="#" className="hover:text-white transition">WordPress Development</a></li>
              <li><a href="#" className="hover:text-white transition">Wix Development</a></li>
              <li><a href="#" className="hover:text-white transition">Squarespace Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
               <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition">
                <FaFacebook />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition">
                <FaLinkedin />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition">
                <FaInstagram />
              </a>
            </div>
            <p className="text-gray-400">
              Subscribe to our newsletter for updates and offers.
            </p>
          </div> */}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Innovacode. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}