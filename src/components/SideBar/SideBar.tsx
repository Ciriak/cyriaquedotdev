import classNames from 'classnames';
import React, { useState } from 'react';
import './side-bar.scss';
import workCategories from '../../constants/workCategories';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
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
              <Link to={cat.link} key={catIndex}>
                <div className="categorie-button">
                  <Icon className="categorie-icon" path={cat.iconPath} size={0.8} />

                  <span className="categorie-title">{cat.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
