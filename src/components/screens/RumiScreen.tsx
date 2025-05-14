
import React, { useState, useRef } from "react";
import { Mic, Play, ArrowDown } from "lucide-react";
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
    <div className="flex flex-col items-center justify-between h-full p-6">
      <div className="w-full text-center">
        <h1 className="text-2xl font-semibold mb-2">Ask Rumi Anything</h1>
        <p className="text-muted-foreground">Hold to speak or type to ask</p>
      </div>
      
      <div className="flex flex-col items-center justify-center flex-1">
        {isRecording ? (
          <div className="w-full max-w-md">
            <div className="h-16 bg-muted rounded-lg overflow-hidden mb-4">
              {/* Audio waveform visualization would go here */}
              <div className="h-full w-full flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="h-8 w-1 bg-primary opacity-75 animate-pulse" 
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
        ) : (
          <div className="text-center flex flex-col items-center">
            <Button
              onClick={handleMicClick}
              className="h-24 w-24 rounded-full bg-primary hover:bg-primary/90 text-white mb-6"
            >
              <Mic className="h-8 w-8" />
            </Button>
            <p className="text-sm text-muted-foreground mb-8">Tap to record your thoughts</p>
          </div>
        )}
        
        {audioURL && !isRecording && (
          <div className="flex items-center justify-center space-x-4 mt-4">
            <Button
              onClick={handlePlayRecording}
              className="flex items-center space-x-2"
              variant="outline"
            >
              <Play className="h-4 w-4" />
              <span>Play Recording</span>
            </Button>
          </div>
        )}
      </div>
      
      <div className="w-full max-w-md grid grid-cols-2 gap-4">
        <Button variant="outline" className="text-left px-4 py-3">
          <span>What should I do right now?</span>
        </Button>
        <Button variant="outline" className="text-left px-4 py-3">
          <span>Summarize my voice note</span>
        </Button>
        <Button variant="outline" className="text-left px-4 py-3">
          <span>Teach me what I saved</span>
        </Button>
        <Button variant="outline" className="text-left px-4 py-3">
          <span>I'm overwhelmed — help me</span>
        </Button>
      </div>
    </div>
  );
}
