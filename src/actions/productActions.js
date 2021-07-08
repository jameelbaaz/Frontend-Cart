import products from "../products";
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });
    const data = products;
    dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "PRODUCT_LIST_FAIL", payload: error.response });
  }
};

export const listProductsdetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAILS_REQUEST" });
    dispatch({ type: "PRODUCT_DETAILS_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "PRODUCT_DETAILS_FAIL", payload: error.response });
  }
};
