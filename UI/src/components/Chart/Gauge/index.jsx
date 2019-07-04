import React, { Component } from 'react';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting'
import ExportingData from 'highcharts/modules/export-data'
import HichartsOfflineExporting from 'highcharts/modules/offline-exporting';
Exporting(Highcharts)
ExportingData(Highcharts)
HichartsOfflineExporting(Highcharts)



export default class Gauge extends Component {
    enableSelection = false
    static defaultProps = {
        data: {
            id: 'gauge',
            height : 230,
            data: [79],
            shape : 'arc',
            title: 'CSAT',
            startAngle: -90,
            endAngle: 90,
            minValue : 0,
            maxValue : 200,
            seriesName : 'CSAT',
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B' // green
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D' // yellow
            }, {
                from: 160,
                to: 200,
                color: '#DF5353' // red
            }],
            credits: false,
            valueSuffix: ' units'
        }
    };

    buildChart = {}

    componentDidMount() {
        if (this.GaugeSVG !== undefined) {
            this.buildGraph(this.props.data);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.GaugeSVG !== undefined) {
            this.buildGraph(nextProps.data);
        }
    }

    buildGraph(data) {

        this.buildChart = Highcharts.chart(this.GaugeSVG.id, {

            credits: false,


            chart: {
                height: data.height,
                width : window.width,
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                align : 'center'

            },
            exporting : false,

            title: {
                text: data.title
            },

            pane: {
                startAngle: data.startAngle,
                endAngle: data.endAngle,
                align: 'center',
                shape: data.shape,
                center: ['50%', '100%'],
                size: '180%',
                background: [{
                    background: {
                        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                        innerRadius: '60%',
                        outerRadius: '100%',
                        shape: 'arc'
                    },
                    borderWidth: 0,
                    outerRadius: '109%'
                }, {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#333'],
                            [1, '#FFF']
                        ]
                    },
                    borderWidth: 1,
                    outerRadius: '107%'
                }, {
                    // default background
                }, {
                    backgroundColor: '#DDD',
                    borderWidth: 0,
                    outerRadius: '105%',
                    innerRadius: '103%'
                }]
            },

            // the value axis
            yAxis: {
                min: data.minValue,
                max: data.maxValue,

                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',
                tickPixelInterval: 30,
                tickWidth: 1.5,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',

                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: data.measure
                },
                plotBands: data.plotBands
            },

            series: [{
                name: data.seriesName,
                data: data.data,
                tooltip: {
                    valueSuffix: data.valueSuffix,
                }
            }]

        });

    }

    exportData(filename) {
        this.buildChart.exportChartLocal({
            filename: filename,
            type: 'image/png'
        })
    }

    render() {
        const { id } = this.props.data;
        return <div id={id} className="gauge-v" ref={el => { this.GaugeSVG = el; }} />
    }

}
