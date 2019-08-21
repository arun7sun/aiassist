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
          id: "test_chart",
          title: "Title goes here",
          legend: {
            enabled: false
          },
          type: "column",
          height: 350,
          xlabel : 'x axis',
          Xaxis: ["A", "B", "C", "D", "E", "F"],
          plotOptions: {
            series: {
              pointPadding: 0,
              groupPadding: 0.1
              // pointWidth: data.plotOptions.series.pointWidth,
            },
            column : {
                pointWidth : '50'
            }
          },
          data: [
            {
              name: "",
              data: [49.9, 71.5, 106.4, 129.2, 144.0],
              color: "#ef924b"
            }
          ]
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
                crosshair: true,
                title: {
                    text: data.xlabel
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: data.ylabel
                }
            },
            tooltip: {
            },
            legend: {
                enabled: false,   
            },
            credits : false,
            plotOptions:{
              series: data.plotOptions.series,
              column : {
                  pointWidth : data.plotOptions.column.pointWidth
              }
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
        return <div id={id} className="col-12 Line-chart-v" ref={el => { this.LineChartSVG = el; }} />
    }

}
