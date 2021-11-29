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

import { connect } from "react-redux";
import { fetchJobs } from "../redux/reducers/home";
import { SET_SEARCH } from "../redux/actions/actions";

const mapStateToProps = (state) => {
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
});

const Home = (props) => {
  return (
    <Container>
      <Row>
        <div className="d-flex w-100 mt-5 flex-column">
          <FormControl
            type="text"
            placeholder="Search job offers"
            value={props.home.search}
            className="mr-sm-2"
            onChange={(e) => props.setSearch(e.target.value.toLowerCase())}
          />
          {props.home.isLoading === true ? (
            <div className="w-100 mt-5">
              <div className="d-flex align-items-center justify-content-center w-100">
                <SpinnerB />
              </div>
            </div>
          ) : (
            props.home.search !== "" && (
              <div className="d-flex flex-column">
                <ListGroup>
                  {props.home.jobs.map((job) => {
                    return <SingleJob job={job} />;
                  })}
                </ListGroup>
              </div>
            )
          )}
          <Button
            variant="outline-success"
            onClick={() => props.getJobs(props.home.search)}
          >
            Search
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);