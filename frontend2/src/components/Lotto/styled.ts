import styled from "styled-components";

export const Text = styled.h2`
  color: black;
  font-weight: bold;
  font-size: 35px;
`;

export const Box = styled.div`
  position: relative;
  padding: 100px 5% 30px 5%;
  background-color: white;
`;

export const BallSpan = styled.span`
    display:inline-block;
    border-radius:100%;
    text-align:center;
    vertical-align:middle;
    color:#fff;
    width: 30px;
    height: 26px;
    line-height: 24px;
    font-weight:500;
    margin-left:15px;
    /* text-shadow: 0px 0px 2px rgba(0, 0, 0, 1); */
`;

export const BallSpan1 = styled(BallSpan)`  
    background:#fbc400;
    text-shadow: 0px 0px 3px rgba(73, 57, 0, .8);
`;

export const BallSpan2 = styled(BallSpan)`  
    background:#69c8f2;
    text-shadow: 0px 0px 3px rgba(73, 57, 0, .8);
`;
export const BallSpan3 = styled(BallSpan)`  
    background:#ff7272;
    text-shadow: 0px 0px 3px rgba(73, 57, 0, .8);
`;
export const BallSpan4 = styled(BallSpan)`  
    background:#aaa;
    text-shadow: 0px 0px 3px rgba(73, 57, 0, .8);
`;
export const BallSpan5 = styled(BallSpan)`  
    background:#b0d840;
    text-shadow: 0px 0px 3px rgba(73, 57, 0, .8);
`;

export const LottoDiv = styled.div``;
