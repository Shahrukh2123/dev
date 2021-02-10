import React, { Component } from 'react';
 class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state=
    {
      employees:[]
    };
   
  }
  componentDidMount()
  {
    fetch("http://localhost:53704/api/Employee").then(res=>res.json()).then(result=>
    {
      this.setState({employees:result})
    });

  }
  render()
  {
    return(
      <div>
        <h1>Employees Details</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Location</th>
              <th>Salary</th>

            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(emp=>(
              <tr key={emp.Id}>
                <td>{emp.Id}</td>
                <td>{emp.Name}</td>
                <td>{emp.Location}</td>
                <td>{emp.Salary}</td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;

