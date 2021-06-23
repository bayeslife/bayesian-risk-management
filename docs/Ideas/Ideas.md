---
sidebar_position: 2
slug: Ideas
title: Ideas
author: Phil Tomlinson
author_title: bayeslife
tags: [problem]
---

import { VRelationship } from '../../src/components/Relationship'

How can we make Risk Assessments matter more!

### More Opinions
- If there were more opinions behind a Risk Assessment they would be more meaningful...it would also be easier to follow as best practice.
    - Collect data on impact of controls on breaches..but trouble is public breaches data is likely not comprehensive
        -  CWE is based on judgement rather than data

### Single Answer
- If the outcome was a single answer they would be more meaningful
    - start with prior probably that opportunity is acceptable and see how it is affected by each separate decision

### More data 
- If there was more data behind each individual risk factor the end result would be more meaningful.

Currently we seem to get lots of information on vulnerabilities but little information on risks with those vulnerabilities.

### Directly related to dollars
 - If there were dollar sign to each risk
 - If impact on total risk from each sub risk


What we want are changing expected loss dollar values as perform mitigation activity.
- increase in activity decreases loss
- decrease in activity increases loss
<VRelationship data={[{cost: 50, activity: 10 },{ cost: 30,activity: 20 },{ cost: 20,activity: 30 },{ cost: 15,activity: 40 }]} width={200} height={200} xAccessor={(d)=>d.activity} yAccessor={(d)=>d.cost}/>


### More directly see tradeoff between activities

If we do A versus if we do B.

There are generally many threats and many opportunities and getting visibility of these options is important.


---
CVE scores are [measures of severity rather than risk](https://www.first.org/cvss/user-guide).

[Bayesian logic in risk assessments](http://sigdoc.acm.org/using-bayesian-induction-methods-in-risk-assessment-and-communication/)