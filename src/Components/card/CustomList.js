import React from "react";
import { Card, Button } from "react-bootstrap";

export const CustomList = ({
  movieObj,
  func,
  btnTrue = true,
  handelOnDelete,
}) => {
  return (
    <div>
      <Card style={{ width: "100%" }} className="mt-5 me-5 d-flex flex-row">
        <Card.Img
          variant="top"
          src={movieObj.Poster}
          style={{ height: "400px", width: "150px" }}
        />
        <Card.Body>
          <Card.Title>{movieObj.Title}</Card.Title>
          <Card.Title>{movieObj.imdbRating}</Card.Title>
          <p>{movieObj.Plot}</p>
          {btnTrue ? (
            <div className="d-flex justify-content-around">
              <Button variant="info" onClick={() => func("happy")}>
                Happy
              </Button>
              <Button variant="secondary" onClick={() => func("lazy")}>
                Lazy
              </Button>
            </div>
          ) : (
            <div className="d-grid gap-2">
              <Button
                variant="danger"
                size="lg"
                onClick={() => handelOnDelete(movieObj.imdbID)}
              >
                Delete
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
