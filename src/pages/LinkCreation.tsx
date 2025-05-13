
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, Share, Instagram, Facebook, Youtube, Palette } from "lucide-react";

const LinkCreation = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: "Website Development",
      description: "Professional website design and development for businesses of all sizes."
    },
    {
      icon: <Share className="h-12 w-12 text-blue-600" />,
      title: "Social Media Management",
      description: "Comprehensive social media strategy, content creation, and management services."
    },
    {
      icon: <Palette className="h-12 w-12 text-blue-600" />,
      title: "Graphic Design",
      description: "Eye-catching graphic design services for digital and print media."
    },
    {
      icon: <Youtube className="h-12 w-12 text-blue-600" />,
      title: "Video Editing",
      description: "High-quality video production services for marketing and promotional content."
    }
  ];

  const portfolioItems = [
    {
      title: "Brand Identity Redesign",
      client: "Fashion Retailer",
      description: "Complete brand identity redesign including logo, social media assets, and website."
    },
    {
      title: "Social Media Campaign",
      client: "Food Chain",
      description: "Viral social media campaign that increased engagement by 200% and followers by 150%."
    },
    {
      title: "Corporate Website",
      client: "Financial Services",
      description: "Modern, responsive website with integrated customer service features and analytics."
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl  font-bold text-blue-600 mb-6">Link Creation</h1>
            <p className="text-lg text-gray-700">
              Matangi Consultancy supports small businesses with smart digital solutions— social media marketing, web development, online ads, and AI tools—to grow faster, reach more customers, and boost sales.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Digital Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="flex  justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl text-blue-600 font-bold mb-3 ">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Creative Process</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-social -translate-x-1/2"></div>

              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-social">Discovery</h3>
                    <p className="text-gray-600">
                      We begin by understanding your brand, goals, and target audience to create a tailored strategy.
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-social text-white flex items-center justify-center font-bold">1</div>
                  </div>
                  <div className="flex-1 md:pl-8"></div>
                </div>

                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="flex-1 md:text-right md:pr-8 md:hidden"></div>
                  <div className="hidden md:flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-social text-white flex items-center justify-center font-bold">2</div>
                  </div>
                  <div className="flex-1 md:pl-8">
                    <h3 className="text-xl font-bold text-social">Strategy & Planning</h3>
                    <p className="text-gray-600">
                      Creating a comprehensive plan with timelines, content calendars, and key performance indicators.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-social">Creation & Development</h3>
                    <p className="text-gray-600">
                      Our team of designers, developers, and content creators bring your vision to life.
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-social text-white flex items-center justify-center font-bold">3</div>
                  </div>
                  <div className="flex-1 md:pl-8"></div>
                </div>

                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="flex-1 md:text-right md:pr-8 md:hidden"></div>
                  <div className="hidden md:flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-social text-white flex items-center justify-center font-bold">4</div>
                  </div>
                  <div className="flex-1 md:pl-8">
                    <h3 className="text-xl font-bold text-social">Launch & Optimization</h3>
                    <p className="text-gray-600">
                      Launching your digital assets and continuously optimizing for maximum performance and engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Portfolio */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-blue-600 font-medium mb-3">Client: {item.client}</p>
                  <p className="text-gray-600">{item.description}</p>
                  <button className="mt-4 text-blue-600 hover:underline font-medium">View Case Study</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-6 text-lg">
                "MATANGI's Link Creation team transformed our digital presence completely.
                Their expertise in social media management and content creation has helped us
                reach a wider audience and significantly increase customer engagement."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Rajesh Kumar</h4>
                  <p className="text-blue-600">Marketing Director, Sunrise Enterprises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 bg-social text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our digital marketing experts today to discuss how we can help you achieve your online marketing goals.
          </p>
          <button className="bg-white text-social font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Get a Free Consultation
          </button>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default LinkCreation;
