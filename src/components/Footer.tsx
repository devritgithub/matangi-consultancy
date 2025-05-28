
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">MATANGI CONSULTANCY</h3>
           
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/share/18jUrdViNR/" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/matangi.consultancy?igsh=MXZmanAwZXMzaDZtaw==" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
           
              <a href="https://www.youtube.com/@MatangiConsultancy" className="text-gray-300 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/financial" className="text-gray-300 hover:text-white" onClick={() => window.scrollTo(0,0)}>
                  Matangi Solutions
                </Link>
              </li>
              <li>
                <Link to="/link-creation" className="text-gray-300 hover:text-white" onClick={() => window.scrollTo(0,0)}>
                  Link Creation
                </Link>
              </li>
              <li>
                <Link to="/real-estate" className="text-gray-300 hover:text-white" onClick={() => window.scrollTo(0,0)}>
                  Fin Budget Analysis
                </Link>
              </li>
              <li>
                <Link to="/food-connection" className="text-gray-300 hover:text-white" onClick={() => window.scrollTo(0,0)}>
                  Food Connection
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Ahmedabad Gujarat
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-gray-300">+91 6353128977</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-gray-300">info.matangiconsultancy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MATANGI CONSULTANCY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
