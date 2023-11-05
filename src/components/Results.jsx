import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Results({ input }) {
    const data = calculateInvestmentResults(input)
    const initialInvestment = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment
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
                {data.map(d => {
                    const totalInterest = d.valueEndOfYear - d.annualInvestment * d.year - initialInvestment
                    const totalAmountInvested = d.valueEndOfYear - d.interest
                    return (
                        <tr key={d.year}>
                            <td>{d.year}</td>
                            <td>{formatter.format(d.valueEndOfYear)}</td>
                            <td>{formatter.format(d.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table >
    )
}