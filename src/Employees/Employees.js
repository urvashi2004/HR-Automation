import React from 'react';
import './Employees.css';

function Employees() {
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Development',
      tasks: [
        { taskId: 1, taskName: 'Develop Login Feature', remarks: 'Completed' },
        { taskId: 2, taskName: 'Fix Bugs', remarks: 'In Progress' },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Project Manager',
      department: 'Management',
      tasks: [
        { taskId: 1, taskName: 'Project Planning', remarks: 'Completed' },
        { taskId: 2, taskName: 'Team Meeting', remarks: 'Scheduled' },
      ],
    },
    {
      id: 3,
      name: 'Alice Johnson',
      position: 'Intern',
      department: 'Development',
      tasks: [
        { taskId: 1, taskName: 'Research New Technologies', remarks: 'Completed' },
        { taskId: 2, taskName: 'Write Documentation', remarks: 'In Progress' },
      ],
    },
    {
      id: 4,
      name: 'Bob Brown',
      position: 'HR Specialist',
      department: 'Human Resources',
      tasks: [
        { taskId: 1, taskName: 'Recruitment Drive', remarks: 'Completed' },
        { taskId: 2, taskName: 'Employee Onboarding', remarks: 'In Progress' },
      ],
    },
    // Add more employee rows as needed
  ];

  return (
    <div className="employees">
      <h1>Employees</h1>
      <div className="employee-buttons">
        <button className="btn">Add New Employee</button>
        <button className="btn">Add Offer Letter</button>
        <button className="btn">Add Internship Letter</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <React.Fragment key={employee.id}>
              <tr className="employee-row">
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.department}</td>
              </tr>
              {employee.tasks.map((task) => (
                <tr key={task.taskId} className="task-row">
                  <td colSpan="4">
                    <strong>TASK ID {task.taskId}:</strong> {task.taskName} - <em>{task.remarks}</em>
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;