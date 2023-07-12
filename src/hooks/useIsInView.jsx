import { useState, useEffect } from "react";

const useIsInView = (attribute) => {
  const [mostVisibleElement, setMostVisibleElement] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = null;
        let maxVisibleArea = 0;

        entries.forEach((entry) => {
          const visibleArea =
            entry.intersectionRatio *
            entry.boundingClientRect.width *
            entry.boundingClientRect.height;

          if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea;
            mostVisible = entry.target;
          }
        });

        setMostVisibleElement(mostVisible);
      },
      {
        threshold: 0.75,
      }
    );

    const elements = document.querySelectorAll(".observe");
    elements.forEach((element) => {
      observer.observe(element);
    });

    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      const scrollPosition = scrollTop / (scrollHeight - clientHeight);

      if (scrollPosition === 0) {
        setMostVisibleElement(elements[0]);
      } else if (scrollPosition === 1) {
        setMostVisibleElement(elements[elements.length - 1]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return mostVisibleElement ? mostVisibleElement.getAttribute(attribute) : null;
};

export default useIsInView;
