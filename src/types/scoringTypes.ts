export interface ScoringInput {
    userTotalSum: number;
    correctTotalSum: number;
    totalQuestionItems: number;
}

export interface ScoringResult {
    userNumbers: number[];
    correctNumbers: number[];
    missedCorrectNumbers: number[];
    wrongNumbers: number[];
    points: number;
}

export interface TabsProps {
  activeTab: number;
  onChange: (index: number) => void;
  sequences: { name: string }[];
}

export interface NumberGridProps {
  numbers: number[][];
}

export interface ScoreInputsProps {
  userSum: string;
  correctSum: string;
  onUserChange: (val: string) => void;
  onCorrectChange: (val: string) => void;
}

export interface NumberGridProps {
  numbers: number[][];
  result?: ScoringResult | null;
}

export interface NumberItemProps {
  number: number;
  correctNumbers: number[];
  missedCorrectNumbers: number[];
  wrongNumbers: number[];
}