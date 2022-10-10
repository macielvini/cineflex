import styled from "styled-components";
import colors from "../colors";

export default function Header({ darkTheme, setDarkTheme }) {
  function changeTheme() {
    const res = window.confirm(
      "Ao mudar o tema a página será recarregada. Deseja continuar?"
    );

    if (res) setDarkTheme(!darkTheme);
  }

  return (
    <>
      <StyledHeader darkTheme={darkTheme}>
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

  width: 100%;
  height: 67px;

  display: flex;
  justify-content: center;
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
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    z-index: 10;
  }

  ion-icon {
    font-size: 30px;
  }
`;
