import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { logo } from "@/public/images";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-500 via-green-800 to-green-700 py-12 text-gray-100 mt-40">
      <div className="container mx-auto px-6 max-w-[90%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center sm:items-start">
            <Image src={logo} alt="Footer Logo" width={120} height={40} />
            <p className="mt-4 text-center sm:text-left">
              Committed to fostering a sustainable future through innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/eco-score" className="hover:text-white transition-colors">Eco Score</Link>
              </li>
              <li>
                <Link href="/eco-routes" className="hover:text-white transition-colors">Eco Routes</Link>
              </li>
              <li>
                <Link href="/health-assistant" className="hover:text-white transition-colors">Health Assistant</Link>
              </li>
              <li>
                <Link href="/eco-swap" className="hover:text-white transition-colors">Eco Swap</Link>
              </li>
              <li>
                <Link href="/marketplace" className="hover:text-white transition-colors">Marketplace</Link>
              </li>
              <li>
                <Link href="/recycle-item-finder" className="hover:text-white transition-colors">Recycle Item Finder</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
            <p className="mb-2">123 Sustainability Lane</p>
            <p className="mb-2">Green City, EC 98765</p>
            <p className="mb-2">Email: <a href="mailto:info@example.com" className="hover:text-white transition-colors">info@example.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-white transition-colors">+123 456 7890</a></p>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-bold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-white transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Terra Org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
