import React from "react";
import { Container } from "reactstrap";
import DashBoardPage from '../components/SearchPageComponents/Dashboard';
// import DashBoardPage from '../components/Profile/ContentsProfile';

const Search = () => {

  return (
    <Container className="mb-5">
        <DashBoardPage />
    </Container>
  );
};

export default Search;
