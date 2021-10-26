import React from 'react';
import './work.scss';
import IWork from '../../interfaces/Work.interface';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { Link } from 'react-router-dom';
export interface IWorkProps {
  work: IWork;
}

function Work(props: IWorkProps) {
  const [workData, setWorkData] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/work/' + props.work.id + '.md').then((res) => {
      setWorkData(res.data);
    });

    const contentElem = document.getElementById('content');
    contentElem?.scrollTo({
      top: 0,
    });
  }, [props.work]);

  const work = props.work;

  return (
    <div className="work">
      {workData && (
        <>
          <div className="work-header">
            {work.backgrounds.image && <div className="work-h-background" style={{ backgroundImage: `url('${work.backgrounds.image.url}')` }}></div>}
            <Link to={'/'} className="work-close-button">
              <Icon path={mdiClose} size={2} />
            </Link>

            <div className="work-h-content">
              <h1 className="work-title">{work.name}</h1>
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
