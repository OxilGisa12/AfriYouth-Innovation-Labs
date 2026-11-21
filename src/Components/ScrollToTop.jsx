
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
      className={`
        fixed bottom-7 right-7 z-50
        flex items-center justify-center
        w-12 h-12 rounded-full
        bg-[#F47721] text-white
        shadow-lg shadow-orange-500/20 dark:shadow-[#C723DF]/20
        hover:bg-[#10466B]
        hover:-translate-y-1
        active:scale-90
        transition-all duration-300
        ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-5 pointer-events-none"
        }
      `}
    >
      <ArrowUp size={21} strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTop;
