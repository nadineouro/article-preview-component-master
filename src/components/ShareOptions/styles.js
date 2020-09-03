import styled from "styled-components";

const ShareOptionsStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  border-radius: 8px;
  position: absolute;
  bottom: 70px;
  right: -95px;
  background: hsl(217, 19%, 35%);
  color: hsl(210, 46%, 95%);
  letter-spacing: 2px;
  &::before {
    position: absolute;
    top: 50px;
    content: "";
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

    border-top: 10px solid hsl(217, 19%, 35%);
  }
  .socialMedia {
    display: flex;
    align-items: center;
    margin: 0 8px;
    cursor: pointer;
    &:first-of-type {
        margin-left: 15px;
    }
  }
`;

export default ShareOptionsStyles;
