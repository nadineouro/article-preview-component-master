import styled from "styled-components";

const AuthorStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .info {
    display: flex;
    flex-direction: column;
    .name {
      font-weight: bold;
      color: hsl(214, 17%, 51%);
    }
    .date {
      color: hsl(212, 23%, 69%);
    }
  }
`;

export default AuthorStyles;
