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
            id: "CPDBreaches-WH Level Analysis",
            title: "",
            xtitle: 'Volume(in Thousand)',
            ytitle: 'Breach %',
            yaxiscategories: ['EAST', 'WEST', 'NORTH', 'SOUTH'],
            height:280,
            legend:false,
            splitvalue:55,
            data: [{
                data: [
                    { x: 60, y: 0 },
                    { x: 33, y: 1 },
                    { x: 21, y: 2 },
                    { x: 80, y: 3 },
                ],
                marker: {
                    symbol: 'url(/images/amazon.png)'
                }
            },
            {
                data: [
                    { x: 20, y: 0 },
                    { x: 23, y: 1 },
                    { x: 81, y: 2 },
                    { x: 50, y: 3 },
                ],
                marker: {
                    symbol: 'url(/images/myntra.png)'
                }
            },
            {
                data: [
                    { x: 73, y: 0 },
                    { x: 38, y: 1 },
                    { x: 56, y: 2 },
                    { x: 97, y: 3 },
                ],
                marker: {
                    symbol: 'url(/images/jabong.png)'
                }
            },
            {
                data: [
                    { x: 47, y: 0 },
                    { x: 76, y: 1 },
                    { x: 45, y: 2 },
                    { x: 32, y: 3 },
                ],
                marker: {
                    symbol: 'url(/images/paytm.png)'
                }
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
                height:data.height,
                zoomType:'xy',
                margin:[20,80,20,80] 
            },
            title: {
                text: ''
            },
            exporting: false,
            credits: false,
            legend: {
                enabled: data.legend
            },
            xAxis: {
                title:{
                    title:true
                },
                plotLines: [{
                    color: '#C3B9C4',
                    dashStyle: 'solid',
                    width: 2,
                    value: data.splitvalue,
                }]
                // categories: ['Low NPS', 'High NPS']
            },
            yAxis: {
                title:{
                    text:data.ytitle,
                },
                categories: data.yaxiscategories,
            },

            plotOptions: {
                area: {
                    fillOpacity: 0.2
                }
            },
            credits: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                formatter: function () {
                    return '<b>' + this.series.name +'</b> : <b>' + this.x + '</b>';
                }
            },
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
