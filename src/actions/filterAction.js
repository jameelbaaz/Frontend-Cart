import products from "../products";
export const filterMaterial = (mat) => async (dispatch) => {
  const productMat = products.filter((product) => product.material !== mat);
  try {
    dispatch({ type: "FILTER_LIST_REQUEST" });
    dispatch({ type: "FILTER_LIST_SUCCESS", payload: productMat });
  } catch (error) {
    dispatch({ type: "FILTER_LIST_FAIL", payload: error.response });
  }
};
