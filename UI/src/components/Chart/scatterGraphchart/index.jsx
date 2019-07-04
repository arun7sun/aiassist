import React, { Component } from 'react';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting'
// import ExportingData from 'highcharts/modules/export-data'
import HichartsOfflineExporting from 'highcharts/modules/offline-exporting';
Exporting(Highcharts)
// ExportingData(Highcharts)
HichartsOfflineExporting(Highcharts)

export default class Area extends Component {
    enableSelection = false
    static defaultProps = {
        data: {
            id: "scatteredgraph",
            title: "title",
            xtitle:'Volume(in Thousand)',
            ytitle:'Breach %',
            xmidline:100000,
            xmidline:10,
            tooltip:{
                enabled: true,
                formatter: function () {
                    return '<b>' + this.series.name +'</b> : <b>' + this.x + '</b>';
                }
            },
            data: [{
                marker: {
                    radius: 5,
                    symbol: 'circle',
                    fillColor: 'orange'
                },
                data: [
                    [97, 36],
                    [94, 74]
                ]
            }, {
                marker: {
                    radius: 5,
                    symbol: 'circle',
                    fillColor: 'green'
                },
                data: [
                    [25, 10],
                    [2, 75]
                ]
            }, {

                marker: {
                    radius: 5,
                    symbol: 'circle',
                    fillColor: 'red'
                },
                data: [
                    [47, 47],
                    [20, 12]
                ]
            }]
        }
    };

    buildChart = {}

    componentDidMount() {
        if (this.ScatterChartSVG !== undefined) {
            this.buildGraph(this.props.data);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.ScatterChartSVG !== undefined) {
            this.buildGraph(nextProps.data);
        }
    }

    buildGraph(data) {
        this.buildChart = Highcharts.chart(this.ScatterChartSVG, {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: ''
            },
            exporting: false,
            credits: false,
            xAxis: {
                gridLineWidth: 1,
                title: {
                    text: data.xtitle
                },
                labels: {
                    format: '{value} '
                },
                plotLines: [{
                    color: '#C3B9C4',
                    dashStyle: 'solid',
                    width: 2,
                    value: data.xmidline,
                    label: {
                        rotation: 0,
                        y: 15,
                        style: {
                            fontStyle: 'italic'
                        },
                        text: ''
                    },
                    zIndex: 3
                }]
            },

            yAxis: {
                startOnTick: false,
                endOnTick: false,
                title: {
                    text: data.ytitle
                },
                labels: {
                    format: '{value} '
                },
                maxPadding: 0.2,
                plotLines: [{
                    color: '#C3B9C4',
                    dashStyle: 'solid',
                    width: 2,
                    value: data.ymidline,
                    label: {
                        align: 'right',
                        style: {
                            fontStyle: 'italic'
                        },
                        text: '',
                        x: -10
                    },
                    zIndex: 3
                }]
            }, 
            tooltip: data.tooltip,          

            series: data.data
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
        return <div id={id} className="area-chart-v" ref={el => { this.ScatterChartSVG = el; }} />
    }

}
