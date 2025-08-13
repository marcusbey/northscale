"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function WhirlpoolCaseStudy() {
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
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Manufacturing & Appliances</span>
                  <span className="text-gray-500 text-sm">12 months</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
                How Whirlpool Achieved 85% Process Efficiency Gains Through B2B Optimization
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Discover how we transformed Whirlpool's B2B distribution channels through strategic operational excellence and technology integration, creating sustainable process improvements and cost reductions.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-1">85%</div>
                  <div className="text-sm text-gray-600">Process efficiency gain</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-1">2.8x</div>
                  <div className="text-sm text-gray-600">B2B sales velocity</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-1">40%</div>
                  <div className="text-sm text-gray-600">Cost reduction</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 w-full h-96 relative overflow-hidden">
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
                  <div className="text-white text-3xl font-normal text-center">WHIRLPOOL</div>
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
                Whirlpool needed to optimize their B2B distribution channels and improve operational efficiency across their manufacturing and sales processes. Their existing systems were creating bottlenecks and increasing operational costs.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Inefficient B2B distribution channel management
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Slow B2B sales velocity and process bottlenecks
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  High operational costs and resource inefficiencies
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">Our Solution</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We implemented strategic operational excellence and technology integration for B2B sales, including automated distribution systems and process optimization, resulting in significant efficiency gains and cost reductions.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strategic operational excellence and B2B process optimization
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Technology integration and automation systems
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Distribution channel optimization and cost reduction programs
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
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-3">Operational Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of existing B2B distribution processes and identification of efficiency improvement opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-3">Technology Integration</h3>
              <p className="text-gray-600">
                Deployed strategic operational excellence systems, automation technology, and B2B sales optimization tools.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-3">Process Optimization</h3>
              <p className="text-gray-600">
                Continuous monitoring and refinement of distribution channels through data-driven insights and performance metrics.
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
                  <span className="text-gray-600">Process Efficiency Gain</span>
                  <span className="text-2xl font-light text-gray-900">+85%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-600">B2B Sales Velocity</span>
                  <span className="text-2xl font-light text-gray-900">2.8x</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-600">Cost Reduction</span>
                  <span className="text-2xl font-light text-gray-900">40%</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-normal text-gray-900 mb-6">Business Impact</h3>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  The strategic operational excellence transformation positioned Whirlpool as an industry leader in efficient B2B distribution, with sustainable process improvements across all manufacturing channels.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Automated systems now handle distribution optimization and sales velocity management, allowing the team to focus on strategic growth initiatives while maintaining operational excellence.
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
            Ready to Optimize Your B2B Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how our operational excellence strategies can transform your business like we did for Whirlpool.
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