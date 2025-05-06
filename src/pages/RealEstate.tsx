
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building, House, MapPinHouse, LandPlot } from "lucide-react";

const RealEstate = () => {
  const services = [
    {
      icon: <House className="h-12 w-12 text-realestate" />,
      title: "Residential Properties",
      description: "Find your dream home with our extensive portfolio of residential properties."
    },
    {
      icon: <Building className="h-12 w-12 text-realestate" />,
      title: "Commercial Spaces",
      description: "Premium commercial spaces for businesses of all sizes in prime locations."
    },
    {
      icon: <LandPlot className="h-12 w-12 text-realestate" />,
      title: "Land Development",
      description: "Strategic land acquisition and development services for investment purposes."
    },
    {
      icon: <MapPinHouse className="h-12 w-12 text-realestate" />,
      title: "Property Management",
      description: "Comprehensive property management services to maximize your investment returns."
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-realestate mb-6">MATANGI Fin Budget Analysis</h1>
            <p className="text-lg text-gray-700">
            Matangi Consultancy provides personalized financial advisory services, including guidance on stock markets, mutual funds, personal finance, investment planning, and gold trading—helping you build wealth with confidence.

            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Real Estate Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-realestate">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Property 1 */}
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
            
            {/* Property 2 */}
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
            
            {/* Property 3 */}
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
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Real Estate Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-realestate">Quality Assurance</h3>
                <p className="text-gray-600">
                  All our properties undergo rigorous quality checks to ensure the highest standards.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-realestate">Strategic Locations</h3>
                <p className="text-gray-600">
                  Properties in prime locations with excellent connectivity and amenities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-realestate">Transparent Dealings</h3>
                <p className="text-gray-600">
                  Clear documentation and transparent processes throughout the transaction.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-realestate">After-Sale Support</h3>
                <p className="text-gray-600">
                  Dedicated support team to address any concerns after property acquisition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-realestate text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Property?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our real estate experts today to discover properties that match your requirements.
          </p>
          <button className="bg-white text-realestate font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Contact Our Experts
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default RealEstate;
