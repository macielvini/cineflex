import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Seats({ setTitle }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatsList, setSeatList] = useState(false);
  const { sessionId } = useParams();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`;

    const response = axios.get(URL);

    response.then((answer) => {
      setSeatList(answer.data);
    });

    response.catch((err) => console.log(err.response.data));

    setTitle("Selecione o(s) assento(s):");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addSeat(seat) {
    if (selectedSeats.includes(seat)) {
      const newArr = selectedSeats.filter((s) => s.id !== seat.id);
      setSelectedSeats(newArr);
      return;
    }

    setSelectedSeats([...selectedSeats, seat]);
  }

  return (
    <>
      {!seatsList ? (
        <p>Carregando...</p>
      ) : (
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
                <span>{seatsList.day.weekday}</span> -{" "}
                <span>{seatsList.name}</span>
              </p>
            </div>
          </Footer>
        </>
      )}
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
