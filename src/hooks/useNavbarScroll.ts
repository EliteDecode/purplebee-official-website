import { useState, useEffect } from "react";

type UseNavbarScrollResult = {
  showMiniBar: boolean;
  hideMainBar: boolean;
};

const useNavbarScroll = (): UseNavbarScrollResult => {
  const [showMiniBar, setShowMiniBar] = useState<boolean>(false);
  const [hideMainBar, setHideMainBar] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [prevScrollY, setPrevScrollY] = useState<number>(0);

  const handleScroll = (): void => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    if (currentScrollY > 95) {
      setShowMiniBar(true);
      if (currentScrollY > prevScrollY && currentScrollY > 95) {
        setHideMainBar(true);
      } else if (currentScrollY < prevScrollY) {
        setHideMainBar(false);
      }
    } else {
      setShowMiniBar(false);
      setHideMainBar(false);
    }
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return { showMiniBar, hideMainBar };
};

export default useNavbarScroll;
