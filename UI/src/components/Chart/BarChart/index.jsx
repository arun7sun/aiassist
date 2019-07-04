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
            height:230,
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
                      ointPadding: 0,
                      groupPadding: 0.1,
                      // pointWidth: data.plotOptions.series.pointWidth,
                  }
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
                width:window.size
            },
            title: {
                text: ''
            },
            xAxis: {
                categories:data.Xaxis,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
            },
            legend: {
                enabled: false,   
            },
            credits : false,
            plotOptions:{
              series: data.plotOptions.series
            },
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
