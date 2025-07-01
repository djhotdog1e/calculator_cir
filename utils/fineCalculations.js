import { fineStrategies } from "./fineStrategies/calc_fineStrategies";

export const calculateFineResults = (values) => {
  const results = {};

  for (const strategy of fineStrategies) {
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