import useCheckSize from '../../hooks/useCheckSize'
import dynamic from "next/dynamic";

const Carousel = dynamic(
  () => import("react-responsive-carousel").then((mod) => mod.Carousel),
  {
    ssr: false,
  }
);

const getConfig = (size, length) => {
  if (size > 767) {
     return {
       settings: {
        ...(length > 2 ? {  autoPlay: true, infiniteLoop: true, } : { autoPlay: false }),
        showStatus: false,
        dynamicHeight: false,
        showThumbs: false,
        showIndicators: false,
        showStatus: false,
       },
       carouselClassName: 'carousel-container'
     }
  }
  return {
    settings: {
      ...(length > 2 ? {  autoPlay: true, infiniteLoop: true, } : { autoPlay: false }),
      centerMode: true,
      showStatus: false,
      dynamicHeight: false,
      showThumbs: false,
      centerSlidePercentage: 80,
      showIndicators: false,
    },
    carouselClassName: 'carousel-mobile-container'
  }
}

const CarouselCommon = ({ children, className = '' }) => {
  const size = useCheckSize()
  const config = getConfig(size, children.length || 0)
  return (
    <div className={`${config.carouselClassName} ${className}`}>
      <Carousel style={{ padding: 20 }} {...config.settings}>
        {children}
      </Carousel>
    </div>
  )
}

export default CarouselCommon
