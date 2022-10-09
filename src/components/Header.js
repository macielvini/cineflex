import styled from "styled-components";

export default function Header({ darkTheme, setDarkTheme }) {
  return (
    <>
      <StyledHeader darkTheme={darkTheme}>
        CINEFLEX
        <div onClick={() => setDarkTheme(!darkTheme)}>
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

    color: ${(props) => (props.darkTheme ? "#fff" : "#121212")};
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    z-index: 10;

    &:hover {
      background-color: ${(props) => (props.darkTheme ? "#fff" : "#121212")};
      color: ${(props) => (!props.darkTheme ? "#fff" : "#121212")};
    }
  }

  ion-icon {
    font-size: 30px;
  }
`;
