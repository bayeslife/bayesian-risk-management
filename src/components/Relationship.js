import { scaleLinear } from "d3-scale";
import React from 'react';
import {
    Chart,
    ChartCanvas,
    LineSeries, XAxis,
    YAxis,
    CrossHairCursor,
    MouseCoordinateY
} from "react-financial-charts";

export const VRelationship = ({data,width=300,height=300, xAccessor, yAccessor}) => {

    const ratio = 1
    const margin = { left: 30, right: 40, top: 10, bottom: 30 };

    const xScale = scaleLinear()
    const yScale = scaleLinear()
    
    const yExtents = (data) => {
        return [data.cost, data.cost];
    };    

    const max = xAccessor(data[data.length - 1]);
    const min = xAccessor(data[Math.max(0, data.length - 100)]);
    const xExtents = [min, max];

    return <ChartCanvas
                height={height}
                ratio={ratio}
                width={width}
                margin={margin}
                data={data}
                seriesName="Data"
                xScale={xScale}
                xAccessor={xAccessor}
                xExtents={xExtents}
            >
                <Chart id={1} yExtents={yExtents} yScale={yScale}>
                    <LineSeries xAccessor={xAccessor} yAccessor={yAccessor} strokeWidth={3} /> 
                    {/* <LineSeries xAccessor={xAccessor} yAccessor={yAccessor2} strokeWidth={1} /> */}
                    <XAxis showTickLabel={false} />
                    <YAxis axisAt="left" orient="left" showTickLabel={false} />
                    <CrossHairCursor />                    
                </Chart>
            </ChartCanvas>

}