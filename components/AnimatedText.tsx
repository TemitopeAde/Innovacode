'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export default function AnimatedText({ text }: { text: string }) {
  const container = useRef<HTMLDivElement>(null)
  const words = text.split(' ')

  useGSAP(() => {
    gsap.from('.word', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out'
    })
  }, { scope: container })

  return (
    <div ref={container} className="overflow-hidden inline-flex flex-wrap justify-center">
      {words.map((word, i) => (
        <div key={i} className="word overflow-hidden mr-2">
          <span className="inline-block">{word}</span>
        </div>
      ))}
    </div>
  )
}