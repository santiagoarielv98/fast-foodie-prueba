export type Step = "reservation" | "contact" | "confirmation";

export type Config = {
  title: string;
  back?: string;
  next?: string;
};

export type StepConfig = Record<Step, Config>;

export type StepContextState = {
  step: Step;
  onNext: () => void;
  onPrev: () => void;
};

export type FormType = "numberOfPeople" | "datetime" | "contact";
