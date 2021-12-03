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
import {Button, Table} from 'react-bootstrap';
import '../assets/css/Dashboard.css'
import BoardList from "../components/Board/BoardList";
import {tbody, thead} from "variables/general";
import {Link} from "react-router-dom";
import {useEffect} from "react/cjs/react.development";
import axios from "axios";

function BoardPage() {
  const[boards, setBoards] = useState([]);


  useEffect(() => {
    axios.get('/api/board')
        .then(response =>{
          let data = response.data;
          setBoards([...data])
        })


  },[])
  

  
  return (
    <>
      <BoardList boards={boards}/>
      <Link to='/admin/board/write'>
        <Button  variant="primary">글쓰기</Button>
      </Link>
    </>
  );
}

export default BoardPage;
