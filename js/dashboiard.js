// Sample Data (replace with actual data source)
const projects = [
  { name: "Project A", budget: 100000, spent: 80000, status: "On Track" },
  { name: "Project B", budget: 50000, spent: 65000, status: "Over Budget" },
  { name: "Project C", budget: 150000, spent: 120000, status: "Completed" },
];

// Function to create project summary
function createProjectSummary() {
  let summaryText = "";
  for (const project of projects) {
    summaryText += `* ${project.name}: ${project.status}<br>`;
  }
  document.getElementById("project-summary").innerHTML = summaryText;
}

// Function to create budget chart
function createBudgetChart() {
  const ctx = document.getElementById("budget-chart").getContext("2d");
  const projectNames = projects.map(project => project.name);
  const budgets = projects.map(project => project.budget);
  const spent = projects.map(project => project.spent);

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: projectNames,
      datasets: [
        { label: "Budget", data: budgets, backgroundColor: "lightblue" },
        { label: "Spent", data: spent, backgroundColor: "lightcoral" }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

// Call functions on page load
createProjectSummary();
createBudgetChart();

