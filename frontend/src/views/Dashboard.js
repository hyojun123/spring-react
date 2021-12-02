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
import React, {useState, useEffect} from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip, InputGroup,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart,
} from "variables/charts.js";
import LottoBall from "../components/Lotto/LottoBall";
import axios from "axios";

function Dashboard() {
  const[data, setData] = useState([]);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);
  const insertPhoneNumber = () => {
    setIsPhoneNumber(telValidator(phoneNumber));
    getLottoData(phoneNumber);
  }

  const getLottoData = (phoneNumber) => {
    const params = 'phone='+phoneNumber
    
    axios.get('/api/lotto?' + params)
    .then(response => {
      setData(response.data);
    })

  }


  

  const telValidator = (tel) => {
    const msg = '유효하지 않는 전화번호입니다.';

    return true;
  }

  return (
    <>
      {!isPhoneNumber ?
      <InputGroup>
        <Input onChange={(e) => {setPhoneNumber(e.target.value)}} value={phoneNumber} style={{"backgroundColor":"white"}} placeholder="-없이 전화번호를 입력하세요"/>
        <Button onClick={insertPhoneNumber} color="primary">
          번호 입력
        </Button>
      </InputGroup>
      :
      <div className="content">
        {data.map((item, idx) => (
            <LottoBall
                number = {item}
                key = {idx}
            />
        ))}
      </div>
      }

    </>
  );
}

export default Dashboard;
