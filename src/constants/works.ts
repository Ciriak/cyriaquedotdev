import IWork from '../interfaces/Work.interface';

/**
 * Works list
 *
 * Put the most recent in the bottom
 */
const works: IWork[] = [
  {
    id: 'carnelian',
    name: 'Carnelian',
    description: 'Automation and userscripts for desktop',
    backgrounds: {
      image: {
        url: '/images/work/carnelian.png',
      },
    },
  },
  {
    id: 'steam-scanner',
    name: 'Steam Scanner',
    description: 'An utility that add you games from other launchers on Steam ',
    backgrounds: {
      image: {
        url: '/images/work/steam-scanner.png',
      },
    },
  },

  {
    id: 'placeholder',
    name: 'Lorem ipsum',
    description: 'Placeholder text',
    backgrounds: {
      image: { url: '/images/work/placeholder.png' },
    },
  },
  {
    id: 'placeholder',
    name: 'Lorem ipsum',
    description: 'Placeholder text',
    backgrounds: {
      image: { url: '/images/work/placeholder.png' },
    },
  },
  {
    id: 'placeholder',
    name: 'Lorem ipsum',
    description: 'Placeholder text',
    backgrounds: {
      image: { url: '/images/work/placeholder.png' },
    },
  },
  {
    id: 'placeholder',
    name: 'Lorem ipsum',
    description: 'Placeholder text',
    backgrounds: {
      image: { url: '/images/work/placeholder.png' },
    },
  },
  {
    id: 'ld49',
    name: 'Game for the 49th Ludum Dare',
    description: 'My entry for the 49th Ludum dare (cancelled)',
    backgrounds: {
      image: {
        url: '/images/work/ld49.png',
      },
    },
  },
];

export default works;
