
import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CalendarScreen() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [events, setEvents] = React.useState([
    {
      title: "Team Meeting",
      time: "10:00 AM - 11:00 AM",
      type: "work"
    },
    {
      title: "Lunch Break",
      time: "12:30 PM - 1:30 PM",
      type: "personal"
    },
    {
      title: "Project Review",
      time: "3:00 PM - 4:00 PM",
      type: "work"
    }
  ]);

  const aiSuggestions = [
    {
      text: "Add 10-min wind-down after meeting",
      icon: "🧘"
    },
    {
      text: "Insert walk before lunch",
      icon: "🚶"
    },
    {
      text: "Move project review to tomorrow?",
      icon: "⏱️"
    }
  ];

  return (
    <div className="flex flex-col h-full">
      {/* AI Suggestions */}
      <div className="bg-muted p-4">
        <h2 className="text-sm font-medium mb-2">AI Suggestions</h2>
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {aiSuggestions.map((suggestion, idx) => (
            <Button key={idx} variant="outline" className="flex items-center space-x-2 whitespace-nowrap">
              <span>{suggestion.icon}</span>
              <span>{suggestion.text}</span>
            </Button>
          ))}
        </div>
      </div>
      
      {/* Calendar View */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Calendar</h1>
          <Button variant="ghost" size="icon">
            <CalendarIcon className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="rounded-lg border mb-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="p-0"
          />
        </div>
        
        <h2 className="font-medium mb-2">Today's Schedule</h2>
        <div className="space-y-3">
          {events.map((event, idx) => (
            <div key={idx} className="p-3 border rounded-lg flex justify-between items-center">
              <div>
                <h3 className="font-medium">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.time}</p>
              </div>
              <Badge variant={event.type === 'work' ? 'default' : 'secondary'}>
                {event.type}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
