import React, { useState } from "react";
import { Avatar, Menu } from "antd";
import { Link } from "react-router-dom";

import { rightLinks, leftLinks } from "./navbar-links";

const Navbar = () => {
  const [selected, setSelected] = useState({
    left: [],
    right: [],
  });

  return (
    <>
      <div style={{ float: "left", marginLeft: 10, marginRight: 10 }}>
        <Avatar src="./logo192.png" />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ float: "right" }}
        selectedKeys={selected.right}
        onClick={({ key }) => setSelected({ right: [key], left: [] })}
      >
        {rightLinks.map((link) => {
          return (
            <Menu.Item key={link.key}>
              <Link to={link.to}>{link.text}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={selected.left}
        onClick={({ key }) => setSelected({ right: [], left: [key] })}
      >
        {leftLinks.map((link) => {
          return (
            <Menu.Item key={link.key}>
              <Link to={link.to}>{link.text}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </>
  );
};

export default Navbar;
