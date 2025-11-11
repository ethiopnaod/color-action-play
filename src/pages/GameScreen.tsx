import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoFrame from "@/components/VideoFrame";
import NextButton from "@/components/NextButton";
import colorsData from "@/data/colors.json";

const GameScreen = () => {
  const navigate = useNavigate();
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const currentColor = colorsData[currentColorIndex];

  const handleNext = () => {
    if (currentColorIndex < colorsData.length - 1) {
      setCurrentColorIndex(currentColorIndex + 1);
    } else {
      navigate("/closing");
    }
  };

  const handleAutoProgress = () => {
    // Auto-progress when video simulation ends
    handleNext();
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Video Frame */}
      <div className="flex-1">
        <VideoFrame
          colorId={currentColor.id}
          action={currentColor.action}
          gradient={currentColor.gradient}
          onVideoEnd={handleAutoProgress}
        />
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
        {/* Progress indicator */}
        <div className="bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 text-2xl md:text-3xl font-black text-foreground">
          {currentColorIndex + 1} / {colorsData.length}
        </div>

        {/* Next Button */}
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
};

export default GameScreen;
