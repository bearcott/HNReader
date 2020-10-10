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
  padding: 10px;
`;
