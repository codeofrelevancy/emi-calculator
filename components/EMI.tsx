import { useRecoilValue } from "recoil";

import { OutcomeProps } from "@/types";
import { toCurrency } from "@/utils";

import stateAtom from "@/atoms/stateAtom";

function Outcome({ label, value }: OutcomeProps) {
  return (
    <div className="mx-auto flex items-center max-w-xs flex-col gap-y-4">
      <dt className="text-base leading-7 text-gray-600">{label}</dt>
      <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        {toCurrency(value)}
      </dd>
    </div>
  );
}

function EMI() {
  const { outcome } = useRecoilValue(stateAtom);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-1 sm:py-3">
      <dl className="grid grid-cols-1 gap-y-16 gap-x-6 text-center lg:grid-cols-2">
        <Outcome label="EMI" value={outcome?.emi} />
        <Outcome
          label="Total Interest Payable"
          value={outcome?.totalInterestPayable}
        />
        <Outcome label="Principal Amount" value={outcome?.principalAmount} />
        <Outcome
          label="Total Payment (Principal + Interest)"
          value={outcome?.totalPayment}
        />
      </dl>
    </div>
  );
}

export default EMI;
