import { FieldValidation } from "@/types";
import { isNumber } from "@/utils";

const FIELD_VALIDATIONS: FieldValidation = {
  loanAmount: [
    { test: (value) => !!value, message: "Loan amount is required" },
    {
      test: (value) => isNumber(value),
      message: "Loan amount must be a numeric value",
    },
    {
      test: (value) => value > 0,
      message: "Loan amount must be greater than 0",
    },
  ],
  interestRate: [
    { test: (value) => !!value, message: "Interest rate is required" },
    {
      test: (value) => isNumber(value),
      message: "Interest rate must be a numeric value",
    },
    {
      test: (value) => value > 0,
      message: "Interest rate must be greater than 0",
    },
  ],
  loanTenure: [
    { test: (value) => !!value, message: "Loan tenure is required" },
    {
      test: (value) => isNumber(value),
      message: "Loan tenure must be a numeric value",
    },
    {
      test: (value) => value > 0,
      message: "Loan tenure must be greater than 0",
    },
    {
      test: (value) => value <= 50,
      message: "Loan tenure must be less than 50",
    },
  ],
};

export { FIELD_VALIDATIONS };
