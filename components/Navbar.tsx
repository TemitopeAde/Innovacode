'use client'

import {  useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const navbarRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(navbarRef.current, {
      y: -100,
      duration: 0.8,
      ease: 'power3.out'
    })

    gsap.to(navbarRef.current, {
      backgroundColor: 'rgba(249, 250, 251, 0.8)',
      backdropFilter: 'blur(10px)',
      duration: 0.3,
      scrollTrigger: {
        trigger: navbarRef.current,
        start: 'top+=50 top',
        toggleActions: 'play none none reverse'
      }
    })
  })

  return (
    <nav 
      ref={navbarRef}
      className="fixed w-full z-50 py-4 px-6 md:px-12 lg:px-24 transition-all duration-300"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-primary">
          Innovacode
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="#services" className="hover:text-primary transition">Services</Link>
          <Link href="#portfolio" className="hover:text-primary transition">Portfolio</Link>
          <Link href="#testimonials" className="hover:text-primary transition">Clients</Link>
          <Link href="#contact" className="hover:text-primary transition">Contact</Link>
        </div>
        
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}