import React, { Component } from 'react';
import Highcharts from 'highcharts';
// import Exporting from 'highcharts/modules/exporting'
import Highmaps from 'highcharts/highmaps'
// import ExportingData from 'highcharts/modules/export-data'
import HichartsOfflineExporting from 'highcharts/modules/offline-exporting';
const maps = require('./../mapjson')
// ExportingData(Highcharts)
HichartsOfflineExporting(Highcharts)

// Exporting(Highcharts)
// highmaps(Highcharts)

export default class Map extends Component {

    static defaultProps = {
        data: {
            id: 'map',
            title: 'India',
            navigate: true,
            height: 350,
            series: [
                {
                    name: 'Basemap',
                    borderColor: 'white',
                    nullColor: "#bed9f1",
                    allAreas: true,
                }
            ]
        }
    };

    buildChart = {}

    componentDidMount() {
        if (this.MapSVG !== undefined) {
            this.buildGraph(this.props.data);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.MapSVG !== undefined) {
            this.buildGraph(nextProps.data);
        }
    }

    onStateClick = (e) => {
        this.props.onStateClick(e)
    }

    buildGraph(data) {

        Highmaps.maps["india"] = maps.india;
        let classThis = this
        this.buildChart = Highmaps.mapChart(this.MapSVG.id, {
            plotOptions: {
                series: {
                    cursor: 'pointer',
                    events: {
                        click: function (e) {
                            classThis.onStateClick(e.point)
                        }
                    }
                }
            },
            credits: { enabled: false },
            chart: {
                map: 'india',
                height: data.height,
                width: window.size
            },
            title: {
                text: data.title
            },
            mapNavigation: {
                enabled: data.navigate,
                buttonOptions: {
                    theme: {
                        fill: '#00C3BE',
                        states: {
                            hover: {
                                fill: '#04968F'
                            }
                        }
                    },
                    padding: 2,
                    style: {
                        "fontSize": "15px",
                        "fontWeight": "bold",
                        "color": "white"
                    },
                    verticalAlign: 'top'
                }
            },
            colorAxis: {
                // min: 0,
                // max: 100,
                stops: [
                    [0.1, '#F8992E'],
                    [0.4, '#F56627'],
                    [0.7, "#F34423"]
                ]
            },
            
            legend: {
                enabled: false
            },
            series: data.series
        });


    }

    exportData(filename) {
        this.buildChart.exportChartLocal({ filename: filename })
    }

    render() {
        const { id } = this.props.data;
        return <div id={id} className="map-v" ref={el => { this.MapSVG = el; }} />
    }

}
