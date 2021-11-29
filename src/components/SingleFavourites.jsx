import React from "react";
import { Card, Button } from "react-bootstrap";

import { useDispatch } from "react-redux";

/* import { connect } from "react-redux"; */
import { REMOVE_FROM_FAVOURITES } from "../redux/actions/actions";

import { useNavigate } from "react-router";


const removeFromFavourites = (index) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: index
})

function SingleFavourites(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="mt-5">
      <Card className="text-center">
        <Card.Header>{props.job.company_name}</Card.Header>
        <Card.Body>
          <Card.Title>{props.job.title}</Card.Title>
          <div>
            <Button
              variant="primary"
              onClick={() => navigate(`/company/${props.job.company_name}`)}
            >
              Description
            </Button>
            <Button
              variant="danger"
              className="ml-2"
              onClick={() => dispatch(
                removeFromFavourites(props.index)
              )}
            >
              X
            </Button>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          {props.job.publication_date}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default SingleFavourites;
/* connect(mapStateToProps, mapDispatchToProps)() */