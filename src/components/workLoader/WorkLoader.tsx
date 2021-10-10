import React from 'react';
import { useParams } from 'react-router';
import Work from '../work/Work';

import { works } from '../../constants';
import { findIndex } from 'lodash';

export default function WorkLoader() {
  const params = useParams<{ workId: string }>();

  if (!params.workId) {
    return null;
  }

  const workIndex = findIndex(works, { id: params.workId });

  return <Work work={works[workIndex]} />;
}
