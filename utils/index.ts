import { CURRENCY, MONTHS_IN_YEAR } from "@/constants";
import {
  Errors,
  InitialState,
  initialState,
  Prepayments,
  Schedule,
} from "@/types";
import { FIELD_VALIDATIONS } from "@/validations";

function toNumber(value: any) {
  const number = parseFloat(value.replace(/[^0-9.]/g, ""));
  if (Number.isNaN(number)) {
    return 0;
  }
  return number;
}

function toRoundNumber(value: number) {
  return Math.round(value);
}

function toCurrency(value: number | undefined): string {
  if (!value || value <= 0) return "-";

  const formattedValue = Math.round(Number(value) * 100) / 100;

  return formattedValue.toLocaleString("en-US", {
    currency: CURRENCY,
    style: "currency",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function calculateEmiOutcome(
  loanAmount: number,
  interestRate: number,
  loanTenure: number,
  prepayments: Prepayments
) {
  // EMI Details
  const monthlyInterestRate = interestRate / MONTHS_IN_YEAR / 100;
  const totalPayments = loanTenure * MONTHS_IN_YEAR;
  const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
  const emi =
    (loanAmount *
      monthlyInterestRate *
      (1 + monthlyInterestRate) ** totalPayments) /
    denominator;

  let totalInterestPayable = 0;

  // Loan Repayment Schedule
  let cumulativeInterest = 0;
  let cumulativePrincipal = 0;

  const schedule: Schedule[] = [];
  let principalOutstanding = loanAmount;

  for (let i = 1; i <= loanTenure * MONTHS_IN_YEAR; i++) {
    const interestPayment =
      (principalOutstanding * interestRate) / (100 * MONTHS_IN_YEAR);

    if (interestPayment <= 0) {
      break;
    }
    let principalPayment = emi - interestPayment;

    if (prepayments && prepayments[i] > 0) {
      principalPayment = principalPayment + prepayments[i];
    }

    const totalPayment = emi;

    totalInterestPayable += interestPayment;

    principalOutstanding = principalOutstanding - principalPayment;

    cumulativeInterest =
      i === 1 ? interestPayment : cumulativeInterest + interestPayment;

    cumulativePrincipal =
      i === 1 ? principalPayment : cumulativePrincipal + principalPayment;

    schedule.push({
      month: i,
      principalPayment,
      interestPayment,
      totalPayment,
      principalOutstanding,
      cumulativeInterest: cumulativeInterest,
      cumulativePrincipal: cumulativePrincipal,
    });
  }

  return {
    emi,
    totalInterestPayable,
    schedule,
    totalPayment: totalInterestPayable + loanAmount,
    principalAmount: loanAmount,
  };
}

function isNumber(value: any) {
  return !isNaN(Number(value));
}

function validateField(
  state: InitialState,
  fieldName: keyof Errors
): string | undefined {
  const fieldValidationRules = FIELD_VALIDATIONS[fieldName];
  if (!fieldValidationRules) {
    return undefined;
  }

  const fieldValue = state[fieldName];
  const failedValidationRule = fieldValidationRules.find(
    (rule) => !rule.test(fieldValue)
  );

  if (failedValidationRule) {
    return failedValidationRule.message;
  }

  return undefined;
}

function validateForm(state: typeof initialState) {
  const errors: Errors = {};

  for (const fieldName of Object.keys(FIELD_VALIDATIONS) as Array<
    keyof Errors
  >) {
    const errorMessage = validateField(state, fieldName);
    if (errorMessage) {
      errors[fieldName] = errorMessage;
    }
  }

  return errors;
}

const formatter = (value: any) => toCurrency(value);

const pieFormatter = ({ percent }: any) => `${(percent * 100).toFixed(0)}%`;

export {
  toCurrency,
  calculateEmiOutcome,
  toNumber,
  toRoundNumber,
  isNumber,
  formatter,
  pieFormatter,
  validateForm,
};
