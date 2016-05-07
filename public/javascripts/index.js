function filterData(type, data) {
    return _
        .chain(data)
        .reverse()
        .filter(function(n) {
            return type in n;
        })
        .map(data);
}
(function() {
    $(document).ready(function() {
        Chart.defaults.global.responsive = true;
        var ctx = $("#EnvChart");
        var MainChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: filterData("PM01", "time").map(function(n) {
                    return Date(n);
                }),
                datasets: [
                    {
                        label: "My First dataset",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: filterData("PM01", "PM01").value()
                    }
                ]
            },
            options: {}
        });
    });
})();
