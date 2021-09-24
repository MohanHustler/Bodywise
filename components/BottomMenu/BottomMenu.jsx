import React, { useState, useEffect } from "react";
import {
  FaPen,
  FaSearch,
  FaUserTie,
  FaStoreAlt,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import Link from "next/link";
import styles from "./BottomMenu.module.scss";
import ModalBox from "./../ModalBox"
import NavPage from "./../NavPage/NavPage";
import axios from "axios";
import CONFIG_CONSTANTS from "./../../constants/apiList";
import SearchPage from './../SearchPage/SearchPage';



const BottomMenu = () => {
  const [showSearch, setShowSearch] = useState(0);
  const [searchArray,setSearchArray] = useState([]);
  
  const handleModalClose = () => {
    setShowSearch(0);
  };
  const [searchText, setSearchText] = useState('');
  const onChangeHandler = event => {

    let searchUrl = `http://stg.bebodywise.com/Magento2/rest/V1/products-render-info?searchCriteria[pageSize]=0&searchCriteria[currentPage]=1&storeId=1&currencyCode=INR&searchCriteria[filter_groups][0][filters][0][field]=name&searchCriteria[filter_groups][0][filters][0][condition_type]=like&searchCriteria[filter_groups][0][filters][0][value]=%${searchText}%`
    
    axios.get(searchUrl)
    .then((response)=>{
        setSearchArray(response.data.items)
    })

    setSearchText(event.target.value);
    let temp = searchArray;
  };
  const renderDiv = () => {
    let renderView = [];
    for (let i=0;i<searchArray.length;i++) {
      let result= (
        <div className="div1">
          <div className="div2">{i}</div>
          <p>{searchArray[i].name}</p>
          <div className="div3">
            <span className="div4"><h3>Price :{searchArray[i].price_info.final_price}</h3> </span> 
          </div>
        </div>
      );
      renderView.push(result);
    }
    return renderView;
  };

  return (
    <React.Fragment>
    <section className={styles["bottom-menu"]}>
      <div className={styles["menu-box"]}>
        <div className={styles["menu-item"]}>
          <div className={styles["menu-icon"]}>
            <FaPen />
          </div>
          <Link href="/your-wellness-assessment">
            <div className={styles["menu-label"]}>CONSULT</div>
          </Link>
        </div>
        <div className={styles["menu-item"]}>
          <div className={styles["menu-icon"]}>
            <FaUserTie />
          </div>
          <div className={styles["menu-label"]}>CHAT</div>
        </div>
        <div className={styles["menu-item"]}>
          <div className={styles["menu-icon"]}>
            <FaStoreAlt />
          </div>
          <div className={styles["menu-label"]}>SHOP</div>
        </div>
        <div className={styles["menu-item"]}>
          <div className={styles["menu-icon"]}>
            <FaSearch />
          </div>
          <div 
            className={styles["menu-label"]}
            onClick={() => setShowSearch(1)}
            >Search</div>
        </div>
        <div className={styles["menu-item"]}>
          <div className={styles["menu-icon"]}>
            <FaShoppingCart />
          </div>
          <div className={styles["menu-label"]}>CART</div>
        </div>
      </div>
    </section>
    {showSearch > 0 && (
      <ModalBox closeModal={handleModalClose}>
        {/* <div>
          <div className="container">
        <div className="box">
          <input className="input is-medium" type='text' id='input' value={searchText} 
          //onChange={(e)=>{onChangeHandler(e)}} 
           onChange={onChangeHandler}/>
        </div>
        {searchArray.length>0 && (
          renderDiv()
        )}
      </div>
      </div> */}
      <br/>
      <SearchPage/>
      </ModalBox>
    )}
    </React.Fragment>
  );
};

export default BottomMenu;
