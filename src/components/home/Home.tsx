import Icon from '@mdi/react';
import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import { workCategories } from '../../constants';
export default function Home() {
  return (
    <div className="home">
      <div className="icon">
        <span className="letter main">C</span>
        <span className="letter left">C</span>
        <span className="letter right">C</span>
      </div>
      <h1>Cyriaque Delaunay</h1>
      <h4>FRONT-END Developer</h4>
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
  );
}
