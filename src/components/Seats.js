import { useState, useEffect } from "react";
import styled from "styled-components";

const seatsList = {
  id: 1,
  name: "15:00",
  day: {
    id: 24062021,
    weekday: "Quinta-feira",
    date: "24/06/2021",
  },
  movie: {
    id: 1,
    title: "2067",
    posterURL:
      "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
    overview:
      "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
    releaseDate: "2020-10-01T00:00:00.000Z",
  },
  seats: [
    {
      id: 1,
      name: "1",
      isAvailable: false,
    },
    {
      id: 2,
      name: "2",
      isAvailable: true,
    },
    {
      id: 3,
      name: "3",
      isAvailable: false,
    },
    {
      id: 4,
      name: "4",
      isAvailable: true,
    },
    {
      id: 5,
      name: "5",
      isAvailable: true,
    },
    {
      id: 6,
      name: "6",
      isAvailable: true,
    },
    {
      id: 7,
      name: "7",
      isAvailable: true,
    },
    {
      id: 8,
      name: "8",
      isAvailable: true,
    },
    {
      id: 9,
      name: "9",
      isAvailable: true,
    },
    {
      id: 10,
      name: "10",
      isAvailable: true,
    },
    {
      id: 11,
      name: "11",
      isAvailable: true,
    },
    {
      id: 12,
      name: "12",
      isAvailable: true,
    },
    {
      id: 13,
      name: "13",
      isAvailable: true,
    },
    {
      id: 14,
      name: "14",
      isAvailable: true,
    },
    {
      id: 15,
      name: "15",
      isAvailable: true,
    },
    {
      id: 16,
      name: "16",
      isAvailable: true,
    },
    {
      id: 17,
      name: "17",
      isAvailable: true,
    },
    {
      id: 18,
      name: "18",
      isAvailable: true,
    },
    {
      id: 19,
      name: "19",
      isAvailable: true,
    },
    {
      id: 20,
      name: "20",
      isAvailable: true,
    },
    {
      id: 21,
      name: "21",
      isAvailable: true,
    },
    {
      id: 22,
      name: "22",
      isAvailable: true,
    },
    {
      id: 23,
      name: "23",
      isAvailable: true,
    },
    {
      id: 24,
      name: "24",
      isAvailable: false,
    },
    {
      id: 25,
      name: "25",
      isAvailable: false,
    },
    {
      id: 26,
      name: "26",
      isAvailable: true,
    },
    {
      id: 27,
      name: "27",
      isAvailable: true,
    },
    {
      id: 28,
      name: "28",
      isAvailable: true,
    },
    {
      id: 29,
      name: "29",
      isAvailable: true,
    },
    {
      id: 30,
      name: "30",
      isAvailable: true,
    },
    {
      id: 31,
      name: "31",
      isAvailable: true,
    },
    {
      id: 32,
      name: "32",
      isAvailable: true,
    },
    {
      id: 33,
      name: "33",
      isAvailable: true,
    },
    {
      id: 34,
      name: "34",
      isAvailable: true,
    },
    {
      id: 35,
      name: "35",
      isAvailable: true,
    },
    {
      id: 36,
      name: "36",
      isAvailable: true,
    },
    {
      id: 37,
      name: "37",
      isAvailable: true,
    },
    {
      id: 38,
      name: "38",
      isAvailable: true,
    },
    {
      id: 39,
      name: "39",
      isAvailable: true,
    },
    {
      id: 40,
      name: "40",
      isAvailable: true,
    },
    {
      id: 41,
      name: "41",
      isAvailable: true,
    },
    {
      id: 42,
      name: "42",
      isAvailable: true,
    },
    {
      id: 43,
      name: "43",
      isAvailable: true,
    },
    {
      id: 44,
      name: "44",
      isAvailable: true,
    },
    {
      id: 45,
      name: "45",
      isAvailable: true,
    },
    {
      id: 46,
      name: "46",
      isAvailable: true,
    },
    {
      id: 47,
      name: "47",
      isAvailable: true,
    },
    {
      id: 48,
      name: "48",
      isAvailable: true,
    },
    {
      id: 49,
      name: "49",
      isAvailable: true,
    },
    {
      id: 50,
      name: "50",
      isAvailable: true,
    },
  ],
};

export default function Seats() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  function addSeat(seat) {
    const newArr = [...selectedSeats, seat];
    setSelectedSeats(newArr);
  }

  return (
    <>
      <SeatsWrapper>
        {seatsList.seats.map((s) =>
          s.isAvailable ? (
            <StyledSeat
              key={s.id}
              isSelected={selectedSeats.includes(s)}
              onClick={() => addSeat(s)}
            >
              {s.name}
            </StyledSeat>
          ) : (
            <UnavaiableSeat key={s.id}>{s.name}</UnavaiableSeat>
          )
        )}
      </SeatsWrapper>

      <SeatDescriptionRow>
        <SeatDescription>
          <SelectedSeat />
          <p>Selecionado</p>
        </SeatDescription>
        <SeatDescription>
          <StyledSeat />
          <p>Disponível</p>
        </SeatDescription>
        <SeatDescription>
          <UnavaiableSeat />
          <p>Indisponível</p>
        </SeatDescription>
      </SeatDescriptionRow>

      <StyledForm>
        <label htmlFor="name">Nome do comprador</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Digite seu nome..."
        />
        <label htmlFor="cpf">CPF do comprador</label>
        <input
          id="cpf"
          type="text"
          name="cpf"
          placeholder="Digite seu CPF..."
        />
      </StyledForm>

      <BookSeatBtn>{"Reservar assento(s)"}</BookSeatBtn>

      <Footer>
        <Poster>
          <img src={seatsList.movie.posterURL} alt="" />
        </Poster>
        <div>
          <p>{seatsList.movie.title}</p>
          <p>
            <span>{seatsList.day.weekday}</span> - <span>{seatsList.name}</span>
          </p>
        </div>
      </Footer>
    </>
  );
}

const SeatsWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 7px;

  margin-bottom: 18px;
`;

const StyledSeat = styled.div`
  width: 26px;
  height: 26px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => (props.isSelected ? "#1aae9e " : "#c3cfd9")};
  border: 1px solid ${(props) => (props.isSelected ? "#0e7d71 " : "#808f9d")};
  border-radius: 50%;

  font-size: 11px;
`;

const SelectedSeat = styled(StyledSeat)`
  background: #1aae9e;
  border: 1px solid #0e7d71;
`;

const UnavaiableSeat = styled(StyledSeat)`
  background: #fbe192;
  border: 1px solid #f7c52b;
`;

const SeatDescriptionRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  p {
    text-align: center;
  }
`;

const SeatDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

const StyledForm = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  /* border: 1px solid red; */

  * {
    margin-bottom: 10px;
  }

  label {
    font-size: 18px;
    color: #293845;
  }

  input {
    height: 51px;

    border: 1px solid #d5d5d5;
    border-radius: 3px;

    font-size: 18px;
    padding-left: 10px;

    &::placeholder {
      font-weight: 400;
      font-size: 18px;

      color: #afafaf;
    }
  }
`;

const BookSeatBtn = styled.div`
  width: 225px;
  height: 42px;

  background: #e8833a;
  border-radius: 3px;

  margin-top: 50px;

  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
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
