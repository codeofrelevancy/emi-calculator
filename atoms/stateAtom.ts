import { atom } from "recoil";

import { initialState } from "@/types";

const stateAtom = atom({
  key: "stateAtom",
  default: initialState,
});

export default stateAtom;
