import React, { Component } from 'react';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting'
import ExportingData from 'highcharts/modules/export-data'
import SolidGauge from 'highcharts/modules/solid-gauge'
import More from 'highcharts/highcharts-more'
import HichartsOfflineExporting from 'highcharts/modules/offline-exporting';
Exporting(Highcharts)
ExportingData(Highcharts)
HichartsOfflineExporting(Highcharts)
More(Highcharts)
SolidGauge(Highcharts)



export default class Gauge extends Component {
    static defaultProps = {
        data: {

            id: 'gauge',
            height: 230,
            data: [79],
            shape: 'arc',
            innerRadius: '70%',
            outerRadius: '100%',
            title: 'CSAT',
            startAngle: -90,
            endAngle: 90,
            minValue: 0,
            maxValue: 100,
            seriesName: 'CSAT',
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
            chart: {
                type: 'gauge',
                height: data.height
            },
            title: {
                text: data.title
            },
            yAxis: {
                min: data.minValue,
                max: data.maxValue,
                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 0,
                minorTickPosition: 'inside',
                minorTickColor: '	#000000',

                tickPixelInterval: 50,
                tickWidth: 1,
                tickPosition: 'inside',
                tickLength: 6,
                tickColor: '#666',
                stops: data.stops,
                lineWidth: 0,

                plotBands: [{
                    from: 0,
                    to: 50,
                    innerRadius: data.outerRadius,
                    outerRadius: data.innerRadius,
                    color: '#DF5353' // red
                }, {
                    from: 50,
                    to: 75,
                    innerRadius: data.outerRadius,
                    outerRadius: data.innerRadius,
                    color: '#DDDF0D' // yellow
                }, {
                    from: 75,
                    to: 100,
                    innerRadius: data.outerRadius,
                    outerRadius: data.innerRadius,
                    color: '#55BF3B' // green
                }]
            },

            pane: {
                center: ['50%', '85%'],
                size: '140%',
                startAngle: data.startAngle,
                endAngle: data.endAngle,
                background: {
                    backgroundColor: {

                    },
                    innerRadius: data.outerRadius,
                    outerRadius: data.innerRadius,
                    shape: 'arc'
                }
            },

            credits: {
                enabled: false
            },

            exporting: false,


            series: [{
                name: data.seriesName,
                data: data.data,
                // dataLabels: {
                //     format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                //         ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                //         '<span style="font-size:12px;color:silver">units</span></div>'
                // },
                tooltip: {
                    enabled: false
                }
            }],
            plotOptions: {
                gauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        inside : false,
                        useHTML: true
                    }
                }
            }

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
