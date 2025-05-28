
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, Share, Youtube, Palette } from "lucide-react";
import linkLogo from '../assets/link-creation.png'
import parkParadaise from '../assets/park-paradise.png'
import link2 from '../assets/link2.jpg'

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
      title: "Dental Clinic Social Media Branding",
      client: "Smit Dental",
      description: "Developed a cohesive social media presence with custom graphics, brand-aligned posts, and engagement strategies tailored for dental care awareness.",
      image: `${link2}`,
      link: "https://www.instagram.com/linkcreation?utm_source=qr&igsh=MThtbnBrcW1zbzFsbg=="
    },
    {
      title: "Website Development",
      client: "Park Paradise",
      description: "Designed and developed a responsive 360° property showcase website to enhance user experience and drive visitor engagement.",
      image: `${parkParadaise}`,
      link: "https://www.instagram.com/linkcreation?utm_source=qr&igsh=MThtbnBrcW1zbzFsbg=="
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 py-16 pt-15">
        <img
          src={linkLogo}
          alt="Matangi Consultancy Logo"
          className="mx-auto h-26  max-w-[150px] mb-10"
        />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
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
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl text-blue-600 font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>
                <button
                  onClick={() => window.open('https://wa.me/916353128977', '_blank')}
                  className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-finance-dark transition"
                >
                  Contact Now
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 hover:bg-gray-50 transition rounded-lg"
                  >
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-blue-600 font-medium mb-3">Client: {item.client}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LinkCreation;
