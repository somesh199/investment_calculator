import { calculateInvestmentResults } from '../util/investment.js';

function Result({input}) {
  console.log(input);
  const resultData = calculateInvestmentResults(input);
  console.log(resultData);
  return(
    <p>Results...</p>
  );
}

export default Result;