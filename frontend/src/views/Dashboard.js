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
  UncontrolledTooltip,
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

function Dashboard() {
  const data = [
    {number1 : 1, number2 : 13, number3 : 18, number4: 25, number5 : 38, number6 : 44},
    {number1 : 3, number2 : 18, number3 : 19, number4: 40, number5 : 41, number6 : 44},
    {number1 : 6, number2 : 17, number3 : 25, number4: 38, number5 : 43, number6 : 44},
    {number1 : 2, number2 : 14, number3 : 25, number4: 29, number5 : 42, number6 : 44},
    {number1 : 4, number2 : 22, number3 : 24, number4: 25, number5 : 44, number6 : 45},
  ];

  const dataList = data.map((item, idx) => (
      <LottoBall
          number = {item}
          key = {idx}
      />
  ));
  return (
    <>

      <div className="content">
        {dataList}
      </div>


    </>
  );
}

export default Dashboard;
