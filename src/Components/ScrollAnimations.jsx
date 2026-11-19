
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollAnimations = () => {
  const { pathname } = useLocation();

  // Enable scroll animation styles once.
  useEffect(() => {
    document.body.classList.add("afri-scroll-ready");

    return () => {
      document.body.classList.remove("afri-scroll-ready");
    };
  }, []);

  // Observe elements whenever the route changes.
  useEffect(() => {
    let observer;

    const frame = requestAnimationFrame(() => {
      const elements = document.querySelectorAll(
        ".afri-reveal, .afri-image-reveal"
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("afri-in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -20px 0px",
        }
      );

      elements.forEach((element) => {
        observer.observe(element);
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
};

export default ScrollAnimations;
