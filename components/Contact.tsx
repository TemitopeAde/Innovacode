'use client'

import { useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  // Define interfaces for form and error states
  interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  
  interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }
  
  interface ToastState {
    show: boolean;
    message: string;
    type: string;
  }

  const container = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  // Form validation state
  const [errors, setErrors] = useState<FormErrors>({})
  
  // Toast state
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: '',
    type: ''
  })

  useGSAP(() => {
    gsap.from('.contact-form', {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-container',
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    })
    
    gsap.from('.contact-info', {
      x: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-container',
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    })
  }, { scope: container })

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value
    })
    
    if (errors[id as keyof FormErrors]) {
      setErrors({
        ...errors,
        [id as keyof FormErrors]: ''
      })
    }




  }

  // Validate form
  const validateForm = (): boolean => {
    const formErrors: FormErrors = {}
    let isValid = true
    
    // Validate name
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required'
      isValid = false
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required'
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = 'Please enter a valid email'
      isValid = false
    }
    
    // Validate subject
    if (!formData.subject.trim()) {
      formErrors.subject = 'Subject is required'
      isValid = false
    }
    
    // Validate message
    if (!formData.message.trim()) {
      formErrors.message = 'Message is required'
      isValid = false
    } else if (formData.message.trim().length < 10) {
      formErrors.message = 'Message should be at least 10 characters'
      isValid = false
    }
    
    setErrors(formErrors)
    return isValid
  }

  // Show toast message
  const showToast = (message: string, type: string = 'success') => {
    setToast({
      show: true,
      message,
      type
    })
    
    // Hide toast after 5 seconds
    setTimeout(() => {
      setToast({
        show: false,
        message: '',
        type: ''
      })
    }, 5000)
  }

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Here you would normally send the data to your server
      console.log('Form submitted:', formData)
      
      // Show success toast
      showToast('Message sent successfully! We will contact you soon.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } else {
      // Show error toast
      showToast('Please fix the errors in the form.', 'error')
    }
  }

  return (
    <section id="contact" ref={container} className="section-padding bg-gray-50">
      {/* Toast notification */}
      {toast.show && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transition-all transform ${
          toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'
        } text-white`}>
          {toast.message}
          <button 
            className="ml-4 text-white font-bold"
            onClick={() => setToast({ ...toast, show: false })}
          >
            ×
          </button>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto contact-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="contact-form bg-white rounded-xl p-8 shadow-sm">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                    placeholder="Your email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                  placeholder="Subject"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                  placeholder="Your message"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button 
                type="submit"
                className="bg-black cursor-pointer hover:bg-secondary text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="contact-info">
            <div className="bg-white rounded-xl p-8 shadow-sm h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaPhone className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a 
                      href="tel:+2347062817505" 
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      +234 7062817505
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:innovacode75@gmail.com" 
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      innovacode75@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Office</h4>
                    <p className="text-gray-600">
                      HSE 8, DIPO DINA STREET OFF LUBA ROAD, GRA, IJEBU ODE, IJEBU-ODE,<br />
                      OGUN STATE, NIGERIA
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Business Hours</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}