import React from 'react'

export const BRelationship = ({base=50, sensitivity=50, specificity=50, conditionName="condition", testName="test"}) => {

    const condition = base*1000/100
    const notcondition = (100-base)*1000/100

    const truepositive = condition*sensitivity/100
    const falsenegative = condition*(100-sensitivity)/100

    const truenegative = notcondition*specificity/100
    const falsepositive = notcondition*(100-specificity)/100

    const accuracy = (falsepositive) / condition
    const accuracy2 = (falsenegative) / notcondition

    return <table>
        <tr>
            <th>Base Rate {base} <br/> Senstivity {sensitivity} <br/> Specificity {specificity}</th>
            <th>{conditionName} ({condition})</th>
            <th>Not {conditionName} ({notcondition})</th>
        </tr>
        <tr>
            <th>Positive {testName}</th>
            <td>{truepositive}</td>
            <td>{falsepositive}</td>
            <td>Misleading index {accuracy}</td>
        </tr>
        <tr>
            <th>Negative {testName}</th>            
            <td>{falsenegative}</td>
            <td>{truenegative}</td>
            <td>Misleading {accuracy2}</td>
        </tr>
        <tr>
            <th>--</th>            
            <td>Sensitivity {sensitivity}%</td>
            <td>Specificity {specificity}%</td>
        </tr>
    </table>
};