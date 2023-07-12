import { useState, useEffect } from "react";

const useIsInView = (propertyName) => {
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
        threshold: 0.01, // Adjust the threshold as needed
      }
    );

    const elements = document.querySelectorAll(".observe");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return mostVisibleElement
    ? mostVisibleElement.getAttribute(propertyName)
    : null;
};

export default useIsInView;
