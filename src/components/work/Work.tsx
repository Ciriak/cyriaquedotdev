import React from 'react';
import './work.scss';
import IWork from '../../interfaces/Work.interface';
export interface IWorkProps {
  work: IWork;
}

function Work(props: IWorkProps) {
  return <div className="work">work</div>;
}

export default Work;
