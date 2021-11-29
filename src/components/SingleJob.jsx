import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { connect } from "react-redux";

import { ADD_TO_FAVOURITES } from "../redux/actions/actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    addLike: (job) => {
      dispatch({
        type: ADD_TO_FAVOURITES,
        payload: job,
      });
    },
  };
};

const SingleJob = (props) => {
  const navigate = useNavigate();

  return (
    <ListGroup.Item className="d-flex flex-row">
      <Button variant="success" onClick={() => props.addLike(props.job)}>
        Like
      </Button>
      <p
        className="mt-0 pt-0"
        onClick={() => navigate(`/company/${props.job.company_name}`)}
      >
        {props.job.title + " " + props.job.company_name}
      </p>
    </ListGroup.Item>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(SingleJob);