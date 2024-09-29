import {calculateInvestmentResults, formatter} from '../util/investment'

export default function Grid({ initialInvestment, annualInvestment, expectedResult, duration }) {
    const results = calculateInvestmentResults({initialInvestment, annualInvestment, expectedResult, duration});
    return <>
                <table id="result">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Investment Value</th>
                            <th>Interest(Year)</th>
                            <th>Total interest</th>
                            <th>Investment Capital</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                results.map((result, index)=> {
                                    const totalInterest = +result.valueEndOfYear - (+result.annualInvestment + +result.year);
                                    const totalAmountInvested = +result.valueEndOfYear - totalInterest
                                    return (
                                        <tr key={index}>
                                            <td>{result.year}</td>
                                            <td>{formatter.format(result.valueEndOfYear)}</td>
                                            <td>{formatter.format(result.interest)}</td>
                                            <td>{formatter.format(totalInterest)}</td>
                                            <td>{formatter.format(totalAmountInvested)}</td>
                                        </tr>
                                    )
                                })
                            }
                            {/* {results.map((result, index)=> {
                                return (
                                    <tr key={index}>
                                        <td>{result.year}</td>
                                        <td>{result.valueEndOfYear}</td>
                                        <td>{result.interest}</td>
                                        <td>{result.valueEndOfYear - initialInvestment - (annualInvestment * result.year)}</td>
                                        <td>{result.annualInvestment}</td>
                                    </tr>
                                )
                            })} */}
                    </tbody>
                </table>
            </>
}  