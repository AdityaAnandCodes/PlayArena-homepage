
import BookingSection from "@/components/BookingSection";
import EventsSection from "@/components/Events"
import HeroSection from "@/components/Hero"
import Navbar from "@/components/Navbar"
import SpecialsSlider from '@/components/SpecialsSlider';

const demoEvents = [
  {
    id: 1,
    title: 'Magic of Christmas With Jayant',
    date: '21st December',
    time: '7:30 PM Onwards',
    imageUrl: '/api/placeholder/800/600',
    buttonText: 'BOOK NOW!'
  },
  {
    id: 2,
    title: 'Christmas Cake Mixing Ceremony',
    date: '8th December',
    time: '5 PM to 6 PM',
    description: 'Blend fruits, nuts, and spices in the spirit of joy and cheer! Join us to kick off the holiday season with this festive tradition.',
    imageUrl: '/api/placeholder/800/600',
    buttonText: 'JOIN NOW!'
  },
  {
    id: 3,
    title: 'Santa’s Workshop for Kids',
    date: '15th December',
    time: '10 AM to 1 PM',
    description: 'A fun-filled day of crafts, games, and surprises! Perfect for kids to unleash their creativity and meet Santa.',
    imageUrl: '/api/placeholder/800/600',
    buttonText: 'REGISTER NOW!'
  },
  {
    id: 4,
    title: 'Christmas Eve Caroling Night',
    date: '24th December',
    time: '6 PM to 9 PM',
    description: 'Join us for an evening of heartwarming carols and festive music under the stars.',
    imageUrl: '/api/placeholder/800/600',
    buttonText: 'JOIN US!'
  },
  {
    id: 5,
    title: 'New Year Countdown Gala',
    date: '31st December',
    time: '8 PM Onwards',
    description: 'Ring in the New Year with style! Live music, gourmet dining, and a countdown to remember.',
    imageUrl: '/api/placeholder/800/600',
    buttonText: 'RESERVE YOUR SPOT!'
  }
];

const page = () => {
  return (
    <main className="relative">
    <Navbar />
    <HeroSection />
    <EventsSection />
    <SpecialsSlider events={demoEvents} />
    <BookingSection/>
    

    </main>
  )
}

export default page