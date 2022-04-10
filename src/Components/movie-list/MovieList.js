import React from "react";
import { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";
import { CustomList } from "../card/CustomList";

export const MovieList = ({ movieLists, handelOnDelete }) => {
  const [mood, setMood] = useState("");
  const [view, setView] = useState(true);

  const filterMovies = mood
    ? movieLists.filter((movie) => movie.cat === mood)
    : movieLists;
  // const handelOnDeleteButton = (i) => {
  //   const filterListOfMovie = movieLists.filter((item, index) => index !== i);
  //   handelOnDeleteButton(filterListOfMovie);
  // };
  return (
    <div className="py-3">
      <Row>{mood || "ALL"} List is selected </Row>
      <Row>
        <Col className="d-flex justify-content-between">
          <ButtonGroup>
            <Button variant="primary" onClick={() => setMood("")}>
              All
            </Button>
            <Button variant="info" onClick={() => setMood("happy")}>
              Happy
            </Button>
            <Button variant="warning" onClick={() => setMood("lazy")}>
              Lazy
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button variant="primary" onClick={() => setView(true)}>
              Grid
            </Button>
            <Button variant="info" onClick={() => setView(false)}>
              List
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex flex-wrap">
          {filterMovies.map((movie, i) =>
            view ? (
              <CustomCard
                key={i}
                movieObj={movie}
                btnTrue={false}
                handelOnDelete={handelOnDelete}
              />
            ) : (
              <CustomList
                key={i}
                movieObj={movie}
                btnTrue={false}
                handelOnDelete={handelOnDelete}
              />
            )
          )}
        </Col>
      </Row>
    </div>
  );
};
