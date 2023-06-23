import styled from "@emotion/styled";
import { css } from "@emotion/core";

type IRankingCounter = {};

export const RankingCounter: React.FC<{ index: number; visible: boolean }> = ({
  index,
  visible,
}) => {
  return (
    <RankingWrapper big={!((index + 1) % 5)} visible={visible}>
      {index + 1}
    </RankingWrapper>
  );
};

const RankingWrapper = styled.div<{ big?: boolean; visible?: boolean }>`
  position: absolute;
  left: 50px;
  padding-top: 6.5px;
  margin-left: -40px;
  text-align: center;
  width: 30px;
  color: #ccc;
  font-size: 12px;
  transition: opacity 0.5s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  &:after {
    content: "";
    border-top: 1px solid #ccc;
    position: absolute;
    width: 12px;
    top: 13px;
    left: 100%;
    margin-left: 10px;
  }
  ${(props) =>
    props.big &&
    css`
      color: #333;
      font-size: 15px;
      padding-top: 7.5px;
      &:after {
        border-top-color: #aaa;
        width: 40px;
        top: 16px;
        margin-left: 8px;
      }
    `}
`;
