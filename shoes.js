const ctx = document.getElementById('futureTrendsChart').getContext('2d');

const futureTrendsChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2023', '2024', '2025', '2026', '2027'],
    datasets: [{
      label: 'Eco-friendly Shoes Trend (%)',
      data: [20, 35, 50, 65, 80],
      fill: true,
      borderColor: '#00796b',
      backgroundColor: 'rgba(0, 150, 136, 0.2)',
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'AI Prediction of Eco-Shoe Popularity (2023–2027)'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});