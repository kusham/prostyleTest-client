import { Menu } from "antd";
import React, { useState } from "react";
import { CustomSider, Logo, SliderContentWrapper } from "./Layout-style";
import { Link } from "react-router-dom";
import {
  AlignLeftOutlined,
  BankOutlined,
  HomeFilled,
  UserOutlined,
} from "@ant-design/icons";
// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     disabled: type === 'disabled',
//   };
// }

// const items = [
//   getItem('Option 1', '1', <HomeFilled />, null),
  // getItem('Option 2', '2', <DesktopOutlined />),
  // getItem('Option 3', '3', <ContainerOutlined />),
  // getItem('Navigation One', 'sub1', <MailOutlined />, [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  //   getItem('Option 7', '7'),
  //   getItem('Option 8', '8'),
  // ]),
  // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
  //   getItem('Option 9', '9'),
  //   getItem('Option 10', '10'),
  //   getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  // ]),
// ];


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  return (
    <CustomSider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Logo>{collapsed ? "ABC" : "ABC Collage"}</Logo>
      <SliderContentWrapper>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="0" icon={<HomeFilled />} disabled>
            Dashboard
          </Menu.Item>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to={`/students`}>Students</Link>
          </Menu.Item>
          <Menu.SubMenu key="2" title="Departments" icon={<BankOutlined />}>
            <Menu.Item key="3" disabled icon={<AlignLeftOutlined />}>
              IT
            </Menu.Item>
            <Menu.Item key="4" disabled icon={<AlignLeftOutlined />}>
              Management
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </SliderContentWrapper>
    </CustomSider>
  );
};

export default Sidebar;
