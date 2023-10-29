export interface Content {
  [key: string]: {
    title: string;
    text: string;
    subtitle?: string;
  };
}

export interface Content2023 {
  [key: string]: {
    title: string;
    subtitle1: string;
    text1: string;
    subtitle2: string;
    text2: string;
  };
}

export interface Languages {
  languages: string[];
}
