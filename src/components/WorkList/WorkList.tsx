import React from 'react';
import { works } from '../../constants';
import IWork from '../../interfaces/Work.interface';
import './work-list.scss';
export default function WorkList() {
  function WorkCard(props: { work: IWork }) {
    const work = props.work;
    work.imageUrl = '/work/scanner.png';
    return (
      <div className="work work-card">
        <div className="work-background" style={{ backgroundImage: `url('${work.imageUrl}')` }}></div>
        <div className="work-content">
          <h2>{work.label}</h2>
          <div className="work-tags-list">#js #toto</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div id="development" className="work-list">
        {works.map((work, workIndex) => {
          return <WorkCard work={work} key={workIndex} />;
        })}
      </div>
    </>
  );
}
