
import React, { useState, useRef } from "react";
import { Mic, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

export default function RumiScreen() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<Blob | null>(null);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  
  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        setRecordedAudio(audioBlob);
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
      };
      
      mediaRecorder.start();
      setIsRecording(true);
      
      toast({
        title: "Recording started",
        description: "Tap again to stop recording"
      });
    } catch (error) {
      console.error("Error accessing microphone:", error);
      toast({
        title: "Microphone Error",
        description: "Please allow microphone access to record",
        variant: "destructive"
      });
    }
  };
  
  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      // Stop all audio tracks
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      
      toast({
        title: "Recording saved",
        description: "Your audio has been saved to Folders"
      });
    }
  };
  
  const handleMicClick = () => {
    if (isRecording) {
      handleStopRecording();
    } else {
      handleStartRecording();
    }
  };
  
  const handlePlayRecording = () => {
    if (audioURL) {
      const audio = new Audio(audioURL);
      audio.play();
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-between h-full p-6 bg-[#FAFAFA]">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl font-medium text-orange-500">Rumi</h2>
        <Button variant="ghost" size="icon" className="rounded-full">
          <span className="text-lg">?</span>
        </Button>
      </div>
      
      <div className="flex flex-col items-center justify-center flex-1 space-y-4">
        <h1 className="text-3xl font-bold text-center">Ask Rumi<br/>Anything</h1>
        
        <Button
          onClick={handleMicClick}
          className={`h-16 w-16 rounded-full ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-[#F5F5F5] hover:bg-[#EFEFEF] text-black'}`}
          variant={isRecording ? "default" : "outline"}
        >
          <Mic className={`h-6 w-6 ${isRecording ? 'text-white' : 'text-black'}`} />
        </Button>
        
        {isRecording && (
          <div className="w-full max-w-md">
            <div className="h-12 bg-muted rounded-lg overflow-hidden">
              <div className="h-full w-full flex items-center justify-center">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="h-6 w-1 bg-primary opacity-75 animate-pulse" 
                      style={{ 
                        animationDelay: `${i * 0.1}s`, 
                        height: `${Math.random() * 100}%` 
                      }} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {audioURL && !isRecording && (
          <Button
            onClick={handlePlayRecording}
            className="flex items-center space-x-2"
            variant="outline"
          >
            <Play className="h-4 w-4" />
            <span>Play Recording</span>
          </Button>
        )}
      </div>
      
      <div className="flex flex-col w-full space-y-3">
        <p className="text-center text-neutral-700 py-1">What should I do right now?</p>
        <p className="text-center text-neutral-700 py-1">Summarize my voice note.</p>
        <p className="text-center text-neutral-700 py-1">I'm overwhelmend-help me reset.</p>
      </div>
    </div>
  );
}
