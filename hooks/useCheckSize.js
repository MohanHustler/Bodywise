import { useLayoutEffect, useState } from 'react'

const useCheckSize = () => {
  const [windowSize, setWindowSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return windowSize
}

export default useCheckSize
