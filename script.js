// Page navigation
function navigateTo(page) {
    window.location.href = page;
  }
  
  // Search simulation
  function searchTrends() {
    const query = document.getElementById("search").value.toLowerCase();
    alert("Searching trends for: " + query);
  }
  
  // Toggle graph section visibility
  function toggleGraph() {
    const graphSection = document.getElementById("graph-section");
    if (graphSection) {
      graphSection.classList.toggle("hidden");
      if (!graphSection.classList.contains("hidden")) {
        renderGraph();
      }
    }
  }
  
  // Render graph (basic version with past & future data)
  function renderGraph() {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
  
    const ctx = canvas.getContext("2d");
  
    // Dummy data – Replace with backend or JSON dataset
    const data = {
      labels: ['2015', '2017', '2019', '2021', '2023', '2025', '2027', '2029', '2031', '2033'],
      datasets: [
        {
          label: 'Past Trend Score',
          data: [30, 45, 60, 55, 70],
          borderColor: '#00d4ff',
          backgroundColor: 'rgba(0, 212, 255, 0.2)',
          fill: true,
          tension: 0.3
        },
        {
          label: 'Predicted Future Score',
          data: [70, 72, 75, 78, 82],
          borderColor: '#ffcb05',
          backgroundColor: 'rgba(255, 203, 5, 0.2)',
          fill: true,
          tension: 0.3
        }
      ]
    };
  
    new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          },
          title: {
            display: true,
            text: 'Trend Score Over Time'
          }
        }
      }
    });
  }
  
  // Load Chart.js from CDN
  const chartScript = document.createElement('script');
  chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
  document.head.appendChild(chartScript);