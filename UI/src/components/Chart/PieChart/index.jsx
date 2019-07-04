import React, { Component } from 'react';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting'
// import ExportingData from 'highcharts/modules/export-data'
import HichartsOfflineExporting from 'highcharts/modules/offline-exporting';
Exporting(Highcharts)
// ExportingData(Highcharts)
HichartsOfflineExporting(Highcharts)

export default class PieChart extends Component {
    enableSelection = false
    static defaultProps = {
        data: {
            id: "pie",
            title: "Demand Mix",
            tooltip: '{series.name}: <b>{point.percentage:.1f}%</b>',
            ytitle: "Conversations",
            margin: { top: 40, left: 80, bottom: 30, right: 40 },
            height: 225,
            color: '#12b0f2',
            innerSize: '0%',
            legend: {
                symbolWidth: 20,
                enabled: true
            },
            enableSelection : false,
            data: [{
                name: 'Chrome',
                y: 61.41,
                sliced: false,
                selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Opera',
                y: 1.6
            }]
        }
    };

    buildChart = {}

    componentDidMount() {
        if (this.PieChartSVG !== undefined) {
            this.buildGraph(this.props.data);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.PieChartSVG !== undefined) {
            this.buildGraph(nextProps.data);
        }
    }

    buildGraph(data) {
        
        this.buildChart = Highcharts.chart(this.PieChartSVG.id, {
            credits: {
                enabled: false
            },
            chart: {
                height: data.height
            },
            title: {
                text: data.title
            },
            tooltip: {
                pointFormat: data.tooltip
            },
            legend:data.legend,
            plotOptions: {
                candlestick: {
                    lineColor: '#404048'
                },
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        fontSize: '12px',
                        align: 'center',
                        fontWeight: '',
                        distance: -20,
                        enabled: true,
                        color: 'white',
                        format: '{point.percentage:.1f}',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.ContrastTextColor) || 'black',
                            textOutline: 'none',
                        }
                    },
                    showInLegend: true,
                }
            },
            series: [{
                type: 'pie',
                colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
                    '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
                name: data.name,
                colorByPoint: true,
                innerSize: data.innerSize,
                data: data.data
            }],
            
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
        return <div id={id} className="pie-chart-v" ref={el => { this.PieChartSVG = el; }} />
    }

}
