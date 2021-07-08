import products from "../products";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const product = products.find((product) => product._id === id);
  dispatch({
    type: "CART_ADD_ITEM",
    payload: {
      product: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      countInStock: product.countInStock,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: "CART_REMOVE_ITEM",
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
