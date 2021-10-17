import classNames from 'classnames';
import React, { useState } from 'react';
import './side-bar.scss';
import workCategories from '../../constants/workCategories';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { mdiEmail, mdiGithub, mdiLinkedin, mdiMail, mdiTwitter } from '@mdi/js';
export default function SideBar() {
  function handleVideoLoaded() {
    setVideoLoaded(true);
  }

  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <nav className="sidebar">
      <div className={classNames('sidebar-background', { 'video-loaded': videoLoaded })}>
        <video src="/video-bg/halo.mp4" height="100%" onLoadedData={handleVideoLoaded} autoPlay={true} muted loop></video>
      </div>
      <div className="sidebar-content">
        <Link to="/" className="main-link">
          <div className="icon">
            <span className="letter main">C</span>
            <span className="letter left">C</span>
            <span className="letter right">C</span>
          </div>
          <h1>Cyriaque Delaunay</h1>
          <h4>FRONT-END Developer</h4>
        </Link>

        <div className="categories-container">
          {workCategories.map((cat, catIndex) => {
            return (
              // <Link to={cat.link} key={catIndex}>
              <div className="categorie-button">
                <Icon className="categorie-icon" path={cat.iconPath} size={0.8} />

                <span className="categorie-title">{cat.title}</span>
              </div>
              // </Link>
            );
          })}
        </div>

        <div className="social-container">
          <a href="https://github.com/Ciriak" target="_blank" rel="noopener noreferrer" title="My Github">
            <div className="social-btn">
              <Icon path={mdiGithub} size={1.5} />
            </div>
          </a>
          <a href="https://twitter.com/Ciriak_" target="_blank" rel="noopener noreferrer" title="My Twitter account">
            <div className="social-btn">
              <Icon path={mdiTwitter} size={1.5} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/cyriaquedelaunay/" target="_blank" rel="noopener noreferrer" title="My LinkedIn account">
            <div className="social-btn">
              <Icon path={mdiLinkedin} size={1.5} />
            </div>
          </a>

          <a href="mailto:cyriaquedelaunay@gmail.com" target="_blank" rel="noopener noreferrer" title="Contact me">
            <div className="social-btn">
              <Icon path={mdiEmail} size={1.5} />
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
