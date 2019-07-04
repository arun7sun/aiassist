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
            id: "title",
            title: "title",
            // tooltip: "Count",
            margin: { top: 40, left: 80, bottom: 30, right: 40 },
            height: 255,
            lineColor: "#2CB0F7",
            lineWidth: 2,
            hoverLineWidth: 1,
            yAxis: {
                lineColor: "#CCD6EB",
                lineWidth: 1,
                gridLineWidth: 0,
                tickWidth: 2,
                min: 0,
                title: {
                    text: "values",
                    enabled: false
                }
            },
            marker: {
                radius: 3
            },
            gradientStartColor: '#EFFBFF',
            gradientEndColor: '#EFFBFF',
            enableSelection: false,
            enablePointClick: false,
            credits: { enabled: false },
            legend: { enabled: false },
            dataLabels: { enabled: true },
            exporting: { enabled: false },
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
            }]
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
        let classThis = this;
        let chart = {};
        if (data.enableSelection === true) {
            chart = {
                width: window.size,
                events: {
                    selection: function (event) {
                        if (event.xAxis) {
                            classThis.props.onSelection(event.xAxis[0].min, event.xAxis[0].max)
                        }
                    }
                },
                zoomType: 'x'
            }
        }
        else {
            chart = { width: window.size, height:data.height}
        }
        this.buildChart = Highcharts.chart(this.AreaSVG.id, {
            credits: {
                enabled: data.credits.enabled
            },
            chart: chart,
            title: {
                text: data.title,
                style: {
                    font: "normal 14px 'Open Sans', sans-serif"
                }
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                lineColor: data.yAxis.lineColor,
                lineWidth: data.yAxis.lineWidth,
                gridLineWidth: data.yAxis.gridLineWidth,
                tickWidth: data.yAxis.tickWidth,
                min: data.yAxis.min,
                title: {
                    text: data.yAxis.title.text,
                    enabled: data.yAxis.title.enabled
                }
            },
            legend: {
                enabled: data.legend.enabled
            },
            plotOptions: {
                areaspline: {
                    dataLabels: {
                        enabled: data.dataLabels.enabled
                    },
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, data.gradientStartColor],
                            [1, data.gradientEndColor]
                        ]
                    },
                    marker: {
                        radius: data.marker.radius
                    },
                    lineWidth: data.lineWidth,
                    states: {
                        hover: {
                            lineWidth: data.hoverLineWidth
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                color: data.lineColor,
                type: 'areaspline',
                name: data.tooltip,
                data: data.data
            }],
            exporting: {
                enabled: data.exporting.enabled,
            }
        });

    }

    exportData(filename) {
        this.buildChart.exportChartLocal({ filename: filename,
            type: 'image/png'
          })
    }

    render() {
        const { width, height, id } = this.props.data;
        return <div id={id} className="area-chart-v" ref={el => { this.AreaSVG = el; }} />
    }

}
