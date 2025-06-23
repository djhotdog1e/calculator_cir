import { strategies } from "./strategies/calc_strategies";

export const calculateResults = (values) => {
  const results = {};

  for (const strategy of strategies) {
    const inputs = {};
    for (const key of strategy.dependsOn) {
      inputs[key] = values[key];
    }

    results[strategy.key] = strategy.calculate(inputs);
  }

  return results;
};
