import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import works from '../../constants/works';

import IWork from '../../interfaces/Work.interface';
import './work-list.scss';
export default function WorkList() {
  interface IWorkCardProps {
    index: number;
    work: IWork;
  }

  const history = useHistory();

  const [workActive, setWorkActive] = useState(false);
  const [shouldRunAnim, setShouldRunAnim] = useState(true);
  useEffect(() => {
    history.listen(() => {
      setWorkActive(document.location.pathname.includes('/work'));
      // only run the animation the first time
      setShouldRunAnim(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <div className={classNames('work-list', { reduced: workActive, animated: shouldRunAnim })}>
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
