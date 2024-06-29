import { calculateInvestmentResults, formatter } from "../util/investment";

function Result({ investmentValues }) {
   const resultsData = calculateInvestmentResults(investmentValues);
   console.log(resultsData);
   return (
      <table id="result">
         <thead>
            <tr>
               <th>Year</th>
               <th>Investment Value</th>
               <th>Interest (Year)</th>
               <th>Total Interest</th>
               <th>Invested Capital</th>
            </tr>
         </thead>
         <tbody>
            {resultsData.map((yearData) => {
               const totalInterest =
                  yearData.valueEndOfYear -
                  yearData.year * yearData.annualInvestment -
                  investmentValues.initialInvestment;

               const totalInvestedCapital = yearData.valueEndOfYear - totalInterest;

               return (
                  <tr key={yearData.year}>
                     <td>{yearData.year}</td>
                     <td>{formatter.format(yearData.valueEndOfYear)}</td>
                     <td>{formatter.format(yearData.interest)}</td>
                     <td>{formatter.format(totalInterest)}</td>
                     <td>{formatter.format(totalInvestedCapital)}</td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
}

export default Result;
