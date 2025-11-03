import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim()) {
      toast.success('Thank you for subscribing!');
      setEmail('');
    } else {
      toast.error('Please enter a valid email');
    }
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-linear-to-r from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="w-11/12 mx-auto py-12">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img className="w-10" src="/logo.png" alt="Logo" />
              <h3 className="text-2xl font-bold">Hero IO</h3>
            </div>
            <p className="text-purple-200 text-sm">
              Building innovative apps that transform everyday experiences into extraordinary moments.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://github.com/rafsan1p" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/rafsan1p" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/rubayet-rafsan28/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-purple-200">
              <li>
                <Link to="/" onClick={handleLinkClick} className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/apps" onClick={handleLinkClick} className="hover:text-white transition">
                  All Apps
                </Link>
              </li>
              <li>
                <Link to="/installed" onClick={handleLinkClick} className="hover:text-white transition">
                  My Installations
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">About Us</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-purple-200">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition">Support</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-purple-200">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">rubayetrafsan605@gmail.com</span>
              </li>
              <li className="text-sm">Khulna, Bangladesh</li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-purple-200 mb-2">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email" 
                  className="input input-sm flex-1 text-gray-800"
                />
                <button 
                  onClick={handleSubscribe}
                  className="btn btn-sm bg-purple-600 hover:bg-purple-700 border-none text-white"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-700 mt-16 pt-12">
          <div className="text-center text-sm text-purple-200">
            <p>
              © {currentYear} Hero IO. All rights reserved. Empowering innovation through technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;