
import React from "react";
import { Settings, CreditCard, Moon, Bell, Calendar, LogOut } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function SettingsUpgrades() {
  return (
    <div className="flex flex-col h-full p-6 overflow-auto">
      <h1 className="text-2xl font-semibold mb-6">Settings & Upgrades</h1>
      
      {/* PRO Upgrade */}
      <div className="bg-primary/10 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-medium mb-2">Upgrade to Rumi Pro</h2>
        <ul className="space-y-2 mb-4">
          <li className="flex items-center space-x-2">
            <span className="text-primary">✓</span>
            <span>Unlimited voice recording</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-primary">✓</span>
            <span>Advanced AI personalization</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-primary">✓</span>
            <span>Calendar integration</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-primary">✓</span>
            <span>Export all your data</span>
          </li>
        </ul>
        <Button className="w-full">
          <CreditCard className="mr-2 h-4 w-4" />
          Upgrade Now
        </Button>
      </div>
      
      {/* Settings */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Appearance</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Moon className="h-5 w-5" />
              <span>Dark Mode</span>
            </div>
            <Switch />
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="text-lg font-medium mb-4">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Bell className="h-5 w-5" />
                <span>Push Notifications</span>
              </div>
              <Switch />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Calendar className="h-5 w-5" />
                <span>Calendar Reminders</span>
              </div>
              <Switch />
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="text-lg font-medium mb-4">Integrations</h3>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Connect Google Calendar
            </Button>
          </div>
        </div>
        
        <Separator />
        
        <div className="pt-4">
          <Button variant="ghost" className="w-full text-destructive justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button>
        </div>
        
        <div className="text-center pt-6">
          <p className="text-sm text-muted-foreground">Rumi App v1.0.0</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Button variant="link" size="sm" className="text-xs text-muted-foreground">Privacy Policy</Button>
            <Button variant="link" size="sm" className="text-xs text-muted-foreground">Terms of Service</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
