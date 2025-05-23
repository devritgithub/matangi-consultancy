
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Hero = () => {
  const plugin: any = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="relative bg-gradient-to-br from-matangi-900/90 via-matangi-800/80 to-matangi-700/90">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Video Carousel with 3D effect */}
        <div className="mb-12 w-full max-w-4xl mx-auto perspective-1000">
          <Carousel
            className="w-full transform-gpu"
            plugins={[plugin.current]}
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="relative aspect-video w-[90%] mx-auto rounded-xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.02] hover:rotate-y-12 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-matangi-500/20 to-matangi-700/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover shadow-[0_20px_50px_rgba(126,34,206,0.3)] group-hover:shadow-[0_30px_60px_rgba(147,51,234,0.4)]"
                  >
                    <source src="/videos/financial.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center transform-gpu transition-transform duration-500 group-hover:translate-z-12">
                    <h3 className="text-white text-3xl font-bold [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)] transform-gpu transition-all duration-500 group-hover:scale-110">Financial Solutions</h3>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative aspect-video w-[90%] mx-auto rounded-xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.02] hover:rotate-y-12 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover shadow-[0_20px_50px_rgba(34,_197,_94,_0.7)] group-hover:shadow-[0_30px_60px_rgba(16,_185,_129,_0.8)]"
                  >
                    <source src="/videos/realestate.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center transform-gpu transition-transform duration-500 group-hover:translate-z-12">
                    <h3 className="text-white text-3xl font-bold [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)] transform-gpu transition-all duration-500 group-hover:scale-110">Real Estate</h3>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative aspect-video w-[90%] mx-auto rounded-xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.02] hover:rotate-y-12 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover shadow-[0_20px_50px_rgba(249,_115,_22,_0.7)] group-hover:shadow-[0_30px_60px_rgba(245,_158,_11,_0.8)]"
                  >
                    <source src="/videos/food.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center transform-gpu transition-transform duration-500 group-hover:translate-z-12">
                    <h3 className="text-white text-3xl font-bold [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)] transform-gpu transition-all duration-500 group-hover:scale-110">Food Connection</h3>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-white/10 hover:bg-white/20 border-0 backdrop-blur-sm transform-gpu transition-all duration-300 hover:scale-110" />
            <CarouselNext className="hidden md:flex -right-4 bg-white/10 hover:bg-white/20 border-0 backdrop-blur-sm transform-gpu transition-all duration-300 hover:scale-110" />
          </Carousel>
        </div>

        {/* Hero Content with 3D effects */}
        <div className="relative z-10 flex flex-col items-center backdrop-blur-md bg-white/100   p-8  border border-white/20">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-blue-600 animate-fade-in [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)] transform-gpu transition-all duration-500 hover:scale-105">
            Welcome to <span className="bg-gradient-to-r from-matangi-300 to-matangi-100 text-blue-600 bg-clip-text">MATANGI CONSULTANCY</span>
          </h1>

          <p className="text-lg md:text-xl text-white mt-6 max-w-2xl text-center animate-fade-in backdrop-blur-sm p-4 rounded-lg bg-blue-600">
            At Matangi Consultancy, we believe in honesty, innovation, and
            results. Our mission is to empower clients with smart, practical
            solutions across real estate, digital marketing, finance, and food
            business.
          </p>


          <div className="mt-8 flex flex-wrap gap-4 justify-center animate-fade-in">
            {/* <Link to="/financial">
              <Button className="bg-violet-600/80 hover:bg-violet-50 hover:text-black transform-gpu transition-all duration-300 hover:scale-110 hover:rotate-y-12 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20">
                Explore Our Solutions
              </Button>
            </Link> */}
            <Link to="/contact">
              <Button variant="outline" className="border-violet-400/50 text-blue-600 hover:bg-violet-800/50 transform-gpu transition-all duration-300 hover:scale-110 hover:rotate-y-12 shadow-lg hover:shadow-xl backdrop-blur-sm">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
