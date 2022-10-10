import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../colors";

export default function Header({ darkTheme, setDarkTheme }) {
  const navigate = useNavigate();
  // const navigation = useNavigation();

  function changeTheme() {
    const res = window.confirm(
      "Ao mudar o tema a página será recarregada. Deseja continuar?"
    );

    if (res) setDarkTheme(!darkTheme);
  }

  return (
    <>
      <StyledHeader darkTheme={darkTheme}>
        <ion-icon name="arrow-back" onClick={() => navigate(-1)}></ion-icon>
        CINEFLEX
        <div onClick={() => changeTheme()}>
          {darkTheme ? (
            <ion-icon name="sunny"></ion-icon>
          ) : (
            <ion-icon name="moon"></ion-icon>
          )}
        </div>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 67px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => (props.darkTheme ? "#DA915D" : "#c3cfd9")};

  color: ${(props) => (props.darkTheme ? "#fff" : "#e8833a")};
  font-size: 32px;
  font-weight: 700;
  text-align: center;

  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 35px;
    height: 35px;
    border-radius: 50%;

    color: ${(props) =>
      props.darkTheme ? "#fff" : colors["footerBorderDark"]};
  }

  ion-icon {
    font-size: 30px;
  }
`;
