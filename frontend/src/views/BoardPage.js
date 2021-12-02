/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState} from "react";
// react plugin used to create charts

// reactstrap components
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Input, InputGroup, Row, Table} from "reactstrap";


import LottoBall from "../components/Lotto/LottoBall";
import axios from "axios";
import '../assets/css/Dashboard.css'
import PanelHeader from "components/PanelHeader/PanelHeader";

import { thead, tbody } from "variables/general";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import Board from "components/Board/Board";
function BoardPage() {
  const[boards, setBoards] = useState([]);
  const[number, setNumber] = useState(0);

  useEffect(() => {
    let data = [
      {id:1, title:"제목1", content:"내용1"},
      {id:2, title:"제목2", content:"내용2"},
      {id:3, title:"제목3", content:"내용3"},
    ]

    setBoards([...data])
  },[])
  

  
  return (
    <>
      <Link to='/admin/board/write'>
        <Button>글쓰기</Button>
      </Link>
    </>
  );
}

export default BoardPage;
