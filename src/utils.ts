import { Payment, SpendingsPerCat } from "./seed";

export function totalPerCategory(
  arr: Payment[]
): SpendingsPerCat["totalCurrentMonth"] {
  return Array.from(
    arr.reduce(
      (m, { category, price }) =>
        m.set(category, (m.get(category) || 0) + price),
      new Map()
    ),
    ([category, price]) => ({ category, price })
  ).reduce((acc, val) => {
    acc[val.category] = val.price;
    console.log(acc);
    return acc;
  }, {});
}

export function getPreviousMonth(d: Date): Date {
  d.setDate(1);
  d.setMonth(d.getMonth() - 1);
  return d;
}

export function getObjectKeys(
  payments: Payment[]
): SpendingsPerCat["totalCurrentMonth"] {
  return payments.reduce((acc, val) => {
    acc[val.category] = 0;
    return acc;
  }, {});
}
