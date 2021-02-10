import axios from 'axios';
import React, { Component } from 'react';
class Home extends Component
{
  constructor()
  {
    super();
    this.state=
    {
      name:'',
      email:'',
      phone:'',
      password:'',
      message:'',
      loading:false
    }
  }
dataChange(e)
{
  this.setState({
    [e.target.name]:e.target.value
  })
}
postData(ev)
{
  ev.preventdefault();
  const name=this.state.name;
  const email=this.state.email;
  const phone=this.state.phone;
  const password=this.state.password;
  this.setState({
    loading:true
  })
  // const data=
  // {
  //   name,
  //   email,
  //   phone,
  //   password

  // }
  axios.post('http://localhost:53704/api/EmployeeDetail/',`${this.state.email}`).then(response=>{
    this.setState({
      loading:false,
      message:response.data
    },()=>{console.log(this.state.message)})
  })
  .catch(err=>
    {
      console.log(err);
      this.setState({
        loading:false

      })
    })
  

}
loadShowmessage()
{
  if(this.state.loading)
  {
    return <p>loading..done.....</p>
  }
  else{
    return <p>{this.state.message}</p>
  }
}

render()
{



    
    
 
   
 
    
   
        return(
            <div className="login bg-danger">
            
             <center>
   <div className="col-md-4 mx-auto">
       <strong>
       <h4 className="display-4">Register Here</h4></strong>
       </div>
       </center>
              
<div className="col-md-4 p-5 mt-5 mx-auto border bg-warning">
<form onSubmit={this.postData.bind(this)} >
  <div className="ml-5 mt-3 mx-auto">
    <label  className="form-label">Enter Your Name</label>
    <input type="text" className="form-control" placeholder="Enter Your Name" name="name" onChange={this.dataChange.bind(this)} value={this.state.name} />
  </div>
  <div className="ml-5 mt-3 mx-auto">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" placeholder="Enter Your Email" name="email"   onChange={this.dataChange.bind(this)} value={this.state.email}  />
  </div>
  <div className="ml-5 mt-3 mx-auto">
    <label  className="form-label" placeholder="Enter Your Mobile No" >Mobile</label>
    <input type="text" className="form-control" name="phone"  onChange={this.dataChange.bind(this)} value={this.state.phone}  />
  </div>
  
  <div className="ml-5 mx-auto">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" placeholder="Enter Your Password" name="password"  onChange={this.dataChange.bind(this)} value={this.state.password}  />
  </div>
  <br/>

  <button type="submit" className=" form-control btn-primary" >Submit</button>

</form>
{this.loadShowmessage()}
</div>
</div>
                
          
        )
        }    
  } 
  export default Home;   


  
