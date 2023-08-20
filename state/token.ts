import { atom, useRecoilState } from "recoil";

export const tokenState = atom<string | undefined>({
  key: "tokenState",
  default: undefined,
});

export function useToken() {
  return useRecoilState(tokenState);
}
