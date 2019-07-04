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
            id: "NPS_by_Delivery_Staff",
            title: "Demand Mix",
            legend: {
                enabled: false,   
            },
            type: 'column',
            height:220,
            Xaxis:[
                'Mensa',
                'ADM',
                'Marvel',
                'Dexter',
                'Franchise',
                'SDA'
            ],      
            plotOptions: {
                series: {
                    // stacking: 'normal'
                },
                // column: {
                //     dataLabels: {
                //         enabled: true,
                //         useHTML: true,
                //         formatter: function() {
                //             return '<div class="chart-dot"> hai</div>'; 
                //         },
                //         y: 0
                //     }
                // }
            },     
            data: [{
                name: '',
                data: [49.9, 71.5, 106.4, 129.2, 144.0],
                color: '#ef924b'
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
        
        this.buildChart = Highcharts.chart(this.LineChartSVG , {
            chart: {
                type: data.type,
                height:data.height,
                width:window.size,
                zoomType:'xy',
            },
            title: {
                text: ''
            },
            xAxis: {
                categories:data.Xaxis,
                crosshair: true,
            },
            yAxis: {
                // min: 0,
                // title: {
                //     text: ''
                // },
                // labels: {
                //     enabled: false
                // }
            },
            tooltip: {
            },
            legend: {
                enabled: false,   
            },
            credits : false,
            plotOptions:data.plotOptions,
            series: data.data,
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
        return <div id={id} className="Line-chart-v" ref={el => { this.LineChartSVG = el; }} />
    }

}
