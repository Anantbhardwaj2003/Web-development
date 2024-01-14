<script>
    // Function to generate the chart using QuickChart.js
    function generateQuickChart() {
        // Get selected attributes and chart type
        const selectedAttributes = [];
        $('.form-control').each(function() {
            selectedAttributes.push($(this).val());
        });
        const chartType = $('#chartTypecustom').val();

        // Create a QuickChart URL
        const chartUrl = `https://quickchart.io/chart?c=${JSON.stringify({
            type: chartType,
            data: {
                labels: selectedAttributes,
                datasets: [
                    {
                        data: [/* Add your data here */],
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                        label: 'Data',
                    },
                ],
            },
        })}`;

        // Display the chart in the chart-container div
        $('#chart-container').html(`<img src="${chartUrl}" alt="Chart" />`);
    }

    // Event listener for the "Generate Chart" button
    $('#generateChartButton').on('click', generateQuickChart);
</script>
