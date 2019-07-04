import React from 'react';
import Highcharts from 'highcharts';
// import Exporting from "highcharts/modules/exporting";
// Exporting(Highcharts);
import './style.scss';

export default class BarLineChart extends React.Component {
    static defaultProps = {
        dataSet: {
            xTittle: 'string',
            yTittle: 'string',
            id: 'abcd',
            data: [
                { name: 'Hey', count: 1000 },
                { name: 'lol', count: 200 },
                { name: 'first impression', count: 800 },
                { name: 'very cool', count: 1000000 },
                { name: 'duck', count: 10 },
            ],
        },
        setWidth: 960,
        setHeight: 500,
    };
    componentDidMount() {
        if (this.BarLineChartSVG !== undefined) {
            this.buildGraph(this.props.terms, this.props.xvalues, this.props.yvalues);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.BarLineChartSVG !== undefined) {
            this.buildGraph(nextProps.terms, nextProps.xvalues, nextProps.yvalues);
        }
    }

    buildGraph(terms, xvalues, yvalues) {
        Highcharts.chart(this.BarLineChartSVG.id, {
            credits: {
                enabled: false
            },
            title: {
                text: terms.title
            },
            chart: {
                width: window.size,
                height: terms.height,
            },
            xAxis: {
                type: 'column',
                categories: xvalues

            },
            yAxis: {
                title: {
                    text: ' '
                },
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                color: "#9cbdc6",
                type: 'column',
                // name: 'Count',
                data: yvalues
            },
            {
                color: "#7FDF14",
                type: 'spline',
                // name: 'Count',
                data: yvalues
            }],
            exporting: {
                chartOptions: {
                    plotOptions: {
                        series: {
                            dataLabels: {
                                enabled: true
                            }
                        }
                    }
                },
                fallbackToExportServer: false
            },
        });
    }
    render() {
        const { height, id } = this.props.terms;
        return <div id={id} className="bar-chart-v" ref={el => { this.BarLineChartSVG = el; }} />
    }
}
