import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollTarget, setScrollTarget] = useState(null);
  const navigate = useNavigate();

  const handleScroll = (target) => {
    if (window.location.pathname !== "/") {
      setScrollTarget(target);
      navigate("/");
    } else {
      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (scrollTarget) {
      const section = document.getElementById(scrollTarget);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setScrollTarget(null); // Clear the target after scrolling
      }
    }
  }, [scrollTarget]);

  return (
    <ScrollContext.Provider value={{ handleScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);