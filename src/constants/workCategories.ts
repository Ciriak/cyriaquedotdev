import { mdiCodeBraces, mdiDrawing, mdiHeartOutline, mdiMusic } from '@mdi/js';

const workCategories: { title: string; iconPath: string; link: string }[] = [
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

export default workCategories;
