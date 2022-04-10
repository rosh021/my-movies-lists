import React from "react";
import { Card, Button } from "react-bootstrap";

export const CustomCard = ({
  movieObj,
  func,
  btnTrue = true,
  handelOnDelete,
}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="mt-5 me-5">
        <Card.Img
          variant="top"
          src={movieObj.Poster}
          style={{ height: "400px" }}
        />
        <Card.Body>
          <Card.Title>{movieObj.Title}</Card.Title>
          <Card.Title>{movieObj.imdbRating}</Card.Title>

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
