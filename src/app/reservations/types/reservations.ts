export type StepReservation = "reservation" | "contact" | "confirmation";

export interface StepConfig {
  title: string;
  confirmButtonLabel?: string;
  backButtonLabel?: string;
}

export type StepConfigMap = Record<StepReservation, StepConfig>;

export type StepState = {
  currentStep: StepReservation;
  currentStepConfig: StepConfig;
  onNext: () => void;
  onBack: () => void;
};
