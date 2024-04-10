import Project from "./project.component";

const PROJECTS = [
  // {
  //   title: "Live Karaoke",
  //   img: "/images/live-karaoke-web.png",
  //   tech: ["Django", "Amazon RDS", "VueJS", "React Native"],
  //   desc:
  //     "This is a full-stack website and mobile app that I made which lets the users sing khmer karaoke song and post their recording to the public.",
  //   links: [
  //     {
  //       title: "Web",
  //       link: "https://livekaraoke.net",
  //     },
  //     {
  //       title: "iOS",
  //       link: "https://apps.apple.com/us/app/live-karaoke/id1514812136",
  //     },
  //     {
  //       title: "Android",
  //       link:
  //         "https://play.google.com/store/apps/details?id=com.rainbowtunes.livekaraoke",
  //     },
  //   ],
  // },
  // {
  //   title: "Sothoeun Website",
  //   img: "/images/sothoeun-web.png",
  //   tech: ["Django", "Bootstrap", "jQuery"],
  //   desc:
  //     "This is a buying, selling and fixing mobile website in Phnom Penh, Cambodia.",
  //   links: [
  //     {
  //       title: "Web",
  //       link: "http://sothoeun.com/",
  //     },
  //   ],
  // },
  {
    title: "HomeIdeaPro",
    img: "/images/sothoeun-web.png",
    tech: ["Python/Django"],
    desc:
      "Investigation and Consultation Services for Historical and Contemporary Building Construction Projects [សេវាកម្មសិក្សាគម្រោងសាងសង់អគារបុរាណ និងទំនើប]",
    links: [
      {
        title: "Web",
        link: "https://homeideapro.com",
      },
    ],
  },
  {
    title: "Rummit Investment",
    img: "/images/sothoeun-web.png",
    tech: ["Laravel", "Mobile/ReactNative"],
    desc:
      "Forex Investment",
    links: [
    ],
  },
];

/***********************
  Projects Component
 ***********************/

const Projects = (props) => {
  const cardBgImage = (url) => {
    return {
      backgroundImage: `url(${url})`,
    };
  };

  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of most of the projects I've worked on lately. Some of
            them are video tutorials because I wanna share all the skills I have
            to the world.
          </p>
        </div>
        <div className="projects-wrapper">
          {PROJECTS.map((item) => (
            <Project key={item.title} {...item}>
              <small>Built using {item.tech.join(", ")}</small>
              <p>{item.desc}</p>
            </Project>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
