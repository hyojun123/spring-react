import React from "react";

// Function 방식
function Board(props) {
  const {boards, setBoards, number, setNumber} = props;
  console.log(boards);
  return (
  <div>
      <h1>홈 : {number} </h1>
      <button onClick={() => {
        setNumber(number + 1);
      }}>숫자 증가</button>
      <button onClick={() => {
       setBoards([]);
     }}>전체삭제</button>
    {boards.map((board) => <h3>제목 : {board.title} 내용:{board.content}</h3>)}
  </div>)
}

export default Board