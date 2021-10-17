import { mdiCodeBraces, mdiDrawing, mdiHeartOutline, mdiMusic } from '@mdi/js';

const workCategories: { title: string; iconPath: string; link: string }[] = [
  {
    title: 'Development',
    iconPath: mdiCodeBraces,
    link: '/work/development',
  },
  {
    title: 'Visual & design',
    iconPath: mdiDrawing,

    link: '/work/design',
  },
  {
    title: 'Audio and Music',
    iconPath: mdiMusic,
    link: '/work/audio',
  },
  // {
  //   title: 'Other stuff i like',
  //   iconPath: mdiHeartOutline,
  //   link: '/like',
  // },
];

export default workCategories;
