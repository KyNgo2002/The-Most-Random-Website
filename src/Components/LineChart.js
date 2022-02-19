import React from 'react';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function LineChart(props) {
    var labels1 = [];
    for (let i = 1; i <= props.timeArr.length; i++) {
        labels1.push(i)
    }
    var data = {
        labels: labels1,
        datasets: [{
            label: '# of Votes',
            data: props.timeArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 1,
            pointBackgroundColor: "#55bae7",
            pointBorderColor: "#55bae7",
            borderColor: "#34D1BF",

        }]
    }
    var options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    return <div className="lineChartBox">
        <div className="lineChartBox1">
            <Line
                data={data}
                height={400}
                width={400}
                options={options}
            />
        </div>

    </div>;
}

export default LineChart;