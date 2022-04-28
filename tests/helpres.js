export const toBeTest = (fn, cases) => {
  cases.forEach(({ arg, exp }) => {
    test(`Funciton '${
      fn.name
    }' arg(${arg.toString()}) expect toBe(${exp.toString()})`, () => {
      expect(fn(...arg)).toBe(exp);
    });
  });
};
