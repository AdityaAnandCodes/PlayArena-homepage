"use client"
import { Cake, Briefcase, Heart, ArrowRight, PartyPopper, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface EventCardProps {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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
          src={imageUrl}
          alt={title}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          fill
          priority={false}
          loading="lazy"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIeHx8hHiMnIyAkJCMgJiYvMDYxLzImJig9PUBAQCgoP0o9PT+hoUGhwML/2wBDAREXFyAeIB4oHh4oOCYmOMLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="p-2 sm:p-3 bg-pink-100 rounded-lg">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">{title}</h3>
        </div>

        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{description}</p>

        <button
          className="group flex items-center gap-2 text-teal-600 font-semibold transition-all"
          aria-label={`Find out more about ${title}`}
        >
          <span>Find out more</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
        </button>
      </div>
    </motion.div>
  );
};

const events = [
  {
    title: 'Birthday Bashes',
    icon: Cake,
    description:
      'Thrilling activities, exciting games, and delicious food—our custom packages ensure unforgettable experiences for all ages!',
    imageUrl: '/Images/BirthdayBash.jpg',
  },
  {
    title: 'Corporate Events',
    icon: Briefcase,
    description:
      'Nothing like a game to get the teamwork going. Talk to us to find out more about our corporate packages for offsites, team building activities, leadership meets, outbound learning and more.',
    imageUrl: '/Images/CorporateEvents.jpg',
  },
  {
    title: 'Play Dates',
    icon: Heart,
    description:
      'Experience Play Dates, any day of the week, enjoy this special offer and quality time with your partner. Perfect for fun and connection!',
    imageUrl: '/Images/PlayDate.jpg',
  },
];

const EventsSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#fefae0] to-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-black">
              Play, Your Way
              <span className="inline-block ml-2 sm:ml-3">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              When it comes to get-togethers, the more is always the merrier. You bring the people, we&apos;ll take care of the rest. Call us for customized birthdays, farewells, anniversaries and other events or group packages with entertainment, music and a fantastic range of F&amp;B to choose from.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <EventCard {...event} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center px-4" 
          whileHover={{ scale: 1.02 }}
        >
          <a
            href="#custom"
            className="inline-flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-semibold text-black hover:text-black/90 transition-colors"
          >
            <PartyPopper className="w-10 h-10 sm:w-6 sm:h-6 " />
            <span className="text-center">Have an offbeat idea? Create your own event!</span>
            <ArrowRight className="w-10 h-10 sm:w-6 sm:h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;