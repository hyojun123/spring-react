import React from "react";
import {tbody, thead} from "../../variables/general";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

// Function 방식
function BoardList(props) {

  const {boards} = props

  return (
      <Table striped bordered hover>
          <thead>
          <tr>
              <th>제목</th>
              <th>작성자</th>
              <th>조회수</th>
              <th>작성날짜</th>
          </tr>
          </thead>
          <tbody>
              {boards.map((board,idx) =>
                  <tr key={idx}>
                      <td><Link to='/admin/board/write'>{board.title}</Link></td>
                      <td>{board.writer}</td>
                      <td>{board.viewCnt}</td>
                      <td>{board.regTsp}</td>
                  </tr>
              )}
          </tbody>
      </Table>
  )
}

export default BoardList