// let api_domain =
//   "https://2i32fj62uk.execute-api.ap-south-1.amazonaws.com/staging/";
let wp_domain = "https://manmatters.com/";
let image_domain = "https://stg.manmatters.com/wp-content/uploads/2020/02/";
let magento_be = "https://stg.bebodywise.com/Magento2/rest/V1/";
let store_code = "main_website_store";
let notification_api =
  "https://cmx5ogdjoi.execute-api.ap-south-1.amazonaws.com/staging/";

export const dev = {
  url: {
    HM_PRODUCTS_URL:
      wp_domain + "wp-content/themes/betheme/json/hm_products.json",
    PM_PRODUCTS_URL:
      wp_domain + "wp-content/themes/betheme/json/pm_products.json",
    IM_PRODUCTS_URL:
      wp_domain + "wp-content/themes/betheme/json/im_products.json",
    WM_PRODUCTS_URL:
      wp_domain + "wp-content/themes/betheme/json/wm_products.json",
    IMAGE_URL: image_domain,
    LOGIN_MB: magento_be + "integration/customer/verifyOTP",
    PRODUCTS_MB: magento_be + "products-render-info",
    QUOTE_MB_CUS: magento_be + "carts/mine",
    QUOTE_MB_GUEST: magento_be + "guest-carts",
    SAVE_ADDRESS_MB_CUS: magento_be + "carts/mine/estimate-shipping-methods",
    SAVE_ADDRESS_MB_GUEST: magento_be + "guest-carts/",
    ADD_TO_CART_MB_CUS: magento_be + "carts/mine/items",
    ADD_TO_CART_MB_GUEST: magento_be + "guest-carts/",
    APPLY_COUPON_MB_GUEST: magento_be + "guest-carts/",
    APPLY_COUPON_MB_CUS: magento_be + "carts/mine/totals",
    AVAILABLE_SLOTS:
      "https://jlzy1697ah.execute-api.ap-south-1.amazonaws.com/staging/slots_available_1",
    PAYMENT_MB_CUS: magento_be + "carts/mine/payment-information",
    PAYMENT_MB_GUEST: magento_be + "guest-carts/",
    SHIPPING_MODE_ADDRESS_CUS: magento_be + "carts/mine/shipping-information",
    SHIPPING_MODE_ADDRESS_CUS_ID: magento_be + "carts/mine/shipping-information-by-id",
    PAYMENT_ORDER_RAZORPAY: magento_be + "carts/mine/onlinePayment",
    PAYMENT_ORDER_RAZORPAY_SUCCESS: magento_be + "carts/mine/paymentSuccess",
    GET_REGIONS_MB: magento_be + "directory/countries/IN",
    GET_OTP: magento_be + "integration/customer/getOTP",
    GET_PRODUCT: magento_be + "products_info/",
    GET_CUSTOMER_DETAILS: magento_be + "customers/me",
    CUSTOMER_DETAILS: magento_be + "customers/me",
    VERIFY_OTP_DETAILS:
      magento_be + "integration/customer/verifyOTPWithDetails",
    MERGE_CARTS: magento_be + "guest-carts/",
    SHIPPING_MODE_ADDRESS_GUEST: magento_be + "guest-carts/",
    UPDATE_DO_NOTIFICATION: notification_api + "updateNotification",
    UPDATE_READ_NOTIFICATION: notification_api + "updateReadNotification",
    GET_DO_NOTIFICATION: notification_api + "getNotifications",
    GET_READ_NOTIFICATION: notification_api + "getReadNotifications",
  },
  id: {
    store_id: 1,
    user_token: "",
  },
};
