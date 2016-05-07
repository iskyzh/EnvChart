function filterData(type, field) {
    return _
        .chain(data)
        .filter(function(n) {
            return (type in n);
        })
        .map(field);
}
(function() {
    $(document).ready(function() {
        Chart.defaults.global.responsive = true;
        _.reverse(data);
        var ctxAQ = $("#EnvAQChart");
        var AQChart = new Chart(ctxAQ, {
            type: 'line',
            data: {
                labels: filterData("PM01", "time").map(function(n) {
                    return $.timeago(new Date(n));
                }).value(),
                datasets: [
                    {
                        label: "PM0.1",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(156, 39, 176, 0.4)",
                        borderColor: "rgb(156, 39, 176)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgb(156, 39, 176)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgb(156, 39, 176)",
                        pointHoverBorderColor: "rgba(221, 221, 221, 1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: filterData("PM01", "PM01").value()
                    },
                    {
                        label: "PM2.5",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(33, 150, 244, 0.4)",
                        borderColor: "rgb(33, 150, 244)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgb(33, 150, 244)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgb(33, 150, 244)",
                        pointHoverBorderColor: "rgba(221, 221, 221, 1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: filterData("PM01", "PM25").value()
                    },
                    {
                        label: "PM10",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(0, 150, 136, 0.4)",
                        borderColor: "rgb(0, 150, 136)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgb(0, 150, 136)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgb(0, 150, 136)",
                        pointHoverBorderColor: "rgba(221, 221, 221, 1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: filterData("PM01", "PM10").value()
                    }
                ]
            },
            options: {}
        });
        var ctxTem = $("#EnvTemChart");
        var TemChart = new Chart(ctxTem, {
            type: 'line',
            data: {
                labels: filterData("Temperature", "time").map(function(n) {
                    return $.timeago(new Date(n));
                }).value(),
                datasets: [
                    {
                        label: "Temperature",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(33, 150, 244, 0.4)",
                        borderColor: "rgb(33, 150, 244)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgb(33, 150, 244)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgb(33, 150, 244)",
                        pointHoverBorderColor: "rgba(221, 221, 221, 1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: filterData("Humdity", "Temperature").map("Celsius").value()
                    },
                    {
                        label: "Heat Index",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(0, 150, 136, 0.4)",
                        borderColor: "rgb(0, 150, 136)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgb(0, 150, 136)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgb(0, 150, 136)",
                        pointHoverBorderColor: "rgba(221, 221, 221, 1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: filterData("Humdity", "HeatIndex").map("Celsius").value()
                    }
                ]
            },
            options: {}
        });
        var ctxHum = $("#EnvHumChart");
        var HumChart = new Chart(ctxHum, {
            type: 'line',
            data: {
                labels: filterData("Humdity", "time").map(function(n) {
                    return $.timeago(new Date(n));
                }).value(),
                datasets: [
                    {
                        label: "Humdity",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(156, 39, 176, 0.4)",
                        borderColor: "rgb(156, 39, 176)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgb(156, 39, 176)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgb(156, 39, 176)",
                        pointHoverBorderColor: "rgba(221, 221, 221, 1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: filterData("Humdity", "Humdity").value()
                    }
                ]
            },
            options: {}
        });
    });
})();
