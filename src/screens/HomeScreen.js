import React, { useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { filterMaterial } from "../actions/filterAction";

const initialState = [
  {
    _id: "1",
    material: "All",
  },
  {
    _id: "2",
    material: "Plastic",
  },
  {
    _id: "3",
    material: "Silicon",
  },
];

const HomeScreen = ({ history }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const MatChangeHandler = (e) => {
    const mat = e.target.value;
    dispatch(filterMaterial(mat));
    history.push(`/products/${mat}`);
  };

  return (
    <>
      <h3>Latest Products</h3>
      <p>Material Used</p>
      <Form.Control as="select" onChange={MatChangeHandler}>
        {initialState.map((state) => (
          <option key={state._id} value={state.material}>
            {state.material}
          </option>
        ))}
      </Form.Control>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xlg={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
