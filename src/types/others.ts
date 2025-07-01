export interface SectionCarProps {
  id: any;
}

export interface SliderSettings {
  customPaging: (id: number) => React.ReactElement;
  dots: boolean;
  arrows: boolean;
  dotsClass: string;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  afterChange: (current: number) => void;
}

export type CarProps = {
  image: string;
  price: string | number;
  name: string;
  badge: string;
  mileage: string | number;
  index: number;
};

export interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  submitButton?: React.ReactNode;
  children?: React.ReactNode;
}

export interface ClickedProps {
  clicked: boolean | number;
}

type Section = {
  title: string;
  content: React.ReactNode;
};

export type AccordionSectionProps = {
  section: Section;
  isActiveSection: boolean;
  setActiveIndex: (index: number | null) => void;
  sectionIndex: number;
};

export interface AccordionProps {
  sections: Section[];
}

type CarImages = {
  image: string;
  image2?: string;
  image3?: string;
  image4?: string;
};

export type MainCar = {
  make?: string;
  name: string;
  nameFull?: string;
  model?: string;
  price: string;
  mileage: string;
  badge: string;
  image: string;
  transmission?: string;
  vin?: string;
  color?: string;
  engineSize?: string;
  year?: string;
  type?: string;
  interiorColor?: string;
  description?: string;
  images: CarImages;
};

export type OurCar = {
  name: string;
  price: string;
  mileage: string;
  image: string;
};

export type AccordionItem = {
  title: string;
  content: React.ReactNode;
};