import styled from "styled-components";

const movies = [
  {
    id: 1,
    title: "Forrest Gump",
    posterURL:
      "https://i.pinimg.com/originals/da/1b/42/da1b42a2603400ec6a5d371db8c9d1ed.jpg",
    overview: "Run Forrest, run!",
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
            name: "15:00",
            id: 3,
          },
          {
            name: "19:00",
            id: 4,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Joker",
    posterURL:
      "https://m.media-amazon.com/images/I/71Jxq2p5YWL._AC_SL1500_.jpg",
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
            name: "15:00",
            id: 3,
          },
          {
            name: "19:00",
            id: 4,
          },
        ],
      },
    ],
  },
];

export default function MovieScreen({ setMovieId }) {
  function selectMovie(movie) {
    setMovieId(movie.id);
  }

  return (
    <>
      <MoviesWrapper>
        {movies.map((m) => (
          <Poster key={m.id} onClick={() => selectMovie(m)}>
            <img src={m.posterURL} alt="" />
          </Poster>
        ))}
      </MoviesWrapper>
    </>
  );
}

const MoviesWrapper = styled.div`
  display: flex;

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
