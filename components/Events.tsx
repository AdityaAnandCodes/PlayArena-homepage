"use client"
import { Cake, Briefcase, Heart, ArrowRight, PartyPopper, Sparkles, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface EventCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  imageUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, icon: Icon, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={imageUrl} // Fallback for missing image
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-pink-100 rounded-lg">
            <Icon className="w-6 h-6 text-pink-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        <button
          className="flex items-center gap-2 text-teal-600 font-semibold hover:gap-4 transition-all"
          aria-label={`Find out more about ${title}`}
        >
          Find out more
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

const EventsSection = () => {
  const events = [
    {
      title: 'Birthday Bashes',
      icon: Cake,
      description:
        'Thrilling activities, exciting games, and delicious food—our custom packages ensure unforgettable experiences for all ages!',
      imageUrl: '/Images/M-Arcade.png',
    },
    {
      title: 'Corporate Events',
      icon: Briefcase,
      description:
        'Nothing like a game to get the teamwork going. Talk to us to find out more about our corporate packages for offsites, team building activities, leadership meets, outbound learning and more.',
      imageUrl: '/Images/M-Arcade.png',
    },
    {
      title: 'Play Dates',
      icon: Heart,
      description:
        'Experience Play Dates, any day of the week, enjoy this special offer and quality time with your partner. Perfect for fun and connection!',
      imageUrl: '/Images/M-Arcade.png',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fefae0] to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-7xl font-bold mb-6 text-black">
              Play, Your Way
              <span className="inline-block ml-3">
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </span>
            </h1>
            <p className="text-gray-600 text-lg">
              When it comes to get-togethers, the more is always the merrier. You bring the people, we&apos;ll take care of the rest. Call us for customized birthdays, farewells, anniversaries and other events or group packages with entertainment, music and a fantastic range of F&amp;B to choose from.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <EventCard {...event} />
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center" whileHover={{ scale: 1.02 }}>
          <a
            href="#custom"
            className="inline-flex items-center gap-3 text-xl font-semibold text-black hover:text-black/90 transition-colors"
          >
            <PartyPopper className="w-6 h-6" />
            Have an offbeat idea? Create your own event, fully customised!
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default EventsSection;
