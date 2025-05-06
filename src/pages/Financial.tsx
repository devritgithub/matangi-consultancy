
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChartBar, DollarSign, Receipt, Wallet } from "lucide-react";

const Financial = () => {
  const services = [
    {
      icon: <ChartBar className="h-12 w-12 text-finance" />,
      title: "Stock Market Analysis",
      description: "Expert analysis of market trends and investment opportunities to maximize your returns."
    },
    {
      icon: <DollarSign className="h-12 w-12 text-finance" />,
      title: "Financial Planning",
      description: "Comprehensive financial planning services tailored to your specific goals and needs."
    },
    {
      icon: <Wallet className="h-12 w-12 text-finance" />,
      title: "Budget Management",
      description: "Effective budget management strategies to optimize your financial resources."
    },
    {
      icon: <Receipt className="h-12 w-12 text-finance" />,
      title: "Tax Advisory",
      description: "Professional tax advisory services to minimize your tax liability and ensure compliance."
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-finance mb-6">MATANGI Solutions</h1>
            <p className="text-lg text-gray-700">
              Matangi Consultancy offers expert real estate services in Ahmedabad and across Gujarat. Whether you ' re looking to buy, sell, or rent residential or commercial properties, we provide reliable guidance. We also assist with land investments and other property-related opportunities to help you make smart, profitable decisions
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Financial Solutions</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-finance text-white rounded-full p-2 mr-4 mt-1">
                  <span className="block w-4 h-4 font-bold text-center">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Financial Advisors</h3>
                  <p className="text-gray-600">
                    Our team consists of seasoned financial advisors with years of experience in the market.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-finance text-white rounded-full p-2 mr-4 mt-1">
                  <span className="block w-4 h-4 font-bold text-center">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Strategy</h3>
                  <p className="text-gray-600">
                    We create custom financial strategies based on your unique goals and risk tolerance.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-finance text-white rounded-full p-2 mr-4 mt-1">
                  <span className="block w-4 h-4 font-bold text-center">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transparent Reporting</h3>
                  <p className="text-gray-600">
                    Regular, clear reporting on your financial performance and progress toward goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-finance text-white rounded-full p-2 mr-4 mt-1">
                  <span className="block w-4 h-4 font-bold text-center">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Support</h3>
                  <p className="text-gray-600">
                    Ongoing guidance and support as market conditions change and your needs evolve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-finance text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Financial Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our financial experts today and take the first step toward financial freedom.
          </p>
          <button className="bg-white text-finance font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Financial;
