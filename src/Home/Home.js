import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import './Home.css';

// Register the components with ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

function Home() {
  const [selectedTask, setSelectedTask] = useState('All Tasks');

  const tasks = [
    { name: 'Task 1', status: 'Completed' },
    { name: 'Task 2', status: 'In Progress' },
    { name: 'Task 3', status: 'Not Started' },
    { name: 'Task 4', status: 'Completed' },
    { name: 'Task 5', status: 'In Progress' },
    { name: 'Task 6', status: 'Not Started' },
    { name: 'Task 7', status: 'Completed' },
    { name: 'Task 8', status: 'In Progress' },
    { name: 'Task 9', status: 'Not Started' },
    { name: 'Task 10', status: 'Completed' },
  ];

  const employees = [
    { name: 'Alice', tasks: [5, 2, 1] },
    { name: 'Bob', tasks: [3, 2, 2] },
    { name: 'Charlie', tasks: [4, 3, 1] },
    { name: 'David', tasks: [2, 1, 3] },
  ];

  const taskStatusCounts = {
    'Completed': tasks.filter(task => task.status === 'Completed').length,
    'In Progress': tasks.filter(task => task.status === 'In Progress').length,
    'Not Started': tasks.filter(task => task.status === 'Not Started').length,
  };

  const pieData = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        data: [taskStatusCounts['Completed'], taskStatusCounts['In Progress'], taskStatusCounts['Not Started']],
        backgroundColor: ['#007bff', '#ffc107', '#dc3545'],
      },
    ],
  };

  const handleTaskChange = (e) => {
    setSelectedTask(e.target.value);
  };

  return (
    <div className="home">
      <h1>Home Page</h1>
      <div className="content">
        <div className="employee-work-distribution">
          <h2>Employee Work Distribution</h2>
          <div className="employee-bar-charts">
            {employees.map((employee, index) => (
              <div key={index} className="employee-bar-chart">
                <h3>{employee.name}</h3>
                <Bar
                  data={{
                    labels: ['Completed', 'In Progress', 'Not Started'],
                    datasets: [
                      {
                        label: 'Tasks',
                        data: employee.tasks,
                        backgroundColor: ['#007bff', '#ffc107', '#dc3545'],
                      },
                    ],
                  }}
                  options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    scales: {
                      x: {
                        beginAtZero: true,
                      },
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                  height={150}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="project-distribution">
          <h2>Project Distribution</h2>
          <div className="pie-chart-container">
            <Pie data={pieData} options={{ maintainAspectRatio: false }} />
          </div>
          <div className="task-dropdown">
            <label htmlFor="task-select">Select Task:</label>
            <select id="task-select" value={selectedTask} onChange={handleTaskChange}>
              <option value="All Tasks">All Tasks</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Not Started">Not Started</option>
              {tasks.map((task, index) => (
                <option key={index} value={task.name}>{task.name}</option>
              ))}
            </select>
          </div>
          <div className="task-list">
            {selectedTask === 'All Tasks' ? (
              tasks.map((task, index) => (
                <div key={index} className={`task-item ${task.status.toLowerCase().replace(' ', '-')}`}>
                  {task.name}
                  <span className={`status-indicator ${task.status.toLowerCase().replace(' ', '-')}`}></span>
                </div>
              ))
            ) : (
              tasks.filter(task => task.name === selectedTask).map((task, index) => (
                <div key={index} className={`task-item ${task.status.toLowerCase().replace(' ', '-')}`}>
                  {task.name}
                  <span className={`status-indicator ${task.status.toLowerCase().replace(' ', '-')}`}></span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;