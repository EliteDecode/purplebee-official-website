// Navbar Types

export type NavbarLinksProps = {
  title: string;
  description: string;
  image?: string;
  width?: string;
  links?: NavbarMiniLinksProps[];
};

export type NavbarMiniLinksProps = {
  title: string;
  path: string;
};

//Testimonials types

export type TestimonialsProps = {
  name: string;
  position: string;
  testimonial: string;
  companyName: string;
  aboutProject: string;
  companyLocation: string;
  image: string;
};

//Interview
export type InterviewsProps = {
  title: string;
  description: string;
  url: string;
  cover: string;
};

// TechnologySet
export type TechnologySetProps = {
  category: string;

  tools: {
    name: string;
    icon: string;
  }[];
};

//Expertise
export type ExpertiseDetailProps = {
  expertise: string;
  image: string;
  details: string[];
};

//IndustriesHeroProps

export type IndustriesHeroProps = {
  data: {
    subtitle: string;
    title: string;
    description: string;
    background: string;
    cta: string;
  };
};

//IndustriesQualityProps

export type IndustriesQualityProps = {
  data: {
    title: string;
    description: string;
    qualities?: string[];
    image: string;
  };
};

//IndustryScope
export type IndustryScopeProps = {
  data: {
    title: string;
    description: string;
    scope: {
      item: string;
      detail: string;
    }[];
  };
};

//IndustryProjects
export type IndustryProjectsProps = {
  data: {
    title: string;
    description: string;
    projects: {
      title: string;
      image: string;
      description: string;
    }[];
  };
};

//Company Achievements
export type CompanyAchievementsProps = {
  title: string;
  desc: string;
  icon: string;
};
