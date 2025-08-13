"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function GoustoCaseStudy() {
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
              <Link href="/case-studies" className="text-gray-700 hover:text-gray-900 font-normal transition-colors text-sm">
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
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <Link href="/case-studies" className="inline-flex items-center text-gray-600 hover:text-gray-900 text-sm mb-4">
                  ← Back to Case Studies
                </Link>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">Food Technology</span>
                  <span className="text-gray-500 text-sm">10 months</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
                How Gousto Scaled Enterprise Client Growth by 220%
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Discover how we transformed Gousto's B2B operations through strategic growth consulting and enterprise meal solutions, creating sustainable client acquisition and revenue growth.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-1">220%</div>
                  <div className="text-sm text-gray-600">Enterprise client growth</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-1">3.5x</div>
                  <div className="text-sm text-gray-600">Average deal size</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-1">150%</div>
                  <div className="text-sm text-gray-600">Sales efficiency</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-400 via-red-500 to-red-600 w-full h-96 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    {Array.from({ length: 15 }, (_, i) => (
                      <path
                        key={i}
                        d={`M0,${50 + i * 15} Q${100 + i * 5},${30 + i * 10} ${200 + i * 3},${50 + i * 15} T400,${50 + i * 15}`}
                        stroke="white"
                        strokeWidth="1"
                        fill="none"
                        opacity="0.8"
                      />
                    ))}
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-3xl font-normal text-center">GOUSTO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">The Challenge</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Gousto needed to expand beyond consumer meal kits and develop robust enterprise meal solutions for corporate clients. Their existing infrastructure wasn't optimized for B2B sales and lacked systematic enterprise client acquisition processes.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Limited B2B sales infrastructure for enterprise clients
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Inefficient corporate client acquisition processes
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Lack of scalable enterprise meal solution strategies
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">Our Solution</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We developed comprehensive B2B sales funnel optimization and enterprise growth strategies, including automated systems for corporate client onboarding and customized meal solutions, resulting in sustainable growth across enterprise channels.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strategic B2B sales funnel optimization and enterprise infrastructure
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Operational optimization and technology integration
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Enterprise growth strategies and client retention programs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 text-center mb-12">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-3">Enterprise Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of existing B2B capabilities and development of scalable enterprise meal solution systems.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-3">System Implementation</h3>
              <p className="text-gray-600">
                Deployed B2B sales funnel optimization, corporate client onboarding systems, and enterprise growth strategies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-3">Growth Scaling</h3>
              <p className="text-gray-600">
                Continuous optimization and expansion of enterprise channels through operational excellence and data-driven insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 text-center mb-12">The Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-normal text-gray-900 mb-6">Key Outcomes</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-600">Enterprise Client Growth</span>
                  <span className="text-2xl font-light text-gray-900">+220%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-600">Average Deal Size</span>
                  <span className="text-2xl font-light text-gray-900">3.5x</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-600">Sales Efficiency</span>
                  <span className="text-2xl font-light text-gray-900">+150%</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-normal text-gray-900 mb-6">Business Impact</h3>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  The strategic enterprise transformation established Gousto as a leader in the corporate meal solutions market, with sustainable client growth across multiple business verticals.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Automated systems now handle enterprise client acquisition and retention, allowing the team to focus on strategic growth initiatives while maintaining high service quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
            Ready to Scale Your Enterprise Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how our enterprise growth strategies can transform your business like we did for Gousto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-teal-500 hover:bg-teal-600 text-black px-8 py-3 text-base font-medium transition-all duration-300">
              Start Your Growth Journey
            </Button>
            <Link href="/case-studies">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-base font-medium transition-all duration-300">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}