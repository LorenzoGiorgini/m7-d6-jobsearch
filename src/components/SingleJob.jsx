import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import { useDispatch } from "react-redux";
/* import { connect } from "react-redux"; */

import { ADD_TO_FAVOURITES } from "../redux/actions/actions";



const addLike = (job) => ({
  type: ADD_TO_FAVOURITES,
  payload: job
})

const SingleJob = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ListGroup.Item className="d-flex flex-row">
      <Button variant="success" onClick={() => dispatch(addLike(props.job))}>
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

/* connect(mapStateToProps, mapDispatchToProps)() */
export default SingleJob;