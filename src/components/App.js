import React from "react";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import MovieScreen from "./MoviesScreen";
import Showtime from "./Showtime";

export default function App() {
  const [movie, setMovie] = React.useState(null);
  const [title, setTitle] = React.useState("Selecione o filme");

  return (
    <>
      <GlobalStyles />
      <StyledHeader onClick={() => setMovie(null)}>CINEFLEX</StyledHeader>
      <Wrapper>
        <PageTitle>{title}</PageTitle>
        {!movie ? (
          <MovieScreen setMovie={setMovie} />
        ) : (
          <Showtime
            movieTitle={movie.title}
            setTitle={setTitle}
            movieId={movie.id}
          />
        )}
      </Wrapper>
    </>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 67px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #c3cfd9;

  color: #e8833a;
  font-size: 32px;
  font-weight: 700;
  text-align: center;

  cursor: pointer;
`;

const Wrapper = styled.div`
  margin: 67px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.p`
  margin: 30px 0;
  font-size: 24px;
`;
