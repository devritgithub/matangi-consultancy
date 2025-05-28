
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LineChart, PieChart, Repeat, TrendingUp, UserPlus } from "lucide-react";
import dreamLogo from '../assets/dream-capital-2.png';
import finBudget from '../assets/untitled_design.png'

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


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
        <div className="flex items-center w-full">
          <div className="flex-grow border-t border-gray-400"></div>

          <div className="flex space-x-0 px-4">
            <img
              src={dreamLogo}
              alt="Dream Logo"
              className="mx-auto h-26  max-w-[200px]"
            />
            <img
              src={finBudget}
              alt="Fin Budget Logo"
              className="mx-auto h-26  max-w-[200px]"
            />
          </div>

          <div className="flex-grow border-t border-gray-400"></div>
        </div>


        <div className="container mx-auto px-4">

          <div className="max-w-3xl mx-auto text-center">
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


      <section className="pb-10 pt-0">
       
          <div className="mt-8 flex flex-wrap gap-4 justify-center animate-fade-in">
         
            <Link to="/dreamcapital">
              <Button variant="outline" className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-finance-dark transition">
                Contact Us
              </Button>
            </Link>
          </div>
      </section>


      <Footer />
    </>
  );
};

export default FinBudget;
