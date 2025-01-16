"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ArrowRight } from 'lucide-react';

const PlayLikeProSection = () => {
  const features = [
    {
      title: "SKIP THE QUEUE",
      description: "No ticketing. Just load your card and go play.",
      image: "https://playarena.in/wp-content/uploads/2024/05/Skip-the-Queue.svg"
    },
    {
      title: "TREATS ON US",
      description: "Get exclusive offers across our F&B outlets",
      image: "https://playarena.in/wp-content/uploads/2024/05/Treats-on-us.svg"
    },
    {
      title: "BIG DISCOUNTS",
      description: "The more you load the bigger your discounts",
      image: "https://playarena.in/wp-content/uploads/2024/05/Big-Discounts.svg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20 px-4 md:px-8">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Play like a Pro
            </h2>
          </div>
          <p className="text-lg text-gray-600 mt-4">
            We call this our Royalty Programme.
          </p>
          
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 mx-auto font-semibold hover:bg-blue-700 transition-colors"
          >
            Become a member
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="w-16 h-16 mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PlayLikeProSection;