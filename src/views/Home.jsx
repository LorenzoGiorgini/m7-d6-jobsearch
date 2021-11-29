import React, { useEffect } from "react";
import {
  Container,
  FormControl,
  ListGroup,
  Row,
  Button,
} from "react-bootstrap";

import SingleJob from "../components/SingleJob";
import SpinnerB from "../components/SpinnerB";

/* import { connect } from "react-redux"; */
import { fetchJobs } from "../redux/reducers/home";
import { SET_SEARCH } from "../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";

/* const mapStateToProps = (state) => {
  return {
    home: state.home
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSearch: (value) => {
    dispatch({
      type: SET_SEARCH,
      payload: value,
    });
  },
  getJobs: (value) => dispatch(fetchJobs(value)),
}); */

const setSearch = (value) => ({
  type: SET_SEARCH,
  payload: value,
});

const Home = () => {
  const { home } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (home.search !== "") {
      dispatch(fetchJobs(home.search))
    }
  }, [home.search]);

  return (
    <Container>
      <Row>
        <div className="d-flex w-100 mt-5 flex-column">
          <FormControl
            type="text"
            placeholder="Search job offers"
            value={home.search}
            className="mr-sm-2"
            onChange={(e) => dispatch(setSearch(e.target.value.toLowerCase()))}
          />
          {home.isLoading === true ? (
            <div className="w-100 mt-5">
              <div className="d-flex align-items-center justify-content-center w-100">
                <SpinnerB />
              </div>
            </div>
          ) : (
            home.search !== "" && (
              <div className="d-flex flex-column">
                <ListGroup>
                  {home.jobs.map((job) => {
                    return <SingleJob job={job} />;
                  })}
                </ListGroup>
              </div>
            )
          )}
          <Button
            variant="outline-success"
            onClick={() => dispatch(fetchJobs(home.search))}
          >
            Search
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default /* connect(mapStateToProps, mapDispatchToProps) */ Home;
