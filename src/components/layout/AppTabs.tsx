
import { Calendar, Mic, Folder } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function AppTabs() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isActive = (path: string) => currentPath === path;
  
  return (
    <div className="flex justify-around items-center h-16 border-t border-gray-200 bg-white">
      <Link to="/calendar" className={`flex flex-col items-center justify-center w-1/3 h-full ${isActive('/calendar') ? 'text-black' : 'text-neutral-500'}`}>
        <Calendar className="h-5 w-5 mb-1" />
        <span className="text-xs">Calendar</span>
      </Link>
      
      <Link to="/" className={`flex flex-col items-center justify-center w-1/3 h-full ${isActive('/') ? 'text-black' : 'text-neutral-500'}`}>
        <Mic className="h-5 w-5 mb-1" />
        <span className="text-xs">Ask</span>
      </Link>
      
      <Link to="/folders" className={`flex flex-col items-center justify-center w-1/3 h-full ${isActive('/folders') ? 'text-black' : 'text-neutral-500'}`}>
        <Folder className="h-5 w-5 mb-1" />
        <span className="text-xs">Folders</span>
      </Link>
    </div>
  );
}
