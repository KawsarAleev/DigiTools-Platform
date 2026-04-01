import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">DigiTools</h2>
          <p className="text-gray-400 leading-relaxed max-w-xs">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-6">Product</h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-6">Company</h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-6">Resources</h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-6">Social Links</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
              <Facebook size={20} fill="currentColor" />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
              <Twitter size={20} fill="currentColor" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}