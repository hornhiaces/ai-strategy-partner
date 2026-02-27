import { useState, useEffect, useCallback, useRef, lazy, Suspense } from "react";

const Lottie = lazy(() => import("lottie-react"));

type ChatbotTeaserProps = {
  onClick: () => void;
  chatOpen: boolean;
};

const MESSAGES = [
  "Need help with AI? Ask me!",
  "Book a free strategy call",
  "Questions? I've got answers!",
  "Let's talk AI for your business",
];

const ChatbotTeaser = ({ onClick, chatOpen }: ChatbotTeaserProps) => {
  const [visible, setVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out" | "hidden">("hidden");
  const [animationData, setAnimationData] = useState<unknown>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    if (fadeTimerRef.current) {
      clearTimeout(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }
  }, []);

  const showTeaser = useCallback(() => {
    if (chatOpen) return;
    clearTimers();
    setVisible(true);
    setFadeState("in");

    // Hide after 6 seconds
    hideTimerRef.current = setTimeout(() => {
      setFadeState("out");
      fadeTimerRef.current = setTimeout(() => {
        setVisible(false);
        setFadeState("hidden");
        setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
      }, 400);
    }, 6000);
  }, [chatOpen, clearTimers]);

  // Lazy-load the robot animation data only when first visible
  useEffect(() => {
    if (visible && !animationData) {
      import("@/assets/robot-animation.json").then((mod) => {
        setAnimationData(mod.default);
      });
    }
  }, [visible, animationData]);

  // Show on initial load after 1.5s, then every 30s
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      showTeaser();
    }, 1500);

    const interval = setInterval(() => {
      showTeaser();
    }, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
      clearTimers();
    };
  }, [showTeaser, clearTimers]);

  // Hide when chat opens
  useEffect(() => {
    if (chatOpen) {
      clearTimers();
      setVisible(false);
      setFadeState("hidden");
    }
  }, [chatOpen, clearTimers]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  if (!visible || chatOpen) return null;

  return (
    <div
      className={`fixed bottom-24 right-6 z-50 flex items-end gap-2 cursor-pointer transition-all duration-400 ${
        fadeState === "in"
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2"
      }`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
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

      {/* Robot animation - lazy loaded */}
      <div className="w-16 h-16 flex-shrink-0">
        {animationData ? (
          <Suspense fallback={<div className="w-full h-full rounded-full bg-primary/10" />}>
            <Lottie
              animationData={animationData}
              loop
              className="w-full h-full drop-shadow-md"
            />
          </Suspense>
        ) : (
          <div className="w-full h-full rounded-full bg-primary/10 animate-pulse" />
        )}
      </div>
    </div>
  );
};

export default ChatbotTeaser;
