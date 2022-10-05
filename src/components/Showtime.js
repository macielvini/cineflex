import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Showtime({ setTitle, movieId }) {
  const [movie, setMovie] = useState({ days: [] });

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`;
    const response = axios.get(URL);
    response.then((answer) => {
      setMovie(answer.data);
    });

    setTitle("Selecione o horario:");
  }, []);

  return (
    // {movie === false ? <p>Carregando</p> : (
    <>
      <ShowtimeWrapper>
        {movie.days.map((d) => (
          <StyledShowtime key={d.id}>
            <p>
              <span>{d.weekday}</span> - <span>{d.date}</span>{" "}
            </p>
            <div>
              {d.showtimes.map((s) => (
                <StyledButton key={s.id}>{s.name}</StyledButton>
              ))}
            </div>
          </StyledShowtime>
        ))}
      </ShowtimeWrapper>
      <Footer>
        <Poster>
          <img src={movie.posterURL} alt={movie.title} />
        </Poster>
        <p>{movie.title}</p>
      </Footer>
    </>
    // )}
  );
}

const ShowtimeWrapper = styled.div`
  width: 100%;
`;

const StyledShowtime = styled.div`
  padding: 0 25px;

  p {
    font-size: 20px;
  }

  & > div {
    display: flex;
    gap: 8px;
  }

  * {
    margin-bottom: 22px;
  }
`;

const StyledButton = styled.div`
  width: 82px;
  height: 43px;

  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;

  background: #e8833a;
  border-radius: 3px;

  &:hover {
    background: hsla(25, 79%, 50%, 1);
    cursor: pointer;
  }
`;

const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  width: 100vw;
  height: 117px;

  background: #dfe6ed;
  border: 1px solid #9eadba;

  color: #293845;

  p {
    font-size: 26px;
  }
`;

const Poster = styled.div`
  width: 64px;
  height: 89px;
  padding: 8px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  margin: 14px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
