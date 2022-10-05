import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MovieScreen({ setTitle }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
    const response = axios.get(URL);
    response.then((answer) => {
      setMovies(answer.data);
    });

    setTitle("Selecione o filme:");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MoviesWrapper>
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

  img {
    width: 100%;
  }

  cursor: pointer;
`;
