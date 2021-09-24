import React, { useState, useEffect } from "react";
import axios from "axios";
import Rupee from "./../../components/Rupee/Rupee";
import styles from "./SearchPage.module.scss";
const SearchPage = () => {
  const [showSearch, setShowSearch] = useState(0);
  const [searchArray, setSearchArray] = useState([]);

  const handleModalClose = () => {
    setShowSearch(0);
  };
  const [searchText, setSearchText] = useState("");
  const onChangeHandler = (event) => {
    let tempSearch = event.target.value;
    let searchUrl = `http://stg.bebodywise.com/Magento2/rest/V1/products-render-info?searchCriteria[pageSize]=0&searchCriteria[currentPage]=1&storeId=1&currencyCode=INR&searchCriteria[filter_groups][0][filters][0][field]=name&searchCriteria[filter_groups][0][filters][0][condition_type]=like&searchCriteria[filter_groups][0][filters][0][value]=%${tempSearch}%`;

    axios.get(searchUrl).then((response) => {
      setSearchArray(response.data.items);
    });

    setSearchText(event.target.value);
    let temp = searchArray;
  };
  const renderDiv = () => {
    let renderView = [];
    for (let i = 0; i < searchArray.length; i++) {
      let result = (
        <div className={styles["items-box"]}>
          <div className={styles["item"]}>
            <div className={styles["left"]}>
              <img src={searchArray[i].images[0].url} />
            </div>
            <div className={styles["right"]}>
              <div className={styles["name"]}>
                <div>{searchArray[i].name}</div>
              </div>
              <div className={styles["buy-price-box"]}>
                <div className={styles["price"]}>
                  <Rupee>{searchArray[i].price_info.final_price}</Rupee>
                </div>
                <div className={styles["buy-btn"]}>
                  <button className={styles["addButton"]}>ADD</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      renderView.push(result);
    }
    return renderView;
  };

  return (
    <React.Fragment>
      <div>
        <div className="container">
          <div className="inputContainer">
            <input
              className={styles["inputBox"]}
              type="text"
              id="input"
              value={searchText}
              onChange={onChangeHandler}
              placeholder="Start Search"
            />
            <br />
          </div>
          <div className={styles["scroll-content"]}>
            {searchArray.length > 0 && renderDiv()}
            {searchArray.length <= 0 && (
              <div className={styles["search-def"]}>
                Start typing above to search for products.
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchPage;
