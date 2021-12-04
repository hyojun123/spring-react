import React from "react";
import {
  BallSpan1,
  BallSpan2,
  BallSpan3,
  BallSpan4,
  BallSpan5,
  Box,
  Text,
} from "./styled";
import { Col, Row } from "react-bootstrap";
interface SearchProps {
  lottos: any;
}

const RecommendLotto: React.FC<SearchProps> = ({ lottos }) => {
  const getComponentByNumber = (num: number) => {
    if (num < 10) {
      return <BallSpan1>{num}</BallSpan1>;
    } else if (num < 20) {
      return <BallSpan2>{num}</BallSpan2>;
    } else if (num < 30) {
      return <BallSpan3>{num}</BallSpan3>;
    } else if (num < 40) {
      return <BallSpan4>{num}</BallSpan4>;
    } else if (num < 50) {
      return <BallSpan5>{num}</BallSpan5>;
    }
  };

  return (
    <>
      {lottos.map((item: any, idx: number) => (
        <Row key={idx}>
          <Col lg={"12"}>
            {getComponentByNumber(item.drwtNo1)}
            {getComponentByNumber(item.drwtNo2)}
            {getComponentByNumber(item.drwtNo3)}
            {getComponentByNumber(item.drwtNo4)}
            {getComponentByNumber(item.drwtNo5)}
            {getComponentByNumber(item.drwtNo6)}
          </Col>
        </Row>
      ))}
    </>
  );
};

export default RecommendLotto;
