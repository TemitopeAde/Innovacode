'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechSolutions Inc.',
    quote: 'Innovacode transformed our outdated website into a modern, high-performing platform that has significantly increased our lead generation.',
    avatar: '/images/avatar1.jpg'
  },
  {
    name: 'Michael Chen',
    company: 'StartUp Ventures',
    quote: 'The mobile app they developed for us exceeded all expectations. Their attention to detail and user experience focus was impressive.',
    avatar: '/images/avatar2.jpg'
  },
  {
    name: 'Emily Rodriguez',
    company: 'Creative Agency',
    quote: 'Working with Innovacode on our WordPress site was seamless. They delivered on time and within budget while adding creative touches we hadn\'t considered.',
    avatar: '/images/avatar3.jpg'
  }
]

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.testimonial-card', {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.testimonials-container',
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    })
  }, { scope: container })

  return (
    <section id="testimonials" ref={container} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Do not just take our word for it. Here is what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="testimonials-container grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    layout="fill" 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}