import styled from "styled-components";

const ArticleCardStyles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background: #fff;
  border-radius: 10px;
  max-width: 800px;
  .mainImage {
    flex: 1;
    border-radius: 10px 0 0 10px;
    max-width: 300px;
  }
  .articleContent {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 40px;
    h1 {
      margin-bottom: 10px;
    }
    p {
      line-height: 20px;
      color: hsl(214, 17%, 51%);
    }
    .cardFooter {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
    }
  }
`;

export default ArticleCardStyles;
