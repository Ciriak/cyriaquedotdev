import { mdiCodeBraces, mdiDrawing, mdiHeartOutline, mdiMusic } from '@mdi/js';
import IWork from './interfaces/Work.interface';

export const workCategories: { title: string; iconPath: string; link: string }[] = [
  {
    title: 'Development',
    iconPath: mdiCodeBraces,
    link: '#development',
  },
  {
    title: 'Visual & design',
    iconPath: mdiDrawing,
    link: '#visual',
  },
  {
    title: 'Audio and Music',
    iconPath: mdiMusic,
    link: '#audio',
  },
  {
    title: 'Other stuff i like',
    iconPath: mdiHeartOutline,
    link: '/like',
  },
];

export const works: IWork[] = [
  { id: 'carnelian', label: 'Carnelian', content: 'Lorem ipsum', externalUrl: 'https://github.com/Ciriak/Carnelian-Manager' },
  { id: 'carnelian', label: 'Carnelian', content: 'Lorem ipsum', externalUrl: 'https://github.com/Ciriak/Carnelian-Manager' },
  { id: 'carnelian', label: 'Carnelian', content: 'Lorem ipsum', externalUrl: 'https://github.com/Ciriak/Carnelian-Manager' },
  { id: 'carnelian', label: 'Carnelian', content: 'Lorem ipsum', externalUrl: 'https://github.com/Ciriak/Carnelian-Manager' },
  { id: 'carnelian', label: 'Carnelian', content: 'Lorem ipsum', externalUrl: 'https://github.com/Ciriak/Carnelian-Manager' },
  { id: 'carnelian', label: 'Carnelian', content: 'Lorem ipsum', externalUrl: 'https://github.com/Ciriak/Carnelian-Manager' },
];
