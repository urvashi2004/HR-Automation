import React from 'react';
import './Payroll.css';

function Payroll() {
  const payrolls = [
    { id: 1, name: 'John Doe', employeeId: 'E001', month: 'October', salary: '$5000', status: 'Paid', nextSalaryDate: '2023-11-01', lastPaidDate: '2023-10-01', currentSalary: '$5200', increment: '$200', details: 'Promotion', remarks: 'Excellent performance' },
    { id: 2, name: 'Jane Smith', employeeId: 'E002', month: 'October', salary: '$4500', status: 'Paid', nextSalaryDate: '2023-11-01', lastPaidDate: '2023-10-01', currentSalary: '$4650', increment: '$150', details: 'Annual Increment', remarks: 'Consistent performer' },
    { id: 3, name: 'Alice Johnson', employeeId: 'E003', month: 'October', salary: '$4800', status: 'Withheld', nextSalaryDate: '2023-11-01', lastPaidDate: '2023-10-01', currentSalary: '$4980', increment: '$180', details: 'Performance Bonus', remarks: 'Needs improvement' },
    { id: 4, name: 'Bob Brown', employeeId: 'E004', month: 'October', salary: '$4700', status: 'Paid', nextSalaryDate: '2023-11-01', lastPaidDate: '2023-10-01', currentSalary: '$4870', increment: '$170', details: 'Annual Increment', remarks: 'Good performance' },
    // Add more payroll rows as needed
  ];

  return (
    <div className="payroll">
      <h1>Payroll Details</h1>
      <table>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Month</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Next Salary Date</th>
            <th>Last Paid Date</th>
            <th>Current Salary</th>
            <th>Increment/Bonus</th>
            <th>Details</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {payrolls.map((payroll, index) => (
            <tr key={payroll.id}>
              <td>{index + 1}</td>
              <td>{payroll.name}</td>
              <td>{payroll.employeeId}</td>
              <td>{payroll.month}</td>
              <td>{payroll.salary}</td>
              <td>{payroll.status}</td>
              <td>{payroll.nextSalaryDate}</td>
              <td>{payroll.lastPaidDate}</td>
              <td>{payroll.currentSalary}</td>
              <td>{payroll.increment}</td>
              <td>{payroll.details}</td>
              <td>{payroll.remarks}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="12">
              <textarea placeholder="Add additional comments here..." className="additional-comments"></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Payroll;