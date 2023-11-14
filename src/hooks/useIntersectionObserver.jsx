import { useState, useEffect } from "react";

export const useIntersectionObserver = (sectionRef, animation, options) => {
  const [show, setShow] = useState(false);

  const interFn = (entries, observer) => {
    const el = entries[0];
    if (el.isIntersecting) {
      setShow(true);
      sectionRef.current.classList.add(animation);
      observer.disconnect();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(interFn, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  });

  return { show };
};
