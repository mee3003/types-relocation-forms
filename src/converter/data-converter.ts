import { Packing } from "../types/forms";

export const convertPacking = (data: any[]) => {
  return data.map((e) => {
    const curPacking: Packing = {
      id: e.id,
      ...e.attributes,
    };
    return curPacking;
  });
};
