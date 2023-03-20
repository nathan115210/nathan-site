export enum Direction {
  LEFT = "left",
  RIGHT = "right",
  UP = "up",
  DOWN = "down",
}

export enum TransitionType {
  TWEEN = "tween",
  SPRING = "spring",
}
export interface TitleProps {
  title: string;
  icon: string;
}

export interface ExperiencesProps extends TitleProps {
  company_name: string;
  bgColor: string;
  iconClassNames?: string;
  textColor?: string;
  date: string;
  description?: string;
  points?: string[];
}
export type TagType = {
  name: string;
  color: string;
};
export interface ProjectProps {
  name: string;
  description: string;
  tags: TagType[];
  image: string;
  source_code_link?: string;
  case_study_link?: string;
}
