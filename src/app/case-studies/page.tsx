"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const caseStudies = [
  {
    id: "the-times",
    company: "THE TIMES",
    industry: "Media & Publishing",
    bg: "bg-black",
    pattern: "bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900",
    challenge: "Increase digital subscription conversions",
    solution: "Implemented targeted B2B growth strategies for enterprise subscriptions",
    results: {
      metric1: { value: "45%", label: "Increase in B2B subscriptions" },
      metric2: { value: "2.3x", label: "Revenue growth" },
      metric3: { value: "60%", label: "Improved conversion rate" }
    },
    timeline: "6 months",
    description: "Helped The Times optimize their B2B subscription model through strategic growth consulting and conversion rate optimization."
  },
  {
    id: "dollar-shave-club",
    company: "DOLLAR SHAVE CLUB",
    industry: "E-commerce & Consumer Goods",
    bg: "bg-red-500",
    pattern: "bg-gradient-to-br from-red-400 via-red-500 to-red-600",
    challenge: "Scale B2B partnership channels",
    solution: "Developed comprehensive B2B growth marketing and partnership strategies",
    results: {
      metric1: { value: "180%", label: "B2B revenue increase" },
      metric2: { value: "4x", label: "Partnership growth" },
      metric3: { value: "95%", label: "Client retention rate" }
    },
    timeline: "8 months",
    description: "Transformed Dollar Shave Club's B2B operations through strategic growth consulting and automated marketing systems."
  },
  {
    id: "gousto",
    company: "gousto",
    industry: "Food Technology",
    bg: "bg-red-500",
    pattern: "bg-gradient-to-br from-red-400 via-red-500 to-red-600",
    challenge: "Expand enterprise meal solutions",
    solution: "Implemented B2B sales funnel optimization and enterprise growth strategies",
    results: {
      metric1: { value: "220%", label: "Enterprise client growth" },
      metric2: { value: "3.5x", label: "Average deal size" },
      metric3: { value: "150%", label: "Sales efficiency" }
    },
    timeline: "10 months",
    description: "Enabled Gousto's expansion into B2B markets through comprehensive growth consulting and operational optimization."
  },
  {
    id: "whirlpool",
    company: "Whirlpool",
    industry: "Manufacturing & Appliances",
    bg: "bg-blue-900",
    pattern: "bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900",
    challenge: "Optimize B2B distribution channels",
    solution: "Strategic operational excellence and technology integration for B2B sales",
    results: {
      metric1: { value: "85%", label: "Process efficiency gain" },
      metric2: { value: "2.8x", label: "B2B sales velocity" },
      metric3: { value: "40%", label: "Cost reduction" }
    },
    timeline: "12 months",
    description: "Enhanced Whirlpool's B2B operations through process optimization and strategic growth consulting."
  },
  {
    id: "netflix",
    company: "Netflix",
    industry: "Entertainment & Streaming",
    bg: "bg-red-600",
    pattern: "bg-gradient-to-br from-red-500 via-red-600 to-red-700",
    challenge: "Scale enterprise content solutions",
    solution: "B2B growth marketing and enterprise partnership development",
    results: {
      metric1: { value: "300%", label: "Enterprise revenue" },
      metric2: { value: "5x", label: "B2B client acquisition" },
      metric3: { value: "90%", label: "Contract renewal rate" }
    },
    timeline: "9 months",
    description: "Accelerated Netflix's B2B growth through strategic consulting and enterprise marketing optimization."
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-20 h-16 overflow-hidden flex items-center justify-center">
                <Image 
                  src="/images/nsg-logo.png" 
                  alt="NorthScale Group - B2B Growth Agency" 
                  width={80} 
                  height={80}
                  className="object-cover object-center scale-[0.98]"
                />
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/#services" className="text-gray-700 hover:text-gray-900 font-normal transition-colors text-sm">
                Services
              </Link>
              <Link href="/case-studies" className="text-gray-900 font-medium text-sm border-b-2 border-gray-900">
                Case Studies
              </Link>
              <Link href="/#blog" className="text-gray-700 hover:text-gray-900 font-normal transition-colors text-sm">
                Blog
              </Link>
              <Link href="/#resources" className="text-gray-700 hover:text-gray-900 font-normal transition-colors text-sm">
                Resources
              </Link>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 font-normal text-sm transition-all duration-300 rounded">
                Apply today
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              B2B Growth Success Stories & Revenue Optimization Results
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve sustainable growth, optimize revenue streams, and scale their operations through strategic B2B consulting and growth marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link key={study.id} href={`/case-studies/${study.id}`}>
                <div className="group cursor-pointer">
                  <div className={`${study.bg} ${study.pattern} w-full h-80 relative overflow-hidden mb-6 transition-transform duration-300 group-hover:scale-105`}>
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
                    <div className="absolute inset-0 flex flex-col justify-between text-white p-8">
                      <div>
                        <div className="text-2xl font-normal mb-2">
                          {study.company}
                        </div>
                        <div className="text-sm opacity-80">
                          {study.industry}
                        </div>
                      </div>
                      
                      {/* Bottom banner */}
                      <div className="bg-black/80 backdrop-blur-sm -mx-8 px-8 py-4">
                        <div className="text-white/80 font-normal text-sm transition-colors group-hover:text-white">
                          View case study →
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Case study details */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-normal text-gray-900 group-hover:text-gray-700 transition-colors">
                      {study.challenge}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {study.description}
                    </p>
                    <div className="flex space-x-6 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">{study.results.metric1.value}</span>
                        <span className="text-gray-600 ml-1">{study.results.metric1.label}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">{study.results.metric2.value}</span>
                        <span className="text-gray-600 ml-1">{study.results.metric2.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join these industry leaders and discover how our B2B growth strategies can accelerate your business scaling journey.
          </p>
          <Button className="bg-teal-500 hover:bg-teal-600 text-black px-8 py-3 text-base font-medium transition-all duration-300">
            Start Your Growth Journey
          </Button>
        </div>
      </section>
    </div>
  )
}