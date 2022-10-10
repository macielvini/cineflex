import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../colors";

export default function Order({ setTitle, darkTheme }) {
  const navigate = useNavigate();

  useEffect(() => {
    setTitle("Pedido feito com sucesso");
    //se for /sucesso ai p verdinho
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const location = useLocation();

  return (
    <>
      <Wrapper darkTheme={darkTheme}>
        <div>
          <Heading>Filme e sessão</Heading>
          <div>
            <p>{location.state.movieTitle}</p>
            <p>
              {location.state.weekday} {location.state.time}
            </p>
          </div>
        </div>

        <div>
          <Heading>Ingressos</Heading>
          <div>
            {location.state.seats.map((s) => (
              <p key={s.id}>Assento {s.name}</p>
            ))}
          </div>
        </div>

        <div>
          <Heading>Comprador</Heading>
          <div>
            <p>Nome: {location.state.name}</p>
            <p>CPF: {location.state.cpf}</p>
          </div>
        </div>
      </Wrapper>
      <Btn onClick={() => navigate("/")}>Voltar para Home</Btn>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  font-size: 30px;

  color: ${(props) =>
    props.darkTheme ? colors["darkFont"] : colors["lightFont"]};

  div > div > p {
    font-size: 18px;
  }

  & > div {
    margin-bottom: 25px;
  }

  & > div > div {
    margin-top: 10px;
  }
`;

const Heading = styled.p`
  font-size: 22px;
  font-weight: 700;
`;

const Btn = styled.button`
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
