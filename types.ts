export enum SlideTemplate {
  Title = 'Title',
  ThreeColumnIcon = 'ThreeColumnIcon',
  Comparison = 'Comparison',
  Diagram = 'Diagram',
  CardList = 'CardList',
  InfographicSummary = 'InfographicSummary',
  Agenda = 'Agenda',
  Quiz = 'Quiz',
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

export interface InfographicSectionItem {
  icon: string;
  iconColor?: string;
  text: string;
  chineseText: string;
}

export interface InfographicSection {
  title: string;
  chineseTitle: string;
  items: InfographicSectionItem[];
}

export interface InfographicApplication {
    icon: string;
    name: string;
}

export interface WorkflowStep {
  icon: string;
  label: string;
  chineseLabel: string;
}

export interface AgendaColumnItem {
    text: string;
    icon?: string;
}

export interface AgendaColumn {
    icon: string;
    title: string;
    items: AgendaColumnItem[];
    isOrdered?: boolean;
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
  infographicSections?: InfographicSection[];
  applications?: InfographicApplication[];
  workflow?: WorkflowStep[];
  logoUrl?: string;
  agendaColumns?: AgendaColumn[];
  // Quiz specific properties
  quizIcon?: string;
  scenario?: string;
  isAnswerSlide?: boolean;
  correctAnswer?: 'Traditional AI' | 'Generative AI';
  explanation?: string;
}