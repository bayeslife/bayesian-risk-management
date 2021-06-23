---
sidebar_position: 3
slug: Data
title: Data
author: Phil Tomlinson
author_title: bayeslife
tags: [problem]
---

import { BRelationship } from '../../src/components/Bayes'
import { IntersectingSets } from '../../src/components/IntersectingSets'
const base=10


What data might we have

<BRelationship base={base} sensitivity={90} specificity={75} conditionName="Secure System" testName="Vulnerability Migitation" />

<IntersectingSets conditionRatio={base} testRatio={30} width={300} height={300}/>
