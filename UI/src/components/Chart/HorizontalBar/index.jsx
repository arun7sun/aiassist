import React, { Component } from 'react';
import Highcharts from 'highcharts';
// import Exporting from "highcharts/modules/exporting";
// Exporting(Highcharts);
import './style.scss';

export default class HorizontalBar extends Component {
    enableWordClick = this.props.enableWordClick
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
    xAxisLink = false;

    componentDidMount() {
        if (this.BarSVG !== undefined) {
            if (this.props.enableWordClick) {
                this.enableWordClick = this.props.enableWordClick
            }
            else {
                this.enableWordClick = false
            }
            this.buildGraph(this.props.terms, this.enableWordClick);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.BarSVG !== undefined) {
            if (nextProps.enableWordClick) {
                this.enableWordClick = nextProps.enableWordClick
            }
            else {
                this.enableWordClick = false
            }
            this.buildGraph(nextProps.terms, this.enableWordClick);
        }
    }

    buildGraph(terms, enableWordClick) {
        let classThis = this
        Highcharts.chart(this.BarSVG.id, {
            credits: {
                enabled: false
            },
            title: {
                text: terms.title
            },
            chart: {
                width: window.size,
                height: terms.height,
                // backgroundColor: null
            },
            xAxis: {
                type: 'column',
                categories: terms.data.map((key) => key.name),
                labels: {
                    formatter: function () {

                        return this.value

                    }
                }
            },
            yAxis: {
                title: {
                    text: ''
                },
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function () {
                                if (enableWordClick) {
                                    // uncomment after conversation popup
                                    classThis.props.onWordClick(this.category)
                                }
                            }
                        }
                    }
                },
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
                type: 'bar',
                // name: 'Count',
                // dataLabels: {
                //     enabled: true,
                //     formatter: function () {

                //         return this.value

                //     }
                // },
                data: terms.data.map((key) => key.count)
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
        return <div id={id} className="bar-chart-v" ref={el => { this.BarSVG = el; }} />
    }
}
