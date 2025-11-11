import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const LazyRender: React.FC<Props> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2, // 20% visible before rendering
        rootMargin: "100px", // preload slightly before it appears
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible ? children : <Placeholder />}</div>;
};

// simple placeholder before card appears
const Placeholder = () => (
  <div className="h-64 bg-gray-200 animate-pulse rounded-md"></div>
);

export default LazyRender;
