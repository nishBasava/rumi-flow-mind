
import React from "react";
import { User, Calendar, Clock, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function ProfileAnalytics() {
  return (
    <div className="flex flex-col h-full p-6 overflow-auto">
      <h1 className="text-2xl font-semibold mb-6">Profile & Analytics</h1>
      
      {/* Profile Card */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
          <User className="h-8 w-8 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-medium">Alex Johnson</h2>
          <p className="text-muted-foreground">Working on mindfulness practice</p>
        </div>
      </div>
      
      {/* Wellness Index */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-2">Wellness Index</h3>
        <div className="bg-muted rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span>Burnout Risk</span>
            <span className="text-green-500 font-medium">Low</span>
          </div>
          <Progress value={25} className="h-2 mb-4" />
          
          <p className="text-sm text-muted-foreground">Your wellness score is good! You've maintained a balanced schedule this week.</p>
        </div>
      </div>
      
      {/* Stats */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Activity Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium">Calendar Usage</span>
            </div>
            <p className="text-2xl font-bold">5 days</p>
            <p className="text-sm text-muted-foreground">Active streak</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-medium">Recording Time</span>
            </div>
            <p className="text-2xl font-bold">23 min</p>
            <p className="text-sm text-muted-foreground">This week</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="font-medium">Mood Trend</span>
            </div>
            <p className="text-2xl font-bold">+12%</p>
            <p className="text-sm text-muted-foreground">Improvement</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <User className="h-5 w-5 text-primary" />
              <span className="font-medium">Self-Reflection</span>
            </div>
            <p className="text-2xl font-bold">8</p>
            <p className="text-sm text-muted-foreground">Entries this month</p>
          </div>
        </div>
      </div>
      
      {/* Compare Past You */}
      <div>
        <h3 className="text-lg font-medium mb-2">Compare Past You</h3>
        <div className="bg-muted rounded-lg p-4">
          <p className="mb-3">Last month vs. This month</p>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Focus Sessions</span>
              <div className="flex items-center space-x-1">
                <span className="text-sm">12</span>
                <span className="text-green-500 text-sm">↑ 3</span>
              </div>
            </div>
            
            <div className="flex justify-between">
              <span className="text-sm">Rest Breaks</span>
              <div className="flex items-center space-x-1">
                <span className="text-sm">24</span>
                <span className="text-green-500 text-sm">↑ 5</span>
              </div>
            </div>
            
            <div className="flex justify-between">
              <span className="text-sm">Mindful Minutes</span>
              <div className="flex items-center space-x-1">
                <span className="text-sm">95</span>
                <span className="text-green-500 text-sm">↑ 15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
