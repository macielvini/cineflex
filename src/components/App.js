import React from "react";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import MovieScreen from "./MoviesScreen";
import Showtime from "./Showtime";
import Seats from "./Seats";
import Order from "./Order";
import Header from "./Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [title, setTitle] = React.useState("Selecione o filme:");

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />

        <Link to="/">
          <Header />
        </Link>

        <Wrapper>
          <PageTitle>{title}</PageTitle>
          <Routes>
            <Route path="/" element={<MovieScreen setTitle={setTitle} />} />

            <Route
              path={`/sessoes/:movieId`}
              element={<Showtime setTitle={setTitle} />}
            />

            <Route
              path="/assentos/:sessionId"
              element={<Seats setTitle={setTitle} />}
            />
            <Route path="/sucesso" element={<Order setTitle={setTitle} />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

const Wrapper = styled.div`
  margin: 67px auto 130px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.p`
  margin: 30px 0;
  font-size: 24px;
`;
