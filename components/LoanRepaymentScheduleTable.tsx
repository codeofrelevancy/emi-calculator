import { ChangeEvent } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";

import TextField from "@/components/TextField";

import { CURRENCY_SYMBOL } from "@/constants";
import { LoanRepaymentScheduleTableProps, Schedule, TProps } from "@/types";
import { toCurrency, toNumber } from "@/utils";

import stateAtom from "@/atoms/stateAtom";

function LoanRepaymentScheduleTable({
  onCalculate,
}: LoanRepaymentScheduleTableProps) {
  const state = useRecoilValue(stateAtom);
  const setState = useSetRecoilState(stateAtom);

  const { prepayments, outcome } = state;

  const onPrepaymentsChange =
    (month: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const clonedPrepayments = Object.assign({}, prepayments);
      clonedPrepayments[month] = toNumber(value);

      setState({ ...state, prepayments: clonedPrepayments });
    };

  return (
    <div className="relative overflow-x-auto shadow-lg rounded-lg mt-24">
      <table className="w-full text-sm text-left text-gray-500">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
          Loan Repayment Schedule (Monthly)
          <p className="mt-1 text-sm font-normal text-gray-500">
            This is a table that outlines the monthly payments required to repay
            a loan over a specified period of time. It is a detailed breakdown
            of the loan repayment process and includes information such as the
            Principal Payment, Interest Payment, Total Payment, Principal
            Outstanding, Cumulative Interest and Cumulative Principal.
          </p>
        </caption>

        <thead className="text-xs text-white uppercase bg-indigo-600">
          <tr>
            <Th>Month</Th>
            <Th>Principal Payment</Th>
            <Th>Interest Payment</Th>
            <Th>Total Payment</Th>
            <Th>Principal Outstanding</Th>
            <Th>Cumulative Interest</Th>
            <Th>Cumulative Principal</Th>
            <Th>Prepayments (if any)</Th>
          </tr>
        </thead>
        <tbody>
          {outcome?.schedule?.length > 0 ? (
            <>
              {outcome?.schedule.map((s: Schedule) => (
                <Tr key={s.month}>
                  <Td>{s.month}</Td>
                  <Td>{toCurrency(s.principalPayment)}</Td>
                  <Td>{toCurrency(s.interestPayment)}</Td>
                  <Td>{toCurrency(s.totalPayment)}</Td>
                  <Td>{toCurrency(s.principalOutstanding)}</Td>
                  <Td>{toCurrency(s.cumulativeInterest)}</Td>
                  <Td>{toCurrency(s.cumulativePrincipal)}</Td>
                  <Td>
                    <TextField
                      name={`${s.month}`}
                      placeholder="5,00,000"
                      unit={CURRENCY_SYMBOL}
                      onChange={onPrepaymentsChange(s.month)}
                      onBlur={onCalculate}
                      value={prepayments?.[s.month] || ""}
                    />
                  </Td>
                </Tr>
              ))}
            </>
          ) : (
            <Tr>
              <Td colSpan={8}>No data</Td>
            </Tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function Th({ children }: TProps) {
  return (
    <th scope="col" className="px-6 py-3">
      {children}
    </th>
  );
}

function Tr({ children }: TProps) {
  return <tr className="bg-white border-b">{children}</tr>;
}

function Td({ children, ...rest }: TProps) {
  return (
    <td
      className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
      {...rest}
    >
      {children}
    </td>
  );
}

export default LoanRepaymentScheduleTable;
