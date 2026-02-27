import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const EXTERNAL_DESTINATIONS: Record<string, string> = {
  linkedin: "https://www.linkedin.com/in/larry-salinas-mba-56394934",
};

const ExternalRedirect = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const destination = searchParams.get("to");
    const targetUrl = destination ? EXTERNAL_DESTINATIONS[destination] : null;

    if (targetUrl) {
      window.location.replace(targetUrl);
      return;
    }

    window.location.replace("/");
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <p className="text-muted-foreground text-sm md:text-base">Redirecting…</p>
    </main>
  );
};

export default ExternalRedirect;
