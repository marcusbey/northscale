"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMobileMenuOpen && !target.closest('header')) {
        setIsMobileMenuOpen(false)
      }
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])
  
  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }
    
    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [])
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-semibold">
                <span className="text-gray-900">North</span>
                <span className="text-white bg-gray-900 px-1">Scale</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-gray-900 font-normal transition-colors">
                Services
              </Link>
              <Link href="#case-studies" className="text-gray-700 hover:text-gray-900 font-normal transition-colors">
                Case Studies
              </Link>
              <Link href="#blog" className="text-gray-700 hover:text-gray-900 font-normal transition-colors">
                Blog
              </Link>
              <Link href="#resources" className="text-gray-700 hover:text-gray-900 font-normal transition-colors">
                Resources
              </Link>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 font-normal text-sm transition-all duration-300 rounded">
                Apply today
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden bg-white border-b border-border shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-4 space-y-4">
              <Link 
                href="#services" 
                className="block text-muted-foreground hover:text-foreground font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#case-studies" 
                className="block text-muted-foreground hover:text-foreground font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                href="#blog" 
                className="block text-muted-foreground hover:text-foreground font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="#resources" 
                className="block text-muted-foreground hover:text-foreground font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <div className="pt-4 border-t border-border">
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact us
                </Button>
              </div>
            </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl xl:text-7xl font-light text-gray-900 leading-tight tracking-tight">
                  Embrace possibility, redefine your industry.
                </h1>
                <div className="space-y-4 text-xl text-gray-600 leading-relaxed max-w-xl">
                  <p>
                    NorthScale Group is a Canadian-based growth firm deploying strategic operational and marketing expertise to increase revenue growth and multiply enterprise value.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-base font-normal transition-all duration-300 rounded">
                  See what we do
                </Button>
              </div>
            </div>

            {/* Flowing Ribbon Design */}
            <div className="relative h-[600px] lg:h-[700px] -mr-20">
              <div className="absolute -top-10 -right-20 w-[120%] h-[120%] overflow-visible">
                <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="ribbon1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00d4ff" />
                      <stop offset="25%" stopColor="#5b9bd5" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="75%" stopColor="#d946ef" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                    <linearGradient id="ribbon2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="30%" stopColor="#ec4899" />
                      <stop offset="70%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#00d4ff" />
                    </linearGradient>
                  </defs>
                  
                  {/* Main flowing ribbon - extended and curved more dramatically */}
                  <path
                    d="M 150 100 Q 300 50 450 120 Q 600 190 750 150 Q 800 220 720 300 Q 600 380 450 340 Q 300 300 200 240 Q 100 180 150 100"
                    fill="url(#ribbon1)"
                    opacity="0.9"
                  />
                  
                  {/* Secondary ribbon - larger curve */}
                  <path
                    d="M 200 200 Q 350 150 500 220 Q 650 290 780 250 Q 850 350 750 450 Q 650 550 500 500 Q 350 450 250 380 Q 150 310 200 200"
                    fill="url(#ribbon2)"
                    opacity="0.8"
                  />
                  
                  {/* Third ribbon layer - bottom extension */}
                  <path
                    d="M 250 350 Q 400 300 550 370 Q 700 440 820 400 Q 900 500 800 600 Q 700 700 550 650 Q 400 600 300 530 Q 200 460 250 350"
                    fill="url(#ribbon1)"
                    opacity="0.7"
                  />
                  
                  {/* Additional flowing elements for depth */}
                  <g opacity="0.6">
                    {Array.from({ length: 12 }, (_, i) => (
                      <path
                        key={i}
                        d={`M ${200 + i * 30} ${150 + i * 25} Q ${350 + i * 20} ${200 + i * 30} ${500 + i * 15} ${180 + i * 28} Q ${650 + i * 18} ${160 + i * 35} ${800 + i * 10} ${220 + i * 20}`}
                        stroke="url(#ribbon1)"
                        strokeWidth="2"
                        fill="none"
                        opacity={0.5 - i * 0.03}
                      />
                    ))}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-white px-4 py-2 rounded-full text-black text-sm font-medium">
              Trusted by
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-16 items-center justify-items-center">
            {[
              "Microsoft",
              "facebook", 
              "Canon",
              "JUST EAT",
              "Google",
              "TaylorMade",
              "Clarks",
              "SAMSUNG",
              "TOYOTA",
              "trainline",
              "gousto",
              "TUI"
            ].map((company, index) => (
              <div key={index} className="text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer text-center">
                <span className="text-lg lg:text-xl font-bold tracking-wide">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Sticky Title */}
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight pt-0">
                  Our integrated platform
                </h2>
              </div>
            </div>
            
            {/* Services Grid */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
                {[
                  {
                    title: "Advanced conversion rate optimization (CRO)",
                    description: "Our core product – we'll create an effective optimization strategy and roadmap, then design, build and analyze every experiment.",
                    icon: (
                      <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full border border-gray-400"></div>
                        <div className="w-4 h-4 rounded-full border border-gray-400 -ml-2"></div>
                      </div>
                    )
                  },
                  {
                    title: "Personalization",
                    description: "With personalization, we can go beyond A/B testing to targeting segments and individual users – generating even higher returns.",
                    icon: (
                      <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full border border-gray-400"></div>
                      </div>
                    )
                  },
                  {
                    title: "Product and pricing experimentation", 
                    description: "We'll use experimentation – rather than focus groups – to help you discover the most effective product and pricing strategies.",
                    icon: (
                      <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <div className="w-6 h-3 border-t-2 border-l-2 border-r-2 border-gray-400 rounded-t"></div>
                      </div>
                    )
                  },
                  {
                    title: "Enterprise program consulting",
                    description: "We work with you to design and implement a high-impact experimentation function tailored to your organization.", 
                    icon: (
                      <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full border border-gray-400 relative">
                          <div className="absolute inset-1 rounded-full border border-gray-400"></div>
                        </div>
                      </div>
                    )
                  },
                  {
                    title: "User experience research",
                    description: "Unearth deep insights about your website visitors to create better website experiences and products.",
                    icon: (
                      <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full border border-gray-400 relative">
                          <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-gray-400 rotate-45"></div>
                        </div>
                      </div>
                    )
                  },
                  {
                    title: "Data and analytics",
                    description: "Our analytics audit enables you to know exactly where your analytics is failing so you can have complete trust in your data.",
                    icon: (
                      <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <div className="space-y-1">
                          <div className="w-5 h-1 bg-gray-400 rounded"></div>
                          <div className="w-3 h-1 bg-gray-400 rounded"></div>
                          <div className="w-4 h-1 bg-gray-400 rounded"></div>
                        </div>
                      </div>
                    )
                  },
                  {
                    title: "Conversion centered design",
                    description: "We work with you to design website experiences that convert from the start.",
                    icon: (
                      <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <div className="space-y-1">
                          <div className="w-5 h-1 border border-gray-400 rounded-sm"></div>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 border border-gray-400 rounded-sm"></div>
                            <div className="w-2 h-2 border border-gray-400 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                    )
                  },
                  {
                    title: "Landing page optimization",
                    description: "Boost your landing page conversions with our systematic approach to design and optimization.",
                    icon: (
                      <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <div className="w-5 h-5 border border-gray-400 rounded relative">
                          <div className="absolute inset-1 border-t border-l border-gray-400"></div>
                        </div>
                      </div>
                    )
                  }
                ].map((service, index) => (
                  <div key={index} className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {service.icon}
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-normal text-gray-900 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                        <Link href="#" className="text-teal-600 font-normal hover:text-teal-700 inline-flex items-center gap-2 text-sm transition-colors">
                          More Details 
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left side - Image */}
          <div className="relative bg-white overflow-hidden min-h-96 lg:min-h-0">
            <div className="relative h-full flex items-center justify-center py-16 lg:py-20">
              {/* Flowing Ribbon Graphic - Similar to Hero */}
              <div className="absolute inset-0 overflow-hidden">
                <svg
                  className="absolute inset-0 h-full w-full object-cover"
                  viewBox="0 0 400 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <linearGradient id="ribbon-gradient-about" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="25%" stopColor="#ec4899" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="75%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,300 Q100,100 200,300 T400,300 L400,600 Q300,400 200,600 T0,600 Z"
                    fill="url(#ribbon-gradient-about)"
                    opacity="0.8"
                  />
                  <path
                    d="M0,200 Q150,50 300,200 T600,200 L600,500 Q450,350 300,500 T0,500 Z"
                    fill="url(#ribbon-gradient-about)"
                    opacity="0.4"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="flex items-center px-8 lg:px-16 py-16 lg:py-20 bg-white">
            <div className="max-w-xl space-y-8">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                Who we are
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  With over <span className="font-normal text-gray-900">100 CRO specialists</span> across the UK and North America, we're the world's leading dedicated conversion rate optimization agency.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From creating better website experiences to building better products and informing overarching strategy, we use our cutting edge experimentation methodology to help you make better decisions in every area of your business.
                </p>
              </div>
              <div className="pt-4">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-base font-normal transition-all duration-300 rounded">
                  More details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Sticky Title */}
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 pt-0">
                  Why our clients choose us
                </h2>
              </div>
            </div>
            
            {/* Content Grid */}
            <div className="lg:w-2/3">
              <div className="space-y-20">
                {[
                  {
                    title: "Trusted by start-ups and enterprises",
                    description: "For the last fifteen years, start-ups and enterprises alike have trusted us with their growth – including clients like Dollar Shave Club, Meta and Microsoft. That's why you can be confident that we'll deliver high-impact experimentation programs.",
                    icon: (
                      <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <div className="w-5 h-5 border border-gray-400 rounded relative">
                          <div className="absolute inset-1 bg-gray-400 rounded"></div>
                        </div>
                      </div>
                    )
                  },
                  {
                    title: "Over $2 billion in additional revenue",
                    description: "Your performance is our priority. Our clients have benefited from more than $2 billion in additional revenue. That's why brands like Domino's Pizza, HP and Unity have renewed and scaled their CRO programs with us many times over.",
                    icon: (
                      <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <div className="text-lg font-light text-gray-600">$</div>
                      </div>
                    )
                  },
                  {
                    title: "Experienced in all sectors",
                    description: "Our clients cover ecommerce, financial services, media, non-profit, SaaS, and more. By tapping into our black box of experiment insights – containing the results of every experiment we've ever run – you'll see results right from the get-go.",
                    icon: (
                      <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-0.5">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
                        </div>
                      </div>
                    )
                  },
                  {
                    title: "Automation makes us faster",
                    description: "Our continual investment in R&D – developing frameworks and new technology – means we can serve you better. We've automated a lot of the manual work that other agencies either charge you for or simply don't do. That means our team can focus instead on your experimentation strategy – better for them, and better for you too.",
                    icon: (
                      <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <div className="w-5 h-5 border border-gray-400 rounded-full relative">
                          <div className="absolute top-1 left-2 w-1 h-3 bg-gray-400 rounded-full rotate-45"></div>
                        </div>
                      </div>
                    )
                  }
                ].map((item, index) => (
                  <div key={index} className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-normal text-gray-900 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                        <Link href="#" className="text-teal-600 font-normal hover:text-teal-700 inline-flex items-center gap-2 text-sm transition-colors">
                          More Details 
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
              Find out how we've helped other brands just like yours
            </h2>
            <Link href="#" className="text-gray-600 hover:text-gray-900 font-normal text-base transition-colors inline-flex items-center gap-2 underline underline-offset-4">
              See more case studies
            </Link>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-x-auto pb-4" id="carousel-container">
              <div className="flex gap-6 w-max">
                {[
                  {
                    company: "THE TIMES",
                    bg: "bg-black",
                    pattern: "bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900"
                  },
                  {
                    company: "DOLLAR SHAVE CLUB", 
                    bg: "bg-red-500",
                    pattern: "bg-gradient-to-br from-red-400 via-red-500 to-red-600"
                  },
                  {
                    company: "gousto",
                    bg: "bg-red-500",
                    pattern: "bg-gradient-to-br from-red-400 via-red-500 to-red-600"
                  },
                  {
                    company: "Whirlpool",
                    bg: "bg-blue-900",
                    pattern: "bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900"
                  },
                  {
                    company: "Netflix",
                    bg: "bg-red-600",
                    pattern: "bg-gradient-to-br from-red-500 via-red-600 to-red-700"
                  }
                ].map((study, index) => (
                  <div key={index} className="flex-shrink-0 w-80 h-80 relative">
                    <div className={`${study.bg} ${study.pattern} w-full h-full relative overflow-hidden cursor-pointer`}>
                      {/* Flowing lines pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <svg
                          className="absolute inset-0 h-full w-full"
                          viewBox="0 0 320 320"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid slice"
                        >
                          {Array.from({ length: 20 }, (_, i) => (
                            <path
                              key={i}
                              d={`M0,${50 + i * 10} Q${80 + i * 5},${30 + i * 8} ${160 + i * 3},${50 + i * 10} T320,${50 + i * 10}`}
                              stroke="white"
                              strokeWidth="1"
                              fill="none"
                              opacity="0.6"
                            />
                          ))}
                        </svg>
                      </div>
                      
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-between text-white">
                        <div className="p-8">
                          <div className="text-2xl font-normal">
                            {study.company}
                          </div>
                        </div>
                        
                        {/* Dark banner at bottom */}
                        <div className="bg-black/80 backdrop-blur-sm px-8 py-4">
                          <Link href="#" className="text-white/80 hover:text-white font-normal text-sm transition-colors">
                            View the case study →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Navigation */}
            <div className="flex items-center justify-center mt-8 gap-4">
              <div className="text-sm text-gray-500">
                1 / 5
              </div>
              <div className="flex gap-2">
                <button 
                  className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    const container = document.getElementById('carousel-container');
                    if (container) container.scrollBy({ left: -320, behavior: 'smooth' });
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    const container = document.getElementById('carousel-container');
                    if (container) container.scrollBy({ left: 320, behavior: 'smooth' });
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Title */}
            <div className="lg:w-1/3">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight pt-0">
                We partner with the leading technologies for customer insights
              </h2>
            </div>
            
            {/* Partners Grid */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
                {[
                  "Optimizely", "Adobe", "Optimize", "TEALIUM",
                  "Kameleoon", "dynamic yield", "Quantum Metric", "fullstory",
                  "Google Analytics", "GLASSBOX", "Liftmap", "VWO"
                ].map((partner, index) => (
                  <div key={index} className="text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer text-center lg:text-left">
                    <span className="text-lg font-medium">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Title */}
            <div className="lg:w-1/3">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight pt-0">
                CRO agency FAQs
              </h2>
            </div>
            
            {/* FAQ Items */}
            <div className="lg:w-2/3">
              <div className="space-y-8">
                {[
                  {
                    question: "What is a CRO agency?",
                    answer: "A conversion rate optimization agency, otherwise known as a CRO agency, is a marketing agency whose primary purpose is to improve your website's conversion rate.\n\nFor example, maybe you run an ecommerce website and you're looking to increase the number of orders you receive through your website each month. Using a range of techniques – such as UX research and a/b testing – a CRO agency like ours will be able to progressively optimize your website to increase the number of orders you receive month-on-month. (If you'd like to see an example of this kind of CRO, take a look at the work we did with Clarks and Buyagift).\n\nAlternatively, maybe you run a media website and you're looking to increase engagement and retention rates on your platform. Using advanced CRO techniques, an agency like ours will be able to progressively optimise your website to generate consistent uplifts in these metrics. (In fact, this is the exact kind of work we've done with The Times and The Guardian)."
                  },
                  {
                    question: "What does a CRO agency do?",
                    answer: "As discussed in the answer above, CRO agencies are responsible for improving a website's conversion rate, but how they achieve this can vary quite widely from one agency to the next."
                  },
                  {
                    question: "Why should you hire a CRO agency?",
                    answer: "Investment in a good CRO agency will often provide a stronger return on investment than any other kind of marketing or product spend."
                  },
                  {
                    question: "What differentiates Conversion from its competitors?",
                    answer: "While many agencies include CRO as one service among many that they offer, we've made the conscious decision to put all of our efforts exclusively into CRO."
                  },
                  {
                    question: "How quickly can Conversion generate a positive return on your investment?",
                    answer: "Though this can vary a little from one program to the next, we're typically able to achieve a positive ROI for our clients within the first 12 weeks of a program's start date."
                  },
                  {
                    question: "Can Conversion work effectively alongside your internal CRO & product teams?",
                    answer: "Absolutely. We regularly work alongside our clients' internal teams to help maximize the impact of their existing experimentation programs."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-8">
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`item-${index}`} className="border-0">
                        <AccordionTrigger className="text-left font-normal text-lg text-gray-900 hover:text-gray-700 hover:no-underline py-0 flex items-center justify-between group [&>svg]:hidden">
                          <span className="flex-1">{faq.question}</span>
                          <div className="ml-4 flex-shrink-0">
                            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-gray-400 transition-colors">
                              <svg className="w-4 h-4 text-gray-500 group-data-[state=open]:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                              </svg>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pt-4 pb-0 whitespace-pre-line">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Flowing Ribbon Graphics - Similar to Hero */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute top-0 right-0 h-full w-1/2"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMaxYMin slice"
          >
            <defs>
              <linearGradient id="cta-ribbon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="25%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="75%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
            <path
              d="M400,100 Q600,50 800,150 L800,250 Q600,200 400,300 T800,450 L800,600 L400,600 Z"
              fill="url(#cta-ribbon-gradient)"
              opacity="0.8"
            />
            <path
              d="M500,0 Q700,25 900,100 L900,200 Q700,150 500,250 T900,400 L900,500 L500,500 Z"
              fill="url(#cta-ribbon-gradient)"
              opacity="0.4"
            />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
              Want to work with us?
            </h2>
            <div className="space-y-4 text-lg text-white/80 leading-relaxed mb-8">
              <p>
                We work with everyone from small startups to some of the biggest brands in the world.
              </p>
              <p>
                Get in touch and see how we can help you.
              </p>
            </div>
            <Button className="bg-teal-500 hover:bg-teal-600 text-black px-8 py-4 text-base font-medium transition-all duration-300 rounded">
              Contact us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and certification */}
            <div className="space-y-6">
              <div className="text-2xl font-semibold text-white">
                <span>North</span>
                <span className="bg-white text-gray-900 px-1 ml-1">Scale</span>
              </div>
              <p className="text-white/60 text-sm leading-normal">
                Conversion optimization specialists delivering measurable results through data-driven strategies.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-normal mb-6 text-base leading-normal">Company</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm leading-normal">Careers</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm leading-normal">About</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm leading-normal">Services</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm leading-normal">Work</Link></li>
              </ul>
            </div>

            {/* Stay up to date */}
            <div>
              <h3 className="text-white font-normal mb-6 text-base leading-normal">Stay up to date</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm leading-normal">Newsletter Signup Page</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm leading-normal">Blog</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm leading-normal">Whitepapers & eBooks</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm leading-normal">Statistical Calculator</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm leading-normal">Podcast & Webinars</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm leading-normal">CRO Primer</Link></li>
              </ul>
            </div>

            {/* Get in touch */}
            <div>
              <h3 className="text-white font-normal mb-6 text-base leading-normal">Get in touch</h3>
              <div className="space-y-3">
                <p className="text-white/60 text-sm leading-normal">
                  <span className="text-white/80">🇺🇸</span> +44 020 7803 3400
                </p>
                <p className="text-white/60 text-sm leading-normal">
                  +1(604) 800-6450
                </p>
                <p className="text-white/60 text-sm leading-normal">
                  hello@conversion.com
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-black -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
                <div className="text-white/40 text-xs leading-normal max-w-2xl">
                  All rights reserved. Copyright© 2007-2025. Conversion Factory Ltd. Company number 6176814. Part of 
                  <span className="text-white/60 font-medium"> GAIN</span>.
                </div>
                <div className="flex space-x-6 text-white/40 text-xs leading-normal">
                  <Link href="#" className="hover:text-white/60 transition-colors">Terms & Conditions</Link>
                  <Link href="#" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}