import Header from "./Header";
import HeaderWeb from "./Header.web";
import useCheckSize from "../../hooks/useCheckSize";

const HeaderComponent = () => {
  const size = useCheckSize();
  if (size > 767) {
    return <HeaderWeb />;
  }
  return <Header />;
};

export default HeaderComponent;
