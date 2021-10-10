import React from 'react';
import { Link } from 'react-router-dom';
import { works } from '../../constants';
import IWork from '../../interfaces/Work.interface';
import './work-list.scss';
export default function WorkList() {
  function WorkCard(props: { work: IWork }) {
    const work = props.work;

    return (
      <Link to={`work/${work.id}`} className="work work-card">
        <div className="work-background" style={{ backgroundImage: `url('${work.imageUrl}')` }}></div>
        <div className="work-content">
          <h2 className="work-name">{work.label}</h2>
          <p className="work-description">{work.description}</p>
          <div className="work-tags-list">#js #toto</div>
        </div>
      </Link>
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
