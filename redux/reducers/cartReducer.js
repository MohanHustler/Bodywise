import {
  ADD_TO_CART,
  SUBTRACT_FROM_CART,
  FILL_INITIAL_CART,
  APPLY_COUPON,
  GET_CART,
  CLEAR_CART,
} from "./../actions/types";

const initialState = {
  totalItems: 0,
  productList: [],
  shipping: 0,
  prescriptionProducts: [],
  billing: {
    cart_subtotal: 0,
    shipping: 50,
    grandTotal: 0,
    discount: 0,
  },
  couponCode: "",
};

/*********
 * action.payload = {quantity:1, product:{}}
 */

const convertBillObject = (cart) => {
  return {
    cart_subtotal: cart.subtotal,
    shipping: cart.shipping_amount,
    grandTotal: cart.grand_total,
    discount: cart.discount_amount,
  };
};

let addToCart = (state, action) => {
  let stateCopy = { ...state };
  let productList = stateCopy.productList;
  let totalItems = stateCopy.totalItems;
  let product = action.payload.product;
  let duplicateIndex;
  //check if item in productList
  const duplicateProduct = productList.filter((item, index) => {
    if (item.name === action.payload.product.name) {
      duplicateIndex = index;
      return true;
    }
    return false;
  });
  if (duplicateProduct.length > 0) {
    totalItems = totalItems - productList[duplicateIndex]["quantity"];
    productList[duplicateIndex]["quantity"] = action.payload.quantity || 1;
    totalItems = totalItems + productList[duplicateIndex]["quantity"];
  } else {
    product["quantity"] = action.payload.quantity || 1;
    totalItems += action.payload.quantity || 1;
    productList.push(product);
  }

  const storeData = {
    totalItems: totalItems,
    productList: productList,
    prescriptionProducts: productList.filter(
      (item) => parseInt(item.is_rx) > 0
    ),
    billing: convertBillObject(action.payload.billing),
  };

  localStorage.setItem("cartProps", JSON.stringify(storeData));

  return storeData;
};

let subtractFromCart = (state, action) => {
  let stateCopy = { ...state };
  let productList = stateCopy.productList;
  let totalItems = stateCopy.totalItems;
  let product = action.payload.product;
  let deleteIndex;
  //check if item in productList
  productList.filter((item, index) => {
    if (item.name === action.payload.product.name) {
      deleteIndex = index;
      return true;
    }
    return false;
  });

  totalItems = totalItems - productList[deleteIndex]["quantity"];
  productList[deleteIndex].quantity = action.payload.quantity;
  totalItems = totalItems + productList[deleteIndex]["quantity"];
  if (productList[deleteIndex].quantity <= 0) {
    productList.splice(deleteIndex, 1);
  }

  const storeData = {
    totalItems: totalItems,
    productList: productList,
    prescriptionProducts: productList.filter(
      (item) => parseInt(item.is_rx) > 0
    ),
    billing: convertBillObject(action.payload.billing),
  };

  localStorage.setItem("cartProps", JSON.stringify(storeData));

  return storeData;
};

export const getCartTotal = (itemsInCart) => {
  let amount = {
    subTotal: 0,
    discount: 0,
    cart_subtotal: 0,
    shipping: 0,
  };
  itemsInCart.forEach((element) => {
    amount.cart_subtotal += element.totalPrice;
  });
  return amount;
};

let fillInitialCart = (state, action) => {
  return action.payload;
};

export const getCartFromJson = (state, cart) => {
  // let returnData = {
  //   totalItems: state.totalItems,
  //   productList: state.productList,
  //   subTotal: cart.grand_total,
  //   discount: cart.discount_amount,
  //   cart_subtotal: cart.subtotal,
  // };
  let returnData = { ...state };
  returnData.billing = {
    cart_subtotal: cart.subtotal,
    shipping: cart.shipping_amount,
    grandTotal: cart.grand_total,
    discount: cart.discount_amount,
  };
  localStorage.setItem("cartState", JSON.stringify(returnData));
  return returnData;
};

const clearCart = (state) => {
  let stateCopy = initialState;
  return stateCopy;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action);
    case SUBTRACT_FROM_CART:
      return subtractFromCart(state, action);
    case FILL_INITIAL_CART:
      return fillInitialCart(state, action);
    case APPLY_COUPON:
      return state;
    case GET_CART:
      return getCartFromJson(state, action.payload);
    case CLEAR_CART:
      return clearCart(state);
    default:
      return state;
  }
};
