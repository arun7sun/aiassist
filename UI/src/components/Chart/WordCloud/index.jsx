import React, { Component } from 'react';
import Highcharts from 'highcharts';
import WordCloud from 'highcharts/modules/wordcloud';
// import Exporting from 'highcharts/modules/exporting';
import './style.scss';

// Exporting(Highcharts)
WordCloud(Highcharts);

export default class WordCloudChart extends Component {
    enableWordClick = this.props.enableWordClick
    static defaultProps = {
        dataSet: {
            xTittle: 'string',
            yTittle: 'string',
            id: 'abc',
            data: [
                { name: 'Hey', weight: 1000 },
                { name: 'lol', weight: 200 },
                { name: 'first impression', weight: 800 },
                { name: 'very cool', weight: 1000000 },
                { name: 'duck', weight: 10 },
            ],
        },
        setWidth: 960,
        setHeight: 500,
    };

    buildChart = {}

    componentDidMount() {
        if (this.WordCloudSVG !== undefined) {
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
        if (this.WordCloudSVG !== undefined) {
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
        Highcharts.chart(this.WordCloudSVG.id, {
            credits: {
                enabled: false
            },
            chart: {
                width: window.size,
                height: terms.height,
            },
            title: {
                text: terms.title
            },
            plotOptions: {
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function () {
                                if (enableWordClick) {
                                    // uncomment after conversation popup
                                    classThis.props.onWordClick(this.name)
                                }
                            }
                        }
                    }
                }
            },
            series: [{
                rotation: {
                    from: 0,
                    to: 0,
                },
                color: "#9cbdc6",
                type: 'wordcloud',
                name: 'Count',
                data: terms.data,
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return this.value

                    }
                },
                // cursor: 'pointer',
                // events: {
                //     click: function (event) {
                //        
                //     }
                // }
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
        const { height, id } = this.props.terms
        return <div id={id} ref={el => { this.WordCloudSVG = el; }} />
    }
}
