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
              <Link href="#services" className="text-gray-700 hover:text-gray-900 font-medium">
                Services
              </Link>
              <Link href="#case-studies" className="text-gray-700 hover:text-gray-900 font-medium">
                Case Studies
              </Link>
              <Link href="#blog" className="text-gray-700 hover:text-gray-900 font-medium">
                Blog
              </Link>
              <Link href="#resources" className="text-gray-700 hover:text-gray-900 font-medium">
                Resources
              </Link>
              <Button className="bg-[#27b7bc] hover:bg-[#219fa4] text-white">
                Contact us
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10 relative">
              <div className="space-y-6">
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  THE WORLD'S LEADING DEDICATED CRO AGENCY
                </p>
                <h1 className="text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Better results with evidence
                </h1>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Conversion, a GAIN specialist, is the world's leading CRO agency. We use a unique blend of A/B testing, UX research, and personalization to improve our clients' websites and businesses.
                  </p>
                  <p>
                    By experimenting on new messaging, design and functionality (and even pricing and products) we've helped our clients generate over $2 billion in additional revenue.
                  </p>
                </div>
              </div>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-base">
                See what we do
              </Button>
            </div>

            {/* Abstract flowing ribbon design - more accurate */}
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Main flowing ribbon shape */}
              <div className="absolute inset-0 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="ribbon1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#27b7bc" />
                      <stop offset="30%" stopColor="#06b6d4" />
                      <stop offset="70%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="ribbon2" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                    <linearGradient id="ribbon3" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>

                  {/* Main ribbon flow */}
                  <path
                    d="M 100 50 Q 200 100 300 80 Q 400 60 500 120 Q 480 200 400 250 Q 300 300 200 280 Q 100 260 80 200 Q 90 120 100 50"
                    fill="url(#ribbon1)"
                    opacity="0.9"
                  />

                  {/* Secondary ribbon */}
                  <path
                    d="M 150 150 Q 250 200 350 180 Q 450 160 520 220 Q 500 300 420 350 Q 320 400 220 380 Q 120 360 100 300 Q 130 220 150 150"
                    fill="url(#ribbon2)"
                    opacity="0.8"
                  />

                  {/* Third ribbon layer */}
                  <path
                    d="M 200 250 Q 300 300 400 280 Q 500 260 550 320 Q 530 400 450 450 Q 350 500 250 480 Q 150 460 130 400 Q 160 320 200 250"
                    fill="url(#ribbon3)"
                    opacity="0.7"
                  />

                  {/* Flowing lines for texture */}
                  <g opacity="0.6">
                    {Array.from({ length: 20 }, (_, i) => (
                      <path
                        key={i}
                        d={`M ${100 + i * 15} ${50 + i * 10} Q ${200 + i * 10} ${100 + i * 15} ${300 + i * 5} ${80 + i * 12} Q ${400 + i * 8} ${60 + i * 18} ${500 + i * 3} ${120 + i * 8}`}
                        stroke="url(#ribbon1)"
                        strokeWidth="2"
                        fill="none"
                        opacity={0.3 - i * 0.01}
                      />
                    ))}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Section - Match exact height and styling */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-white text-sm font-medium opacity-75">Trusted by</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
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
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="text-2xl">{company.logo}</div>
                <span className="text-white text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our data-driven experimentation services
            </h2>
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
                )
              },
              {
                title: "Personalization",
                description: "With personalization, we can go beyond A/B testing to targeting segments and individual users – generating even higher returns.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )
              },
              {
                title: "Product and pricing experimentation",
                description: "We'll use experimentation – rather than focus groups – to help you discover the most effective product and pricing strategies.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Enterprise program consulting",
                description: "We work with you to design and implement a high-impact experimentation function tailored to your organization.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              {
                title: "Data and analytics",
                description: "Our analytics audit enables you to know exactly where your analytics is failing so you can have complete trust in your data.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: "Conversion centered design",
                description: "We work with you to design website experiences that convert from the start.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                )
              },
              {
                title: "User experience research",
                description: "Unearth deep insights about your website visitors to create better website experiences and products.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )
              },
              {
                title: "Liftmap",
                description: "Our proprietary experimentation application provides a centralized repository where you can store, record, report, and share your experiments.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 h-full border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-0 space-y-6">
                  <div className="text-gray-700">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  <div className="pt-2">
                    <Link href="#" className="text-[#27b7bc] text-sm font-medium hover:underline inline-flex items-center">
                      More Details →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with gradient element */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Left gradient element */}
        <div className="absolute left-0 bottom-0 w-64 h-64 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#27b7bc" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <path
              d="M 20 150 Q 50 100 100 120 Q 150 140 180 100 Q 160 160 120 180 Q 80 200 40 180 Q 10 160 20 150"
              fill="url(#aboutGradient)"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Who we are</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 100 CRO specialists across the UK and North America, we're the world's leading dedicated conversion rate optimization agency.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From creating better website experiences to building better products and informing overarching strategy, we use our cutting edge experimentation methodology to help you make better decisions in every area of your business.
              </p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                More details
              </Button>
            </div>
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-[#27b7bc] via-[#8b5cf6] to-[#ec4899] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why our clients choose us</h2>
            </div>
            <div className="space-y-12">
              {[
                {
                  title: "Trusted by start-ups and enterprises",
                  description: "For the last fifteen years, start-ups and enterprises alike have trusted us with their growth – including clients like Dollar Shave Club, Meta and Microsoft. That's why you can be confident that we'll deliver high-impact experimentation programs."
                },
                {
                  title: "Over $2 billion in additional revenue",
                  description: "Your performance is our priority. Our clients have benefited from more than $2 billion in additional revenue. That's why brands like Domino's Pizza, HP and Unity have renewed and scaled their CRO programs with us many times over."
                },
                {
                  title: "Experienced in all sectors",
                  description: "Our clients cover ecommerce, financial services, media, non-profit, SaaS, and more. By tapping into our black box of experiment insights – containing the results of every experiment we've ever run – you'll see results right from the get-go"
                },
                {
                  title: "Automation makes us faster",
                  description: "Our continual investment in R&D – developing frameworks and new technology – means we can serve you better. We've automated a lot of the manual work that other agencies either charge you for or simply don't do. That means our team can focus instead on your experimentation strategy – better for them, and better for you too."
                }
              ].map((item, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find out how we've helped other brands just like yours
            </h2>
            <Link href="#" className="text-[#27b7bc] font-medium hover:underline">
              See more case studies
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "From a one off project to an ongoing, multi-team experimentation program",
                company: "THE TIMES",
                bg: "bg-gradient-to-br from-gray-800 to-gray-900",
                pattern: "bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M0 0l30 30-30 30V0zm30 0l30 30-30 30V0z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
              },
              {
                title: "Groomed for success: Building an experimentation program for a high growth business",
                company: "DOLLAR SHAVE CLUB",
                bg: "bg-gradient-to-br from-red-500 to-red-600",
                pattern: "bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M0 0l30 30-30 30V0zm30 0l30 30-30 30V0z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
              }
            ].map((study, index) => (
              <Card key={index} className={`${study.bg} ${study.pattern} text-white p-8 h-64 relative overflow-hidden border-0`}>
                <CardContent className="p-0 h-full flex flex-col justify-between">
                  <div className="text-xl font-medium text-white/90">{study.company}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                    <Link href="#" className="text-white/80 hover:text-white inline-flex items-center">
                      View the case study →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              We partner with the leading technologies for customer insights
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[
              "Optimizely", "Adobe", "Optimize", "Tealium", "Kameleoon", "Dynamic Yield",
              "Quantum Metric", "Fullstory", "Google Analytics", "Glassbox", "Liftmap", "VWO"
            ].map((partner, index) => (
              <div key={index} className="text-gray-600 font-medium text-sm">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">CRO agency FAQs</h2>
            </div>
            <div>
              <Accordion type="single" collapsible className="space-y-4">
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
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#27b7bc] via-[#8b5cf6] to-[#ec4899] rounded-full opacity-30 transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">Want to work with us?</h2>
            <p className="text-lg text-gray-300 mb-6">
              We work with everyone from small startups to some of the biggest brands in the world.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Get in touch and see how we can help you.
            </p>
            <Button className="bg-[#27b7bc] hover:bg-[#219fa4] text-white px-8 py-3">
              Contact us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and certification */}
            <div className="space-y-4">
              <div className="text-xl font-bold text-white">
                <span>CONVER</span>
                <span className="bg-white text-gray-900 px-1">SION</span>
              </div>
              <div className="text-xs text-gray-400">a GAIN specialist</div>
              <div className="w-16 h-16 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">
                Great Place To Work Certified
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                <li><Link href="#" className="hover:text-white">About</Link></li>
                <li><Link href="#" className="hover:text-white">Services</Link></li>
                <li><Link href="#" className="hover:text-white">Work</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white">All Resources</Link></li>
                <li><Link href="#" className="hover:text-white">Whitepapers & eBooks</Link></li>
                <li><Link href="#" className="hover:text-white">Statistical Calculator</Link></li>
                <li><Link href="#" className="hover:text-white">Podcast & Webinars</Link></li>
                <li><Link href="#" className="hover:text-white">CRO Primer</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Get in touch</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>🇬🇧 +44 020 7803 3400</p>
                <p>🇺🇸 +1(866) 886-6460</p>
                <p>hello@conversion.com</p>
              </div>
              <div className="mt-4">
                <h4 className="text-white font-semibold mb-2">Stay up to date</h4>
                <div className="space-y-1 text-gray-400 text-sm">
                  <p><Link href="#" className="hover:text-white">Newsletter Signup Page</Link></p>
                  <p><Link href="#" className="hover:text-white">Blog</Link></p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>Terms & Conditions | Privacy Policy</p>
            <p className="mt-2">All rights reserved. Copyright 2007-2025. Conversion Factory Ltd. Company number 6176814. Part of GAIN.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
