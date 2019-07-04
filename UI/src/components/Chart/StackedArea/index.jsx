import React, { Component } from 'react';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting'
// import ExportingData from 'highcharts/modules/export-data'
import HichartsOfflineExporting from 'highcharts/modules/offline-exporting';
Exporting(Highcharts)
// ExportingData(Highcharts)
HichartsOfflineExporting(Highcharts)

export default class StackedArea extends Component {
    enableSelection = false
    static defaultProps = {
        data: {
            id: "stacked-area",
            title: "C2D Breakup",
            tooltip: '{series.name}: <b>{point.percentage:.1f}%</b>',
            ytitle: "Conversations",
            margin: { top: 40, left: 80, bottom: 30, right: 40 },
            height: 225,
            color: '#12b0f2',
            innerSize: '0%',
            enableSelection: false,
            legend:false,
            xaxisdata:['Q1', 'Q2', 'Q3', 'Q4'],
            data: [{
                name: 'A',
                data: [502, 635, 809, 947]
            }, {
                name: 'B',
                data: [106, 107, 111, 133]
            }, {
                name: 'C',
                data: [163, 203, 276, 408]
            }, {
                name: 'D',
                data: [18, 31, 54, 156]
            }, {
                name: 'E',
                data: [2, 2, 2, 6]
            }]
        }
    };

    buildChart = {}

    componentDidMount() {
        if (this.StackedAreaSVG !== undefined) {
            this.buildGraph(this.props.data);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.StackedAreaSVG !== undefined) {
            this.buildGraph(nextProps.data);
        }
    }

    buildGraph(data) {

        this.buildChart = Highcharts.chart(this.StackedAreaSVG.id, {
            chart: {
                type: 'area',
                height: data.height
            },
            title: {
                text: ""
            },
            credits: false,
            exporting: false,
            xAxis: {
                categories: data.xaxisdata,
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            legend:data.legend,
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000;
                    }
                }
            },
            tooltip: {
                split: true,
                pointFormat: data.tooltip
            },
            plotOptions: {
                series: {
                    fillOpacity: 1,
                    marker: {
                        enabled: false
                    }
                },
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },
            series: data.data
        });

    }
    exportData(filename) {
        this.buildChart.exportChartLocal({ filename: filename })
    }

    render() {
        const { id } = this.props.data;
        return <div id={id} className="stacked-area-chart-v" ref={el => { this.StackedAreaSVG = el; }} />
    }

}
