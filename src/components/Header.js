import styled from "styled-components";
import moon from "../assets/moon-outline.svg";
import sun from "../assets/sunny-outline.svg";

export default function Header({ darkTheme, setDarkTheme }) {
  return (
    <>
      <StyledHeader>
        CINEFLEX
        <div onClick={() => setDarkTheme(!darkTheme)}>
          <img src={darkTheme ? sun : moon} alt="" />
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

  background: #c3cfd9;

  color: #e8833a;
  font-size: 32px;
  font-weight: 700;
  text-align: center;

  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;

    width: 30px;
    height: 30px;
    background-color: white;

    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    z-index: 10;
  }

  img {
    height: 90%;
    width: 90%;
  }
`;
