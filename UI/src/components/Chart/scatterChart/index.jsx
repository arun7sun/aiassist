import React, { Component } from 'react';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting'
// import ExportingData from 'highcharts/modules/export-data'
import HichartsOfflineExporting from 'highcharts/modules/offline-exporting';
Exporting(Highcharts)
// ExportingData(Highcharts)
HichartsOfflineExporting(Highcharts)

export default class ScatterChart extends Component {
    enableSelection = false
    static defaultProps = {
        data: {
            id: "scatter",
            title: "CSA Regional Deepdive",
            tooltip: '{series.name}: <b>{point.percentage:.1f}%</b>',
            yaxisTitle: "",
            margin: { top: 40, left: 80, bottom: 30, right: 40 },
            height: 225,
            enableSelection: false,
            type: 'bubble',
            categories: ['East', 'West', 'North', 'South'],
            data: [
                { x: 0, y: 20, z: 13, name: 'Mensa', color: 'skyblue' },
                { x: 0, y: 45, z: 4, name: 'Dexter', color: 'orchid' },
                { x: 1, y: 35, z: 1, name: 'SDA', color: '#FBC163' },
                { x: 1, y: 30, z: 10, name: 'Dexter', color: 'orchid' },
                { x: 1, y: 45, z: 3.8, name: 'Others', color: '' },
                { x: 2, y: 10, z: 7, name: 'Mensa', color: 'skyblue' },
                { x: 2, y: 50, z: 12, name: 'APS', color: 'gray' },
                { x: 2, y: 20, z: 10, name: 'SDA', color: '#FBC163' },
                { x: 2, y: 35, z: 20, name: 'Dexter', color: 'orchid' },
                { x: 3, y: 60, z: 13, name: 'Mensa', color: 'skyblue' },
                { x: 3, y: 45, z: 18, name: 'APS', color: 'gray' },
                { x: 3, y: 25, z: 8, name: 'Others', color: '#FBC163' },
            ]
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
        this.buildChart = Highcharts.chart(this.ScatterChartSVG.id, {

            chart: {
                type: data.type,
                plotBorderWidth: 1,
                height:data.height,
            },
            legend: {
                enabled: false
            },
            title: {
                text: data.title
            },
            exporting: false,
            subtitle: {
                text: data.subtitle
            },
            plotOptions: {

            },
            xAxis: {
                gridLineWidth: 1,
                categories: data.categories,
                title: {
                    text: data.xaxisTitle
                },
                plotLines: [{
                    color: 'black',
                    width: 0,
                    value: 0,
                    zIndex: 3
                }]
            },
            credits: false,
            yAxis: {
                categories: data.ycategories,
                startOnTick: false,
                endOnTick: false,
                title: {
                    text: data.yaxisTitle
                },
                maxPadding: 0.2,
                plotLines: [{
                    color: 'black',
                    width: 0,
                    value: 0,
                    zIndex: 3
                }]
            },
            tooltip: {
                useHTML: true,
                headerFormat: '<table>',
                pointFormat: '<div>{point.y}, {point.z} years<div>',
                footerFormat: '</table>',
                followPointer: true
            },
            series: [{
                data: data.data
            }]
        });

    }
    exportData(filename) {
        this.buildChart.exportChartLocal({ filename: filename })
    }

    render() {
        const { id } = this.props.data;
        return <div id={id} className="scatter-chart-v" ref={el => { this.ScatterChartSVG = el; }} />
    }

}