import { Play } from "lucide-react";

export default function StoneSwatch({ variant, className = "", showPlay = false }) {
  return (
    <div className={`relative overflow-hidden ${variant} ${className}`}>
      {showPlay && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-charcoal/55 flex items-center justify-center">
            <Play size={18} className="text-white fill-white" />
          </div>
        </div>
      )}
    </div>
  );
}
