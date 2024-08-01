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
