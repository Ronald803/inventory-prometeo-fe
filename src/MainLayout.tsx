import { HomeOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Sider, Content } = Layout;

function MainLayout(props: any) {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => {
          setCollapsed(value);
        }}
      >
        <div>
          <Menu>
            <Menu.Item
              onClick={() => {
                navigate("/");
              }}
              key="home"
            >
              <HomeOutlined />
              <span>Home</span>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Layout>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
