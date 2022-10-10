import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";

export default function Showtime({ setTitle }) {
  const [movie, setMovie] = useState({ days: [] });

  let { movieId } = useParams();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`;
    const response = axios.get(URL);
    response.then((answer) => {
      setMovie(answer.data);
    });

    setTitle("Selecione o horario:");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ShowtimeWrapper>
        {movie.days.map((d) => (
          <StyledShowtime key={d.id}>
            <p>
              <span>{d.weekday}</span> - <span>{d.date}</span>
            </p>
            <div>
              {d.showtimes.map((s, index) => (
                <Link to={`/assentos/${s.id} `} key={index}>
                  <StyledButton key={s.id}>{s.name}</StyledButton>
                </Link>
              ))}
            </div>
          </StyledShowtime>
        ))}
      </ShowtimeWrapper>
      <Footer posterURL={movie.posterURL} title={movie.title} />
    </>
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
