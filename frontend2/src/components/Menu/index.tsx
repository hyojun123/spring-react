import React, { useState } from "react";
import { theme } from "../../core/theme";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
interface Props {
  navs: string[];
}
const Menu: React.FC<Props> = (props: Props) => {
  const [navBackground, setNavBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 65) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  document.addEventListener("scroll", handleScroll);

  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="md"
        style={{
          transition: "1s ease",
          backgroundColor: navBackground
            ? theme.colors?.navBgcol
            : "transparent",
        }}
        variant="dark"
      >
        <Link className={"navbar-brand"} to={"/"}>
          Hyojun&apos;s playground
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          {props.navs.map((item) => (
            <Link
              className={"nav-link"}
              key={item}
              style={{ color: theme.colors?.menuLinks }}
              to={"/" + item.toLowerCase()}
            >
              {item}
            </Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menu;
