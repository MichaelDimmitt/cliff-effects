import React, { Component } from 'react';

// HIGHCHARTS
import Highcharts from 'highcharts';
import {
  HighchartsChart,
  Chart,
  Title,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  LineSeries,
  withHighcharts,
} from 'react-jsx-highcharts';

// // LOGIC
// import { timescaleMultipliers } from '../../utils/convert-by-timescale';
// import { getChartData } from '../../utils/charts/getChartData';
// import { toFancyMoneyStr } from '../../utils/charts/chartFormatting';

// // DATA
// // In future, graphs will control their own aspect ratio,
// // zoom levels, etc., so for now they'll have access to
// // the limit values.
// import { PROGRAM_CHART_VALUES } from '../../utils/charts/PROGRAM_CHART_VALUES';


// // Graphs get things in monthly values, so we'll convert from there
// let multipliers = timescaleMultipliers.fromMonthly,
//     // Each graph controls its own scaling
//     limits      = PROGRAM_CHART_VALUES.limits;


// Going to copy the benefits line graph into here
class TestChartComp extends Component {
  render () {
    const { className } = this.props;

    // zoomKey doesn't work without another package

    return (
      <div className={ `test-chart ` + (className || ``) }>
        <HighchartsChart>

          <Chart
            tooltip  = {{ enabled: true }}
            zoomType = { `x` }
            panning  = { true }
            panKey   = { `alt` }
            resetZoomButton = {{ theme: { zIndex: 200 }, relativeTo: `chart` }} />

          <Title>Test</Title>

          <Legend
            align         = { `center` }
            verticalAlign = { `top` } />

          <Tooltip
            split         = { true }
            valuePrefix   = { `$` }
            valueDecimals = { 2 }
            padding       = { 8 }
            borderRadius  = { 4 }
            borderColor   = { `transparent`  }
            hideDelay     = { 300 }
          />

          <XAxis>
            <XAxis.Title>Pay</XAxis.Title>
          </XAxis>

          <YAxis>
            <YAxis.Title>Benefit Value</YAxis.Title>

            <LineSeries data={ [
              1.23445,
              2.23445,
              3.23445,
              2.23445,
              3.23445,
              2.23445,
              1.23445,
              2.23445,
              3.23445, 
            ] } /><LineSeries data={ [
              6.23445,
              5.23445,
              4.23445,
              5.23445,
              4.23445,
              5.23445,
              6.23445,
              5.23445,
              4.23445, 
            ] } />
          </YAxis>

        </HighchartsChart>
      </div>
    );
  }  // Ends render()
};


const TestChart = withHighcharts(TestChartComp, Highcharts);


export { TestChart };
