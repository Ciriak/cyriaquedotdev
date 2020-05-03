import React, { useState, useEffect } from 'react';
import Work, { IWorkProps } from "./components/Work";
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

const works: IWorkProps[] = [
  {
    image: "https://i.imgur.com/aZFLk0Z.gif",
    title: "Carnelian",
    desc: "A software that allow you to run userscripts on desktop",
    url: "http://www.carnelian.io"
  },
  {
    image: "/work/scanner.png",
    title: "Steam Scanner",
    desc: "Steam Scanner is an utility that runs as a background process, grabs your games from others launchers and adds them to your Steam library.",
    url: "https://steam-scanner.com"
  },
  {
    image: "/work/tagifier.jpg",
    title: "Tagifier",
    desc: "A metadata editor for mp3 files.<br>With Tagifier you can add some metadata like the composer of the song or a custom cover image",
    url: "https://github.com/Ciriak/Tagifier"
  },
  {
    image: "/work/dailywallpaper.png",
    title: "Daily Wallpaper",
    desc: "A Twitter bot who post a new Wallpaper every day",
    url: "https://twitter.com/DLWallpaperBot"
  },
  {
    image: "/work/codepen.png",
    title: "My Codepen",
    desc: "A collection of small web experiments.",
    url: "https://codepen.io/Ciriak/pens/showcase"
  },
  {
    image: "/work/ludum.png",
    title: "Ludum Dare entries",
    desc: "My entries for the <b>Ludum Dare</b>,<br> a competition where you have to create a game in 48 hours.<br>The compos were done in solo and the jams with some friends",
    url: "https://ldjam.com/users/cyriaque/games"
  }]

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
              return <a href={link.url} key={linkIndex} target="_blank" rel="noopener noreferrer">
                <div className="link" onMouseEnter={() => setSubtitle(link.label)} onMouseLeave={() => setSubtitle(originalSubTitle)}>
                  <img src={link.icon} alt={link.label} />
                </div>
              </a>
            })}
          </div>
        </div>
      </div>

      <div className="section work-section">
        <div className="section-bg">

        </div>
        <div className="section-content">
          <h1>My work</h1>
          <div className="works-container">
            {works.map((work: IWorkProps, workIndex: number) => {
              return <Work key={workIndex} desc={work.desc} title={work.title} url={work.url} image={work.image} />
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
