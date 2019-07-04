import React, { Component } from 'react';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting'
import HichartsOfflineExporting from 'highcharts/modules/offline-exporting';
import Treemap from 'highcharts/modules/treemap';
import Heatmap from 'highcharts/modules/heatmap';
import Highchartsmore from 'highcharts/highcharts-more'
Exporting(Highcharts)
HichartsOfflineExporting(Highcharts)
Highchartsmore(Highcharts)
Treemap(Highcharts)
Heatmap(Highcharts)
export default class TreeMap extends Component {
    static defaultProps = {data:{
        minColor: 'green',
        maxColor: 'red',
        id: 'tree-map',
        layoutAlgorithm: 'stripes',
        title: 'Treemap Sample',
        data: [{
        name: 'A',
        value: 6,
        colorValue: 7
        }, {
        name: 'B',
        value: 6,
        colorValue: 6
        }, {
        name: 'C',
        value: 4,
        colorValue: 5
        }, {
        name: 'D',
        value: 3,
        colorValue: 0
        }, {
        name: 'E',
        value: 2,
        colorValue: 3
        }, {
        name: 'F',
        value: 2,
        colorValue: 2
        }, {
        name: 'G',
        value: 3,
        colorValue: 0
        }]
        }};

    buildChart = {}

    componentDidMount() {
        if (this.TreeMapSVG !== undefined) {
            this.buildGraph(this.props.data);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.TreeMapSVG !== undefined) {
            this.buildGraph(nextProps.data);
        }
    }

    buildGraph(data) {

        this.buildChart = Highcharts.chart(this.TreeMapSVG.id, {
            credits: {
                enabled: false
            },
            chart:{
                height:230,
                width:550
            },
            colorAxis: {
                minColor: data.minColor,
                maxColor: data.maxColor
                // minColor: '#FFFFFF',
                // maxColor: Highcharts.getOptions().colors[0]
            },

            series: [{
                type: 'treemap',
                layoutAlgorithm: data.layoutAlgorithm,
                data: data.data
            }],
            title: {
                text: data.title
            }
        });

    }
    exportData(filename) {
        this.buildChart.exportChartLocal({ filename: filename })
    }

    render() {
        const { id } = this.props.data;
        return <div id={id} className="tree-map-v" ref={el => { this.TreeMapSVG = el; }} />
    }

}
