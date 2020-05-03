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
        <div className="work">
            <div className="work-bg" style={{ backgroundImage: "url('" + props.image + "')" }}>
            </div>
            <div className="work-content">
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    <div className="link-btn"></div>
                </a>

                <h1>{props.title}</h1>
                <div className="work-desc">
                    <span dangerouslySetInnerHTML={{ __html: props.desc }}></span>
                </div>
            </div>
        </div >
    );
}

export default Work;
