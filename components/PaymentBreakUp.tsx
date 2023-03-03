import { useRecoilValue } from "recoil";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

import { PIE_CHART_COLORS } from "@/constants";

import { formatter, pieFormatter, toRoundNumber } from "@/utils";

import stateAtom from "@/atoms/stateAtom";

const PaymentBreakUp = () => {
  const { outcome } = useRecoilValue(stateAtom);

  if (outcome?.principalAmount <= 0 || outcome?.totalInterestPayable <= 0) {
    return null;
  }

  const payload = [
    { name: "Principal", value: toRoundNumber(outcome.principalAmount) },
    { name: "Interest", value: toRoundNumber(outcome.totalInterestPayable) },
  ];

  return (
    <div className="flex items-center justify-center">
      <PieChart width={400} height={400}>
        <Pie
          data={payload}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          label={pieFormatter}
        >
          {payload.map((_, index) => (
            <Cell key={`cell-${index}`} fill={PIE_CHART_COLORS[index]} />
          ))}
        </Pie>
        <Tooltip formatter={formatter} separator=": " />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PaymentBreakUp;
