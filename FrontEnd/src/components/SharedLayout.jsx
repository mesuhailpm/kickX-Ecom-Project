import { Layout, Button, Menu, Avatar, Typography, Dropdown } from "antd";
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const HomePageAnt = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuItems, setMenuItems] = useState([
    {
      key: 1,
      name: "dashboard",
    },
    {
      key: 2,
      name: "orders",
    },
    {
      key: 3,
      name: "products",
    },
    {
      key: 4,
      name: "customers",
    },
    {
      key: 5,
      name: "inventory",
    },
    {
      key: 6,
      name: "settings",
    },
    {
      key: 7,
      name: "logout",
    },
  ]);
  const [activeMenu, setActiveMenu] = useState();
  const [params, setParams] = useState(useLocation().pathname.split("/").pop());
  const avatarUrl = "https://avatars.githubusercontent.com/u/44474874?v=4";

  useEffect(() => {
    menuItems.find((el) => {
      if (el.name === params) {
        const str = el.key;
        setActiveMenu(str.toString());
      }
    });
  }, [params]);

  // console.log(activeMenu ? activeMenu : "1");

  const items = [
    {
      key: "1",
      label: (
        <Text
          onClick={() => {
            alert("Logout");
          }}
        >
          Logout
        </Text>
      ),
    },
  ];

  return (
    <main className="main-container">
      <Layout style={{ height: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={"18%"}
          style={{
            height: "100%",
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
            overflow: "hidden",
          }}
        >
          <div style={{ textAlign: "center", marginTop: "1em" }}>
            <h2>KickX</h2>
          </div>
          <Menu
            style={{
              padding: "1em",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              color: "#313131",
              backgroundColor: "white",
            }}
            mode="inline"
            defaultSelectedKeys={[activeMenu ? activeMenu : "1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: (
                  <NavLink
                    onClick={(e) => {
                      setActiveMenu(e.currentTarget.textContent);
                    }}
                    className="navbar-link"
                    to="/admin"
                  >
                    Dashboard
                  </NavLink>
                ),
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: (
                  <NavLink
                    onClick={(e) => {
                      setActiveMenu(e.currentTarget.textContent);
                    }}
                    className="navbar-link"
                    to="/admin/orders"
                  >
                    Orders
                  </NavLink>
                ),
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: (
                  <NavLink
                    onClick={(e) => {
                      setActiveMenu(e.currentTarget.textContent);
                    }}
                    to="/admin/products"
                  >
                    Products
                  </NavLink>
                ),
              },
              {
                key: "4",
                icon: <UploadOutlined />,
                label: (
                  <NavLink
                    onClick={(e) => {
                      setActiveMenu(e.currentTarget.textContent);
                    }}
                    to="/admin/customers"
                  >
                    Customers
                  </NavLink>
                ),
              },
              {
                key: "5",
                icon: <UploadOutlined />,
                label: (
                  <NavLink
                    onClick={(e) => {
                      setActiveMenu(e.currentTarget.textContent);
                    }}
                    className="navbar-link"
                    to="/admin/inventory"
                  >
                    Inventory
                  </NavLink>
                ),
              },
              {
                key: "6",
                icon: <UploadOutlined />,
                label: (
                  <NavLink
                    onClick={(e) => {
                      setActiveMenu(e.currentTarget.textContent);
                    }}
                    to="/admin/settings"
                  >
                    Settings
                  </NavLink>
                ),
              },
              {
                key: "7",
                icon: <UploadOutlined />,
                label: (
                  <NavLink
                    onClick={() => {
                      alert("Logout");
                    }}
                    to="/admin/"
                  >
                    Logout
                  </NavLink>
                ),
              },
            ]}
          />
        </Sider>

        <Layout>
          <Header
            style={{
              backgroundColor: "white",
              color: "black",
              borderTop: "1px solid black",
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              KickX - Dashboard
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                columnGap: ".85em",
                alignItems: "center",
              }}
            >
              <Avatar src={avatarUrl} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text style={{ fontSize: ".9em", fontWeight: "bold" }}>
                  Abid Hassan
                </Text>
                <Text style={{ fontSize: ".75em" }}> Admin</Text>
              </div>

              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow
              >
                <DownOutlined
                  style={{ fontSize: ".75em", cursor: "pointer" }}
                />
              </Dropdown>
            </div>
          </Header>
          <Content style={{ padding: "2em", overflow: "scroll" }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </main>
  );
};

export default HomePageAnt;
