import { Avatar, List, Tooltip } from "antd";
import Icon from "@ant-design/icons";
import {
  FacebookSvg,
  YoutubeSvg,
  InstagramSvg,
  TwitterSvg,
} from "../components/icons";

const FacebookIcon = (props) => <Icon component={FacebookSvg} {...props} />;
const InstagramIcon = (props) => <Icon component={InstagramSvg} {...props} />;
const TwitterIcon = (props) => <Icon component={TwitterSvg} {...props} />;
const YoutubeIcon = (props) => <Icon component={YoutubeSvg} {...props} />;

const socialIcons = [
  {
    title: "Facebook",
    url: "https://web.facebook.com/simvirakkh",
    icon: <FacebookIcon style={{ fontSize: "22px" }} />,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/herosonykh/",
    icon: <InstagramIcon style={{ fontSize: "22px" }} />,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/Hero_Sony",
    icon: <TwitterIcon style={{ fontSize: "22px" }} />,
  },
  {
    title: "Youtube",
    url: "https://www.youtube.com/herosony",
    icon: <YoutubeIcon style={{ fontSize: "27px" }} />,
  },
];

/***********************
  Header Component
 ***********************/
const Header = (props) => {
  return (
    <header id="welcome-section">
      <div className="forest" />

      <div className="profile">
        <div className="image">
          <Avatar
            size={{ xs: 216, sm: 216, md: 216, lg: 216, xl: 216, xxl: 216 }}
            src="https://avatars3.githubusercontent.com/u/4160246?s=460&v=4"
            // src="https://lh3.googleusercontent.com/pw/ACtC-3cLYpXDVQoR5I4o_WwK7i7psH9xEcU330aE9Xm6Y_R-IwufuWDROIOw3pvShKLpgG0Vdqnh4Peaq-T8jY-Hp0H3GJ5Mw1DYZ4Sx5BGBZrmqFpXB7ClIbfQx7cwU8aQcWnSqvLvQJ1XDdETFxdvji5AL=s640-no"
          />
        </div>
        <div className="info">
          <h1>
            Hey! I’m <b>Herosony</b>
          </h1>
          <p>
            I am a <strong>Web Developer</strong> based in an ancient temple,
            Angkor Wat, Cambodia. I really enjoy solving problems as well as
            making things pretty, clean and easy to use. I can't stop learning
            new things; the more, the better. Dancing is my favorite hobby.
          </p>

          <List
            itemLayout="vertical"
            dataSource={socialIcons}
            renderItem={(icon) => (
              <Tooltip title={icon.title}>
                <a href={icon.url} target="_blank">
                  {icon.icon}
                </a>
              </Tooltip>
            )}
            grid={{
              xxl: 10,
              xl: 10,
              lg: 10,
              md: 10,
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
