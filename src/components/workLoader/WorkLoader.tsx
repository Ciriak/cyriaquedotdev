import React from 'react';
import Work from '../work/Work';

import { findIndex } from 'lodash';
import { useParams } from 'react-router-dom';
import works from '../../constants/works';
export default function WorkLoader() {
  let { workId } = useParams<{ workId: string }>();

  const workIndex = findIndex(works, { id: workId });

  return <Work work={works[workIndex]} />;
}
