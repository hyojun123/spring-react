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
import {Button, Input, InputGroup,} from "reactstrap";


import LottoBall from "../components/Lotto/LottoBall";
import axios from "axios";
import '../assets/css/Dashboard.css'
function LottoPage() {
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
    const regExp = /^(\d{10,11})$/;
    if(!regExp.test(tel)) {
      alert(msg);
      return false;
    }

    return confirm('입력하신 전화번호가 ' + tel + ' 이 맞습니까?');
  }

  return (
    <>
      {!isPhoneNumber ?
      <>
      <h1 className="page-title">전화번호 입력 후 확인 가능합니다</h1>
      <InputGroup>
        <Input onChange={(e) => {setPhoneNumber(e.target.value)}} value={phoneNumber} style={{"backgroundColor":"white"}} placeholder="-없이 전화번호를 입력하세요"/>
        <Button onClick={insertPhoneNumber} color="primary">
          번호 입력
        </Button>
      </InputGroup>
      </>
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

export default LottoPage;
