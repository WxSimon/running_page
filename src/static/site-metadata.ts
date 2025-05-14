interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Simon Xin Running Page',
  siteUrl: 'https://blog.simoncode.top',
  logo: 'https://avatars.githubusercontent.com/u/20240266?s=400&u=d870ede3497c62427e08add8d760a6b7749ae80a&v=4',
  description: 'Simon Xin Running Page',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://blog.simoncode.top',
    },
    {
      name: 'About',
      url: 'https://blog.simoncode.top/about/',
    },
  ],
};

export default data;
