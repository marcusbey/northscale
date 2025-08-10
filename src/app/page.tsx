import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-gray-900">CONVER</span>
                <span className="text-white bg-gray-900 px-1">SION</span>
              </div>
              <span className="text-xs text-gray-600 ml-2 font-medium">
                a GAIN specialist
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Services
              </Link>
              <Link href="#case-studies" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Case Studies
              </Link>
              <Link href="#blog" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Blog
              </Link>
              <Link href="#resources" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Resources
              </Link>
              <Button className="bg-[#27b7bc] hover:bg-[#219fa4] text-white transition-all duration-300 hover:shadow-lg">
                Contact us
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden min-h-[700px] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 z-10 relative">
              <div className="space-y-6">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  THE WORLD'S LEADING DEDICATED CRO AGENCY
                </p>
                <h1 className="text-5xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  Better results with evidence
                </h1>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                  <p>
                    Conversion, a GAIN specialist, is the world's leading CRO agency. We use a unique blend of A/B testing, UX research, and personalization to improve our clients' websites and businesses.
                  </p>
                  <p>
                    By experimenting on new messaging, design and functionality (and even pricing and products) we've helped our clients generate over <span className="font-semibold text-gray-900">$2 billion in additional revenue</span>.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  See what we do
                </Button>
              </div>
            </div>

            {/* Enhanced Abstract flowing ribbon design */}
            <div className="relative h-[600px] lg:h-[700px]">
              <div className="absolute inset-0 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="ribbon1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#27b7bc" />
                      <stop offset="25%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="75%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                    <linearGradient id="ribbon2" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="30%" stopColor="#ec4899" />
                      <stop offset="70%" stopColor="#d946ef" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient id="ribbon3" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="40%" stopColor="#6366f1" />
                      <stop offset="80%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#27b7bc" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Main ribbon flow with enhanced curves */}
                  <path
                    d="M 80 100 Q 180 50 280 120 Q 380 190 480 140 Q 520 200 460 280 Q 380 360 280 320 Q 180 280 120 220 Q 60 160 80 100"
                    fill="url(#ribbon1)"
                    opacity="0.9"
                    filter="url(#glow)"
                  />

                  {/* Secondary ribbon with more complex curves */}
                  <path
                    d="M 120 200 Q 220 150 320 220 Q 420 290 520 240 Q 560 320 500 400 Q 420 480 320 440 Q 220 400 160 340 Q 100 280 120 200"
                    fill="url(#ribbon2)"
                    opacity="0.8"
                    filter="url(#glow)"
                  />

                  {/* Third ribbon layer with dynamic flow */}
                  <path
                    d="M 160 320 Q 260 270 360 340 Q 460 410 540 360 Q 580 440 520 520 Q 440 600 340 560 Q 240 520 180 460 Q 120 400 160 320"
                    fill="url(#ribbon3)"
                    opacity="0.7"
                    filter="url(#glow)"
                  />

                  {/* Additional flowing elements for depth */}
                  <g opacity="0.4">
                    {Array.from({ length: 15 }, (_, i) => (
                      <path
                        key={i}
                        d={`M ${100 + i * 20} ${80 + i * 15} Q ${200 + i * 15} ${120 + i * 20} ${300 + i * 10} ${100 + i * 18} Q ${400 + i * 12} ${80 + i * 25} ${500 + i * 8} ${140 + i * 12}`}
                        stroke="url(#ribbon1)"
                        strokeWidth="3"
                        fill="none"
                        opacity={0.4 - i * 0.02}
                      />
                    ))}
                  </g>

                  {/* Floating particles for extra visual interest */}
                  <g opacity="0.6">
                    {Array.from({ length: 20 }, (_, i) => (
                      <circle
                        key={i}
                        cx={100 + (i * 47) % 400}
                        cy={100 + (i * 73) % 500}
                        r={2 + (i % 4)}
                        fill="url(#ribbon1)"
                        opacity={0.3 + (i % 3) * 0.2}
                      />
                    ))}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Section - Enhanced with better spacing and typography */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-white text-lg font-medium opacity-80">Trusted by industry leaders</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center justify-items-center">
            {[
              { name: "Microsoft", logo: "🏢" },
              { name: "Facebook", logo: "📘" },
              { name: "Canon", logo: "📷" },
              { name: "Just Eat", logo: "🍔" },
              { name: "Google", logo: "🔍" },
              { name: "TaylorMade", logo: "⛳" },
              { name: "Clarks", logo: "👞" },
              { name: "Samsung", logo: "📱" },
              { name: "Toyota", logo: "🚗" },
              { name: "Trainline", logo: "🚆" },
              { name: "Gousto", logo: "🍳" },
              { name: "TUI", logo: "✈️" }
            ].map((company, index) => (
              <div key={index} className="flex flex-col items-center space-y-3 group cursor-pointer">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{company.logo}</div>
                <span className="text-white text-sm font-semibold opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced with better visual hierarchy */}
      <section id="services" className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our data-driven experimentation services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge technology with proven methodologies to deliver measurable results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Advanced conversion rate optimization (CRO)",
                description: "Our core product – we'll create an effective optimization strategy and roadmap, then design, build and analyze every experiment.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                color: "text-blue-600"
              },
              {
                title: "Personalization",
                description: "With personalization, we can go beyond A/B testing to targeting segments and individual users – generating even higher returns.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                color: "text-purple-600"
              },
              {
                title: "Product and pricing experimentation",
                description: "We'll use experimentation – rather than focus groups – to help you discover the most effective product and pricing strategies.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "text-green-600"
              },
              {
                title: "Enterprise program consulting",
                description: "We work with you to design and implement a high-impact experimentation function tailored to your organization.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                color: "text-indigo-600"
              },
              {
                title: "Data and analytics",
                description: "Our analytics audit enables you to know exactly where your analytics is failing so you can have complete trust in your data.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                color: "text-cyan-600"
              },
              {
                title: "Conversion centered design",
                description: "We work with you to design website experiences that convert from the start.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
                color: "text-pink-600"
              },
              {
                title: "User experience research",
                description: "Unearth deep insights about your website visitors to create better website experiences and products.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                color: "text-orange-600"
              },
              {
                title: "Liftmap",
                description: "Our proprietary experimentation application provides a centralized repository where you can store, record, report, and share your experiments.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                color: "text-teal-600"
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
                <CardContent className="p-0 space-y-6">
                  <div className={`${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                  <div className="pt-4">
                    <Link href="#" className="text-[#27b7bc] text-base font-semibold hover:text-[#219fa4] inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      Learn More →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with enhanced gradient element */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Enhanced left gradient element */}
        <div className="absolute left-0 bottom-0 w-96 h-96 opacity-20">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <defs>
              <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#27b7bc" />
                <stop offset="33%" stopColor="#8b5cf6" />
                <stop offset="66%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
            <path
              d="M 40 200 Q 80 120 140 160 Q 200 200 240 140 Q 220 220 160 260 Q 100 300 60 240 Q 20 200 40 200"
              fill="url(#aboutGradient)"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">Who we are</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  With over <span className="font-semibold text-gray-900">100 CRO specialists</span> across the UK and North America, we're the world's leading dedicated conversion rate optimization agency.
                </p>
                <p>
                  From creating better website experiences to building better products and informing overarching strategy, we use our cutting edge experimentation methodology to help you make better decisions in every area of your business.
                </p>
              </div>
              <div className="pt-4">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  More details
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-[#27b7bc] via-[#8b5cf6] to-[#ec4899] rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced typography and spacing */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">Why our clients choose us</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We deliver proven results through data-driven experimentation and industry-leading expertise.
              </p>
            </div>
            <div className="space-y-16">
              {[
                {
                  title: "Trusted by start-ups and enterprises",
                  description: "For the last fifteen years, start-ups and enterprises alike have trusted us with their growth – including clients like Dollar Shave Club, Meta and Microsoft. That's why you can be confident that we'll deliver high-impact experimentation programs.",
                  stat: "15+ years"
                },
                {
                  title: "Over $2 billion in additional revenue",
                  description: "Your performance is our priority. Our clients have benefited from more than $2 billion in additional revenue. That's why brands like Domino's Pizza, HP and Unity have renewed and scaled their CRO programs with us many times over.",
                  stat: "$2B+"
                },
                {
                  title: "Experienced in all sectors",
                  description: "Our clients cover ecommerce, financial services, media, non-profit, SaaS, and more. By tapping into our black box of experiment insights – containing the results of every experiment we've ever run – you'll see results right from the get-go.",
                  stat: "All sectors"
                },
                {
                  title: "Automation makes us faster",
                  description: "Our continual investment in R&D – developing frameworks and new technology – means we can serve you better. We've automated a lot of the manual work that other agencies either charge you for or simply don't do. That means our team can focus instead on your experimentation strategy – better for them, and better for you too.",
                  stat: "Automated"
                }
              ].map((item, index) => (
                <div key={index} className="space-y-4 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#27b7bc] rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                      {item.stat}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#27b7bc] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Enhanced visual design */}
      <section id="case-studies" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Find out how we've helped other brands just like yours
            </h2>
            <Link href="#" className="text-[#27b7bc] font-semibold hover:text-[#219fa4] text-lg transition-colors">
              See more case studies →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "From a one off project to an ongoing, multi-team experimentation program",
                company: "THE TIMES",
                bg: "bg-gradient-to-br from-gray-800 to-gray-900",
                pattern: "bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M0 0l30 30-30 30V0zm30 0l30 30-30 30V0z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]",
                result: "45% increase in conversions"
              },
              {
                title: "Groomed for success: Building an experimentation program for a high growth business",
                company: "DOLLAR SHAVE CLUB",
                bg: "bg-gradient-to-br from-red-500 to-red-600",
                pattern: "bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M0 0l30 30-30 30V0zm30 0l30 30-30 30V0z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]",
                result: "32% revenue growth"
              }
            ].map((study, index) => (
              <Card key={index} className={`${study.bg} ${study.pattern} text-white p-10 h-80 relative overflow-hidden border-0 group hover:scale-105 transition-all duration-300 cursor-pointer`}>
                <CardContent className="p-0 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-xl font-bold text-white/90 mb-2">{study.company}</div>
                    <div className="text-sm font-medium text-white/70 mb-4">{study.result}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 leading-tight">{study.title}</h3>
                    <Link href="#" className="text-white/80 hover:text-white inline-flex items-center font-medium group-hover:translate-x-2 transition-transform duration-300">
                      View the case study →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section - Enhanced layout */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              We partner with the leading technologies for customer insights
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center">
            {[
              "Optimizely", "Adobe", "Optimize", "Tealium", "Kameleoon", "Dynamic Yield",
              "Quantum Metric", "Fullstory", "Google Analytics", "Glassbox", "Liftmap", "VWO"
            ].map((partner, index) => (
              <div key={index} className="text-gray-600 font-semibold text-base hover:text-gray-900 transition-colors cursor-pointer">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced with better visual hierarchy */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">CRO agency FAQs</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get answers to the most common questions about conversion rate optimization and our services.
              </p>
            </div>
            <div>
              <Accordion type="single" collapsible className="space-y-6">
                {[
                  {
                    question: "What is a CRO agency?",
                    answer: "A conversion rate optimization agency, otherwise known as a CRO agency, is a marketing agency whose primary purpose is to improve your website's conversion rate. For example, maybe you run an ecommerce website and you're looking to increase the number of orders you receive through your website each month."
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
                  },
                  {
                    question: "Should you hire an agency or build out your own in-house team?",
                    answer: "Deciding whether to hire a CRO agency or to build out an in-house team is a complex and nuanced problem."
                  },
                  {
                    question: "How can you get in touch?",
                    answer: "If you're interested in our services and would like to see if we're a good fit for your business, you can get in touch by visiting our contact us page and submitting a form."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-xl px-8 hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6 text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced with better visual impact */}
      <section className="py-28 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#27b7bc] via-[#8b5cf6] to-[#ec4899] rounded-full opacity-20 transform translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#f97316] via-[#ec4899] to-[#a855f7] rounded-full opacity-15 transform -translate-x-1/3 -translate-y-1/3"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold text-white mb-8 leading-tight">Want to work with us?</h2>
            <div className="space-y-6 text-xl text-gray-300 leading-relaxed mb-12">
              <p>
                We work with everyone from small startups to some of the biggest brands in the world.
              </p>
              <p>
                Get in touch and see how we can help you achieve better results with evidence-based optimization.
              </p>
            </div>
            <Button className="bg-[#27b7bc] hover:bg-[#219fa4] text-white px-10 py-4 text-lg font-medium transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
              Contact us today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced with better organization */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and certification */}
            <div className="space-y-6">
              <div className="text-2xl font-bold text-white">
                <span>CONVER</span>
                <span className="bg-white text-gray-900 px-1">SION</span>
              </div>
              <div className="text-sm text-gray-400">a GAIN specialist</div>
              <div className="w-20 h-20 bg-red-500 rounded-lg flex items-center justify-center text-white text-xs font-bold text-center leading-tight">
                Great Place To Work Certified
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
              <ul className="space-y-4 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Work</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Resources</h3>
              <ul className="space-y-4 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">All Resources</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Whitepapers & eBooks</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Statistical Calculator</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Podcast & Webinars</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">CRO Primer</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Get in touch</h3>
              <div className="space-y-4 text-gray-400">
                <p className="flex items-center space-x-2">
                  <span>🇬🇧</span>
                  <span>+44 020 7803 3400</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span>🇺🇸</span>
                  <span>+1(866) 886-6460</span>
                </p>
                <p>hello@conversion.com</p>
              </div>
              <div className="mt-8">
                <h4 className="text-white font-bold mb-4">Stay up to date</h4>
                <div className="space-y-3 text-gray-400">
                  <p><Link href="#" className="hover:text-white transition-colors">Newsletter Signup</Link></p>
                  <p><Link href="#" className="hover:text-white transition-colors">Blog</Link></p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p>Terms & Conditions | Privacy Policy</p>
              <p>All rights reserved. Copyright 2007-2025. Conversion Factory Ltd. Company number 6176814. Part of GAIN.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}