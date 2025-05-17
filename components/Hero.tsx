'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import AnimatedText from './AnimatedText'

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Animate gradient positions for background
    gsap.to(backgroundRef.current, {
      backgroundPosition: '100% 100%',
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    // Staggered animation for content elements
    const timeline = gsap.timeline()
    
    timeline
      .from('.hero-title', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      })
      .from('.hero-description', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.7')
      .from('.hero-buttons', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.6')
      .from('.hero-stats', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4')
      .from('.scroll-indicator', {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.in'
      }, '-=0.3')

  }, { scope: container })

  return (
    <section 
      ref={container}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 bg-[length:200%_200%] bg-[0%_0%]"
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/grid-pattern.svg')] bg-repeat"></div>
      
      {/* Floating circles decoration */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-20 blur-3xl"></div>
      
      {/* Content container with improved spacing */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          <AnimatedText text="Transforming Ideas Into Digital Reality" />
        </h1>
        <p className="hero-description text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light">
          We build innovative web, mobile, and app solutions that drive business growth and deliver exceptional user experiences.
        </p>
        <div className="hero-buttons flex flex-col sm:flex-row justify-center gap-5 mb-12">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-indigo-500/30">
            Get Started
          </button>
          <button className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1">
            Our Services
          </button>
        </div>
        
        {/* Stats section for visual interest */}
        <div className="hero-stats hidden md:flex justify-center gap-12 mt-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-1">300+</div>
            <div className="text-white/70 text-sm uppercase tracking-wider">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-1">98%</div>
            <div className="text-white/70 text-sm uppercase tracking-wider">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-1">15+</div>
            <div className="text-white/70 text-sm uppercase tracking-wider">Years Experience</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-white/70 text-xs tracking-widest mb-2">SCROLL DOWN</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-white rounded-full animate-pulse-down"></div>
        </div>
      </div>
    </section>
  )
}