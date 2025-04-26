import { HomeOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";

const { Sider, Content } = Layout;

function MainLayout(props: any) {
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
            <Menu.Item>
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
