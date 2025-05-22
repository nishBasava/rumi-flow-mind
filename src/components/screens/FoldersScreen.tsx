
import React from "react";
import { Folder, File, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FoldersScreen() {
  const folders = [
    { id: 1, name: "Daily Notes", count: 12, lastUpdated: "Today" },
    { id: 2, name: "Work Ideas", count: 8, lastUpdated: "Yesterday" },
    { id: 3, name: "Personal Growth", count: 5, lastUpdated: "2 days ago" }
  ];

  const recentFiles = [
    { id: 1, name: "Morning reflection", time: "8:30 AM" },
    { id: 2, name: "Project ideas", time: "Yesterday" },
  ];

  return (
    <div className="flex flex-col items-center justify-between h-full p-6 bg-[#FAFAFA]">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl font-medium text-orange-500">Folders</h2>
        <Button variant="ghost" size="sm">
          Edit
        </Button>
      </div>
      
      <div className="flex flex-col items-center justify-start flex-1 w-full mt-4">
        <div className="w-full max-w-md mb-6">
          <h1 className="text-2xl font-bold mb-4">Your Folders</h1>
          <p className="text-neutral-600 mb-4">Access your saved notes and recordings</p>
          
          <div className="space-y-3 mt-6">
            {folders.map(folder => (
              <div key={folder.id} className="p-4 bg-white rounded-lg border border-gray-100 flex items-center justify-between">
                <div className="flex items-center">
                  <Folder className="h-5 w-5 mr-3 text-neutral-500" />
                  <div>
                    <p className="font-medium">{folder.name}</p>
                    <p className="text-sm text-neutral-500">{folder.count} items</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-400">{folder.lastUpdated}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full max-w-md mt-2">
          <h2 className="text-lg font-medium mb-3">Recent Files</h2>
          <div className="space-y-3">
            {recentFiles.map(file => (
              <div key={file.id} className="p-3 bg-white rounded-lg border border-gray-100 flex items-center justify-between">
                <div className="flex items-center">
                  <File className="h-4 w-4 mr-3 text-neutral-500" />
                  <p className="font-medium">{file.name}</p>
                </div>
                <div className="flex items-center text-xs text-neutral-400">
                  <Clock className="h-3 w-3 mr-1" />
                  {file.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
