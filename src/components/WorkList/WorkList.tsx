import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import works from '../../constants/works';

import IWork from '../../interfaces/Work.interface';
import './work-list.scss';
export default function WorkList() {
  interface IWorkCardProps {
    index: number;
    work: IWork;
  }

  function WorkCard(props: IWorkCardProps) {
    const work = props.work;

    let workLink = `/work/${work.id}`;
    if (work.disabled) {
      workLink = '#';
    }

    return (
      <Link to={workLink} style={{ animationDelay: `0.${props.index * 100}s` }} className={classNames('work-card', { disabled: work.disabled })}>
        {work.backgrounds.image && <div className="work-background" style={{ backgroundImage: `url('${work.backgrounds.image.url}')` }}></div>}

        <div className="work-content">
          <h2 className="work-name">{work.name}</h2>
          <p className="work-description">{work.description}</p>
          {/* <div className="work-tags-list"></div> */}
        </div>
      </Link>
    );
  }

  return (
    <>
      <div className="work-list">
        {works.map((work, workIndex) => {
          /* ignore hidden work */
          if (work.hidden) {
            return null;
          }
          return <WorkCard work={work} index={workIndex} key={workIndex} />;
        })}
      </div>
    </>
  );
}
