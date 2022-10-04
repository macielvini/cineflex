import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledHeader>CINEFLEX</StyledHeader>
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
`;
