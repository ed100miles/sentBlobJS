import { sentData } from './sentData.js';
import { timeData } from './timeData.js';

const labels = timeData;
const data = {
    labels: labels,
    datasets: [{
        label: 'Joe Biden Sentiment Analysis',
        backgroundColor: 'blue',
        borderWidth: 0.1,
        borderColor: 'black',
        tension: 0.5,
        pointStyle: 'star',
        radius: 2,
        fill: {
            target: 'origin',
            above: 'rgba(0, 150, 0, 0.5)',
            below: 'rgba(200, 0, 0, 0.5)'
        },
        data: sentData,
    }]
};

const config = {
    type: 'line',
    data,
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Average Sentiment (1 to -1)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Date & Time (US-CTZ)'
                },
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    padding: 3
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Joe Biden Sentiment Analysis (April 2021)',
                font: {
                    weight: 'bold',
                    size: '30%'
                }
            },
            legend: {
                display: false
            },
            zoom: {
                pan: {
                    enabled: true,
                    overScaleMode: 'y'
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true
                    },
                    mode: 'x',
                }
            }
        }
    }
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);