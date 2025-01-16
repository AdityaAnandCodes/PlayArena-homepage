
import { 
  Calendar, 
  Clock, 
  Utensils, 
  Car, 
  Train,  
} from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollingBanner from './ScrollerBanner';

// Main component
export default function BookingSection() {
  return (
    <div className="bg-black text-white max-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-6xl font-bold mb-4">Book your slots</h1>
        <p className="text-xl mb-8">To find special offers, occupancy rates and free time</p>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-[#e5f5bf] text-black px-6 py-3 rounded flex items-center gap-2">
            <span>Thursday, 16 January 2025</span>
            <Calendar className="w-5 h-5" />
          </div>
          <div className="text-white">
            Average wait time 5-10mins ,
            <br />pre booking activities is recommended
          </div>
        </div>

        <div className="border-l-4 border-white pl-4 mb-12">
          <h2 className="text-2xl font-bold mb-8">PLAN YOUR DAY AT PLAY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#e5f5bf]" />
              <div>
                <div className="text-[#e5f5bf]">Activities</div>
                <div>6:00 AM – 11:00 PM</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Utensils className="w-5 h-5 text-[#e5f5bf]" />
              <div>
                <div className="text-[#e5f5bf]">F&B Timings</div>
                <div>10:00 AM – 11:00 PM</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5 text-[#e5f5bf]" />
              <div>
                <div className="text-[#e5f5bf]">Personal Vehicles</div>
                <div>Parking available</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Train className="w-5 h-5 text-[#e5f5bf]" />
              <div>
                <div className="text-[#e5f5bf]">Nearest metro</div>
                <div>Silk Board (Yellow Line)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ScrollingBanner />
    </div>
  );
}