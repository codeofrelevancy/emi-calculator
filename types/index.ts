import { ChangeEvent, FocusEvent } from "react";

interface Schedule {
  month: number;
  principalPayment: number;
  interestPayment: number;
  totalPayment: number;
  principalOutstanding: number;
  cumulativeInterest: number;
  cumulativePrincipal: number;
}

interface Outcome {
  emi: number;
  totalInterestPayable: number;
  principalAmount: number;
  totalPayment: number;
  schedule: Schedule[];
}

type Prepayments = {
  [key: number]: number;
};

interface Errors {
  loanAmount?: string;
  interestRate?: string;
  loanTenure?: string;
}

interface InitialState {
  loanAmount: number;
  interestRate: number;
  loanTenure: number;
  prepayments: Prepayments;
  outcome: Outcome;
  errors: Errors;
}

const initialState: InitialState = {
  loanAmount: 0,
  interestRate: 0,
  loanTenure: 0,
  prepayments: {},
  outcome: {
    emi: 0,
    totalInterestPayable: 0,
    principalAmount: 0,
    totalPayment: 0,
    schedule: [],
  },
  errors: {},
};

interface OutcomeProps {
  label: string;
  value: number | undefined;
}

interface TProps {
  children: any;
  colSpan?: number;
}

type LoanRepaymentScheduleTableProps = {
  onCalculate: () => void;
};

interface TextFieldProps {
  label?: string;
  name: string;
  unit: string;
  placeholder: string;
  value?: any;
  error?: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

interface ValidationRule {
  test: (value: any) => boolean;
  message: string;
}

interface FieldValidation {
  [key: string]: ValidationRule[];
}

export type {
  Errors,
  Schedule,
  Outcome,
  Prepayments,
  TextFieldProps,
  OutcomeProps,
  TProps,
  InitialState,
  LoanRepaymentScheduleTableProps,
  ValidationRule,
  FieldValidation,
};

export { initialState };
