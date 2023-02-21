import { useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { jobFetcherAction } from "../redux/actions";
import Job from "./Job";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const queryState = useSelector((state) => state.query);
  const dispatch = useDispatch();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form
            onSubmit={(e) => {
              dispatch(jobFetcherAction(e, baseEndpoint, query));
            }}
          >
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {queryState.isLoading === true ? (
            <div className="w-100 d-flex justify-content-around pt-5">
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="primary" />
            </div>
          ) : (
            queryState.queryResult.map((jobData) => <Job key={jobData._id} data={jobData} />)
          )}
          {queryState.hasError === true && queryState.queryResult.length === 0 && (
            <Alert variant="danger" className="mt-5">
              There was an error due to: {queryState.errorMessage}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
