export type Schema = {
  projects: {
    id?: number;
    title: string;
    description: string;
    category: string;
    images: string;
    completionDate: string;
  };
  services: {
    id?: number;
    title: string;
    description: string;
    icon: string;
  };
  teamMembers: {
    id?: number;
    name: string;
    position: string;
    image: string;
    bio: string;
  };
};