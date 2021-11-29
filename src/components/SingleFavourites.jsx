import React from "react";
import { Card, Button } from "react-bootstrap";

import { connect } from "react-redux";
import { REMOVE_FROM_FAVOURITES } from "../redux/actions/actions";

import { useNavigate } from "react-router";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavourites: (index) => {
    dispatch({
      type: REMOVE_FROM_FAVOURITES,
      payload: index,
    });
  },
});

function SingleFavourites(props) {
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
            onClick={() => props.removeFromFavourites(props.index)}
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


export default connect(mapStateToProps, mapDispatchToProps)(SingleFavourites);