import React, { useState, useEffect } from "react";
import "./app.scss";

interface link {
  label: string;
  url: string;
  icon: string;
}

interface Background {
  name: string;
  label: string;
}

let currentBg: any;

const backgrounds: Background[] = [
  {
    name: "tf2",
    label: "Team Fortress 2 (2007)",
  },
  {
    name: "halo",
    label: "Halo : The Master Chief Collection (2014)",
  },
  {
    name: "dkc2",
    label: "Donkey Kong Country 2 (1995)",
  },
  {
    name: "skyrim",
    label: "The Elder Scrolls V : Skyrim (2011)",
  },
  {
    name: "ori",
    label: "Ori and the blind forest (2015)",
  },
  {
    name: "celeste",
    label: "Celeste (2018)",
  },
];

const links: link[] = [
  {
    url: "https://github.com/Ciriak",
    icon: "github.png",
    label: "My Github",
  },
  {
    url: "http://steamcommunity.com/id/Ciriak",
    icon: "steam.png",
    label: "My Steam account",
  },
  {
    url: "https://twitter.com/Ciriak_",
    icon: "twitter.png",
    label: "My Twitter",
  },
  {
    url: "https://www.linkedin.com/in/cyriaque-delaunay-833504121/",
    icon: "linkedin.png",
    label: "My LinkedIn",
  },
];

function App() {
  const originalSubTitle = "Front-End developer";

  const [subtitle, setSubtitle] = useState(originalSubTitle);
  const [videoUrl, setVideoUrl] = useState("");
  const [bgLabel, setBgLabel] = useState("");
  const [showBgLabel] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoBgOffset] = useState(0);

  useEffect(() => {
    setVideoBg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let videoClasses = "section-bg video-bg";
  if (videoLoaded) {
    videoClasses += " loaded";
  }

  return (
    <div className="cyriaque">
      <div className="section main-section">
        <div
          className={videoClasses}
          style={{ marginTop: "-" + videoBgOffset + "px" }}
        >
          <video
            src={String(videoUrl)}
            autoPlay
            loop
            muted
            onCanPlay={() => {
              setVideoLoaded(true);
            }}
          ></video>
        </div>
        <div className="section-content">
          <header>
            <h1>Cyriaque Delaunay</h1>
            <h2>{subtitle}</h2>
          </header>
          <div className="links-container">
            {links.map((link: link, linkIndex: number) => {
              return (
                <a
                  href={link.url}
                  key={linkIndex}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="link"
                    onMouseEnter={() => setSubtitle(link.label)}
                    onMouseLeave={() => setSubtitle(originalSubTitle)}
                  >
                    <img src={link.icon} alt={link.label} />
                  </div>
                </a>
              );
            })}
          </div>

          <div className={`bg-infos ${showBgLabel ? "active" : ""}`}>
            <span className="background-label">
              {bgLabel}    
              <b
                onClick={() => {
                  setVideoBg();
                }}
              >
                [change]
              </b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  /**
   * Select a random video and return it's url
   */
  function getVideoBg() {
    const background =
      backgrounds[Math.floor(Math.random() * backgrounds.length)];
    return background;
  }

  function setVideoBg() {
    const background = getVideoBg();
    if (background === currentBg) {
      setVideoBg();
      return;
    }
    currentBg = background;
    setVideoUrl("/video-bg/" + background.name + ".mp4");
    setBgLabel(background.label);
  }
}

export default App;
