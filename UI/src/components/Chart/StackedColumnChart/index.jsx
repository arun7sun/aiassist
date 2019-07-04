import React, { Component } from 'react';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting'
// import ExportingData from 'highcharts/modules/export-data'
import HichartsOfflineExporting from 'highcharts/modules/offline-exporting';
Exporting(Highcharts)
// ExportingData(Highcharts)
HichartsOfflineExporting(Highcharts)

export default class StackedColumnChart extends Component {
    enableSelection = false
    static defaultProps = {
        data: {
            id: "StackedColumnChart",
            title: "Stacked Column Chart",
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            plotOptions:{
                series: {
                    stacking: 'normal'
                },
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            type: 'column',
            height: 230,
            Xaxiscategories: [
                'Mensa',
                'ADM',
                'Marvel',
                'Dexter',
                'Franchise',
            ],
            data: [{
                name: 'John',
                data: [5, 3, 4, 7, 2],
                color: '#5D61B5'
            }, {
                name: 'Jane',
                data: [2, 2, 3, 2, 1],
                color: '#3BC3BE'
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5],
                color: '#5D61B5'
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

        this.buildChart = Highcharts.chart(this.LineChartSVG, {
            chart: {
                type: data.type,
                height:data.height,
                zoomType: 'y'
            },
            title: {
                text: ""
            },
            xAxis: {
                categories: data.Xaxiscategories
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: data.legend,
            plotOptions: data.plotOptions,
            exporting:false,
            credits:false,
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
