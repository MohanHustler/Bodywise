import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import { Listing } from "../pages/listing/Listing";
import { getElementBydataKey } from "../utils/testUtils";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import CONFIG_CONSTANTS from "../constants/apiList";
import Router from "next/router";

const mockedRouter = { push: () => {} };
Router.router = mockedRouter;

const initialState = {
  totalItems: 0,
  productList: [],
  products: [{ prod_name: "data", short_desc_1: "test description" }],
};
const addToCartFunc = jest.fn((x) => "add");
const subtractFromCart = jest.fn((x) => "subtract");

const props = {
  cartProps: {
    totalItems: 10,
  },
  addToCart: addToCartFunc,
  history: [],
  products: [
    {
      add_to_cart_button: {
        post_data:
          '{"action":"http:\\/\\/stg.bebodywise.com\\/Magento2\\/checkout\\/cart\\/add\\/uenc\\/%25uenc%25\\/product\\/1\\/","data":{"product":"1","uenc":"%uenc%"}}',
        url:
          "http://stg.bebodywise.com/Magento2/checkout/cart/add/uenc/%25uenc%25/product/1/",
        required_options: false,
      },
      add_to_compare_button: {
        post_data: null,
        url:
          '{"action":"http:\\/\\/stg.bebodywise.com\\/Magento2\\/catalog\\/product_compare\\/add\\/","data":{"product":"1","uenc":"aHR0cDovL3N0Zy5iZWJvZHl3aXNlLmNvbS9NYWdlbnRvMi9yZXN0L2RlZmF1bHQvVjEvcHJvZHVjdHMtcmVuZGVyLWluZm8_c3RvcmVJZD0xJmN1cnJlbmN5Q29kZT1JTlImc2VhcmNoQ3JpdGVyaWFbcGFnZVNpemVdPTAmc2VhcmNoQ3JpdGVyaWFbY3VycmVudFBhZ2VdPTE,"}}',
        required_options: null,
      },
      price_info: {
        final_price: 495,
        max_price: 495,
        max_regular_price: 495,
        minimal_regular_price: 495,
        special_price: null,
        minimal_price: 495,
        regular_price: 495,
        formatted_prices: {
          final_price: '<span class="price">₹495.00</span>',
          max_price: '<span class="price">₹495.00</span>',
          minimal_price: '<span class="price">₹495.00</span>',
          max_regular_price: '<span class="price">₹495.00</span>',
          minimal_regular_price: null,
          special_price: null,
          regular_price: '<span class="price">₹495.00</span>',
        },
        extension_attributes: {
          msrp: {
            msrp_price: '<span class="price">₹0.00</span>',
            is_applicable: "",
            is_shown_price_on_gesture: "",
            msrp_message: "",
            explanation_message:
              "Our price is lower than the manufacturer&#039;s &quot;minimum advertised price.&quot; As a result, we cannot show you the price in catalog or the product page. <br><br> You have no obligation to purchase the product once you know the price. You can simply remove the item from your cart.",
          },
          tax_adjustments: {
            final_price: 495,
            max_price: 495,
            max_regular_price: 495,
            minimal_regular_price: 495,
            special_price: 495,
            minimal_price: 495,
            regular_price: 495,
            formatted_prices: {
              final_price: '<span class="price">₹495.00</span>',
              max_price: '<span class="price">₹495.00</span>',
              minimal_price: '<span class="price">₹495.00</span>',
              max_regular_price: '<span class="price">₹495.00</span>',
              minimal_regular_price: null,
              special_price: '<span class="price">₹495.00</span>',
              regular_price: '<span class="price">₹495.00</span>',
            },
          },
          weee_attributes: [],
          weee_adjustment: '<span class="price">₹495.00</span>',
        },
      },
      images: [
        {
          url:
            "http://stg.bebodywise.com/Magento2/pub/media/catalog/product/cache/911ed38ee05a0e88c6eb90f6030612fe/s/h/shampoo.png",
          code: "recently_viewed_products_grid_content_widget",
          height: 300,
          width: 240,
          label: "Hair Growth Gummies - dummy",
          resized_width: 240,
          resized_height: 300,
        },
        {
          url:
            "http://stg.bebodywise.com/Magento2/pub/media/catalog/product/cache/51881dacd11538ff0ef1687c42486e7d/s/h/shampoo.png",
          code: "recently_viewed_products_list_content_widget",
          height: 340,
          width: 270,
          label: "Hair Growth Gummies - dummy",
          resized_width: 270,
          resized_height: 340,
        },
        {
          url:
            "http://stg.bebodywise.com/Magento2/pub/media/catalog/product/cache/eddc30d525a4c87ccd9a5feea7e66249/s/h/shampoo.png",
          code: "recently_viewed_products_images_names_widget",
          height: 90,
          width: 75,
          label: "Hair Growth Gummies - dummy",
          resized_width: 75,
          resized_height: 90,
        },
        {
          url:
            "http://stg.bebodywise.com/Magento2/pub/media/catalog/product/cache/911ed38ee05a0e88c6eb90f6030612fe/s/h/shampoo.png",
          code: "recently_compared_products_grid_content_widget",
          height: 300,
          width: 240,
          label: "Hair Growth Gummies - dummy",
          resized_width: 240,
          resized_height: 300,
        },
        {
          url:
            "http://stg.bebodywise.com/Magento2/pub/media/catalog/product/cache/51881dacd11538ff0ef1687c42486e7d/s/h/shampoo.png",
          code: "recently_compared_products_list_content_widget",
          height: 340,
          width: 270,
          label: "Hair Growth Gummies - dummy",
          resized_width: 270,
          resized_height: 340,
        },
        {
          url:
            "http://stg.bebodywise.com/Magento2/pub/media/catalog/product/cache/eddc30d525a4c87ccd9a5feea7e66249/s/h/shampoo.png",
          code: "recently_compared_products_images_names_widget",
          height: 90,
          width: 75,
          label: "Hair Growth Gummies - dummy",
          resized_width: 75,
          resized_height: 90,
        },
      ],
      url: "http://stg.bebodywise.com/Magento2/hair-growth-gummies-dummy.html",
      id: 1,
      name: "Hair Growth Gummies - dummy",
      type: "simple",
      is_salable: "1",
      store_id: 1,
      currency_code: "INR",
      extension_attributes: {
        review_html:
          '    <div class="product-reviews-summary short empty">\n        <div class="reviews-actions">\n            <a class="action add" href="http://stg.bebodywise.com/Magento2/hair-growth-gummies-dummy.html#review-form">\n                Be the first to review this product            </a>\n        </div>\n    </div>\n',
        wishlist_button: {
          post_data: null,
          url:
            '{"action":"http:\\/\\/stg.bebodywise.com\\/Magento2\\/wishlist\\/index\\/add\\/","data":{"product":1,"uenc":"aHR0cDovL3N0Zy5iZWJvZHl3aXNlLmNvbS9NYWdlbnRvMi9yZXN0L2RlZmF1bHQvVjEvcHJvZHVjdHMtcmVuZGVyLWluZm8_c3RvcmVJZD0xJmN1cnJlbmN5Q29kZT1JTlImc2VhcmNoQ3JpdGVyaWFbcGFnZVNpemVdPTAmc2VhcmNoQ3JpdGVyaWFbY3VycmVudFBhZ2VdPTE,"}}',
          required_options: null,
        },
      },
    },
  ],
};

const mockStore = configureStore();
const store = mockStore(initialState);

var mock = new MockAdapter(axios);

mock.onGet(CONFIG_CONSTANTS.HM_PRODUCTS_URL).reply(200, [
  { prod_name: "data", short_desc_1: "test description" },
  { prod_name: "data", short_desc_1: "test description" },
  { prod_name: "data", short_desc_1: "test description" },
  { prod_name: "data", short_desc_1: "test description" },
  { prod_name: "data", short_desc_1: "test description" },
]);

describe("<Listing />", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Listing {...props} />, store);
  });

  it("Should load component with listing container", () => {
    const wrapper = getElementBydataKey("listing-container", component);
    expect(wrapper.length).toBe(1);
  });

  it("Should return the item when clicked on Buy button", () => {
    let instance = component.instance();
    instance.buyItem(initialState.products);
    expect(addToCartFunc.mock.calls[0][0]).toEqual(initialState.products);
  });

  it("Should match the number of product items and the list displayed", () => {
    component.setState({ products: initialState.products });
    let wrapper = component.find(".product");
    expect(wrapper.length).toBe(2);
  });
});
