import { useEffect, useState } from "react";

interface VideoFrameProps {
  colorId: string;
  action: string;
  gradient: string;
  onVideoEnd?: () => void;
}

const VideoFrame = ({ colorId, action, gradient, onVideoEnd }: VideoFrameProps) => {
  const [showAction, setShowAction] = useState(false);

  useEffect(() => {
    // Simulate video intro, then show action
    const timer = setTimeout(() => {
      setShowAction(true);
    }, 500);

    // Simulate video duration (auto-progress after 5 seconds)
    const endTimer = setTimeout(() => {
      if (onVideoEnd) onVideoEnd();
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(endTimer);
    };
  }, [colorId, onVideoEnd]);

  return (
    <div
      className={`w-full h-full ${gradient} flex items-center justify-center transition-all duration-1000 relative overflow-hidden`}
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full animate-pulse-glow delay-700" />
      </div>

      {/* Action text */}
      {showAction && (
        <div className="action-text z-10 px-8 py-6 bg-black/20 rounded-[3rem] backdrop-blur-sm">
          {action}
        </div>
      )}

      {/* Color name indicator */}
      <div className="absolute top-8 left-8 text-4xl md:text-6xl font-black text-white/80 drop-shadow-lg">
        {colorId.toUpperCase()}
      </div>
    </div>
  );
};

export default VideoFrame;
