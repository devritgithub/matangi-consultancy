
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingCart, TrendingUp, Key, MapPin, Handshake } from "lucide-react";
import matangiLogo from '../assets/matangi_solutions.png'

const MatangiSolution = () => {
  const services = [
    {
      icon: <ShoppingCart className="h-12 w-12 text-finance" />,
      title: "Buy Property",
      description: "Find and purchase the ideal property that suits your lifestyle and budget."
    },
    {
      icon: <Handshake className="h-12 w-12 text-finance" />,
      title: "Sell Property",
      description: "List and sell your property quickly with expert market insights and support."
    },
    {
      icon: <Key className="h-12 w-12 text-finance" />,
      title: "Rent Property",
      description: "Explore rental options that fit your needs, whether short-term or long-term."
    },
    {
      icon: <MapPin className="h-12 w-12 text-finance" />,
      title: "Land Deals",
      description: "Access verified land listings with full ownership transparency and legal checks."
    }

  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <img
          src={matangiLogo}
          alt="Matangi Consultancy Logo"
          className="mx-auto mb-0 h-50 w-auto max-w-[250px]"
        />
        <div className="container mx-auto px-4 pt-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* <h1 className="text-4xl font-bold text-finance mb-6">MATANGI Solutions</h1> */}
            <p className="text-lg text-gray-700">
              Matangi Consultancy offers expert real estate services in Ahmedabad and across Gujarat. Whether you're looking to buy, sell, or rent residential or commercial properties, we provide reliable guidance. We also assist with land investments and other property-related opportunities to help you make smart, profitable decisions.
            </p>
          </div>
        </div>
      </div>


      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Financial Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-finance">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>

                <button
                  onClick={() => window.open('https://wa.me/916353128977', '_blank')}
                  className="mt-4 px-4 py-2 bg-finance text-white rounded hover:bg-finance-dark transition"
                >
                  Contact Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Matagi Property Solutions</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-finance text-white rounded-full p-2 mr-4 mt-1">
                  <span className="block w-4 h-4 font-bold text-center">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
                  <p className="text-gray-600">
                    We provide only thoroughly verified properties, ensuring peace of mind and transparency in every deal.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-finance text-white rounded-full p-2 mr-4 mt-1">
                  <span className="block w-4 h-4 font-bold text-center">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tailored Recommendations</h3>
                  <p className="text-gray-600">
                    Our system matches you with properties that perfectly suit your budget, location, and lifestyle preferences.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-finance text-white rounded-full p-2 mr-4 mt-1">
                  <span className="block w-4 h-4 font-bold text-center">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
                  <p className="text-gray-600">
                    From site visits to legal paperwork, our team supports you throughout your property journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-finance text-white rounded-full p-2 mr-4 mt-1">
                  <span className="block w-4 h-4 font-bold text-center">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Trusted Network</h3>
                  <p className="text-gray-600">
                    Leverage our strong network of builders, agents, and legal advisors to make confident property decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      {/* <section className="py-16 bg-finance text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Financial Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our financial experts today and take the first step toward financial freedom.
          </p>
          <button className="bg-white text-finance font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default MatangiSolution;
