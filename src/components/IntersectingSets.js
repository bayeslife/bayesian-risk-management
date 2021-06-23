import React from 'react'

export const IntersectingSets = ({conditionRatio=50, testRatio=50, conditionName="condition", testName="test",width=200,height=200}) => {


    const headersize = 30
    const domain1 = width*conditionRatio/100
    const domain2 = width*(100-conditionRatio)/100

    const range1 = height*testRatio/100
    const range2 = height*(100-testRatio)/100

    const header = {height:`${headersize}px`, width: `${headersize}px`, float: "left"}

    const col1 = {width:`${domain1}px`, height: `${headersize}px`, float: "left"}
    const col2 = {width:`${domain2}px`, height: `${headersize}px`, float: "right"}

    const row1 = {height:`${range1}px`, width: `${headersize}px`, float: "left"}
    const row2 = {height:`${range2}px`, width: `${headersize}px`, float: "left"}

    const cell1 = {width:`${domain1}px`, height: `${range1}px`, backgroundColor:"gray", float: "left"}
    const cell2 = {width:`${domain2}px`, height: `${range1}px`, backgroundColor:"lightgray", float:"right"}

    const cell3 = {width:`${domain1}px`, height: `${range2}px`, backgroundColor:"lightgray",float: "left"}
    const cell4 = {width:`${domain2}px`, height: `${range2}px`, backgroundColor:"gray" , float:"right"}

    const style={width: width+headersize,height: height+headersize}

    return <div style={style}>

                <div style={header}></div>
                <div style={col1}>{conditionRatio}</div>
                <div style={col2}>{(100-conditionRatio)}</div>
                
                <div style={row1}>{testRatio}</div>
                <div style={cell1}></div>
                <div style={cell2}></div>

                <div style={row2}>{(100-testRatio)}</div>
                <div style={cell3}></div>
                <div style={cell4}></div>                
            </div>
};