"use client";

import { ChangeEvent } from "react";

import { useRecoilState, useResetRecoilState } from "recoil";

import {
  BottomGradient,
  EMI,
  Layout,
  LoanRepaymentScheduleTable,
  PaymentBreakUp,
  TextField,
} from "@/components";

import { CURRENCY_SYMBOL } from "@/constants";
import { calculateEmiOutcome, validateForm } from "@/utils";

import stateAtom from "@/atoms/stateAtom";

export default function Home() {
  const [state, setState] = useRecoilState(stateAtom);
  const resetState = useResetRecoilState(stateAtom);

  const { loanAmount, interestRate, loanTenure, prepayments, errors } = state;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const onCalculate = () => {
    const errors = validateForm(state);

    if (Object.keys(errors).length) {
      setState({ ...state, errors });
      return;
    }

    setState({
      ...state,
      outcome: calculateEmiOutcome(
        Number(loanAmount),
        Number(interestRate),
        Number(loanTenure),
        prepayments
      ),
      errors: {},
    });
  };

  const resetStatus =
    loanAmount !== 0 || interestRate !== 0 || loanTenure !== 0;

  return (
    <Layout>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-8 lg:py-12">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Home Loan
              </div>
            </div>
            <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              EMI Calculator
            </h1>
            <p className="text-center mt-6 text-lg leading-8 text-gray-600">
              An EMI (Equated Monthly Installment) calculator for a home loan is
              a financial tool that helps borrowers estimate the monthly
              payments they will need to make towards their home loan. It takes
              into account factors such as the loan amount, the interest rate
              and the loan tenure to determine the EMI amount and much more..
            </p>
            <div className="py-6 px-6 sm:py-12 lg:px-8">
              <form
                action="#"
                method="post"
                className="mx-auto max-w-xl"
                autoComplete="off"
              >
                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                  <TextField
                    name="loanAmount"
                    label="Home Loan Amount"
                    placeholder="50,00,000"
                    unit={CURRENCY_SYMBOL}
                    value={loanAmount}
                    error={errors?.loanAmount}
                    onChange={onInputChange}
                  />
                  <TextField
                    name="interestRate"
                    label="Interest Rate"
                    placeholder="9"
                    unit="%"
                    value={interestRate}
                    error={errors?.interestRate}
                    onChange={onInputChange}
                  />
                  <TextField
                    name="loanTenure"
                    label="Loan Tenure"
                    placeholder="20"
                    unit="Yr"
                    value={loanTenure}
                    error={errors?.loanTenure}
                    onChange={onInputChange}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2">
                  <button
                    type="button"
                    onClick={onCalculate}
                    className="btn btn-primary"
                  >
                    Calculate
                  </button>

                  <button
                    type="button"
                    onClick={resetState}
                    className="btn btn-secondary"
                    disabled={!resetStatus}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
          <EMI />
          <PaymentBreakUp />
          <LoanRepaymentScheduleTable onCalculate={onCalculate} />
          <BottomGradient />
        </div>
      </main>
    </Layout>
  );
}
