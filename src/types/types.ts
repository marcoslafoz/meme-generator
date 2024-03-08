export interface SkillType {
  name: string;
  percentage: number
}

export interface SkillsCategoryType {
  name: string;
  icon: any;
  skills: SkillType[];
}

export interface ProjectType {
  previewImg: any
  name: string
  description: string
  website: string
  github: string
}