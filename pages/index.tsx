import Head from "next/head";
import { Layout, Menu, Image, Avatar } from "antd";

const { Header } = Layout;

export default function Home() {
  return (
    <Layout>
      <Header className="header">
        <Image width={50} src="images/logo.png" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          className="menu"
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>

      <Layout className="site-layout">
        <div className="profile">
          <div className="image">
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 210 }}
              src="https://lh3.googleusercontent.com/pw/ACtC-3cLYpXDVQoR5I4o_WwK7i7psH9xEcU330aE9Xm6Y_R-IwufuWDROIOw3pvShKLpgG0Vdqnh4Peaq-T8jY-Hp0H3GJ5Mw1DYZ4Sx5BGBZrmqFpXB7ClIbfQx7cwU8aQcWnSqvLvQJ1XDdETFxdvji5AL=s640-no"
            />
          </div>
          <div className="info">
            <h1>
              Hey! I’m <b>Herosony</b>
            </h1>
            <p>
              Breakfast procuring no end happiness allowance assurance frank.
              Met simplicity nor difficulty unreserved who. Entreaties mr
              conviction dissimilar me astonished estimating cultivated.
            </p>
          </div>
        </div>
      </Layout>
    </Layout>
  );
}
