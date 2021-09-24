import useCheckSize from "../../../hooks/useCheckSize";
import { Card, Button } from "react-bootstrap";
import CarouselCommon from "../../CarouselCommon";
import Router from "next/router";

const getConfig = (size) => {
  if (size > 767) {
    return {
      cardClassName: "carousel-card"
    };
  }
  return {
    cardClassName: "carousel-card"
  };
};

const CarouselSection = ({ data = [] }) => {
  const size = useCheckSize();
  const config = getConfig(size);
  const renderItems = () => (
    <CarouselCommon className="main-carousel">
      {data.map((item, i) => (
        <Card key={i} className={config.cardClassName}>
          <Card.Img className="img-cover" variant="top" src={item.image} />
          {/* <div className="title">{item.title}</div>
          <div className="text" >{item.subtitle}</div> */}
          {/* {item.button && item.link && (
            <div className="button-container">
              <Button
                onClick={() => Router.push(item.link)}
                style={{ fontSize: size > 767 ? 20 : 14 }}
                className="custom-carousel-button"
              >
                {item.button}
              </Button>
            </div>
          )} */}
        </Card>
      ))}
    </CarouselCommon>
  );
  if (size > 767) {
    return <div className="container-page">{renderItems()}</div>;
  }
  return <div>{renderItems()}</div>;
};

export default CarouselSection;
