import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface NextButtonProps {
  onClick: () => void;
  label?: string;
}

const NextButton = ({ onClick, label = "NEXT" }: NextButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="game-button bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-4"
    >
      {label}
      <ArrowRight className="w-12 h-12" />
    </Button>
  );
};

export default NextButton;
