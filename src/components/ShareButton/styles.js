import styled from "styled-components";

const ShareButtonStyles = styled.div`
  position: relative;
  .mainIcon {
    background: hsl(214, 17%, 51%);
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    color: #fff;
    &:hover {
      background: hsl(212, 23%, 69%);
    }
  }
`;

export default ShareButtonStyles;
