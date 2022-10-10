import styled from "styled-components";
import colors from "../colors";

export default function Footer({ posterURL, title, weekday, time, darkTheme }) {
  return (
    <>
      {" "}
      <StyledFooter darkTheme={darkTheme}>
        <Poster>
          <img src={posterURL} alt="" />
        </Poster>
        <div>
          <p>{title}</p>
          <p>{weekday && `${weekday} - ${time}`}</p>
        </div>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  width: 100vw;
  height: 117px;

  background: ${(props) =>
    props.darkTheme ? colors["footerBgDark"] : colors["footerBgLight"]};
  border-top: 1px solid
    ${(props) =>
      props.darkTheme
        ? colors["footerBorderDark"]
        : colors["footerBorderLight"]};

  color: ${(props) =>
    props.darkTheme ? colors["darkFont"] : colors["lightFont"]};

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
