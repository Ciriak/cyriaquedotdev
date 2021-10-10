import React from 'react';
import './work.scss';
import IWork from '../../interfaces/Work.interface';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import axios from 'axios';
import { useEffect, useState } from 'react';
export interface IWorkProps {
  work: IWork;
}

function Work(props: IWorkProps) {
  const work = props.work;

  const [workData, setWorkData] = useState(null);

  useEffect(() => {
    axios.get('/work/' + props.work.id + '.md').then((res) => {
      setWorkData(res.data);
    });
  }, [props.work]);
  return (
    <div className="work">
      {workData && (
        <>
          <div className="work-header">
            <div className="work-h-background" style={{ backgroundImage: `url('${work.imageUrl}')` }}></div>
            <div className="work-h-content">
              <h1 className="work-title">{work.label}</h1>
              <p>{work.description}</p>
            </div>
          </div>
          <div className="work-content">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} children={workData} />
          </div>
        </>
      )}
    </div>
  );
}

export default Work;
