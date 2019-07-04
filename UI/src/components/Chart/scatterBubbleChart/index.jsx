import React, { Component } from 'react';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting'
// import ExportingData from 'highcharts/modules/export-data'
import HichartsOfflineExporting from 'highcharts/modules/offline-exporting';
Exporting(Highcharts)
// ExportingData(Highcharts)
HichartsOfflineExporting(Highcharts)

export default class Barchart extends Component {
    enableSelection = false
    static defaultProps = {
        data: {
            id: "C2D_Breakup",
            title: 'tittle',
            height: 400,
            Xaxis: ['Created', 'Packed', 'Shipped'],
            tooltip: '{series.name}: <b>{point.percentage:.1f}%</b>',
            radius: 5,
            legend:{
                symbolWidth: 20,
                enabled: true
            },
            data: [{
                name: 'Students',
                color: 'green',
                data: [[0, 20], [0, 21], [0, 18], [1, 18], [1, 23], [1, 21], [2, 26], [2, 19], [2, 22], [2, 23]]
            },
            {
                name: 'Proffesionals',
                color: 'red',
                data: [[0, 25], [0, 27], [0, 28], [1, 38], [1, 24], [1, 31], [2, 36], [2, 29], [2, 42], [2, 24]]
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
            this.buildGraph(this.props.data);
        }
    }

    buildGraph(data) {

        this.buildChart = new Highcharts.Chart({
            chart: {
                renderTo: this.LineChartSVG,
                type: 'scatter',
                zoomType: 'xy',
                width: window.size,
                height: data.height,
            },
            title: {
                text: data.title
            },
            credits: false,
            exporting: false,
            xAxis: {
                categories: data.Xaxis
            },
            tooltip:{
                pointFormat: data.tooltip
            },
            legend: data.legend,
            plotOptions: {
                scatter: {
                    marker: {
                        symbol: 'circle',
                        radius: data.radius,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
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
        return <div id={id} className="Line-chart-v" ref={el => { this.LineChartSVG = el; }} />
    }

}
