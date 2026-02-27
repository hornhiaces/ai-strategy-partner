import { useState, useEffect, useCallback } from "react";
import Lottie from "lottie-react";
import robotAnimation from "@/assets/robot-animation.json";

type ChatbotTeaserProps = {
  onClick: () => void;
  chatOpen: boolean;
};

const MESSAGES = [
  "Need help with AI? Ask me!",
  "Book a free strategy call 📅",
  "Questions? I've got answers!",
  "Let's talk AI for your business",
];

const ChatbotTeaser = ({ onClick, chatOpen }: ChatbotTeaserProps) => {
  const [visible, setVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out" | "hidden">("hidden");

  const showTeaser = useCallback(() => {
    if (chatOpen) return;
    setVisible(true);
    setFadeState("in");

    // Hide after 6 seconds
    const hideTimer = setTimeout(() => {
      setFadeState("out");
      setTimeout(() => {
        setVisible(false);
        setFadeState("hidden");
        setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
      }, 400);
    }, 6000);

    return () => clearTimeout(hideTimer);
  }, [chatOpen]);

  // Show on initial load after 3s, then every 30s
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      showTeaser();
    }, 3000);

    const interval = setInterval(() => {
      showTeaser();
    }, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [showTeaser]);

  // Hide when chat opens
  useEffect(() => {
    if (chatOpen) {
      setVisible(false);
      setFadeState("hidden");
    }
  }, [chatOpen]);

  if (!visible || chatOpen) return null;

  return (
    <div
      className={`fixed bottom-24 right-6 z-50 flex items-end gap-2 cursor-pointer transition-all duration-400 ${
        fadeState === "in"
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2"
      }`}
      onClick={onClick}
      role="button"
      aria-label="Open AI assistant chat"
    >
      {/* Speech bubble */}
      <div className="relative bg-card border border-border rounded-xl px-4 py-3 shadow-lg max-w-[200px] animate-[bounce_2s_ease-in-out_infinite]">
        <p className="text-sm font-medium text-foreground leading-snug">
          {MESSAGES[messageIndex]}
        </p>
        {/* Bubble tail */}
        <div className="absolute -right-2 bottom-3 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-border" />
        <div className="absolute -right-[7px] bottom-3 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-card" />
      </div>

      {/* Robot animation */}
      <div className="w-16 h-16 flex-shrink-0">
        <Lottie
          animationData={robotAnimation}
          loop
          className="w-full h-full drop-shadow-md"
        />
      </div>
    </div>
  );
};

export default ChatbotTeaser;
