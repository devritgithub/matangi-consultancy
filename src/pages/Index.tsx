
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BusinessCard from "@/components/BusinessCard";
import Footer from "@/components/Footer";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const businessServices = [
    {
      title: "Matangi Solutions",
      description: "Matangi Consultancy provides expert real estate services across Ahmedabad and Gujarat, offering trusted guidance for buying, selling, renting, and investing in residential, commercial, and land properties.",
      type: "finance" as const,
      link: "/financial"
    },
    {
      title: "Link Creation",
      description: "Matangi Consultancy supports small businesses with smart digital solutions social media marketing, web development, online ads, and AI tools to grow faster, reach more customers, and boost sales.",
      type: "social" as const,
      link: "/link-creation"
    },
    {
      title: "Fin Budget Analysis",
      description: "Matangi Consultancy provides personalized financial advisory services, including guidance on stock markets, mutual funds, investment planning, and gold trading helping you build wealth with confidence.",
      type: "finbudget" as const,
      link: "/real-estate"
    },
    {
      title: "Foods Connection",
      description: "Matangi Consultancy helps food brands grow through social media marketing, influencer collaborations, and digital strategies connecting you with the right audience and boosting your business visibility and sales.",
      type: "food" as const,
      link: "/food-connection"
    }
  ];

  return (
    <>
      <Navbar />

      <Hero />

      {/* About Section */}
      <section className={`py-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">About <span className="text-matangi-700">MATANGI CONSULTANCY</span></h2>
            <div className="h-1 w-20 bg-matangi-500 mb-6"></div>
            <p className="text-gray-700 max-w-3xl text-center text-lg">
              MATANGI CONSULTANCY is a  multi-industry
              platform offering expert services in real
              estate, digital marketing, IT solutions,
              finance advisory, and food brand
              promotion. We empower businesses
              and influencers through strategic social
              media services and impactful marketing
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 ">
            {businessServices.map((service, index) => (
              <BusinessCard
                key={index}
                title={service.title}
                description={service.description}
                type={service.type}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-matangi-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to grow your business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Partner with MATANGI CONSULTANCY and take your business to new heights with our comprehensive solutions.
          </p>
          <Button className="bg-white text-matangi-900 hover:bg-gray-100 px-8 py-6 text-lg">
            Contact Us Today
          </Button>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default Index;
