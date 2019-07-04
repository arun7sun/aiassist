import React, { Component } from 'react';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting'
import SeriesLabel from 'highcharts/modules/series-label'
import HichartsOfflineExporting from 'highcharts/modules/offline-exporting';
Exporting(Highcharts)
SeriesLabel(Highcharts)
HichartsOfflineExporting(Highcharts)

export default class LineBar extends Component {
    
    static defaultProps = {
        data: {
            id : 'linebar',
            height : 300,
            title : 'Consumption',
            categories : ['A', 'B', 'C', 'D', 'E'],
            label : 'Total Cnsumption',
            data : [{
                type: 'column',
                name: 'Jane',
                data: [3, 2, 1, 3, 4]
            }, {
                type: 'column',
                name: 'John',
                data: [2, 3, 5, 7, 6]
            }, {
                type: 'column',
                name: 'Joe',
                data: [4, 3, 3, 9, 0]
            }, {
                type: 'spline',
                name: 'Average',
                data: [3, 2.67, 3, 6.33, 3.33],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            }],

        }
    };

    buildChart = {}

    componentDidMount() {
        if (this.LineBarSVG !== undefined) {
            this.buildGraph(this.props.data);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.LineBarSVG !== undefined) {
            this.buildGraph(nextProps.data);
        }
    }

    buildGraph(data) {
        
        this.buildChart = Highcharts.chart(this.LineBarSVG.id,  {
            title: {
                text: data.title
            },
            chart : {
                width : window.width,
                height : data.height
            },
            credits : false,
            xAxis: {
                categories: data.categories
            },
            labels: {
                items: [{
                    html: data.label,
                    style: {
                        left: '50px',
                        top: '18px',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                    }
                }]
            },
            series: data.data
        });

    }
    exportData(filename) {
        this.buildChart.exportChartLocal({ filename: filename })
    }

    render() {
        const { id } = this.props.data;
        return <div id={id} className="line-bar-v" ref={el => { this.LineBarSVG = el; }} />
    }

}
