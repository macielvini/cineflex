import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import colors from "../colors";

export default function Seats({ setTitle, darkTheme }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatsList, setSeatList] = useState(false);
  const { sessionId } = useParams();
  const [form, setForm] = useState({
    name: "vini",
    cpf: "12345678900",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`;

    const promise = axios.get(URL);

    promise.then((res) => {
      setSeatList(res.data);
      setTitle("Selecione o(s) assento(s):");
    });

    promise.catch((err) => console.log(err.response.data));

    console.log("seats");

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

  function bookSeats(e) {
    e.preventDefault();

    if (selectedSeats.length === 0) return;

    const seatsIds = selectedSeats.map((s) => s.id);

    const body = {
      ids: seatsIds,
      name: form.name,
      cpf: form.cpf,
    };
    const URL =
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";

    const promise = axios.post(URL, body);
    promise.then(() => {
      navigate("/sucesso", {
        state: {
          seats: selectedSeats,
          name: form.name,
          cpf: form.cpf,
          movieTitle: seatsList.movie.title,
          weekday: seatsList.day.weekday,
          time: seatsList.name,
        },
      });
    });

    promise.catch((err) => err.response.data);
  }

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
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

          <StyledForm onSubmit={bookSeats} darkTheme={darkTheme}>
            <div>
              <label htmlFor="name">Nome do comprador</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Digite seu nome..."
                required={true}
                onChange={handleForm}
                value={form.name}
              />
              <label htmlFor="cpf">CPF do comprador</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                placeholder="Digite seu CPF..."
                minLength={11}
                maxLength={11}
                required={true}
                onChange={handleForm}
                value={form.cpf}
              />
            </div>

            <BookSeatBtn type="submit">{"Reservar assento(s)"}</BookSeatBtn>
          </StyledForm>

          <Footer
            posterURL={seatsList.movie.posterURL}
            title={seatsList.movie.title}
            weekday={seatsList.day.weekday}
            time={seatsList.name}
            darkTheme={darkTheme}
          />
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

  color: ${(props) => (props.isSelected ? "#fff " : colors["lightFont"])};

  background: ${(props) => (props.isSelected ? "#1aae9e " : "#c3cfd9")};
  border: 1px solid ${(props) => (props.isSelected ? "#0e7d71 " : "#808f9d")};
  border-radius: 50%;

  font-size: 11px;

  cursor: pointer;
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

const StyledForm = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${(props) =>
    props.darkTheme ? colors["darkFont"] : colors["lightFont"]};

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  margin: 0 auto;

  * {
    margin-bottom: 10px;
  }

  label {
    font-size: 18px;
  }

  input {
    height: 51px;

    border: 1px solid #d5d5d5;
    border-radius: 3px;

    font-size: 18px;
    padding-left: 10px;

    background: ${(props) =>
      props.darkTheme ? colors["darkBg"] : colors["lightBg"]};

    color: ${(props) =>
      props.darkTheme ? colors["darkFont"] : colors["lightFont"]};

    &::placeholder {
      font-weight: 400;
      font-size: 18px;

      color: #afafaf;
    }
  }
`;

const BookSeatBtn = styled.button`
  width: 225px;
  height: 42px;

  background: #e8833a;
  border-radius: 3px;
  border: none;

  margin-top: 50px;

  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;

  cursor: pointer;
`;
