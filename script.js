
<script>
    // Function to generate the chart based on selected attributes
    function generateChart() {
        const selectedAttributes = [];

        // Loop through checkboxes and add selected attributes to the array
        $('.checkbox:checked').each(function () {
            selectedAttributes.push($(this).val());
        });

        // Check if at least one attribute is selected
        if (selectedAttributes.length === 0) {
            alert('Please select at least one attribute.');
            return;
        }

        // Prepare data for the chart
        const data = {
            labels: selectedAttributes,
            datasets: [
                {
                    label: 'Sample Data',
                    data: [10, 20, 15, 25, 30], // Replace with your data
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                },
            ],
        };

        // Create a QuickChart URL with the data
        const chartUrl = new QuickChart()
            .setTitle('Generated Chart')
            .setChartType('bar')
            .setWidth(400)
            .setHeight(300)
            .setConfig({ data });

        // Display the chart in the canvas
        const ctx = document.getElementById('myChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        });
    }

    // Event listener for the "Generate Chart" button
    $('#generateChartButton').click(function () {
        generateChart();
    });
</script>
