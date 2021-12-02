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

import BoardWrite from "components/Board/BoardWrite";


var dashRoutes = [
  {
    path: "/board/write/:id",
    icon: "design_app",
    component: BoardWrite,
    layout: "/admin",
  }
  
];
export default dashRoutes;
