export default interface IWork {
  id: string;
  name: string;
  description: string;
  disabled?: boolean;
  hidden?: boolean;
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
