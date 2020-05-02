import React, { useState, useEffect } from 'react';
import './app.scss';


interface link {
  label: string;
  url: string;
  icon: string;
}
const links: link[] = [{
  url: "https://github.com/Ciriak",
  icon: "github.png",
  label: "My Github"
},
{
  url: "http://steamcommunity.com/id/Ciriak",
  icon: "steam.png",
  label: "My Steam account"
},
{
  url: "https://www.reddit.com/user/CYRIAQU3/",
  icon: "reddit.png",
  label: "My Reddit account"
},
{
  url: "https://twitter.com/Ciriak_",
  icon: "twitter.png",
  label: "My Twitter"
},
{
  url: "https://www.linkedin.com/in/cyriaque-delaunay-833504121/",
  icon: "linkedin.png",
  label: "My LinkedIn"
}
];

function App() {

  const originalSubTitle = "Web developer";

  const [subtitle, setSubtitle] = useState(originalSubTitle);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setVideoUrl(setBgVideo());
  }, []);

  let videoClasses = "section-bg video-bg";
  if (videoLoaded) {
    videoClasses += " loaded";
  }

  return (
    <div className="cyriaque">
      <div className="section main-section">
        <div className={videoClasses}>
          <video src={String(videoUrl)} autoPlay loop muted onCanPlay={() => {
            setVideoLoaded(true)
          }}></video>
        </div>
        <div className="section-content">
          <header>
            <h1>Cyriaque Delaunay</h1>
            <h2>{subtitle}</h2>
          </header>
          <div className="links-container">
            {links.map((link: link, linkIndex: number) => {
              return <div className="link" key={linkIndex} onMouseEnter={() => setSubtitle(link.label)} onMouseLeave={() => setSubtitle(originalSubTitle)}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <img src={link.icon} alt={link.label} />
                </a>
              </div>
            })}
          </div>
        </div>

      </div>


    </div>
  );

  /**
   * Select a random video and return it's url
   */
  function setBgVideo() {
    const videosList = ["tf2", "halo", "skyrim", "dkc2"];
    const video = videosList[Math.floor(Math.random() * videosList.length)];
    return "/video-bg/" + video + ".mp4";
  }
}

export default App;
