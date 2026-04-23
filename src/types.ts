export interface Guideline {
  id: string;
  text: string;
  points: number;
}

export interface SubCriterion {
  id: string;
  title: string;
  maxMarks: number;
  description: string;
  guidelines: Guideline[];
}

export interface Criterion {
  id: number;
  title: string;
  maxMarks: number;
  subCriteria: SubCriterion[];
}

export interface AssessmentState {
  [criterionId: number]: {
    [subCriterionId: string]: string[]; // Array of selected guideline IDs
  };
}
