import Icon from '@mdi/react';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { workCategories } from '../../constants';
import './top-bar.scss';
export default function TopBar() {
  useEffect(() => {
    listenScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Listen for user scroll
   */
  function listenScroll() {
    window.onscroll = function (e: any) {
      setShowBar(window.scrollY > window.innerHeight / 2);
    };
  }

  const [showBar, setShowBar] = useState(false);

  return (
    <div className={classNames('top-bar', { active: showBar })}>
      <div className="icon">
        <span className="letter main">C</span>
        <span className="letter left">C</span>
        <span className="letter right">C</span>
      </div>
      <div className="categories-list">
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
