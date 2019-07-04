import React, { Component } from 'react';
import Highcharts from 'highcharts';
// import Exporting from 'highcharts/modules/exporting'
// Exporting(Highcharts)
export default class Score extends Component {

    componentDidMount() {
        if (this.ScoreSVG !== undefined) {
            this.buildGraph(this.props.data);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.ScoreSVG !== undefined) {
            this.buildGraph(nextProps.data);
        }
    }

    buildGraph(data) {
        Highcharts.chart(this.ScoreSVG.id, {
            credits: {
                enabled: false
            },
            chart: {
                width: window.size,
                height: data.height
            },
            title: {
                text: null,
            },
            xAxis: {
                tickAmount: 0,                
                // plotBands: [{ 
                //     color: '#FCFFC5',
                //     from: 0,
                //     to: 50,
                //     zIndex:-7
                // },
                // { 
                //     color: 'red',
                //     from: 50,
                //     to: 100,
                //     zIndex:-5
                // }],
                plotLines: [
                    {
                    color: 'black',
                    width: 1,
                    value: 100,
                    label: {
                        text: 'High',
                        textAlign: 'right',
                        rotation: 270,
                        y: 30,
                        x: -10
                    }
                },
                {
                    color: 'black',
                    width: 1,
                    value: 100,
                    label: {
                        text: 'Low',
                        textAlign: 'left',
                        rotation: 270,
                        y: 180,
                        x: -10
                    }
                },
                {
                    color: 'black',
                    width: 1,
                    value: 0,
                },
                {
                    color: 'black',
                    dashStyle: "Dash",
                    width: 1,
                    value: 50,
                }
            ],
                min: 0,
                reversed: true,
                max: 100,
                labels: {
                    enabled: false,
                },
                title: {
                    text: data.xtitle,
                    y:15
                }
            },
            plotOptions: {
                line: {
                    animation: false
                }
            },
            yAxis: {
                tickAmount: 0,
                min: 0,
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                // plotBands: [{ 
                //     color: 'green',
                //     from: 0,
                //     to: 3,
                //     zIndex:-3
                // },
                // { 
                //     color: 'orange',
                //     from: 3,
                //     to: 6,
                //     zIndex:-1
                // }],
                plotLines: [
                    {
                    color: 'black',
                    width: 2,
                    value: 0,
                    label: {
                        text: 'High',
                        textAlign: 'right',
                        x: 190,
                        y: 15
                    }
                },
                {
                    color: 'black',
                    width: 2,
                    value: 0,
                    label: {
                        text: 'Low',
                        textAlign: 'left',
                        x: 40,
                        y: 15
                    }
                },
                {
                    color: 'black',
                    width: 1,
                    value: 6,
                },
                {
                    color: 'black',
                    dashStyle: "Dash",
                    width: 1,
                    value: 3,
                }],
                max: 6,
                title: {
                    margin:25,
                    text: data.ytitle
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            series: [
                {
                    type: 'scatter',
                    name: 'Score',
                    data: [data.data],
                    marker: {
                        enabled: true,
                        fillColor: '#33b8af',
                        symbol: 'circle'
                    }, states: {
                        hover: {
                            enabled: false,
                            lineWidth: 0
                        }
                    },
                    dataLabels: {
                        enabled: false,
                        color: '#33b8af',
                        style: {
                            fontSize: '45px',
                        },
                        borderColor: "#33b8af",
                        format: '{point.title}'
                    }
                }],
            exporting: {
                enabled: false
            }
        });

    }
    render() {
        const { width, height, id } = this.props.data;
        return <div id={id} className="score-chart-v" ref={el => { this.ScoreSVG = el; }} />
    }

}
