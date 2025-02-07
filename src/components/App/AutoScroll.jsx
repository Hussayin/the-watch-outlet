import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    // Faqat yangi sahifa yuklanganda yuqoriga olib chiqadi
    if (performance.navigation.type !== 2) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
