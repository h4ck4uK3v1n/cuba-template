import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis, ApexResponsive, ApexNonAxisChartSeries, ApexTitleSubtitle, ApexTheme, ApexMarkers, ApexAnnotations, ApexGrid } from "ng-apexcharts";

let primary_color = localStorage.getItem('primary_color') || '#7366ff';
let secondary_color = localStorage.getItem('secondary_color') || '#f73164';

export type ChartOptions = {
    series?: ApexAxisChartSeries;
    chart?: ApexChart;
    xaxis?: ApexXAxis;
    stroke?: ApexStroke;
    tooltip?: any;
    dataLabels?: ApexDataLabels;
    yaxis?: ApexYAxis;
    legend?: ApexLegend;
    labels?: string[];
    plotOptions?: ApexPlotOptions;
    fill?: ApexFill;
    responsive?: ApexResponsive[];
    pieseries?: ApexNonAxisChartSeries;
    title?: ApexTitleSubtitle;
    theme?: ApexTheme;
    colors?: string[];
    markers?: ApexMarkers;
    annotations?: ApexAnnotations;
    grid?: ApexGrid;
};

export let splineArea1: ChartOptions = {
    series: [
        {
            name: "series1",
            data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
            name: "series2",
            data: [11, 32, 45, 32, 34, 52, 41]
        }
    ],
    colors: [primary_color, secondary_color],
    chart: {
        height: 350,
        type: "area",
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: "smooth"
    },
    xaxis: {
        type: "datetime",
        categories: [
            "2022-09-19T00:00:00.000Z",
            "2022-09-19T01:30:00.000Z",
            "2022-09-19T02:30:00.000Z",
            "2022-09-19T03:30:00.000Z",
            "2022-09-19T04:30:00.000Z",
            "2022-09-19T05:30:00.000Z",
            "2022-09-19T06:30:00.000Z"
        ]
    },
    tooltip: {
        x: {
            format: "dd/MM/yy HH:mm"
        }
    }
};

export let splineArea2: ChartOptions = {
    series: [
        {
            name: "STOCK ABC",
            data: [8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9340.85],
        }
    ],
    colors: [primary_color],
    chart: {
        type: "area",
        height: 350,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: "straight"
    },
    labels: ["13 Nov 2022", "14 Nov 2022", "15 Nov 2022", "16 Nov 2022", "17 Nov 2022", "20 Nov 2022", "21 Nov 2022", "22 Nov 2022", "23 Nov 2022", "24 Nov 2022", "27 Nov 2022", "28 Nov 2022", "29 Nov 2022", "30 Nov 2022", "01 Dec 2022", "04 Dec 2022", "05 Dec 2022", "06 Dec 2022", "07 Dec 2022", "08 Dec 2022"
    ],
    xaxis: {
        type: "datetime"
    },
    yaxis: {
        opposite: true
    },
    legend: {
        horizontalAlign: "left"
    }
};

export let column: ChartOptions = {
    series: [
        {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }
    ],
    colors: [primary_color, secondary_color],
    chart: {
        type: "bar",
        height: 350,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "55%"
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
    },
    xaxis: {
        categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct"
        ]
    },
    yaxis: {
        title: {
            text: "$ (thousands)"
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands";
            }
        }
    }
};
export let pie: ChartOptions = {
    pieseries: [44, 55, 13, 43, 22],
    chart: {
        width: 380,
        type: "pie",
        toolbar: {
            show: false
        }
    },
    colors: [primary_color, secondary_color, "#51bb25", "#a927f9", "#f8d62b"],
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 250
                },
                legend: {
                    position: "bottom"
                }
            }
        }
    ]
};

export let bubble1: ChartOptions = {
    series: [
        {
            name: "Product1",
            data: generateData(new Date("11 Feb 2022 GMT").getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: "Product2",
            data: generateData(new Date("11 Feb 2022 GMT").getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: "Product3",
            data: generateData(new Date("11 Feb 2022 GMT").getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: "Product4",
            data: generateData(new Date("11 Feb 2022 GMT").getTime(), 20, {
                min: 10,
                max: 60
            })
        }
    ],
    colors: [primary_color, secondary_color, "#51bb25", "#f8d62b"],
    chart: {
        height: 350,
        type: "bubble",
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: "gradient"
    },
    title: {
        text: "3D Bubble Chart"
    },
    xaxis: {
        tickAmount: 12,
        type: "datetime",
        labels: {
            rotate: 0
        }
    },
    yaxis: {
        max: 70
    },
    theme: {
        palette: "palette2"
    }
};
function generateData(baseval, count, yrange) {
    var i = 0;
    var series: [number, number, number][] = [];
    while (i < count) {
        //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([baseval, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}

export let radial: ChartOptions = {
    pieseries: [44, 55, 67, 83],
    chart: {
        height: 300,
        type: "radialBar",
        toolbar: {
            show: false
        }
    },
    colors: [primary_color, secondary_color, "#51bb25", "#a927f9"],
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: "22px"
                },
                value: {
                    fontSize: "16px"
                },
                total: {
                    show: true,
                    label: "Total",
                    formatter: function (w) {
                        return "249";
                    }
                }
            }
        }
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"]
};

export let candelStick: ChartOptions = {
    series: [
        {
            name: "candle",
            data: [
                {
                    x: new Date(1538778600000),
                    y: [6629.81, 6650.5, 6623.04, 6633.33]
                },
                {
                    x: new Date(1538780400000),
                    y: [6632.01, 6643.59, 6620, 6630.11]
                },
                {
                    x: new Date(1538782200000),
                    y: [6630.71, 6648.95, 6623.34, 6635.65]
                },
                {
                    x: new Date(1538784000000),
                    y: [6635.65, 6651, 6629.67, 6638.24]
                },
                {
                    x: new Date(1538785800000),
                    y: [6638.24, 6640, 6620, 6624.47]
                },
                {
                    x: new Date(1538787600000),
                    y: [6624.53, 6636.03, 6621.68, 6624.31]
                },
                {
                    x: new Date(1538789400000),
                    y: [6624.61, 6632.2, 6617, 6626.02]
                },
                {
                    x: new Date(1538791200000),
                    y: [6627, 6627.62, 6584.22, 6603.02]
                },
                {
                    x: new Date(1538793000000),
                    y: [6605, 6608.03, 6598.95, 6604.01]
                },
                {
                    x: new Date(1538794800000),
                    y: [6604.5, 6614.4, 6602.26, 6608.02]
                },
                {
                    x: new Date(1538796600000),
                    y: [6608.02, 6610.68, 6601.99, 6608.91]
                },
                {
                    x: new Date(1538798400000),
                    y: [6608.91, 6618.99, 6608.01, 6612]
                },
                {
                    x: new Date(1538800200000),
                    y: [6612, 6615.13, 6605.09, 6612]
                },
                {
                    x: new Date(1538802000000),
                    y: [6612, 6624.12, 6608.43, 6622.95]
                },
                {
                    x: new Date(1538803800000),
                    y: [6623.91, 6623.91, 6615, 6615.67]
                },
                {
                    x: new Date(1538805600000),
                    y: [6618.69, 6618.74, 6610, 6610.4]
                },
                {
                    x: new Date(1538807400000),
                    y: [6611, 6622.78, 6610.4, 6614.9]
                },
                {
                    x: new Date(1538809200000),
                    y: [6614.9, 6626.2, 6613.33, 6623.45]
                },
                {
                    x: new Date(1538811000000),
                    y: [6623.48, 6627, 6618.38, 6620.35]
                },
                {
                    x: new Date(1538812800000),
                    y: [6619.43, 6620.35, 6610.05, 6615.53]
                },
                {
                    x: new Date(1538814600000),
                    y: [6615.53, 6617.93, 6610, 6615.19]
                },
                {
                    x: new Date(1538816400000),
                    y: [6615.19, 6621.6, 6608.2, 6620]
                },
                {
                    x: new Date(1538818200000),
                    y: [6619.54, 6625.17, 6614.15, 6620]
                },
                {
                    x: new Date(1538820000000),
                    y: [6620.33, 6634.15, 6617.24, 6624.61]
                },
                {
                    x: new Date(1538821800000),
                    y: [6625.95, 6626, 6611.66, 6617.58]
                },
                {
                    x: new Date(1538823600000),
                    y: [6619, 6625.97, 6595.27, 6598.86]
                },
                {
                    x: new Date(1538825400000),
                    y: [6598.86, 6598.88, 6570, 6587.16]
                },
                {
                    x: new Date(1538827200000),
                    y: [6588.86, 6600, 6580, 6593.4]
                },
                {
                    x: new Date(1538829000000),
                    y: [6593.99, 6598.89, 6585, 6587.81]
                },
                {
                    x: new Date(1538830800000),
                    y: [6587.81, 6592.73, 6567.14, 6578]
                },
                {
                    x: new Date(1538832600000),
                    y: [6578.35, 6581.72, 6567.39, 6579]
                },
                {
                    x: new Date(1538834400000),
                    y: [6579.38, 6580.92, 6566.77, 6575.96]
                },
                {
                    x: new Date(1538836200000),
                    y: [6575.96, 6589, 6571.77, 6588.92]
                },
                {
                    x: new Date(1538838000000),
                    y: [6588.92, 6594, 6577.55, 6589.22]
                },
                {
                    x: new Date(1538839800000),
                    y: [6589.3, 6598.89, 6589.1, 6596.08]
                },
                {
                    x: new Date(1538841600000),
                    y: [6597.5, 6600, 6588.39, 6596.25]
                },
                {
                    x: new Date(1538843400000),
                    y: [6598.03, 6600, 6588.73, 6595.97]
                },
                {
                    x: new Date(1538845200000),
                    y: [6595.97, 6602.01, 6588.17, 6602]
                },
                {
                    x: new Date(1538847000000),
                    y: [6602, 6607, 6596.51, 6599.95]
                },
                {
                    x: new Date(1538848800000),
                    y: [6600.63, 6601.21, 6590.39, 6591.02]
                },
                {
                    x: new Date(1538850600000),
                    y: [6591.02, 6603.08, 6591, 6591]
                },
                {
                    x: new Date(1538852400000),
                    y: [6591, 6601.32, 6585, 6592]
                },
                {
                    x: new Date(1538854200000),
                    y: [6593.13, 6596.01, 6590, 6593.34]
                },
                {
                    x: new Date(1538856000000),
                    y: [6593.34, 6604.76, 6582.63, 6593.86]
                },
                {
                    x: new Date(1538857800000),
                    y: [6593.86, 6604.28, 6586.57, 6600.01]
                },
                {
                    x: new Date(1538859600000),
                    y: [6601.81, 6603.21, 6592.78, 6596.25]
                },
                {
                    x: new Date(1538861400000),
                    y: [6596.25, 6604.2, 6590, 6602.99]
                },
                {
                    x: new Date(1538863200000),
                    y: [6602.99, 6606, 6584.99, 6587.81]
                },
                {
                    x: new Date(1538865000000),
                    y: [6587.81, 6595, 6583.27, 6591.96]
                },
                {
                    x: new Date(1538866800000),
                    y: [6591.97, 6596.07, 6585, 6588.39]
                },
                {
                    x: new Date(1538868600000),
                    y: [6587.6, 6598.21, 6587.6, 6594.27]
                },
                {
                    x: new Date(1538870400000),
                    y: [6596.44, 6601, 6590, 6596.55]
                },
                {
                    x: new Date(1538872200000),
                    y: [6598.91, 6605, 6596.61, 6600.02]
                },
                {
                    x: new Date(1538874000000),
                    y: [6600.55, 6605, 6589.14, 6593.01]
                },
                {
                    x: new Date(1538875800000),
                    y: [6593.15, 6605, 6592, 6603.06]
                },
                {
                    x: new Date(1538877600000),
                    y: [6603.07, 6604.5, 6599.09, 6603.89]
                },
                {
                    x: new Date(1538879400000),
                    y: [6604.44, 6604.44, 6600, 6603.5]
                },
                {
                    x: new Date(1538881200000),
                    y: [6603.5, 6603.99, 6597.5, 6603.86]
                },
                {
                    x: new Date(1538883000000),
                    y: [6603.85, 6605, 6600, 6604.07]
                },
                {
                    x: new Date(1538884800000),
                    y: [6604.98, 6606, 6604.07, 6606]
                }
            ]
        }
    ],
    plotOptions: {
        candlestick: {
            colors: {
                upward: primary_color,
                downward: secondary_color
            }
        }
    },
    chart: {
        type: "candlestick",
        height: 350,
        toolbar: {
            show: false
        }
    },
    title: {
        text: "CandleStick Chart",
        align: "left"
    },
    xaxis: {
        type: "datetime"
    },
    yaxis: {
        tooltip: {
            enabled: true
        }
    }
};

export let radar: ChartOptions = {
    series: [
        {
            name: "Series 1",
            data: [20, 100, 40, 30, 50, 80, 33]
        }
    ],
    colors: [secondary_color],
    chart: {
        height: 300,
        type: "radar",
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: true
    },
    plotOptions: {
        radar: {
            size: 140,
            polygons: {
                // strokeColor: "#e9e9e9",
                fill: {
                    colors: ["#f8f8f8", "#fff"]
                }
            }
        }
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                plotOptions: {
                    radar: {
                        size: 70,
                    }
                },
            }
        }
    ],
    title: {
        text: "Radar with Polygon Fill"
    },
    markers: {
        size: 4,
        colors: ["#fff"],
        strokeColors: ["#FF4560"],
        strokeWidth: 2
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val;
            }
        }
    },
    xaxis: {
        categories: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ]
    },
    yaxis: {
        tickAmount: 7,
    }
};

export let stepLine: ChartOptions = {
    series: [
        {
            name: "stepline-series",
            data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
        }
    ],
    colors: [primary_color],
    chart: {
        type: "line",
        height: 350,
        toolbar: {
            show: false
        }
    },
    stroke: {
        curve: "stepline"
    },
    dataLabels: {
        enabled: false
    },
    title: {
        text: "Stepline Chart",
        align: "left"
    },
    markers: {
        hover: {
            sizeOffset: 4
        }
    }
};

export let bar: ChartOptions = {
    series: [
        {
            name: "basic",
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
    ],
    colors: [primary_color],
    chart: {
        type: "bar",
        height: 350,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: [
            "India",
            "Canada",
            "UK",
            "Korea",
            "Italy",
            "France",
            "Japan",
            "US",
            "China",
            "Germany"
        ]
    }
};

export let lineWithAnnotation: ChartOptions = {
    series: [
        {
            name: "series",
            data: [8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9340.85]
        }
    ],
    colors: [primary_color],
    chart: {
        height: 350,
        type: "line",
        toolbar: {
            show: false
        }
    },
    annotations: {
        yaxis: [
            {
                y: 8200,
                borderColor: "#00E396",
                label: {
                    borderColor: "#00E396",
                    style: {
                        color: "#fff",
                        background: "#00E396"
                    },
                    text: "Support"
                }
            },
            {
                y: 8600,
                y2: 9000,
                borderColor: "#000",
                fillColor: "#FEB019",
                opacity: 0.2,
                label: {
                    borderColor: "#333",
                    style: {
                        fontSize: "10px",
                        color: "#333",
                        background: "#FEB019"
                    },
                    text: "Y-axis range"
                }
            }
        ],
        xaxis: [
            {
                x: new Date("23 Nov 2022").getTime(),
                strokeDashArray: 0,
                borderColor: "#775DD0",
                label: {
                    borderColor: "#775DD0",
                    style: {
                        color: "#fff",
                        background: "#775DD0"
                    },
                    text: "Anno Test"
                }
            },
            {
                x: new Date("26 Nov 2022").getTime(),
                x2: new Date("28 Nov 2022").getTime(),
                fillColor: "#B3F7CA",
                opacity: 0.4,
                label: {
                    borderColor: "#B3F7CA",
                    style: {
                        fontSize: "10px",
                        color: "#fff",
                        background: "#00E396"
                    },
                    offsetY: -10,
                    text: "X-axis range"
                }
            }
        ],
        points: [
            {
                x: new Date("01 Dec 2022").getTime(),
                y: 8607.55,
                marker: {
                    size: 8,
                    fillColor: "#fff",
                    strokeColor: "red",
                    cssClass: "apexcharts-custom-class"
                },
                label: {
                    borderColor: "#FF4560",
                    offsetY: 0,
                    style: {
                        color: "#fff",
                        background: "#FF4560"
                    },

                    text: "Point Annotation"
                }
            }
        ]
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: "straight"
    },
    grid: {
        padding: {
            right: 30,
            left: 20
        }
    },
    title: {
        text: "Line with Annotations",
        align: "left"
    },
    labels: ["13 Nov 2022", "14 Nov 2022", "15 Nov 2022", "16 Nov 2022", "17 Nov 2022", "20 Nov 2022", "21 Nov 2022", "22 Nov 2022", "23 Nov 2022", "24 Nov 2022", "27 Nov 2022", "28 Nov 2022", "29 Nov 2022", "30 Nov 2022", "01 Dec 2022", "04 Dec 2022", "05 Dec 2022", "06 Dec 2022", "07 Dec 2022", "08 Dec 2022"],
    xaxis: {
        type: "datetime"
    }
};

export let donut: ChartOptions = {
    pieseries: [44, 55, 13, 43, 22],
    chart: {
        type: "donut",
        toolbar: {
            show: false
        }
    },
    colors: ["#dc3545", "#f8d62b", primary_color, "#51bb25", "#a927f9"],
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 250
                },
                legend: {
                    position: "bottom"
                }
            }
        }
    ]
};

export let mixed: ChartOptions = {
    series: [
        {
            name: "TEAM A",
            type: "column",
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        },
        {
            name: "TEAM B",
            type: "area",
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        },
        {
            name: "TEAM C",
            type: "line",
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }
    ],
    colors: [secondary_color, "#51bb25", primary_color],
    chart: {
        height: 350,
        type: "line",
        stacked: false,
        toolbar: {
            show: false
        }
    },
    stroke: {
        width: [0, 2, 5],
        curve: "smooth"
    },
    plotOptions: {
        bar: {
            columnWidth: "50%"
        }
    },

    fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
        }
    },
    labels: [
        "01/01/2022",
        "02/01/2022",
        "03/01/2022",
        "04/01/2022",
        "05/01/2022",
        "06/01/2022",
        "07/01/2022",
        "08/01/2022",
        "09/01/2022",
        "10/01/2022",
        "11/01/2022"
    ],
    markers: {
        size: 0
    },
    xaxis: {
        type: "datetime"
    },
    yaxis: {
        title: {
            text: "Points"
        },
        min: 0
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;
            }
        }
    }
};  