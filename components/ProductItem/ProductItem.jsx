import React, { useState, useEffect } from "react";
import Router from "next/router";
import { Col, Row, Card, Button, ButtonGroup } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import useCheckSize from "../../hooks/useCheckSize";
import useRequest from "../../hooks/useRequest.js";
import CONFIG_CONSTANTS from "../../constants/apiList";

import ModalBox from "../ModalBox/ModalBox";
import BuyingOptions from "../BuyingOptions";

const ProductItem = ({ data = {} }) => {
  const [productData, setproductData] = useState({});

  const size = useCheckSize();
  const { doRequest, loading } = useRequest({
    url: CONFIG_CONSTANTS.url.GET_PRODUCT + data.url_key,
    method: "get",
    body: {},
    onSuccess: (d) => {
      setproductData(JSON.parse(d));
    },
  });
  const [buyingOptions, setBuyingOptions] = useState(0);

  useEffect(() => {
    doRequest();
  }, []);

  const handleModalClose = () => {
    setBuyingOptions(0);
  };

  const goTo = () => {
    Router.push(`/product/${data.url_key}`);
  };
  const renderStar = () => {
    if (size > 767) {
      return (
        <div style={{ height: 30 }} className="disp-flex vcenter f-12">
          <div>4.5</div>
          <FaStar style={{ color: "#EB9633" }} className="m-l-5" />
        </div>
      );
    }
    return (
      <div className="custom-ratings-mobile">
        <div>
          <FaStar style={{ color: "#EB9633" }} className="m-l-5" />
        </div>
        <div className="m-l-5">4.5</div>
      </div>
    );
  };
  return (
    <>
      <Card className="custom-card custom-card-products m-t-15">
        <Card.Img className="hand img-contain" onClick={() => goTo()} style={{ height: 350 }} variant="top" src={data.imgUrl} />
        <div style={{ borderTop: '1px solid rgba(0,0,0,.125)' }} className="custom-card-body">
          <div className="bold f-20">{data.name}</div>
          {data.step_name && <div className="bold f-14" style={{ color: "black" }}>
            {data.step_name}
          </div>}
          {data.task && <div className="bold f-14" style={{ color: "black" }}>
            FOR: {data.task}
          </div>}
          {data.desc && <div className="f-14 m-t-5 bold">{data.desc}</div>}
          {renderStar()}
        </div>
        <ButtonGroup>
          <Button
            onClick={() => setBuyingOptions(1)}
            style={{ height: 50, flex: 1 }}
            className="f-14 full-width disp-flex center custom-button b-r-5 no-b-r-t-l"
          >
            Add to cart
          </Button>
          <Button
            disabled={loading}
            onClick={() => setBuyingOptions(1)}
            style={{ height: 50, flex: 1 }}
            className="f-14 full-width disp-flex center custom-button-secondary b-r-5 no-b-r-t-r"
          >
            BUY NOW (Rs {data.price})
          </Button>
        </ButtonGroup>
      </Card>
      {buyingOptions > 0 && (
        <ModalBox
          title={"Buying Options"}
          closeModal={() => handleModalClose()}
        >
          <BuyingOptions productData={productData} />
        </ModalBox>
      )}
    </>
  );
};

export default ProductItem;
