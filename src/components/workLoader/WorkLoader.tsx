import React from 'react';
import Work from '../work/Work';

import { findIndex } from 'lodash';
import { useParams } from 'react-router-dom';
import works from '../../constants/works';

interface IWorkLoaderProps {
  workId?: string;
}
export default function WorkLoader(props: IWorkLoaderProps) {
  const propsWorkId = props.workId;

  let { workId } = useParams<{ workId: string }>();

  if (propsWorkId) {
    workId = propsWorkId;
  }

  const workIndex = findIndex(works, { id: workId });

  return <Work work={works[workIndex]} />;
}
