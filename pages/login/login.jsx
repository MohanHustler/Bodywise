import React, {useEffect} from "react";
import LoginPage from "./../../components/LoginPage/LoginPage";
import AuthTabComponent from "../../components/AuthTabComponent/AuthTabComponent";
import Router, { useRouter } from "next/router";
import Pixel from '../../components/Pixel';
import { connect } from "react-redux";
import ModalBox from "../../components/ModalBox";
import { fillinitialCart } from "./../../redux/actions/fillInitialCart";

const Login = () => {
  const router = useRouter();

  const onLogin = (response) => {
    localStorage.setItem("user-tkn", response.data);
    if (localStorage && localStorage.getItem("user-tkn")) {
      setLoggedIn(true);
    }
    mergeCarts();
    loadInitialCart();
    handleModalClose();
    let returnUrl = Router.query.next || "/";
    Router.push(returnUrl);
  }

  useEffect(() => {
    if (localStorage && localStorage.getItem("user-tkn")) {
      onAuthFail();
    }
  }, []);

  const mergeCarts = () => {
    let auth = "Bearer " + localStorage.getItem("user-tkn");
    let headers = {
      "Content-Type": "application/json",
      Authorization: auth,
    };
    axios
      .get(CONFIG_CONSTANTS.url.GET_CUSTOMER_DETAILS, { headers: headers })
      .then((resp) => {
        props.addUser(resp.data);
        let data = {
          customerId: resp.data.id,
          storeId: 1,
        };
        if(localStorage.getItem("cartId")){
          axios
          .put(
            CONFIG_CONSTANTS.url.MERGE_CARTS + localStorage.getItem("cartId"),
            data,
            { headers: headers }
          )
          .then((resp) => {});
        }
      });
  };

  const loadInitialCart = () => {
    if (localStorage && localStorage.getItem("cartProps")) {
      props.fillinitialCart(JSON.parse(localStorage.getItem("cartProps")));
    }
  };

  const onAuthFail = () => {
    let returnUrl = Router.query.next || "/";
    Router.push(returnUrl);
  }
  return (
    <div>
      <Pixel/>
      <ModalBox closeModal={onAuthFail}>
        <AuthTabComponent isModal={true} onSuccess={onLogin} onFailure={onAuthFail}/>
      </ModalBox>
    </div>
    )
  ;
};

export default connect(null, {
  fillinitialCart
})(Login);
