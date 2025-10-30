export enum SlideTemplate {
  Title = 'Title',
  ThreeColumnIcon = 'ThreeColumnIcon',
  Comparison = 'Comparison',
  Diagram = 'Diagram',
  CardList = 'CardList',
}

export interface ThreeColumnItem {
  icon: string;
  iconColor?: string;
  title: string;
  chineseTitle?: string;
}

export interface ComparisonColumn {
  icon: string;
  iconColor?: string;
  title: string;
  chineseTitle?: string;
  text: string;
  chineseText?: string;
  example: string;
  chineseExample?: string;
}

export interface CardListItem {
  title: string;
  chineseTitle?: string;
  text: string;
  chineseText?: string;
}

export interface SlideData {
  template: SlideTemplate;
  title?: string;
  chineseTitle?: string;
  subtitle?: string;
  chineseSubtitle?: string;
  visual?: { type: string; description: string };
  columns?: ThreeColumnItem[] | ComparisonColumn[];
  cardItems?: CardListItem[];
  footer?: string;
  chineseFooter?: string;
  icon?: string;
  iconColor?: string;
}
