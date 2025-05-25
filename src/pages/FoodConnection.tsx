
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Utensils, Pizza, Wine, Instagram } from "lucide-react";
import foodConnectionLogo from '../assets/Food_connection.png'
import food1 from '../assets/1food.jpg'
import food2 from '../assets/2food.jpg'

const FoodConnection = () => {
  const services = [
    {
      icon: <Utensils className="h-12 w-12 text-orange-700" />,
      title: "Food Vlogging",
      description: "Professional food video content creation to showcase your culinary offerings."
    },
    {
      icon: <Pizza className="h-12 w-12 text-orange-700" />,
      title: "Food Photography",
      description: "High-quality food photography that makes your dishes look irresistible."
    },
    {
      icon: <Wine className="h-12 w-12 text-orange-700" />,
      title: "Restaurant Promotion",
      description: "Comprehensive marketing strategies tailored for restaurants and food businesses."
    },
    {
      icon: <Instagram className="h-12 w-12 text-orange-700" />,
      title: "Social Media Setup",
      description: "Complete setup and optimization of your social media profiles to enhance your online presence."
    }
  ];

  const features = [
    {
      title: "Expert Food Photographers",
      description: "Our team includes professional photographers specializing in food presentation."
    },
    {
      title: "Social Media Strategy",
      description: "Tailored social media strategies to maximize engagement for food-related content."
    },
    {
      title: "Content Calendar",
      description: "Structured content calendar to maintain a consistent online presence."
    },
    {
      title: "Engagement Analytics",
      description: "Detailed analytics to track the performance of your food content."
    },
    {
      title: "Influencer Collaborations",
      description: "Connections with food influencers to expand your reach and credibility."
    },
    {
      title: "Brand Storytelling",
      description: "Creating compelling narratives around your food brand and offerings."
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r text-orange-700 py-16 pt-0">
        <img
          src={foodConnectionLogo}
          alt="Matangi Consultancy Logo"
          className="mx-auto h-26  max-w-[250px]"
        />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* <h1 className="text-4xl font-bold text-orange-700 text-orange-700 mb-6">Food Connection</h1> */}
            <p className="text-lg text-gray-700">
              Matangi Consultancy helps food brands grow through social media marketing, influencer collaborations, and digital strategies—connecting you with the right audience and boosting your business visibility and sales.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Food Marketing Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-orange-700">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button
                  onClick={() => window.open('https://wa.me/916353128977', '_blank')}
                  className="mt-4 px-4 py-2 bg-orange-700 text-white rounded hover:bg-finance-dark transition"
                >
                  Contact Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Food Content</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Featured Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img className="h-65 bg-gray-300" src={food1}></img>
              <a href="https://www.instagram.com/reel/C7B0JPbJ3rC/?igsh=NWU4a3JnOHVpODdq" target="_blank" rel="noopener noreferrer">
                <div className="p-6 hover:bg-gray-50 transition">
                  <span className="bg-food-light text-orange-700 px-3 py-1 rounded-full text-sm font-medium">Video</span>
                  <h3 className="text-xl font-bold mt-3 mb-2">We Have A Quality Influencers</h3>
                  <p className="text-gray-600">Showcasing the vibrant street food culture with authentic stories.</p>
                </div>
              </a>

            </div>

            {/* Featured Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img className="h-65 bg-gray-300" src={food2}></img>
               <a href="https://www.instagram.com/reel/C7g3Vy_smpC/?igsh=MXM3bzNyZmFhZXJ3YQ==" target="_blank" rel="noopener noreferrer">
              <div className="p-6">
                <span className="bg-food-light text-orange-700 px-3 py-1 rounded-full text-sm font-medium">Photography</span>
                <h3 className="text-xl font-bold mt-3 mb-2">Strategic Planning</h3>
                <p className="text-gray-600">Where Brands Partner With Strategic Influencers.</p>
              </div>
            </a>
            </div>

            {/* Featured Item 3 */}
            {/* <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-56 bg-gray-300"></div>
              <div className="p-6">
                <span className="bg-food-light text-orange-700 px-3 py-1 rounded-full text-sm font-medium">Campaign</span>
                <h3 className="text-xl font-bold mt-3 mb-2">Viral Food Challenge</h3>
                <p className="text-gray-600">Social media campaign that generated over 1 million views and interactions.</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-food text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-lg">Food Videos Produced</p>
            </div>

            <div>
              <div className="text-5xl font-bold mb-2">5k+</div>
              <p className="text-lg">Total Video Views</p>
            </div>

            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-lg">Restaurant Partners</p>
            </div>

            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <p className="text-lg">Viral Campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Food Connection Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-food hover:shadow-md transition-all">
                <h3 className="text-lg font-bold mb-2 text-orange-700">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>

              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonial */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-16 w-16 bg-gray-300 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-600 italic mb-6 text-lg">
                "The MATANGI Food Connection team transformed our restaurant's online presence.
                Their food photography and video content has helped us attract new customers
                and keep our social media channels vibrant and engaging."
              </p>
              <div className="font-bold">Priya Sharma</div>
              <p className="text-orange-700">Owner, Spice Garden Restaurant</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-orange-700 mb-6">Ready to Elevate Your Food Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Partner with us to create stunning food content that drives customer engagement and business growth.
          </p>
          <button className="bg-food hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Schedule a Tasting Session
          </button>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default FoodConnection;
