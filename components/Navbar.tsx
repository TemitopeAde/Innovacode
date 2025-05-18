'use client'

import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const navbarRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useGSAP(() => {
    gsap.from(navbarRef.current, {
      y: -100,
      duration: 0.8,
      ease: 'power3.out'
    })

    gsap.to(navbarRef.current, {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      duration: 0.3,
      scrollTrigger: {
        trigger: navbarRef.current,
        start: 'top+=50 top',
        toggleActions: 'play none none reverse'
      }
    })
  })

  // Toggle mobile menu with animation
  const toggleMenu = () => {
    if (!isMenuOpen) {
      // Open menu animation
      gsap.to(mobileMenuRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    } else {
      // Close menu animation
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      })
    }
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu when clicking a link
  const handleLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu()
    }
  }

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <nav 
      ref={navbarRef}
      className="fixed w-full z-50 py-4 px-6 md:px-12 lg:px-24 transition-all duration-300"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-3xl text-gray-100 font-extrabold text-primary">
          Innovacode
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.href} 
              className="hover:text-primary text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu dropdown */}
      <div 
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden h-0 opacity-0 mt-4"
      >
        <div className="flex flex-col space-y-4 bg-black/90 rounded-lg p-6">
          {navLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.href} 
              className="text-white hover:text-primary transition py-2 border-b border-gray-700 last:border-b-0"
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}