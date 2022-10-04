import styled from "styled-components";

const movie = {
  id: 2,
  title: "Joker",
  posterURL: "https://m.media-amazon.com/images/I/71Jxq2p5YWL._AC_SL1500_.jpg",
  overview: "HaHahAhAhHa",
  releaseDate: "2020-10-01T00:00:00.000Z",
  days: [
    {
      id: 24062021,
      weekday: "Quinta-feira",
      date: "24/06/2021",
      showtimes: [
        {
          name: "15:00",
          id: 1,
        },
        {
          name: "19:00",
          id: 2,
        },
      ],
    },
    {
      id: 25062021,
      weekday: "Sexta-feira",
      date: "25/06/2021",
      showtimes: [
        {
          name: "12:00",
          id: 3,
        },
        {
          name: "18:00",
          id: 4,
        },
      ],
    },
  ],
};

export default function Showtime({ setTitle, movieId }) {
  setTitle("Selecione o horario:");
  return (
    <>
      <ShowtimeWrapper>
        {movie.days.map((d) => (
          <StyledShowtime>
            <p>
              <span>{d.weekday}</span> - <span>{d.date}</span>{" "}
            </p>
            <div>
              {d.showtimes.map((s) => (
                <StyledButton>{s.name}</StyledButton>
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
