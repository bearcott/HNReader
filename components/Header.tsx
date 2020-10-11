import styled from "@emotion/styled";

export const Header = () => {
  return (
    <Wrapper>
      <h1>HN Reader</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  max-width: 1000px;
  width: 100%;
  margin: auto;
  h1 {
    border-bottom: 2px solid;
  }
`;
