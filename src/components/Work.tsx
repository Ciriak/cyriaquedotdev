import React from 'react';
import './work.scss';

export interface IWorkProps {
    title: string;
    desc: string;
    image: string;
    url?: string;
}

function Work(props: IWorkProps) {
    return (
        <a className="work" href={props.url} target="_blank" rel="noopener noreferrer">
            <div className="work-bg" style={{ backgroundImage: "url('" + props.image + "')" }}>
            </div>
            <div className="work-content">
                <h1>{props.title}</h1>
                <div className="work-desc">
                    <span dangerouslySetInnerHTML={{ __html: props.desc }}></span>
                </div>
            </div>
        </a >
    );
}

export default Work;
