import styled from "styled-components";

const BallWrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: #209869;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 18px;
`;

export default function Ball({ number }: { number: string }) {
  return <BallWrapper>{number}</BallWrapper>;
}
