// let api_domain =
//   "https://8mdcnz6ad9.execute-api.ap-south-1.amazonaws.com/prod/";
let wp_domain = "https://manmatters.com/";
let image_domain = "https://manmatters.com/wp-content/uploads/2020/02/";
let notification_api = "https://cmx5ogdjoi.execute-api.ap-south-1.amazonaws.com/prod/";

export const prod = {
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
    UPDATE_DO_NOTIFICATION:
      notification_api+"updateNotification",
    UPDATE_READ_NOTIFICATION:
      notification_api+"updateReadNotification",
    GET_DO_NOTIFICATION:
      notification_api+"getNotifications",
    GET_READ_NOTIFICATION:
      notification_api+"getReadNotifications"    
  },
};
