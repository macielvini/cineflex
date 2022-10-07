import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Order({ setTitle }) {
  const navigate = useNavigate();

  useEffect(() => {
    setTitle("Pedido feito com sucesso");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const location = useLocation();

  return (
    <>
      <Wrapper>
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

  p {
    font-size: 22px;
    color: #293845;
  }

  & > div {
    margin-bottom: 25px;
  }

  & > div > div {
    margin-top: 10px;
  }
`;

const Heading = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #293845;
`;

const Btn = styled.div`
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
