
import React, { Component } from 'react';



export default class PostData extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            message:'',
            message1:''
          
        }

    };
   
   
    OnUpdateEmployee=()=>
    {
        alert('Please Enter Your Registred Data to Update ');
        let empInfo2=
        {
            Id:this.refs.Id.value,
            Name:this.refs.Name.value,
            Location:this.refs.Location.value,
            Salary:this.refs.Salary.value,

        };
        fetch('http://localhost:53704/api/Employee',{
            method:'PUT',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(empInfo2)}).then(r=>r.json()).then(res3=>
                {
                    if(res3)
                    {
                        this.setState({message1:'Employee Detail Updated Successfully'});
                    }
                })
       
    }


    OnDeleteEmployee=()=>
    {
        alert('Data Deleted');
        let empInfo1=
        {
            Id:this.refs.Id.value
        };
        fetch('http://localhost:53704/api/Employee',{
            method:'DELETE',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(empInfo1)}).then(r=>r.json()).then(res1=>
                {
                    if(res1)
                    {
                        this.setState({message1:'Employee Detail Deleted  Successfully'});
                    }
                })
       
    }
    OnCreateEmployee=()=>
    {
        let empInfo=
        {
            Id:this.refs.Id.value,
            Name:this.refs.Name.value,
            Location:this.refs.Location.value,
            Salary:this.refs.Salary.value


        };
        fetch('http://localhost:53704/api/Employee',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(empInfo)}).then(r=>r.json()).then(res=>
                {
                    if(res)
                    {
                        this.setState({message:'New Employee is Added Successfully'});
                    }
                })
            }
      

    render()
    {
        return(
            <div>
                <h2>Enter Employee Details</h2>
                <label>Employee Id</label> <br></br>
                <input type="text" ref="Id"/><br></br>
                <label>Employee Name:</label> <br></br>
                <input type="text" ref="Name"/><br></br>
                <label>Employee Location:</label> <br></br>
                <input type="text" ref="Location"/><br></br>
                <label>Employee Salary</label> <br></br>
                <input type="text" ref="Salary"/><br></br>
                <button type="button"  onClick={this.OnCreateEmployee}>Insert Data </button>
                <button type="button" onClick={this.OnUpdateEmployee}>Update Data</button>
                <button type="button" onClick={this.OnDeleteEmployee}>Delete Data</button>
                <p>{this.state.message}</p>

            </div>

        );
    }
   
} 