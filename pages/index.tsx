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
              src="https://lh3.googleusercontent.com/wRJNjtnuZn0MMb87vu1a48YjxCeB4ba7Uca9CvJxHU0iG5lzUPPVeLe1gXOLAlcR1GOC3-4YZ-74ACj3TWd33jCmPffkx9IXeW9cZYyqf8QSqNjQdQLsUXRyxo4d3F6t5DoIHGobI83mpYqErTNQWlcwnmpwuowB7XVYwkeui2BeXg7DKykyidL8sUv7KcRRpKP372kZQJp_AMLzWTaMc9NbnNaytLPfumNx7YJdBjC91Gfk9pj5QMq_V-zNzJ9HwbPZePawVFAQYG5qz_KJareL_LQavy8-km3-Oz7vKOirzrLGLH0XkuC9JX-cvFRRW-wm7K78PBazhMiey1-k8fOcKhOvMJnm06kv1WgjGpezYKFuETCM8eO6Z9dC2Z7JydzG-pspldhzOKJUIB5munVY-ILjh3YRa16FO1SVAv8kacwJcMhfcMGgORcfjMakgdRKJvwiqm8MMsvMsMuBSJ8ZQhbn-yG7LPSMp83cS1z2Obp8RWl42wcFl2LOZBDMLZpkme2D1iGplVTWxV6TBBpj21iITmhyWl97pMgXGPOqdi_gBcf2qYyRYacENT_fLPGHzpV4LioiRoIdPU8LmMQtPRx23hMraDjCgEr9N0EsMBrAkY9su876WBNTcU8-Wml5PQjXVntHXfifByw6pSDRrPuUIyBP-FlU5MvgprXsiiYo0D_F78WCJznb=s640-no?authuser=0"
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
