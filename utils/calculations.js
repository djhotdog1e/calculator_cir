import { strategies } from "./strategies/calc_strategies";

export const calculateResults = (values) => {
  const results = {};

  for (const strategy of strategies) {
    const inputs = {};
    for (const key of strategy.dependsOn) {
      inputs[key] = values[key];
    }
    const result = strategy.calculate(inputs);
    results[strategy.key] = result;
    values[strategy.key] = result;
  }

  return results;
};
