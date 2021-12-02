import React from "react";

function BoardWrite(props) {
  console.log(props.match.params.id);
  return(
    <div>글쓰기</div>
  )
}

export default BoardWrite;