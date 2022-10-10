import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import colors from "../colors";

export default function MovieScreen({ setTitle, darkTheme }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
    const promise = axios.get(URL);

    promise.then((answer) => {
      if (isMounted) {
        setMovies(answer.data);
        setTitle("Selecione o filme:");
      }
      console.log("then moviescreen", isMounted);
    });

    promise.catch((err) => console.log(err.response.data));

    console.log("movies screen");

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MoviesWrapper darkTheme={darkTheme}>
        {movies.map((m, index) => (
          <Link to={`/sessoes/${m.id}`} key={index}>
            <Poster key={m.id}>
              <img src={m.posterURL} alt={m.title} />
            </Poster>
          </Link>
        ))}
      </MoviesWrapper>
    </>
  );
}

const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  min-height: 100vh;

  background-color: ${(props) =>
    props.darkTheme ? colors["darkBg"] : colors["lightBg"]};
  color: ${(props) =>
    props.darkTheme ? colors["darkFont"] : colors["lightFont"]};
`;

const Poster = styled.div`
  width: 145px;
  height: 209px;
  left: 30px;
  top: 169px;

  padding: 8px;

  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  transition: all 200ms ease;

  img {
    width: 100%;
  }

  &:hover {
    transform: scale(1.03);
    filter: brightness(0.8);
  }

  cursor: pointer;
`;
