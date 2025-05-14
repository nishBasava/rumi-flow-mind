
import React, { useState } from "react";
import { Search, MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function FoldersScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const folders = [
    {
      name: "Personal Notes",
      count: 12,
      lastUpdated: "Today",
      tags: ["thoughts", "ideas"]
    },
    {
      name: "Work",
      count: 8,
      lastUpdated: "Yesterday",
      tags: ["meetings", "projects"]
    },
    {
      name: "Learning",
      count: 15,
      lastUpdated: "2 days ago",
      tags: ["courses", "study"]
    },
    {
      name: "Wellness",
      count: 7,
      lastUpdated: "3 days ago",
      tags: ["meditation", "exercise"]
    }
  ];
  
  const filteredFolders = folders.filter(folder => 
    folder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    folder.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div className="flex flex-col h-full p-4">
      <h1 className="text-2xl font-semibold mb-4">Folders</h1>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search folders and tags..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">Weekly Summary</h2>
        <div className="bg-muted rounded-lg p-4">
          <p className="text-sm">You've added 5 new recordings this week. Most active folder: Personal Notes.</p>
          <Button variant="link" className="p-0 h-auto text-sm">View detailed summary</Button>
        </div>
      </div>
      
      <div className="space-y-4 flex-1 overflow-auto">
        {filteredFolders.map((folder, idx) => (
          <div key={idx} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{folder.name}</h3>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">{folder.count} items</span>
              <span className="text-sm text-muted-foreground">Updated {folder.lastUpdated}</span>
            </div>
            
            <div className="flex space-x-2 mt-3">
              {folder.tags.map((tag, i) => (
                <Badge key={i} variant="outline">{tag}</Badge>
              ))}
            </div>
            
            <div className="flex space-x-2 mt-4">
              <Button variant="outline" size="sm">Teach Me</Button>
              <Button variant="outline" size="sm">Summarize</Button>
              <Button variant="outline" size="sm">Quiz</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
