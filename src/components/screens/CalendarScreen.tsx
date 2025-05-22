
import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarScreen() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col items-center justify-between h-full p-6 bg-[#FAFAFA]">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl font-medium text-orange-500">Calendar</h2>
        <div className="h-6 w-6" /> {/* Empty div for balance */}
      </div>
      
      <div className="flex flex-col items-center justify-center flex-1 w-full">
        <div className="w-full max-w-md mb-6">
          <h1 className="text-2xl font-bold mb-4">Your Schedule</h1>
          <p className="text-neutral-600 mb-2">Plan your day with Rumi's help</p>
          
          <div className="rounded-lg overflow-hidden border border-gray-200 mt-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="bg-white"
            />
          </div>
        </div>
        
        <div className="w-full max-w-md mt-6">
          <h2 className="text-lg font-medium mb-3">Upcoming Events</h2>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg border border-gray-100 flex items-center">
              <CalendarIcon className="h-5 w-5 mr-3 text-neutral-500" />
              <div>
                <p className="font-medium">Morning Meditation</p>
                <p className="text-sm text-neutral-500">8:00 AM - 8:30 AM</p>
              </div>
            </div>
            
            <div className="p-3 bg-white rounded-lg border border-gray-100 flex items-center">
              <CalendarIcon className="h-5 w-5 mr-3 text-neutral-500" />
              <div>
                <p className="font-medium">Team Meeting</p>
                <p className="text-sm text-neutral-500">10:00 AM - 11:30 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
