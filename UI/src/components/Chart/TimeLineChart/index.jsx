import React, { Component } from 'react';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting'
import ExportingData from 'highcharts/modules/export-data'
import HichartsOfflineExporting from 'highcharts/modules/offline-exporting';
Exporting(Highcharts)
ExportingData(Highcharts)
HichartsOfflineExporting(Highcharts)

export default class Area extends Component {

    static defaultProps = {
        data: {
            id: "Line",
            title: "Demand Mix",
            tooltip: '{series.name}: <b>{point.y}%</b>',
            ytitle: "",
            height: 270,
            legend: {
                symbolWidth: 20,
                enabled: true
            },
            splittooltip: false,
            turboThreshold: 5000,
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
            chartType: "spline",
            color: '#12b0f2',
            enableSelection: true,
            xAxis: {
                type: 'datetime'
            },
            data: [{
                name: 'Planned',
                color: 'purple',
                data: [{
                    x: 1533081600000,
                    y: 1161
                },
                {
                    x: 1535760000000,
                    y: 1245
                }, {
                    x: 1537760000000,
                    y: 725
                }, {
                    x: 1539760000000,
                    y: 1145
                }, {
                    x: 1542760000000,
                    y: 945
                }, {
                    x: 1545760000000,
                    y: 1245
                }],
                dashStyle: 'dash'
            }, {
                name: 'Actual',
                color: '#fb00a6',
                data: [{
                    x: 1533081600000,
                    y: 116
                },
                {
                    x: 1535760000000,
                    y: 124
                }, {
                    x: 1537760000000,
                    y: 735
                }, {
                    x: 1539760000000,
                    y: 145
                }, {
                    x: 1542760000000,
                    y: 9415
                }, {
                    x: 1545760000000,
                    y: 125
                }],
                dashStyle: 'solid'
            },]
        }
    };

    buildChart = {}

    componentDidMount() {
        if (this.AreaSVG !== undefined) {
            this.buildGraph(this.props.data);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.AreaSVG !== undefined) {
            this.buildGraph(nextProps.data);
        }
    }

    buildGraph(data) {

        this.buildChart = Highcharts.chart(this.AreaSVG.id, {
            credits: {
                enabled: false
            },
            chart: { width: window.size, height: data.height, zoomType: 'x', type: data.chartType },
            title: {
                text: data.title,
                style: {
                    font: "normal 14px 'Open Sans', sans-serif"
                }
            },
            xAxis: data.xAxis,
            tooltip: {
                split: data.splittooltip,
                pointFormat: data.tooltip
            },
            turboThreshold: 10000,
            legend: data.legend,
            yAxis: {
                title: {
                    text: ''
                }
            },
            plotOptions: data.plotOptions,
            title: {
                text: ''
            },
            exporting: false,
            series: data.data,
        });
    }

    exportData(filename) {
        this.buildChart.exportChartLocal({
            filename: filename,
            type: 'image/png'
        })
    }

    render() {
        const { width, height, id } = this.props.data;
        return <div id={id} className="area-chart-v" ref={el => { this.AreaSVG = el; }} />
    }

}
