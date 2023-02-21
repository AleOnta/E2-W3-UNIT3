import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import JobModal from "./JobModal";
import { removeFavouriteCompanyAction } from "../redux/actions";

const FavouritesCompany = () => {
  const favourites = useSelector((state) => state.favourites.saved);
  const dispatch = useDispatch();
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center align-items-center mt-5">
        <Col xs={10} md={8} lg={6}>
          <ListGroup>
            <ListGroup.Item key="8">AZIENDE SALVATE</ListGroup.Item>
            {favourites.map((data, i) => {
              return (
                <ListGroup.Item key={i} className="d-flex justify-content-between align-items-center">
                  <Link key={i} to={`/${data.company_name}`}>
                    {data.company_name}
                  </Link>
                  <span>
                    <JobModal prop={data} />
                    <Button
                      key={i}
                      variant="danger"
                      className="ml-2"
                      onClick={() => {
                        dispatch(removeFavouriteCompanyAction(i));
                      }}
                    >
                      <BsFillTrashFill />
                    </Button>
                  </span>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default FavouritesCompany;
