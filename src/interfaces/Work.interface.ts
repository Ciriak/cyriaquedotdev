export default interface IWork {
  id: string;
  name: string;
  description: string;
  backgrounds: {
    image?: {
      url: string;
    };
    video?: {
      url: string;
    };
  };
  iconUrl?: string;
  links?: [
    {
      iconPath: string;
      label: string;
      url: string;
    }
  ];
}
