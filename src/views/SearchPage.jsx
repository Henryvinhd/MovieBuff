import React from "react";
import { Container, Row, Col } from "reactstrap";
import Content from "../components/Content";
import MovieProfile from "../components/MovieProfile";

const SearchPage = () => {

  return (
    <Container className="mb-5">
        <MovieProfile />
    </Container>
  );
};

export default SearchPage;
