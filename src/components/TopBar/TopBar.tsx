import Icon from '@mdi/react';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { workCategories } from '../../constants';
import './top-bar.scss';
interface ITopBarProps {
  alwayShown?: boolean;
}
export default function TopBar(props: ITopBarProps) {
  /**
   * Listen for user scroll
   */
  function listenScroll() {
    if (props.alwayShown) {
      setShowBar(true);
      return;
    }
    window.onscroll = function (e: any) {
      setShowBar(window.scrollY > window.innerHeight / 2);
    };
  }

  const [showBar, setShowBar] = useState(true);

  return (
    <div className={classNames('top-bar', { active: showBar })}>
      <Link to={'/'} className="icon">
        <span className="letter main">C</span>
        <span className="letter left">C</span>
        <span className="letter right">C</span>
      </Link>
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
