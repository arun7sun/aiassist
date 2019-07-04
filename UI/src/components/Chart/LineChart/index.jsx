import React, { Component } from 'react';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting'
// import ExportingData from 'highcharts/modules/export-data'
import HichartsOfflineExporting from 'highcharts/modules/offline-exporting';
Exporting(Highcharts)
// ExportingData(Highcharts)
HichartsOfflineExporting(Highcharts)

export default class Linechart extends Component {
    enableSelection = false
    static defaultProps = {
        data: {
            id: "Line",
            title: "Demand Mix",
            tooltip: '{series.name}: <b>{point.percentage:.1f}%</b>',
            ytitle: "Conversations",
            // margin: { top: 40, left: 80, bottom: 30, right: 40 },
            height: 270,
            legend: {
                symbolWidth: 20,
                enabled: true
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
            chartType:"spline",
            color: '#12b0f2',
            innerSize: '0%',
            enableSelection : false,
            xAxis:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [ {
                name:'Planned',
                color:'purple',
                data: [2, 4, 1, 3, 4, 2, 9, 1, 2, 3, 4, 5],
                dashStyle: 'dash'
            },{
                name:'Actual',
                color:'#fb00a6',
                data: [1, 3, 2, 4, 5, 4, 6, 2, 3, 5, 6],
                dashStyle: 'solid'
            },]
        }
    };

    buildChart = {}

    componentDidMount() {
        if (this.LineChartSVG !== undefined) {
            this.buildGraph(this.props.data);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.LineChartSVG !== undefined) {
            this.buildGraph(nextProps.data);
        }
    }

    buildGraph(data) {
        
        this.buildChart = Highcharts.chart(this.LineChartSVG.id, {
            chart: {                
                width:window.size,
                height:data.height,
                type: data.chartType,
            },
            tooltip: {
                pointFormat: data.tooltip
            },
            legend: data.legend,
            yAxis: {
                // gridLineWidth: 0,
                // minorGridLineWidth: 0,
                title: {
                    text: ''
                }
            },
            credits : false,
            plotOptions: data.plotOptions,
            title: {
                text: ''
            },
            xAxis: {
                categories:data.xAxis,
            },
            series: data.data,
            exporting: {
                enabled: false
            }
        });        
    }
    exportData(filename) {
        this.buildChart.exportChartLocal({ filename: filename })
    }

    render() {
        const { id } = this.props.data;
        return <div id={id} className="Line-chart-v" ref={el => { this.LineChartSVG = el; }} />
    }

}
