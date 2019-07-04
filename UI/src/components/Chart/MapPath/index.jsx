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
            this.buildGraph(this.props.data,this.props.location);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.MapSVG !== undefined) {
            this.buildGraph(nextProps.data,nextProps.location);
        }
    }


    pointsToPath = (from, to) => {
        var arrowLength = 60,
            arrowWidth = 70,
            path = ['M', from.x, from.y, 'Q',(from.x+to.x)*1, (from.y+to.y)*0.5,to.x, to.y];
            var distance= Math.sqrt( from.x*to.x + from.y*to.y);
// console.log("distance",distance)
        var lastPoint = to,
            nextLastPoint = from,
            angle = Math.atan((lastPoint.x - nextLastPoint.x) /
                (lastPoint.y - nextLastPoint.y));

        if (angle < 0) angle = Math.PI + angle;

        path.push('M', lastPoint.x, lastPoint.y);

        if (lastPoint.x > nextLastPoint.x) {
            path.push(
                'L',
                lastPoint.x + arrowWidth * Math.cos(angle),
                lastPoint.y - arrowWidth * Math.sin(angle)
            );
            path.push(
                lastPoint.x + arrowLength * Math.sin(angle),
                lastPoint.y + arrowLength * Math.cos(angle)
            );
            path.push(
                lastPoint.x - arrowWidth * Math.cos(angle),
                lastPoint.y + arrowWidth * Math.sin(angle),
                'Z'
            );
        } else {
            path.push(
                'L',
                lastPoint.x - arrowWidth * Math.cos(angle),
                lastPoint.y + arrowWidth * Math.sin(angle)
            );
            path.push(
                lastPoint.x - arrowLength * Math.sin(angle),
                lastPoint.y - arrowLength * Math.cos(angle)
            );
            path.push(
                lastPoint.x + arrowWidth * Math.cos(angle),
                lastPoint.y - arrowWidth * Math.sin(angle),
                'Z'
            );
        }
        return path;
    }

    buildGraph(data,location) {

        Highmaps.maps["india"] = maps.india;
        let classThis = this
        this.buildChart = Highmaps.mapChart(this.MapSVG.id, {
            plotOptions: {
                series: {
                    cursor: 'pointer',
                    // events: {
                    //     click: function (e) {
                    //         classThis.onStateClick(e.point)
                    //     }
                    // }
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
                min: 0,
                max: 100,
                stops: [
                    [0.2, 'red'],
                    [0.4, 'orange'],
                    [0.6, 'yellow'],
                    [0.9, "green"]
                ]
            },
            legend: {
                enabled: false
            },
            series: data.series
        });

        if (this.buildChart.get(location)) {
            this.buildChart.addSeries(
                {
                    "name": "Shipments",
                    "type": "mapline",
                    "lineWidth": 2,
                    "fill": 'blue',
                    "data": _.map(_.find(data.series,{name:"WH"}).data,item=>{
                        return {
                            "path": this.pointsToPath(this.buildChart.get(location), this.buildChart.get(item.id))
                        }
                    })
                }
            );
        }

    }

    exportData(filename) {
        this.buildChart.exportChartLocal({ filename: filename })
    }

    render() {
        const { id } = this.props.data;
        return <div id={id} className="map-v" ref={el => { this.MapSVG = el; }} />
    }

}
