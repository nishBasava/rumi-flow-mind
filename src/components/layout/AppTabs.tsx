
import { Calendar, Mic, Folder } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function AppTabs() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isActive = (path: string) => currentPath === path;
  
  return (
    <div className="flex justify-around items-center h-16 border-t border-gray-200 bg-background">
      <Link to="/calendar" className={`flex flex-col items-center justify-center w-1/3 h-full ${isActive('/calendar') ? 'text-primary' : 'text-muted-foreground'}`}>
        <Calendar className="h-6 w-6" />
        <span className="text-xs mt-1">Calendar</span>
      </Link>
      
      <Link to="/" className={`flex flex-col items-center justify-center w-1/3 h-full ${isActive('/') ? 'text-primary' : 'text-muted-foreground'}`}>
        <div className="bg-primary rounded-full p-3 mb-1">
          <Mic className="h-5 w-5 text-white" />
        </div>
        <span className="text-xs">Rumi</span>
      </Link>
      
      <Link to="/folders" className={`flex flex-col items-center justify-center w-1/3 h-full ${isActive('/folders') ? 'text-primary' : 'text-muted-foreground'}`}>
        <Folder className="h-6 w-6" />
        <span className="text-xs mt-1">Folders</span>
      </Link>
    </div>
  );
}
