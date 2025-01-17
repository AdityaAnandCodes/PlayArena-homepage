"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const PlayLikeProSection = () => {
  const router = useRouter();
  const handleMember = (() =>{
    router.push('/#hero-section')
  })
  const features = [
    {
      title: "SKIP THE QUEUE",
      description: "No ticketing. Just load your card and go play.",
      image: "https://playarena.in/wp-content/uploads/2024/05/Skip-the-Queue.svg",
      bgColor: "bg-white",
      shadow: "shadow-blue-100"
    },
    {
      title: "TREATS ON US",
      description: "Get exclusive offers across our F&B outlets",
      image: "https://playarena.in/wp-content/uploads/2024/05/Treats-on-us.svg",
      bgColor: "bg-white",
      shadow: "shadow-rose-100"
    },
    {
      title: "BIG DISCOUNTS",
      description: "The more you load the bigger your discounts",
      image: "https://playarena.in/wp-content/uploads/2024/05/Big-Discounts.svg",
      bgColor: "bg-white",
      shadow: "shadow-emerald-100"
    }
  ];

  const titleVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  const abstractShapeVariants = {
    animate: {
      rotate: 360,
      scale: [1, 1.1, 1],
      transition: {
        rotate: {
          duration: 20,
          ease: "linear",
          repeat: Infinity
        },
        scale: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Abstract Pattern Background */}
      <div className="absolute inset-0 bg-slate-200">
        <svg className="absolute w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20h40M20 0v40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300" />
            </pattern>
            <pattern id="circles-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="currentColor" className="text-slate-300" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          <rect width="100%" height="100%" fill="url(#circles-pattern)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="py-12 px-4 md:px-8 relative">
        {/* Abstract Background Shapes */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl"
          variants={abstractShapeVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-emerald-100/30 blur-3xl"
          variants={abstractShapeVariants}
          animate="animate"
        />

        <motion.div 
          className="max-w-5xl mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16"
            whileHover="hover"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 inline-block"
              variants={titleVariants}
            >
              Play like <span className="text-blue-600">a Pro</span>
            </motion.h2>
            <p className="text-lg text-gray-600 mb-6">
              We call this our Royalty Programme
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors" 
              onClick={handleMember}
            >
              Become a member
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className={`${feature.bgColor} rounded-xl p-6 shadow-lg ${feature.shadow} backdrop-blur-sm relative group`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div 
                  className="w-16 h-16 mb-4 relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlayLikeProSection;