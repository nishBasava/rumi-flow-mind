
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AppTabs } from "./AppTabs";
import ProfileAnalytics from "../screens/ProfileAnalytics";
import SettingsUpgrades from "../screens/SettingsUpgrades";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [showProfile, setShowProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleSwipeUp = () => {
    setShowProfile(true);
    setShowSettings(false);
  };

  const handleSwipeDown = () => {
    setShowSettings(true);
    setShowProfile(false);
  };

  const handleClose = () => {
    setShowProfile(false);
    setShowSettings(false);
  };

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden bg-background">
      <div className="touch-pan-y flex-1 overflow-hidden relative" 
        onTouchStart={(e) => {
          const startY = e.touches[0].clientY;
          const handleTouchEnd = (e: TouchEvent) => {
            const endY = e.changedTouches[0].clientY;
            const deltaY = endY - startY;
            
            if (deltaY < -50) {
              handleSwipeUp();
            } else if (deltaY > 50) {
              handleSwipeDown();
            }
            
            document.removeEventListener("touchend", handleTouchEnd);
          };
          
          document.addEventListener("touchend", handleTouchEnd);
        }}
      >
        {children}
      </div>
      
      <AppTabs />
      
      {/* Profile Analytics Overlay */}
      <div className={`fixed inset-0 bg-background transition-transform duration-300 z-20 ${
        showProfile ? "translate-y-0" : "translate-y-full"
      }`}>
        {showProfile && (
          <div className="h-full">
            <button 
              className="absolute top-4 right-4 text-foreground" 
              onClick={handleClose}
            >
              Close
            </button>
            <ProfileAnalytics />
          </div>
        )}
      </div>
      
      {/* Settings Overlay */}
      <div className={`fixed inset-0 bg-background transition-transform duration-300 z-20 ${
        showSettings ? "translate-y-0" : "-translate-y-full"
      }`}>
        {showSettings && (
          <div className="h-full">
            <button 
              className="absolute top-4 right-4 text-foreground" 
              onClick={handleClose}
            >
              Close
            </button>
            <SettingsUpgrades />
          </div>
        )}
      </div>
    </div>
  );
}
