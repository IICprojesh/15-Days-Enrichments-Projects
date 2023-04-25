import {React, Component} from "react";

class App extends Component{
  constructor(){
    super();
    this.state = {
      title : 'My React Crud Application',
      employeeData : [],
      act: 0, 
      index : ""
    }
  }
  handleSubmit= (e)=>{
    e.preventDefault();
    let employeeData = this.state.employeeData;
    let name = this.refs.txtName.value;
    let age = this.refs.txtAge.value;

    if(this.state.act ===0) {
        let newEmployee ={
          "name" : name,
          "age" : age
        }
        employeeData.push(newEmployee);
    }else{
      employeeData[this.state.index].name = name;
      employeeData[this.state.index].age = age;
    }
    this.setState({
      employeeData : employeeData,
      act: 0
    });
  
    
   

    this.refs.myform.reset();
  }
    handleEdit =(index) => {
    let employeeData = this.state.employeeData[index];
    this.refs.txtName.value= employeeData.name;
    this.refs.txtAge.value= employeeData.age;
    this.setState({
      act: 1,
      index: index
    });
  }
  handleDelete =(index) => { 
    let employeeData = this.state.employeeData;
    employeeData.splice(index, 1);
    this.setState({
      employeeData : employeeData 
    });
  }
  render(){
    let employeeData = this.state.employeeData;
    return(
      <div>
        <h1>{this.state.title}</h1>
        <form ref="myform">
          <label>Name</label>
          <input type="text" ref="txtName" placeholder="Enter name"/>
          <label>Age</label>
          <input type="number" ref="txtAge" placeholder="Enter age"/>
          <button onClick={e =>this.handleSubmit(e)}>Save</button>
        </form>
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      {
        employeeData.map((data, index) => (
          <tr key ={index}>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>
              <button onClick={e => this.handleEdit(index)}>Edit</button>
            </td>
            <td>
              <button onClick={e =>this.handleDelete(index)}>Delete</button>
            </td>
            </tr>
        ))
      }
      </table>
      </div>
    )
  }
}
export default App;