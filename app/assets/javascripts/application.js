// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .
//= require Chart.min

$(document).ready(function() {
    Chart.defaults.global.legend.display = false;
    
    // Call ajax to get the data for the chart
    var getRemoteData = function() {
        $.ajax({
            url: "/test.json",
        }).success(function(data) {
            updateSummaryStats(data);
            updateBubbleChart(data);
        }).fail(function(data) {
        });
    };

    // Update summary statistic boxes
    var updateSummaryStats = function(data) {
        $("#sentiment_score").text(data.sentiment_score);
        $("#num_tweets").text(data.num_tweets);
        $("#num_retweets").text(data.num_retweets);
    }

    // Update bubble chart
    var updateBubbleChart = function(data) {
        var ctx = document.getElementById('myChart').getContext("2d");
        ctx.width = 200;
        ctx.height = 460;

        var chart = new Chart(ctx, {
            type: 'bubble',
            data: {
                datasets: [
                    {
                        id: 5,
                        data: [{x: 1, y: 0.50, r: 30}],
                        backgroundColor: '#8BC34A',
                        borderColor: false
                    },
                    {
                        id: 2,
                        data: [{x: 1, y: -0.75, r: 50}],
                        backgroundColor: '#f44336',
                        borderColor: false
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                responsive: true,
                onClick: function(e) {
                    var elements = this.getElementAtEvent(e);
                    // If you click on at least 1 elements ...
                    if (elements.length > 0) {
                        // Logs it
                        // Here we get the data linked to the clicked bubble ...
                        element = elements[0]
                        // console.log(element);
                        element.custom = element.custom || {};
                        element.custom.backgroundColor = "#333333";
                        var datasetID = this.config.data.datasets[elements[0]._datasetIndex].id;
                        // data gives you `x`, `y` and `r` values
                        // var data = this.config.data.datasets[elements[0]._datasetIndex].data[elements[0]._index];
                        var cluster_divs = $(document.querySelectorAll("[data-tag]"));
                        cluster_divs.each(function(){
                            $(this).addClass('hidden');
                            if ($(this).data('tag') == datasetID) {
                              $(this).removeClass('hidden')
                            }
                        })
                    }
                }
            },
        });
    }

    // Generate the data points for the chart
    var generateData = function(data) {
        const a = 1;
    }

    getRemoteData();
});
{/* var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bubble',
    data: {
    datasets: data_points
    },
    options: {
    legend: {
        display: false
        },
    title: {
        display: true,
        text: 'Tweets clusters'
    },
    scales: {
        yAxes: [{
        scaleLabel: {
            display: false,
            labelString: "Sentiment"
        },
        ticks: {
            display: false
        }
        }],
        xAxes: [{
        scaleLabel: {
            display: true,
            labelString: "Sentiment"
        }
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
    onClick: function(e) {
        var elements = this.getElementAtEvent(e);


        // If you click on at least 1 elements ...
        if (elements.length > 0) {
            // Logs it
            // Here we get the data linked to the clicked bubble ...
            element = elements[0]
            console.log(element);
            element.custom = element.custom || {};
            element.custom.backgroundColor = "#333333";

            var datasetID = this.config.data.datasets[elements[0]._datasetIndex].id;
            // data gives you `x`, `y` and `r` values
            // var data = this.config.data.datasets[elements[0]._datasetIndex].data[elements[0]._index];

            var cluster_divs = $(document.querySelectorAll("[data-tag]"))
            cluster_divs.each(function(){
                $(this).addClass('hidden');
                if ($(this).data('tag') == datasetID) {
                    $(this).removeClass('hidden')
                }
            })
        }
    }
    }
}); */}