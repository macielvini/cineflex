import React from "react";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import MovieScreen from "./MoviesScreen";
import Showtime from "./Showtime";
import Seats from "./Seats";
import Order from "./Order";
import Header from "./Header";
import colors from "../colors";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [title, setTitle] = React.useState("Selecione o filme:");
  const [darkTheme, setDarkTheme] = React.useState(false);

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />

        <Link to="/">
          <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        </Link>

        <Wrapper darkTheme={darkTheme}>
          <PageTitle darkTheme={darkTheme}>{title}</PageTitle>

          <Routes>
            <Route path="/" element={<MovieScreen setTitle={setTitle} />} />

            <Route
              path={`/sessoes/:movieId`}
              element={<Showtime darkTheme={darkTheme} setTitle={setTitle} />}
            />

            <Route
              path="/assentos/:sessionId"
              element={<Seats setTitle={setTitle} darkTheme={darkTheme} />}
            />

            <Route
              path="/sucesso"
              element={<Order darkTheme={darkTheme} setTitle={setTitle} />}
            />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 67px 24px 130px;
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;

  background-color: ${(props) =>
    props.darkTheme ? colors["darkBg"] : colors["lightBg"]};
  color: ${(props) =>
    props.darkTheme ? colors["darkFont"] : colors["lightFont"]};
`;

const PageTitle = styled.p`
  margin: 30px 0;
  font-size: 24px;

  color: ${(props) =>
    window.location.pathname === "/sucesso"
      ? colors["successFont"]
      : props.darkTheme
      ? colors["darkFont"]
      : colors["lightFont"]};

  font-weight: 700;
`;
