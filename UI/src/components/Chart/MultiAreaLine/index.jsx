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
            id: "multiLineLine",
            title: "Demand Mix",
            tooltip: '{series.name}: <b>{point.percentage:.1f}%</b>',
            ytitle: "Conversations",
            margin: { top: 40, left: 80, bottom: 30, right: 40 },
            height: 200,
            color: '#12b0f2',
            innerSize: '0%',
            xAxis:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            enableSelection: false,
            data: [{
                color: '#fb00a6',
                data: [1, 3, 2, 4, 5, 4, 6, 2, 3, 5, 6],
                dashStyle: 'solid'
            }, {
                color: 'purple',
                data: [2, 4, 1, 3, 4, 2, 9, 1, 2, 3, 4, 5],
                dashStyle: 'spline'
            }, {
                color: 'pink',
                data: [3, 5, 7, 9, 2, 5, 4, 7, 4, 7, 8, 9],
                dashStyle: 'spline'
            }, {
                color: 'green',
                data: [6, 2, 9, 3, 5, 5, 8, 3, 6, 9, 3, 7],
                dashStyle: 'spline'
            }]
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
                width: window.size,
                height: data.height,
                type: 'spline'
            },
            tooltip: {
                pointFormat: data.tooltip
            },
            legend: {
                symbolWidth: 80
            },
            credits : false,
            yAxis: {
                title: {
                    text: ''
                }
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    marker: {
                        enabled: false
                    }
                }
            },
            title: {
                text: ''
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: data.xAxis,
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
