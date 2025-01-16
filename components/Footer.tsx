"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, Youtube, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
  };

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  const navLinks = {
    Play: ['Prime', 'Pixel', 'Studio', 'Union', 'Junior'],
    Participate: ['Up Your Game', 'Events'],
    Host: ['Birthdays at PLaY', 'Corporate events', 'Make an Enquiry'],
    'Food & Beverages': ['Food Court', 'Restaurant'],
    Contact: ['99009 999 22', 'info@playarena.in', 'Get Directions']
  };

  return (
    <footer className="bg-black text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Newsletter Section */}
        <motion.div 
          className="md:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Never miss<br />an update
          </motion.h2>
          <p className="mb-4">Subscribe to our Newsletter</p>
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email ID"
              className="w-full px-4 py-3 rounded-lg bg-white text-black"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </motion.div>

        {/* Address Section */}
        <motion.div 
          className="md:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4">Play Arena Sports & Adventure Pvt. Ltd.</h3>
          <p className="text-gray-400 text-sm">
            Sy#75, Hosa Road, off Sarjapur Road,<br />
            opp Silverwood Regency Apartments,<br />
            Kasavanahalli, Bangalore 560035
          </p>
          <div className="flex gap-4 mt-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-blue-400 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Navigation Links */}
        <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(navLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 3) }}
            >
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <motion.li
                    key={link}
                    whileHover={{ x: 5 }}
                    className="text-sm"
                  >
                    <a 
                      href="#" 
                      className={`${link.includes('@') || link.includes('99') ? 'text-blue-400' : 'text-gray-400'} hover:text-blue-400 transition-colors`}
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Copyright Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 mt-16 pt-6 border-t border-gray-800 text-sm text-gray-400 flex flex-wrap justify-between items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>Copyright © 2025. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-400 transition-colors">Disclaimer</a>
          <span>|</span>
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;