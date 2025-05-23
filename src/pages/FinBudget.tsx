
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LineChart, PieChart, Repeat, TrendingUp, UserPlus } from "lucide-react";
import dreamLogo from '../assets/dream-capital-2.png';

const FinBudget = () => {
  const services = [
    {
      icon: <UserPlus className="h-12 w-12 text-realestate" />,
      title: "Demat Account Opening",
      description: "Easily open a Demat account to start your journey in the stock market with expert support."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-realestate" />,
      title: "Pre-IPO Investment",
      description: "Get early access to high-potential companies before they go public with pre-IPO investment options."
    },
    {
      icon: <PieChart className="h-12 w-12 text-realestate" />,
      title: "Mutual Funds",
      description: "Diversify your portfolio with expertly selected mutual fund schemes tailored to your goals."
    },
    {
      icon: <Repeat className="h-12 w-12 text-realestate" />,
      title: "Systematic Investment Plan (SIP)",
      description: "Build wealth consistently over time with disciplined, hassle-free SIP investments."
    },
    {
      icon: <LineChart className="h-12 w-12 text-realestate" />,
      title: "Stock Advisory",
      description: "Receive reliable stock recommendations and market insights from experienced analysts."
    }

  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 py-16 pt-0">

        {/* Logo */}
        <img
          src={dreamLogo}
          alt="Matangi Consultancy Logo"
          className="mx-auto h-26  max-w-[200px]"
        />

        <div className="container mx-auto px-4">

          <div className="max-w-3xl mx-auto text-center">
            {/* <h1 className="text-4xl font-bold text-realestate mb-6">Fin Budget Analysis</h1> */}
            <p className="text-lg text-gray-700">
              Matangi Consultancy provides personalized financial advisory services, including guidance on stock markets, mutual funds, personal finance, investment planning, and gold trading—helping you build wealth with confidence.

            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Render first 4 services in 2 columns */}
            {services.slice(0, 4).map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-realestate">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button
                  onClick={() => window.open('https://wa.me/916353128977', '_blank')}
                  className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-finance-dark transition"
                >
                  Contact Now
                </button>
              </div>
            ))}

            {/* Render last service, centered in the second column */}
            {services.slice(4, 5).map((service, index) => (
              <div key={index + 4} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow col-span-2  mx-auto">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-realestate">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button
                  onClick={() => window.open('https://wa.me/916353128977', '_blank')}
                  className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-finance-dark transition"
                >
                  Contact Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Featured Properties */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Luxury Villa</h3>
                <p className="text-gray-600 mb-4">Prime location with modern amenities and spacious living.</p>
                <div className="flex justify-between">
                  <span className="text-realestate font-bold">₹2.5 Cr</span>
                  <button className="text-realestate hover:underline">View Details</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Commercial Complex</h3>
                <p className="text-gray-600 mb-4">Strategic location ideal for retail and office spaces.</p>
                <div className="flex justify-between">
                  <span className="text-realestate font-bold">₹5.8 Cr</span>
                  <button className="text-realestate hover:underline">View Details</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Residential Apartment</h3>
                <p className="text-gray-600 mb-4">Modern apartments with premium amenities in city center.</p>
                <div className="flex justify-between">
                  <span className="text-realestate font-bold">₹98 Lakh</span>
                  <button className="text-realestate hover:underline">View Details</button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button className="bg-realestate hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              View All Properties
            </button>
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-realestate text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-lg">Clients Served</p>
            </div>

            <div>
              <div className="text-5xl font-bold mb-2">₹10 Lakh</div>
              <p className="text-lg">Investments Managed</p>
            </div>

            <div>
              <div className="text-5xl font-bold mb-2">5+</div>
              <p className="text-lg">Financial Products</p>
            </div>

            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <p className="text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Financial Budget Analysis Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-realestate">Accurate Financial Planning</h3>
                <p className="text-gray-600">
                  We ensure precise budget analysis by considering all financial factors to help you make informed decisions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-realestate">Cost-Effective Solutions</h3>
                <p className="text-gray-600">
                  Our approach provides cost-effective strategies to optimize your financial resources for maximum impact.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-realestate">Detailed Reporting</h3>
                <p className="text-gray-600">
                  We offer clear, detailed reports to give you a complete overview of your financial budget and projections.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-realestate">Ongoing Support and Guidance</h3>
                <p className="text-gray-600">
                  Our team provides continuous support to help you navigate any budget-related challenges and ensure long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      {/* <section className="py-16 bg-realestate text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Property?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our real estate experts today to discover properties that match your requirements.
          </p>
          <button className="bg-white text-realestate font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Contact Our Experts
          </button>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default FinBudget;
