import React from "react";
import { connect } from "react-redux";
import SingleFavourites from "../components/SingleFavourites";


const mapStateToProps = (state) => ({
  favourites: state.favourites,
});

function Favourites({favourites}) {
  
  return favourites.length > 0 ? (
    <div>
        {favourites.map((job, index) => (
            <SingleFavourites key={job._id} job={job} index={index}/>
        ))}
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center w-100" style={{height: "90vh"}}>
      <h1>No Favourites</h1>
    </div>
  );
}

export default connect(mapStateToProps)(Favourites);